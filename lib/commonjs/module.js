"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SharenatorModule = void 0;
var _reactNative = require("react-native");
/* eslint prefer-template:0 */

const LINKING_ERROR = `The package '@startupcraft/react-native-beaconator' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo managed workflow\n';
const SharenatorModule = exports.SharenatorModule = _reactNative.NativeModules.SharenatorModule ? _reactNative.NativeModules.SharenatorModule : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
//# sourceMappingURL=module.js.map