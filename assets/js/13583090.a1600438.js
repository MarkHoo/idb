"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=u(n),m=s,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9842:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>l,metadata:()=>u,toc:()=>c,default:()=>p});var i=n(7462),s=n(3366),a=(n(7294),n(3905)),o=["components"],r={id:"test-execution",title:"Test Execution"},l=void 0,u={unversionedId:"test-execution",id:"test-execution",isDocsHomePage:!1,title:"Test Execution",description:"Test execution is a well-supported feature of idb. Supporting xctest run as a primitive means that idb can be used in automated scenarios such as continuous integration or IDEs.",source:"@site/docs/test-execution.mdx",sourceDirName:".",slug:"/test-execution",permalink:"/docs/test-execution",tags:[],version:"current",frontMatter:{id:"test-execution",title:"Test Execution"},sidebar:"docs",previous:{title:"FBDeviceControl",permalink:"/docs/fbdevicecontrol"},next:{title:"File Containers",permalink:"/docs/file-containers"}},c=[{value:"Installation of Test Bundles",id:"installation-of-test-bundles",children:[]},{value:"What is a Test Bundle?",id:"what-is-a-test-bundle",children:[]},{value:"iOS Simulators",id:"ios-simulators",children:[{value:"Logic Tests: <code>idb xctest run logic</code>",id:"logic-tests-idb-xctest-run-logic",children:[]},{value:"Application Tests: <code>idb xctest run app</code>",id:"application-tests-idb-xctest-run-app",children:[]},{value:"UI Tests: <code>idb xctest run ui</code>",id:"ui-tests-idb-xctest-run-ui",children:[]}]},{value:"idb and Shims",id:"idb-and-shims",children:[]},{value:"What about <code>fbxctest</code>?",id:"what-about-fbxctest",children:[]}],d={toc:c};function p(e){var t=e.components,n=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Test execution is a well-supported feature of idb. Supporting ",(0,a.kt)("inlineCode",{parentName:"p"},"xctest run")," as a primitive means that idb can be used in automated scenarios such as continuous integration or IDEs."),(0,a.kt)("p",null,"There are three areas that idb aims to solve on top of Xcode and ",(0,a.kt)("inlineCode",{parentName:"p"},"xcodebuild"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Structured Output: idb will output machine readable output when using the ",(0,a.kt)("inlineCode",{parentName:"li"},"--json")," flag. This is often required for CI systems. ",(0,a.kt)("inlineCode",{parentName:"li"},"xcodebuild")," now supports the ",(0,a.kt)("inlineCode",{parentName:"li"},"-resultBundlePath")," flag, which outputs a plist upon completion, but idb also exposes streaming output and can support custom reporters."),(0,a.kt)("li",{parentName:"ol"},"Build Once, Run Many, Run Repeated: ",(0,a.kt)("inlineCode",{parentName:"li"},"xcodebuild"),' currently supports "Run Many" with the ',(0,a.kt)("inlineCode",{parentName:"li"},"test-without-building")," command. However, this imposes more of a burden on the user than is necessary. In many cases idb supports building a singular ",(0,a.kt)("inlineCode",{parentName:"li"},".xctest")," bundle and ",(0,a.kt)("inlineCode",{parentName:"li"},"xctest install"),"ing this. This makes it easier to distribute test bundles against many runtimes and also run the same test bundle with a different runtime environment. For example, idb can run the same bundle with different environment variables, without modifying the build output. This makes it ideal for parameterizing the same test bundle with different data inputs. Or running the same test bundle in an Application or Logic Test context."),(0,a.kt)("li",{parentName:"ol"},"Listing of Tests: Given an installed test bundle idb also supports listing of tests within a bundle. This means that the user can peek at what tests cases are in a bundle without parsing sources using ",(0,a.kt)("inlineCode",{parentName:"li"},"xctest list")),(0,a.kt)("li",{parentName:"ol"},'Faster test execution environments: "Logic Test" execution is an optimization that idb can use in a Simulator environment. This means that a test can execute much faster by not being injected into a full Application context. If test bundles are fast to execute, idb doesn\'t impose a cost of launching an Application.')),(0,a.kt)("h2",{id:"installation-of-test-bundles"},"Installation of Test Bundles"),(0,a.kt)("p",null,"Since iOS Runtimes may be remote from the machine that is executing idb commands, idb needs to support the concept of ",(0,a.kt)("inlineCode",{parentName:"p"},"installation"),". This is essentially copying across the test bundle artifacts alongside the runtime using ",(0,a.kt)("inlineCode",{parentName:"p"},"xctest install"),". "),(0,a.kt)("p",null,"By doing so, the idb companion backend then has the test bundle binary to execute against when using ",(0,a.kt)("inlineCode",{parentName:"p"},"xctest run"),". These bundles are also persisted, which makes caching of test bundles more feasible."),(0,a.kt)("p",null,"The following shows the installation of a test bundle, listing the available bundles, then the test cases within a installed bundle:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ idb xctest install Fixtures/Binaries/iOSUnitTestFixture.xctest\nInstalled: com.facebook.iOSUnitTestFixture\n$ idb xctest list\ncom.facebook.iOSUnitTestFixture | iOSUnitTestFixture | x86_64, i386\n$ idb xctest list-bundle com.facebook.iOSUnitTestFixture\niOSUnitTestFixtureTests/testHostProcessIsMobileSafari\niOSUnitTestFixtureTests/testHostProcessIsXctest\niOSUnitTestFixtureTests/testIsRunningInIOSApp\niOSUnitTestFixtureTests/testIsRunningInMacOSXApp\niOSUnitTestFixtureTests/testIsRunningOnIOS\niOSUnitTestFixtureTests/testIsRunningOnMacOSX\niOSUnitTestFixtureTests/testPossibleCrashingOfHostProcess\niOSUnitTestFixtureTests/testPossibleStallingOfHostProcess\niOSUnitTestFixtureTests/testWillAlwaysFail\niOSUnitTestFixtureTests/testWillAlwaysPass\n")),(0,a.kt)("p",null,"This makes the process of ",(0,a.kt)("inlineCode",{parentName:"p"},"xctest")," management a lot more similar to app management. Using a given test bundle, it's then trivial to execute tests against it"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ idb xctest run logic --json com.facebook.iOSUnitTestFixture                                                                                                                                                                                                                         \n{"bundleName": "iOSUnitTestFixtureTests", "className": "iOSUnitTestFixtureTests", "methodName": "testHostProcessIsMobileSafari", "logs": [], "duration": 0.22353005409240723, "passed": false, "crashed": false, "failureInfo": {"message": "(([NSProcessInfo.processInfo.processName isEqualToString:@\\"MobileSafari\\"]) is true) failed", "file": "/repo_root/iOSUnitTestFixture/iOSUnitTestFixtureTests.m", "line": 50}, "activityLogs": []}\n{"bundleName": "iOSUnitTestFixtureTests", "className": "iOSUnitTestFixtureTests", "methodName": "testHostProcessIsXctest", "logs": [], "duration": 0.0002950429916381837, "passed": true, "crashed": false, "failureInfo": null, "activityLogs": []}\n{"bundleName": "iOSUnitTestFixtureTests", "className": "iOSUnitTestFixtureTests", "methodName": "testIsRunningInIOSApp", "logs": [], "duration": 0.0003999471664428711, "passed": false, "crashed": false, "failureInfo": {"message": "(([NSClassFromString(@\\"UIApplication\\") performSelector:@selector(sharedApplication)]) != nil) failed", "file": "/repo_root/iOSUnitTestFixture/iOSUnitTestFixtureTests.m", "line": 30}, "activityLogs": []}\n{"bundleName": "iOSUnitTestFixtureTests", "className": "iOSUnitTestFixtureTests", "methodName": "testIsRunningInMacOSXApp", "logs": [], "duration": 0.00030100345611572255, "passed": false, "crashed": false, "failureInfo": {"message": "(([NSClassFromString(@\\"NSApplication\\") performSelector:@selector(sharedApplication)]) != nil) failed", "file": "/repo_root/iOSUnitTestFixture/iOSUnitTestFixtureTests.m", "line": 40}, "activityLogs": []}\n{"bundleName": "iOSUnitTestFixtureTests", "className": "iOSUnitTestFixtureTests", "methodName": "testIsRunningOnIOS", "logs": [], "duration": 0.0002809762954711914, "passed": true, "crashed": false, "failureInfo": null, "activityLogs": []}\n{"bundleName": "iOSUnitTestFixtureTests", "className": "iOSUnitTestFixtureTests", "methodName": "testIsRunningOnMacOSX", "logs": [], "duration": 0.0003479719161987306, "passed": false, "crashed": false, "failureInfo": {"message": "((NSClassFromString(@\\"NSView\\")) != nil) failed", "file": "/repo_root/iOSUnitTestFixture/iOSUnitTestFixtureTests.m", "line": 35}, "activityLogs": []}\n{"bundleName": "iOSUnitTestFixtureTests", "className": "iOSUnitTestFixtureTests", "methodName": "testPossibleCrashingOfHostProcess", "logs": [], "duration": 0.0003750324249267579, "passed": true, "crashed": false, "failureInfo": null, "activityLogs": []}\n{"bundleName": "iOSUnitTestFixtureTests", "className": "iOSUnitTestFixtureTests", "methodName": "testPossibleStallingOfHostProcess", "logs": [], "duration": 0.00037300586700439453, "passed": true, "crashed": false, "failureInfo": null, "activityLogs": []}\n{"bundleName": "iOSUnitTestFixtureTests", "className": "iOSUnitTestFixtureTests", "methodName": "testWillAlwaysFail", "logs": [], "duration": 0.0002980232238769531, "passed": false, "crashed": false, "failureInfo": {"message": "failed - This always fails", "file": "/repo_root/iOSUnitTestFixture/iOSUnitTestFixtureTests.m", "line": 76}, "activityLogs": []}\n{"bundleName": "iOSUnitTestFixtureTests", "className": "iOSUnitTestFixtureTests", "methodName": "testWillAlwaysPass", "logs": [], "duration": 0.00024402141571044914, "passed": true, "crashed": false, "failureInfo": null, "activityLogs": []}\n')),(0,a.kt)("h2",{id:"what-is-a-test-bundle"},"What is a Test Bundle?"),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"xctest")," bundle is fundamentally a Dynamically Linked Framework that contains executable test code."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"xctest")," bundles are loaded at runtime by the process that they are being injected into, just like a plugin or shim. The dynamic library within the ",(0,a.kt)("inlineCode",{parentName:"p"},".xctest")," bundle links with ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/xctest"},(0,a.kt)("inlineCode",{parentName:"a"},"XCTest.framework"))," and can also link with other System-Level Frameworks, or code that is statically linked inside the test bundle."),(0,a.kt)("p",null,"Since these bundles aren't substantially different to any other Framework or dynamic library, they can be relocated onto another machine, or amongst many iOS runtimes on the current machine."),(0,a.kt)("h2",{id:"ios-simulators"},"iOS Simulators"),(0,a.kt)("p",null,"Simulators are a common place to execute test bundles, especially when testing unit or integration level functionality that may not have dependencies on running a physical device."),(0,a.kt)("p",null,"The performance differences between a Simulator and Device are also less relevant if you only care about correctness. Simulators are often easier to manage within a CI environment."),(0,a.kt)("p",null,"There are a number of test execution environments that idb supports:"),(0,a.kt)("h3",{id:"logic-tests-idb-xctest-run-logic"},"Logic Tests: ",(0,a.kt)("inlineCode",{parentName:"h3"},"idb xctest run logic")),(0,a.kt)("p",null,"A Test Bundle that can run in the context of any process, typically used for Unit Tests. These kinds of ",(0,a.kt)("inlineCode",{parentName:"p"},"xctest")," bundles do not typically require a specific host Application as all code-under-test."),(0,a.kt)("p",null,"Like all ",(0,a.kt)("inlineCode",{parentName:"p"},"xctest")," bundles, they can dynamically link the code-under-test at runtime, or statically links the tested code inside the Test Bundle's dynamic library."),(0,a.kt)("p",null,"Logic tests are typically injected into a small host process like the ",(0,a.kt)("inlineCode",{parentName:"p"},"xctest")," commandline. macOS has a ",(0,a.kt)("inlineCode",{parentName:"p"},"xctest")," commandline at ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/bin/xctest/"),", the iOS Simulator ",(0,a.kt)("inlineCode",{parentName:"p"},"xctest")," executable is located at ",(0,a.kt)("inlineCode",{parentName:"p"},"$DEVELOPER_DIR/Platforms/iPhoneSimulator.platform/Developer/Library/Xcode/Agents/xctest"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"xctest")," commandline will load the ",(0,a.kt)("inlineCode",{parentName:"p"},"xctest")," bundle provided as an argument and run tests according to the arguments, or from an ",(0,a.kt)("inlineCode",{parentName:"p"},"XCTestConfigurationFilePath")," provided as an environment variable passed to the process."),(0,a.kt)("p",null,"idb then injects a shim into the ",(0,a.kt)("inlineCode",{parentName:"p"},"xctest")," process and hooks calls to ",(0,a.kt)("inlineCode",{parentName:"p"},"XCTest.framework")," methods. This is then used to report results back to idb. This communication happens via a FIFO, passed into the spawned ",(0,a.kt)("inlineCode",{parentName:"p"},"xctest")," process."),(0,a.kt)("p",null,"This is not a mode of execution that is supported by Xcode & ",(0,a.kt)("inlineCode",{parentName:"p"},"xcodebuild"),". However, if you're wanting to optimize the performance of your test executions, for instance to get faster signal on code changes, then this is a worthy optimization. The main reason for not using \"Logic Tests\" is if the Test code or the code-under-test requires an application context, for instance if it's using ",(0,a.kt)("inlineCode",{parentName:"p"},"UIApplication"),". As such, Logic Tests are often well suited to business or domain logic that doesn't depend on much more than Foundation, or your own libraries."),(0,a.kt)("h3",{id:"application-tests-idb-xctest-run-app"},"Application Tests: ",(0,a.kt)("inlineCode",{parentName:"h3"},"idb xctest run app")),(0,a.kt)("p",null,"Application Tests are similar to Logic Tests, but they run inside an iOS App Host Process. This is typically used for Unit & Integration tests that depend on an Application's code, or running inside the context of an Application."),(0,a.kt)("p",null,"These tests can manipulate the UI within an Application, depend certain behaviours of ",(0,a.kt)("inlineCode",{parentName:"p"},"UIKit"),", or interact with the Application Delegate. They require a little more work to bootstrap, because of the arbitration between idb and the host process."),(0,a.kt)("p",null,"idb uses ",(0,a.kt)("inlineCode",{parentName:"p"},"XCTestBootstrap")," which understands how to perform this arbitration and translate delegate callbacks into machine-readable output."),(0,a.kt)("h3",{id:"ui-tests-idb-xctest-run-ui"},"UI Tests: ",(0,a.kt)("inlineCode",{parentName:"h3"},"idb xctest run ui")),(0,a.kt)("p",null,"In Xcode 7, Apple deprecated ",(0,a.kt)("inlineCode",{parentName:"p"},"UIAutomation")," and replaced it with UI Testing support inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"XCTest")," framework itself. This means that UI Tests have a similar execution model to Application Tests, by injecting into an Application Process."),(0,a.kt)("p",null,"As part of the security model of running these tests, the Test Bundle cannot manipulate the User Interface un-aided. The bundle running inside the application process coordinates with Xcode via a daemon process called ",(0,a.kt)("inlineCode",{parentName:"p"},"testmanagerd"),"."),(0,a.kt)("p",null,"This mediated connection between the injected application process and IDE Host also allows for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/FBSimulatorControl/blob/main/PrivateHeaders/XCTest/XCTestManager_IDEInterface-Protocol.h"},"test results to be delivered across a delegate protocol to the IDE Host"),"."),(0,a.kt)("h2",{id:"idb-and-shims"},"idb and Shims"),(0,a.kt)("p",null,'In order for idb to extract structured output from a test process, it uses a "shim": a dynamically linked library that can interpose some of the functionality of ',(0,a.kt)("inlineCode",{parentName:"p"},"XCTest.framework"),"."),(0,a.kt)("p",null,"The default installation instructions for idb will create shims for you. If you're re-locating the ",(0,a.kt)("inlineCode",{parentName:"p"},"idb_companion")," you should take a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/idb/blob/main/XCTestBootstrap/Configuration/FBXCTestShimConfiguration.m"},"look at this class"),", which describes how idb finds these binaries."),(0,a.kt)("h2",{id:"what-about-fbxctest"},"What about ",(0,a.kt)("inlineCode",{parentName:"h2"},"fbxctest"),"?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fbxctest")," was built as a drop-in replacement for ",(0,a.kt)("inlineCode",{parentName:"p"},"xctool")," before it. idb doesn't have the same command-line interface for test execution, so you will need to invoke idb differently to use it."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fbxctest")," will remain around for the foreseeable future, as both idb and ",(0,a.kt)("inlineCode",{parentName:"p"},"fbxctest")," depend on the same underlying ",(0,a.kt)("inlineCode",{parentName:"p"},"XCTestBootstrap")," framework. ",(0,a.kt)("inlineCode",{parentName:"p"},"fbxctest")," may be deprecated in the future."))}p.isMDXComponent=!0}}]);