import assert from 'power-assert';
import Main from '../src/main';

describe("Main", () => {
    let t = new Main();
    it("make bitcoin address test hash_num_1 (livenet)", () => {
        t.network = "livenet";
        assert.deepEqual(t.text2bitcoin_address("text", 1),
            ["982d9e3eb996f559e633f4d194def3761d909f5a3b647d1a851fead67c32c9d1",
                "1LpNafS8Nw7MnjJyFiafgok4CUBAJNBHqP"]);
    });

    it("make bitcoin address test hash_num_5 (livenet)", () => {
        t.network = "livenet";
        assert.deepEqual(t.text2bitcoin_address("text", 5),
            ["a50f91eb5f44ea2af184a058c3d7d2d77460eea0dffdfa74be44d0d00ba23e99",
                "1F3xM9TCpFFVqbTfpyRDqzSoxgPYG9K8ny"]);
    });

    it("make transaction", async() => {
        t.network = "testnet";
        // yaguchi_coin 517 addres
        let test_address = "mhabz8AyY8vKAPkDZWjLAAbbUbcKCovhvF";
        let test_address_key = "083361f9693d54aabfd4997bc5ab22a2d05a5ae24c2b7b8669242d0d52135144";
        const res = await t.makeTransaction(test_address, test_address_key, 5000, test_address);
        console.log(res);
        assert.deepEqual(res,"test");
    });
});