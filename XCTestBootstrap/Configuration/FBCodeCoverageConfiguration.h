/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

typedef NS_ENUM(NSUInteger, FBCodeCoverageFormat) {
  FBCodeCoverageExported,
  FBCodeCoverageRaw,
};

/**
 Represents the code coverage configuration used to execute the tests and report results
*/
@interface FBCodeCoverageConfiguration : NSObject

/**
 The path to the coverage directory
*/
@property (nonatomic, strong, readonly) NSString * coverageDirectory;

/**
  Format in which code coverge data should be returned
*/
@property (nonatomic, assign, readonly) FBCodeCoverageFormat format;

/**
 Suffix of the coverage file
 */
@property (nonatomic, strong, readonly) NSString *coverageFileSuffix;

- (instancetype)initWithDirectory:(NSString *)coverageDirectory format:(FBCodeCoverageFormat)format coverageFileSuffix:(NSString *)coverageFileSuffix;

@end

NS_ASSUME_NONNULL_END
