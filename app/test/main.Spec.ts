import assert from 'power-assert';
import Main from '../src/main';

describe("Main", () => {
    let t = new Main();
    it("make bitcoin address test (livenet)", () => {
        assert.deepEqual(t.text2bitcoin_address("text", 1, "livenet"),
         ["982d9e3eb996f559e633f4d194def3761d909f5a3b647d1a851fead67c32c9d1",
          "1LpNafS8Nw7MnjJyFiafgok4CUBAJNBHqP"]);
        });
    /*
    it("check bitcoin address (testnet)", () => {
        assert.deepEqual(t.check_asset(
            "mhabz8AyY8vKAPkDZWjLAAbbUbcKCovhvF","testnet"),
            undefined);
        });
    */
});

