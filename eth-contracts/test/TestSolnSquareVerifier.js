const Verifier = artifacts.require('Verifier');
const SolnSquareVerifier = artifacts.require('SolnSquareVerifier');

// contents from different proof.json generated from zokrates steps
const proof_correct_old = {
    "proof": {
        "a": ["0x2ee52fb8db5d87668121686bce8b2c58f1a771330a3a0dbb344a233d0f281b6d", "0x1465b05a559d1dfbad3c94d5afa969f14a83c4adcbc2307e4d298eb2a709b503"],
        "b": [["0x2fcf3d0c753687bdadba4b68731621e01b30cc7544f12c84141ae251b4753e92", "0x0ebcaeea05ae818dc590a5b03f819d7554d566e364d57a4ca2d3e78e32addf1c"], ["0x089ab1e5f2b9a4f666d12a9951bfe6665b5c97f418325c70c2bdc4347c285abe", "0x22c5c1d5747ad09408b83b9b7507523494908e7af980d3426e819edfb23d9600"]],
        "c": ["0x1d13f748930d13807372ec6f7201bb43765692dfef8a4bd2052f2c36178ecaa9", "0x257ec47a0bcb339382150248ccea7d017bda83f73bdb39124337530ed1ff445a"]
    },
    "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000009", "0x0000000000000000000000000000000000000000000000000000000000000000"]
}

const proof_correct_1 = {
    "proof": {
        "a": ["0x2b811aeb06b9cb506e13531808e0664f79d3a1102c5153093fdfb25fcea44a94", "0x03912e62a59673aae8d8c9b721d3a6808d4c05ce8579ee43147add1792b655b2"],
        "b": [["0x1668a03f7ea68697b7caf48282b3815500342f7738bc4be62ae08b020fe41bff", "0x17db1d612e6e011610fa402346ec953e23b6b6cce589d10f8d11ec3297ab1cae"], ["0x0233640bd7a30dbf66a7d3cd3840f1d0c296774e25a17f6c68dbb79b39396f3d", "0x276299471db8f8078dd8247db8c85f75ebcb03a2c1ad35f96ae5d02494b5b0b8"]],
        "c": ["0x217ddb034c745ca77c108079c4443829fe88c551522224ce695cafdf957ba547", "0x076be2ac242921ef1da70f8168d33ddaa72eeab475f173b77e213d1c7dec8aee"]
    },
    "inputs": ["0x000000000000000000000000000000000000000000000000000000000000000a", "0x0000000000000000000000000000000000000000000000000000000000000000"]
}

const proof_correct_2 = {
    "proof": {
        "a": ["0x1bf414c4d9499a4564abf6476c1ef3372cb432b63629b87e98503c275c21e120", "0x09d69b3f2f2c7af3550a6137b603089095033b5f2c83b97dd1b0e74e09452818"],
        "b": [["0x1a135fa6b83d7e77f07264705d77858f8e7ffd7f391a0eb6314f8f19626fc143", "0x1be8fc9fa6f923d58e5240eaa7f33df90ad9eec01e0eb877b320a6da2f0360d9"], ["0x09da4340ae15ebda79014ffbe5917d91596ca50be9d90c138df12a60076007a8", "0x114e867c8a51d32b8eb9d9c12d8b67ea27eebff865e1e8abab98d683e2ae600c"]],
        "c": ["0x297b0aa33840486f5c27811ad316d5727f983bf212f1dd6ef2cf9984bc274312", "0x12d3350ebc9b9b9e7873e8a454f7c3f45ab57118960db1dcd8bd0f85452872bb"]
    },
    "inputs": ["0x000000000000000000000000000000000000000000000000000000000000000b", "0x0000000000000000000000000000000000000000000000000000000000000000"]
}

const proof_correct_3 = {
    "proof": {
        "a": ["0x292048d358761b6294e734e0eff4a4646a2ae538f2eb10eabe3c792f5872dd9b", "0x095168f310c62036e44f2423312b025ba8ad13d850006ee81dd825c954e87ebd"],
        "b": [["0x27d8eefe60756db528ac2c42bcabd6153e0b21611ec8fb8e0f71fb04bd596507", "0x0cd9fc8999423bfe0c2ccf96653aebb2a397cf40ea22a41a354038cfef04b813"], ["0x2091510c8d96425857dc101c8532afe0beb4129747c7b72e09f01926e4a3fb5a", "0x00c578109329c3ccddf25bc2000a58344dce03f97e73b7e0fc1d4cc8640bce5f"]],
        "c": ["0x2791f79e162e1b21603056930573eb0eacd9fa03fe150baa66794b6d3c720c54", "0x20e50b39390f0b18cef3758eafa4b3d540e3f5204c603b38f843ee35a8f91f13"]
    },
    "inputs": ["0x000000000000000000000000000000000000000000000000000000000000000c", "0x0000000000000000000000000000000000000000000000000000000000000000"]
}

const proof_correct_4 = {
    "proof": {
        "a": ["0x128e50a1dfbaf28e5edea79307d8d16dbc8220c24af131908b49ac629d52ba8a", "0x2f03f7973388053f07af76a2e0f8b663ee763ac60f4034ea905d09278bf96bec"],
        "b": [["0x09b45285e0de6682937444dff531babb6de50c27fda94febeb9dbcd34f289957", "0x0333863fd1d332a96932f9cf4aff344efb1819868292cfd37101c56f2a3b2e1f"], ["0x24d9956f0266ade44414e90f91ef46168f3bb6f64132bf76952a033003a46f37", "0x2d069beeaef3fb01c44f4403c18d8cb5c8b85f5fc7bb3c9bd1989ad3b6fd9264"]],
        "c": ["0x278d39e02dec2ee992cc22d503c5f822508f1e8fe4d494891613d4b4a6ae4000", "0x2680fe4d711a9c16c36b7ecb49d7f5d7511a91a299b72fcec7493eb7797ba7e9"]
    },
    "inputs": ["0x000000000000000000000000000000000000000000000000000000000000000d", "0x0000000000000000000000000000000000000000000000000000000000000000"]
}

const proof_correct_5 = {
    "proof": {
        "a": ["0x0facdabe270358dfa17ae0e1f5d9a49e6c1c21980e32da4d271eb5d91fef18ae", "0x1d6191f96df6cef5c900cdd3057e940adef6a55aace1a25c785f3ca3dbc62c1c"],
        "b": [["0x0cae0d67ed34ef777593ea0328537393cb43d94d082c7e3e9c0a36342837773d", "0x12dfb184a696c2f9ca0ab6d8e2d68505cb313300e931da61d0b526d8dd0b1638"], ["0x1353d0a6abc7cb11fd7b45270be3e956a827e38167d045a5b9add7a10e394453", "0x0b1cfb4d56b530b6dc14de4d19c3bc4da7fa57b5c0c01a5b4a2856891f470184"]],
        "c": ["0x05e02080a6c52fc7ffe9f87d952fda59511ecc094f99b0e939155ca08a46b81d", "0x0439b3837684fcb3a7b3321049a3e20520a64f40c437ffc5c4d86912b9c8c240"]
    },
    "inputs": ["0x000000000000000000000000000000000000000000000000000000000000000e", "0x0000000000000000000000000000000000000000000000000000000000000000"]
}

const proof_correct_6 = {
    "proof": {
        "a": ["0x22672a94b85bd66910a7f6e71a662c4d5f542ccc6c28f25737fc062a3c7e9e60", "0x08e30b560c6723efc167b0506e2910fe8fb8e85f110d33d88431b391726c4e65"],
        "b": [["0x0772c36478fdc56b2e327e2305585bae33f0e2a54b3a3e64c0053c470f4bcf3a", "0x09e0606349faf5e6d7736cc6eba64c29a9f4302cd21273afbedc8f4fe5dca7c9"], ["0x0a9aa07fa14f3166fe7cb8b27f6670064325887a899a1cf6fb35720dbc273d66", "0x0eb6e41060ee5be141f4d1227691e77393c8614e6cc393f770c2f2fef0ce9a86"]],
        "c": ["0x2c7286ca0c8d3c01a86eade7febf089432ae2d7817930ec533482097c0fa1e71", "0x066aa5ddab587f518529bd9ef9e643f3b88b6ad4bfbf245631f62ad1d20f4e8a"]
    },
    "inputs": ["0x000000000000000000000000000000000000000000000000000000000000000f", "0x0000000000000000000000000000000000000000000000000000000000000000"]
}

const proof_correct_7 = {
    "proof": {
        "a": ["0x1ecc8e210e0cdae16edfd6d832a861142ad74685a56249a5b76adbf29993ea3a", "0x2d5140d3cdd6b34b7fc178f2bd0015a7b0ee95fa0c5daaa7509eee9632a18174"],
        "b": [["0x240afd87321ce99984f3cb7ef8e2b849c32f05593c9c737db31076b28ab350af", "0x23e83d61bf9984e656a9edb8c0a334e0d3b257e98a5cb3f602fce6f0c9157450"], ["0x1e9da33991830e0e582425c83b2e5acecad6d6c9310eb5be594878c57880e314", "0x0cfbec58f9be1c13826229271fa016bffc47f48ef5f49b63a9dc27c5353a0072"]],
        "c": ["0x2be066792585714c0900730fc3e7fcb4b86623337e33f4d5353174601ae14624", "0x028e19cfa7455568c8d80c728c4329f46a7d5fdcb3f7ce7aa2b1fcc03c51a929"]
    },
    "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000010", "0x0000000000000000000000000000000000000000000000000000000000000000"]
}

const proof_correct_8 = {
    "proof": {
        "a": ["0x29c0c5666e5f0a5e48466b2eee8343895d19730672d8a7b07b7dd16459f1f03d", "0x026619fa2e35314aa5d80b6efeed079b62d59b4d44808e699fb19b26c2a36b96"],
        "b": [["0x166a70b6763fcdc97765ac531c5b9b135b4fc38119119eb95664a89245d3c2a6", "0x057db3dad096044d93d4a1a21957d6b554b09611c35869bcaa9c9934388a8590"], ["0x3008a7abc3879684678f073b744453907372e21ddd5ababf2a71817b41ecc05d", "0x2b3ac9ebee4aec93ca2bff6d3a1da7404ff535531b6d4da163f33da6fb89ec2b"]],
        "c": ["0x260a8e7e072fc3f9faff92846bd901e0f40282eab6573810473362a83926feb6", "0x1ed432e6f7b579ed925f6988dbb0c46e54148502debcfadf74618e48a96bfde6"]
    },
    "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000011", "0x0000000000000000000000000000000000000000000000000000000000000000"]
}

const proof_correct_9 = {
    "proof": {
        "a": ["0x2fa40b8a4ea1468ca8feb87e540001c93290839f39209876a5cbf5d224e1fb07", "0x17eb0baf9422817849f65e8fa3bab7127b818e88249e0cce620997d4368c1349"],
        "b": [["0x1ee86d316abf1ffad3e60242f036ace01760b9bbecf869f08283ea88071d9010", "0x1a59dedc8371af63e74d74abaeabd4d4b573cd35f1ffbc17c7a53f81c74c625f"], ["0x0245d0c57ed5f85af3b45e524095ab5516a120f4caabdd0e451fa5bd318e13b3", "0x1f00f365dbe9ee95fc8459a0f27b200b824b7eefe490cab7d4e4a3184e006496"]],
        "c": ["0x1054fd0568e6dc93554414ed6a6e8d26e5f4052fd18b5d9393dbc270191a2f2c", "0x03212fcc20639bd7376514e21cfb58456ebfcebf6910a650f541a7d8c04a80d4"]
    },
    "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000012", "0x0000000000000000000000000000000000000000000000000000000000000000"]
}

const proof_correct_10 = {
    "proof": {
        "a": ["0x05b62c4029dac767d41057126c2ead2688643d96f4451b055233ffba690dc13d", "0x07eb303f7d8d15c88b533981f2128a645f1ace5ac0117da8b32aa00e09072215"],
        "b": [["0x2a9d9f7fbaac94a016a7568ad0f67c35360f9559b78b87c89de23f77392526c9", "0x16b796969e29362e82a2e1938cade9a8606f5d76185fbd3be70bfdc29345b493"], ["0x0e4a60dca5c00980b5c4c066907f3694138ea101f707f31c428eceb11eed5954", "0x14311e58b11d8a4955632ca05787d54e5371a3b5546c87f8026d2d42faed5ef4"]],
        "c": ["0x0a2097acd736d7befb76001a45fce7614be059afc618cfdb23370ba64250055e", "0x1617cce74e400c00f2327dc163b3192867d75d6ca7490fe23c66e674f272d9ae"]
    },
    "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000013", "0x0000000000000000000000000000000000000000000000000000000000000000"]
}

contract('TestSolnSquareVerifier', accounts => {

    const account_one = accounts[0];
    //const account_two = accounts[1];
    const account_two = "0x4bF3AF72eF62d41F19EF477cb63d392C540046a9"; // new account, because private key of accounts[1] is lost

    console.log("account_one: " + account_one);
    console.log("account_two: " + account_two);
    
    describe('Test Soln Square verification', function () {
        before(async function () { 
            const verifier = await Verifier.new({from: account_one});
            this.contract = await SolnSquareVerifier.new(verifier.address, "My cool Token", "MCT", {from: account_one});
        })
                
        // Test if a new solution can be added for contract - SolnSquareVerifier
        it('if an solution can be added', async function () { 
            await this.contract.addSolution(
                proof_correct_1.proof.a,
                proof_correct_1.proof.b,
                proof_correct_1.proof.c,
                proof_correct_1.inputs,
                {from: account_one}
            );      
        })

        it('if an solution 2 can be added', async function () { 
            await this.contract.addSolution(
                proof_correct_2.proof.a,
                proof_correct_2.proof.b,
                proof_correct_2.proof.c,
                proof_correct_2.inputs,
                {from: account_one}
            );      
        })

        it('if an solution 3 can be added', async function () { 
            await this.contract.addSolution(
                proof_correct_3.proof.a,
                proof_correct_3.proof.b,
                proof_correct_3.proof.c,
                proof_correct_3.inputs,
                {from: account_one}
            );      
        })

        it('if an solution 4 can be added', async function () { 
            await this.contract.addSolution(
                proof_correct_4.proof.a,
                proof_correct_4.proof.b,
                proof_correct_4.proof.c,
                proof_correct_4.inputs,
                {from: account_one}
            );      
        })

        it('if an solution 5 can be added', async function () { 
            await this.contract.addSolution(
                proof_correct_5.proof.a,
                proof_correct_5.proof.b,
                proof_correct_5.proof.c,
                proof_correct_5.inputs,
                {from: account_one}
            );      
        })

        it('if an solution 6 can be added', async function () { 
            await this.contract.addSolution(
                proof_correct_6.proof.a,
                proof_correct_6.proof.b,
                proof_correct_6.proof.c,
                proof_correct_6.inputs,
                {from: account_one}
            );      
        })

        it('if an solution 7 can be added', async function () { 
            await this.contract.addSolution(
                proof_correct_7.proof.a,
                proof_correct_7.proof.b,
                proof_correct_7.proof.c,
                proof_correct_7.inputs,
                {from: account_one}
            );      
        })

        it('if an solution 8 can be added', async function () { 
            await this.contract.addSolution(
                proof_correct_8.proof.a,
                proof_correct_8.proof.b,
                proof_correct_8.proof.c,
                proof_correct_8.inputs,
                {from: account_one}
            );      
        })

        it('if an solution 9 can be added', async function () { 
            await this.contract.addSolution(
                proof_correct_9.proof.a,
                proof_correct_9.proof.b,
                proof_correct_9.proof.c,
                proof_correct_9.inputs,
                {from: account_one}
            );      
        })

        it('if an solution 10 can be added', async function () { 
            await this.contract.addSolution(
                proof_correct_10.proof.a,
                proof_correct_10.proof.b,
                proof_correct_10.proof.c,
                proof_correct_10.inputs,
                {from: account_one}
            );      
        })

        // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
        it('if an ERC721 token can be minted', async function () { 
            await this.contract.mintNewNFT(
                proof_correct_1.inputs[0],
                proof_correct_1.inputs[1],
                account_two, // to address
                {from: account_one}
            );
        })

        it('if an ERC721 token 2 can be minted', async function () { 
            await this.contract.mintNewNFT(
                proof_correct_2.inputs[0],
                proof_correct_2.inputs[1],
                account_two, // to address
                {from: account_one}
            );
        })

        it('if an ERC721 token 3 can be minted', async function () { 
            await this.contract.mintNewNFT(
                proof_correct_3.inputs[0],
                proof_correct_3.inputs[1],
                account_two, // to address
                {from: account_one}
            );
        })

        it('if an ERC721 token 4 can be minted', async function () { 
            await this.contract.mintNewNFT(
                proof_correct_4.inputs[0],
                proof_correct_4.inputs[1],
                account_two, // to address
                {from: account_one}
            );
        })

        it('if an ERC721 token 5 can be minted', async function () { 
            await this.contract.mintNewNFT(
                proof_correct_5.inputs[0],
                proof_correct_5.inputs[1],
                account_two, // to address
                {from: account_one}
            );
        })

        it('if an ERC721 token 6 can be minted', async function () { 
            await this.contract.mintNewNFT(
                proof_correct_6.inputs[0],
                proof_correct_6.inputs[1],
                account_two, // to address
                {from: account_one}
            );
        })

        it('if an ERC721 token 7 can be minted', async function () { 
            await this.contract.mintNewNFT(
                proof_correct_7.inputs[0],
                proof_correct_7.inputs[1],
                account_two, // to address
                {from: account_one}
            );
        })

        it('if an ERC721 token 8 can be minted', async function () { 
            await this.contract.mintNewNFT(
                proof_correct_8.inputs[0],
                proof_correct_8.inputs[1],
                account_two, // to address
                {from: account_one}
            );
        })

        it('if an ERC721 token 9 can be minted', async function () { 
            await this.contract.mintNewNFT(
                proof_correct_9.inputs[0],
                proof_correct_9.inputs[1],
                account_two, // to address
                {from: account_one}
            );
        })

        it('if an ERC721 token 10 can be minted', async function () { 
            await this.contract.mintNewNFT(
                proof_correct_10.inputs[0],
                proof_correct_10.inputs[1],
                account_two, // to address
                {from: account_one}
            );
        })
    })
})

    
