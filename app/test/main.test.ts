import assert from 'power-assert';
import Main from '../src/main';

describe("Main", () => {
    it("should have a name", () => {
        let testTarget = new Main("test");
        assert.equal(testTarget.name, "test");
    });
    it("add function test", () => {
        let testTarget = new Main("test");
        assert.equal(testTarget.add(3, 4), 7);
    });
    it("make bitcoin address test", () => {
        let testTarget = new Main("test");
        assert.equal(testTarget.text2bitcoin_address("text", 1), "1LpNafS8Nw7MnjJyFiafgok4CUBAJNBHqP");
    });
});

