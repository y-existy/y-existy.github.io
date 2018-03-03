"use strict";
exports.__esModule = true;
var power_assert_1 = require("power-assert");
var bundle_1 = require("../build/src/bundle");
describe("TestTarget", function () {
    it("should have a name", function () {
        var testTarget = new bundle_1["default"]("test");
        power_assert_1["default"].equal(testTarget.name, "test");
    });
});
