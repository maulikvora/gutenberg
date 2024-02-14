/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useCallback, useMemo, useState } from '@wordpress/element';
import { RichTextToolbarButton, useSettings } from '@wordpress/block-editor';
import {
	Icon,
	color as colorIcon,
	textColor as textColorIcon,
} from '@wordpress/icons';
import { removeFormat } from '@wordpress/rich-text';

/**
 * Internal dependencies
 */
import { default as InlineColorUI, getActiveColors } from './inline';

export const transparentValue = 'rgba(0, 0, 0, 0)';

const name = 'core/text-color';
const title = __( 'Highlight' );

const EMPTY_ARRAY = [];

function getComputedStyleProperty( element, property ) {
	const { ownerDocument } = element;
	const { defaultView } = ownerDocument;
	const style = defaultView.getComputedStyle( element );
	const value = style.getPropertyValue( property );

	if (
		property === 'background-color' &&
		value === transparentValue &&
		element.parentElement
	) {
		return getComputedStyleProperty( element.parentElement, property );
	}

	return value;
}

function fillComputedColors( element, { color, backgroundColor } ) {
	if ( ! color && ! backgroundColor ) {
		return;
	}

	return {
		color: color || getComputedStyleProperty( element, 'color' ),
		backgroundColor:
			backgroundColor === transparentValue
				? getComputedStyleProperty( element, 'background-color' )
				: backgroundColor,
	};
}

function TextColorEdit( {
	value,
	onChange,
	isActive,
	activeAttributes,
	contentRef,
} ) {
	const [ allowCustomControl, ...colorsByOrigin ] = useSettings(
		'color.custom',
		'color.palette.custom',
		'color.palette.theme',
		'color.palette.default'
	);
	const colors =
		colorsByOrigin.find( ( origin ) => origin !== undefined ) ??
		EMPTY_ARRAY;
	const [ isAddingColor, setIsAddingColor ] = useState( false );
	const enableIsAddingColor = useCallback(
		() => setIsAddingColor( true ),
		[ setIsAddingColor ]
	);
	const disableIsAddingColor = useCallback(
		() => setIsAddingColor( false ),
		[ setIsAddingColor ]
	);
	const colorIndicatorStyle = useMemo(
		() =>
			fillComputedColors(
				contentRef.current,
				getActiveColors( value, name, colors )
			),
		[ value, colors ]
	);

	const hasColorsToChoose = colors.length || ! allowCustomControl;
	if ( ! hasColorsToChoose && ! isActive ) {
		return null;
	}

	return (
		<>
			<RichTextToolbarButton
				className="format-library-text-color-button"
				isActive={ isActive }
				icon={
					<Icon
						icon={
							Object.keys( activeAttributes ).length
								? textColorIcon
								: colorIcon
						}
						style={ colorIndicatorStyle }
					/>
				}
				title={ title }
				// If has no colors to choose but a color is active remove the color onClick.
				onClick={
					hasColorsToChoose
						? enableIsAddingColor
						: () => onChange( removeFormat( value, name ) )
				}
				role="menuitemcheckbox"
			/>
			{ isAddingColor && (
				<InlineColorUI
					name={ name }
					onClose={ disableIsAddingColor }
					activeAttributes={ activeAttributes }
					value={ value }
					onChange={ onChange }
					contentRef={ contentRef }
					isActive={ isActive }
				/>
			) }
		</>
	);
}

export const textColor = {
	name,
	title,
	tagName: 'mark',
	className: 'has-inline-color',
	attributes: {
		style: 'style',
		class: 'class',
	},
	edit: TextColorEdit,
};
