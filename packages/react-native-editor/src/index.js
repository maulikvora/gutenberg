/**
 * External dependencies
 */
import { I18nManager, LogBox } from 'react-native';

/**
 * Internal dependencies
 */
import './globals';
import { getTranslation } from '../i18n-cache';
import initialHtml from './initial-html';
import setupApiFetch from './api-fetch-setup';

/**
 * WordPress dependencies
 */
import {
	validateThemeColors,
	validateThemeGradients,
} from '@wordpress/block-editor';
import { unregisterBlockType, getBlockType } from '@wordpress/blocks';

const reactNativeSetup = () => {
	LogBox.ignoreLogs( [
		'Require cycle:', // TODO: Refactor to remove require cycles
		'lineHeight', // TODO: Remove lineHeight warning from Aztec
		/**
		 * TODO: Migrate to @gorhom/bottom-sheet or replace usage of
		 * LayoutAnimation to Animated. KeyboardAvoidingView's usage of
		 * LayoutAnimation collides with both BottomSheet and NavigationContainer
		 * usage of LayoutAnimation simultaneously https://git.io/J1lZv,
		 * https://git.io/J1lZY
		 */
		'Overriding previous layout animation',
	] );

	I18nManager.forceRTL( false ); // Change to `true` to debug RTL layout easily.
};

const gutenbergSetup = () => {
	const wpData = require( '@wordpress/data' );

	// wp-data
	const userId = 1;
	const storageKey = 'WP_DATA_USER_' + userId;
	wpData.use( wpData.plugins.persistence, { storageKey } );

	setupApiFetch();

	const isHermes = () => global.HermesInternal !== null;
	// eslint-disable-next-line no-console
	console.log( 'Hermes is: ' + isHermes() );

	setupInitHooks();

	const initializeEditor = require( '@wordpress/edit-post' ).initializeEditor;
	initializeEditor( 'gutenberg', 'post', 1 );
};

const setupInitHooks = () => {
	const wpHooks = require( '@wordpress/hooks' );

	wpHooks.addAction(
		'native.pre-render',
		'core/react-native-editor',
		( props ) => {
			setupLocale( props.locale, props.translations );

			const capabilities = props.capabilities ?? {};
			if (
				getBlockType( 'core/block' ) !== undefined &&
				capabilities.reusableBlock !== true
			) {
				unregisterBlockType( 'core/block' );
			}
		}
	);

	// Map native props to Editor props
	// TODO: normalize props in the bridge (So we don't have to map initialData to initialHtml)
	wpHooks.addFilter(
		'native.block_editor_props',
		'core/react-native-editor',
		( props ) => {
			const { capabilities = {} } = props;
			let {
				initialData,
				initialTitle,
				postType,
				featuredImageId,
				colors,
				gradients,
				rawStyles,
				rawFeatures,
				galleryWithImageBlocks,
				locale,
			} = props;

			if ( initialData === undefined && __DEV__ ) {
				initialData = initialHtml;
			}
			if ( initialTitle === undefined ) {
				initialTitle = 'Welcome to Gutenberg!';
			}
			if ( postType === undefined ) {
				postType = 'post';
			}

			colors = validateThemeColors( colors );

			gradients = validateThemeGradients( gradients );

			return {
				initialHtml: initialData,
				initialHtmlModeEnabled: props.initialHtmlModeEnabled,
				initialTitle,
				postType,
				featuredImageId,
				capabilities,
				colors,
				gradients,
				rawStyles,
				rawFeatures,
				galleryWithImageBlocks,
				locale,
			};
		}
	);
};

let blocksRegistered = false;

const setupLocale = ( locale, extraTranslations ) => {
	const setLocaleData = require( '@wordpress/i18n' ).setLocaleData;

	I18nManager.forceRTL( false ); // Change to `true` to debug RTL layout easily.

	let gutenbergTranslations = getTranslation( locale );
	if ( locale && ! gutenbergTranslations ) {
		// Try stripping out the regional
		locale = locale.replace( /[-_][A-Za-z]+$/, '' );
		gutenbergTranslations = getTranslation( locale );
	}
	const translations = Object.assign(
		{},
		gutenbergTranslations,
		extraTranslations
	);
	// eslint-disable-next-line no-console
	console.log( 'locale', locale, translations );
	// Only change the locale if it's supported by gutenberg
	if ( gutenbergTranslations || extraTranslations ) {
		setLocaleData( translations );
	}

	if ( blocksRegistered ) {
		return;
	}

	const registerCoreBlocks = require( '@wordpress/block-library' )
		.registerCoreBlocks;
	registerCoreBlocks();
	blocksRegistered = true;
};

export { initialHtml as initialHtmlGutenberg };
export function doGutenbergNativeSetup() {
	reactNativeSetup();
	gutenbergSetup();
}
