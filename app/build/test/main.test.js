"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var power_assert_1 = require("power-assert");
var main_1 = require("../src/main");
describe("Main", function () {
    it("should have a name", function () {
        var testTarget = new main_1.default("test");
        power_assert_1.default.equal(testTarget.name, "test");
    });
    it("add function test", function () {
        var testTarget = new main_1.default("test");
        power_assert_1.default.equal(testTarget.add(3, 4), 7);
    });
});
//# sourceMappingURL=main.test.js.map