"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[7752],{"./packages/icons/build-module/library/wordpress.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"}))},"./packages/components/src/snackbar/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithActionAndExplicitDismiss:()=>WithActionAndExplicitDismiss,WithActions:()=>WithActions,WithExplicitDismiss:()=>WithExplicitDismiss,WithIcon:()=>WithIcon,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/icons/build-module/library/wordpress.js"),_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/icon/index.tsx"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/snackbar/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Snackbar",component:___WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{as:{control:{type:null}},onRemove:{action:"onRemove",control:{type:null}},onDismiss:{action:"onDismiss",control:{type:null}},listRef:{control:{type:null}}},parameters:{sourceLink:"packages/components/src/snackbar",controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},DefaultTemplate=({children,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...props,children});DefaultTemplate.displayName="DefaultTemplate";const Default=DefaultTemplate.bind({});Default.args={children:"Use Snackbars to communicate low priority, non-interruptive messages to the user."};const WithActions=DefaultTemplate.bind({});WithActions.args={actions:[{label:"Open WP.org",url:"https://wordpress.org"}],children:"Use Snackbars with an action link to an external page."};const WithIcon=DefaultTemplate.bind({});WithIcon.args={children:"Add an icon to make your snackbar stand out",icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icon__WEBPACK_IMPORTED_MODULE_2__.Z,{style:{fill:"currentcolor"},icon:_wordpress_icons__WEBPACK_IMPORTED_MODULE_3__.Z})};const WithExplicitDismiss=DefaultTemplate.bind({});WithExplicitDismiss.args={children:"Add a cross to explicitly close the snackbar, and do not hide it automatically",explicitDismiss:!0};const WithActionAndExplicitDismiss=DefaultTemplate.bind({});WithActionAndExplicitDismiss.args={actions:[{label:"Open WP.org",url:"https://wordpress.org"}],children:"Add an action and a cross to explicitly close the snackbar, and do not hide it automatically",explicitDismiss:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  children,\n  ...props\n}) => {\n  return <Snackbar {...props}>{children}</Snackbar>;\n}",...Default.parameters?.docs?.source}}},WithActions.parameters={...WithActions.parameters,docs:{...WithActions.parameters?.docs,source:{originalSource:"({\n  children,\n  ...props\n}) => {\n  return <Snackbar {...props}>{children}</Snackbar>;\n}",...WithActions.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:"({\n  children,\n  ...props\n}) => {\n  return <Snackbar {...props}>{children}</Snackbar>;\n}",...WithIcon.parameters?.docs?.source}}},WithExplicitDismiss.parameters={...WithExplicitDismiss.parameters,docs:{...WithExplicitDismiss.parameters?.docs,source:{originalSource:"({\n  children,\n  ...props\n}) => {\n  return <Snackbar {...props}>{children}</Snackbar>;\n}",...WithExplicitDismiss.parameters?.docs?.source}}},WithActionAndExplicitDismiss.parameters={...WithActionAndExplicitDismiss.parameters,docs:{...WithActionAndExplicitDismiss.parameters?.docs,source:{originalSource:"({\n  children,\n  ...props\n}) => {\n  return <Snackbar {...props}>{children}</Snackbar>;\n}",...WithActionAndExplicitDismiss.parameters?.docs?.source}}}}}]);