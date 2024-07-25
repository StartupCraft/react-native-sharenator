"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _sharenator = require("./sharenator.js");
Object.keys(_sharenator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _sharenator[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sharenator[key];
    }
  });
});
var _module = require("./module.js");
Object.keys(_module).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _module[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _module[key];
    }
  });
});
//# sourceMappingURL=index.js.map