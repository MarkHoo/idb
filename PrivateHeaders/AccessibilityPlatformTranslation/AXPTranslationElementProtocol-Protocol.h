/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "NSObject.h"

@class AXPTranslationObject;

@protocol AXPTranslationElementProtocol <NSObject>
+ (id)platformElementWithTranslationObject:(AXPTranslationObject *)arg1;
@property(readonly, nonatomic) AXPTranslationObject *translation;
@end

