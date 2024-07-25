"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = close;
exports.fetchData = fetchData;
var _module = require("./module.js");
function fetchData() {
  return _module.SharenatorModule.fetchData();
}
function close() {
  _module.SharenatorModule.close();
}
//# sourceMappingURL=sharenator.js.map