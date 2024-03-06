#import <React/RCTViewManager.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RNReactNativeGutenbergBridge, NSObject)

RCT_EXTERN_METHOD(provideToNative_Html:(NSString *)html title:(NSString *)title changed:(BOOL)changed contentInfo:(NSDictionary *)info)
RCT_EXTERN_METHOD(requestMediaPickFrom:(NSString *)source filter:(NSArray<NSString *> *)filter allowMultipleSelection:(BOOL)allowMultipleSelection callback:(RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(getOtherMediaOptions:(NSArray<NSString *> *)filter callback:(RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(mediaUploadSync)
RCT_EXTERN_METHOD(requestImageFailedRetryDialog:(int)mediaID)
RCT_EXTERN_METHOD(requestImageUploadCancelDialog:(int)mediaID)
RCT_EXTERN_METHOD(requestImageUploadCancel:(int)mediaID)
RCT_EXTERN_METHOD(setFeaturedImage:(int)mediaID)
RCT_EXTERN_METHOD(requestMediaImport:(NSString *)sourceURL callback:(RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(editorDidLayout)
RCT_EXTERN_METHOD(editorDidMount:(NSArray *)unsupportedBlockNames)
RCT_EXTERN_METHOD(editorDidEmitLog:(NSString *)message logLevel:(int)logLevel)
RCT_EXTERN_METHOD(editorDidAutosave)
RCT_EXTERN_METHOD(fetchRequest:(NSString *)path resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(postRequest:(NSString *)path data:(NSDictionary *)parameters resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(requestImageFullscreenPreview:(NSString *)currentImageUrlString originalImageUrlString:(NSString *)originalImageUrlString)
RCT_EXTERN_METHOD(requestMediaEditor:(NSString *)mediaUrl callback:(RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(requestUnsupportedBlockFallback:(NSString *)content blockId:(NSString *)blockId blockName:(NSString *)blockName blockTitle:(NSString *)blockTitle)
RCT_EXTERN_METHOD(showUserSuggestions:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)rejecter)
RCT_EXTERN_METHOD(showXpostSuggestions:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)rejecter)
RCT_EXTERN_METHOD(requestFocalPointPickerTooltipShown:(RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(setFocalPointPickerTooltipShown:(BOOL)tooltipShown)
RCT_EXTERN_METHOD(actionButtonPressed:(NSString *)buttonType)
RCT_EXTERN_METHOD(requestPreview)
RCT_EXTERN_METHOD(requestBlockTypeImpressions:(RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(setBlockTypeImpressions:(NSDictionary *)impressions)
RCT_EXTERN_METHOD(requestContactCustomerSupport)
RCT_EXTERN_METHOD(requestGotoCustomerSupportOptions)
RCT_EXTERN_METHOD(sendEventToHost:(NSString)eventName properties:(NSDictionary *)properties)
RCT_EXTERN_METHOD(generateHapticFeedback)
RCT_EXTERN_METHOD(toggleUndoButton:(BOOL)isDisabled)
RCT_EXTERN_METHOD(toggleRedoButton:(BOOL)isDisabled)
RCT_EXTERN_METHOD(requestConnectionStatus:(RCTResponseSenderBlock)callback)

@end
