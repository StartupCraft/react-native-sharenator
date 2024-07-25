
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNSharenatorSpec.h"

@interface Sharenator : NSObject <NativeSharenatorSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Sharenator : NSObject <RCTBridgeModule>
#endif

@end
