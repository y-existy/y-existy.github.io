import assert from 'power-assert';
import Main from '../src/main';

describe("Main", () => {
    let t = new Main();
    it("make bitcoin address test hash_num_1 (livenet)", () => {
        assert.deepEqual(t.text2bitcoin_address("text", 1, "livenet"),
         ["982d9e3eb996f559e633f4d194def3761d909f5a3b647d1a851fead67c32c9d1",
          "1LpNafS8Nw7MnjJyFiafgok4CUBAJNBHqP"]);
        });

    it("make bitcoin address test hash_num_5 (livenet)", () => {
        assert.deepEqual(t.text2bitcoin_address("text", 5, "livenet"),
         ["a50f91eb5f44ea2af184a058c3d7d2d77460eea0dffdfa74be44d0d00ba23e99",
          "1F3xM9TCpFFVqbTfpyRDqzSoxgPYG9K8ny"]);
        });

    /*
    it("check bitcoin address (testnet)", () => {
        assert.deepEqual(t.check_asset(
            "mhabz8AyY8vKAPkDZWjLAAbbUbcKCovhvF","testnet"),
            undefined);
        });
    */
});

