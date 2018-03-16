import assert from 'power-assert';
import Main from '../src/main';

describe("Main", () => {
    it("make bitcoin address test", () => {
        let testTarget = new Main();
        assert.equal(testTarget.text2bitcoin_address("text", 1), ["key", "1LpNafS8Nw7MnjJyFiafgok4CUBAJNBHqP"]);
    });
});

