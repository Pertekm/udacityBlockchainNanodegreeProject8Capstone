const Verifier = artifacts.require('Verifier');
const SolnSquareVerifier = artifacts.require('SolnSquareVerifier');

// contents from proof.json generated from zokrates steps
const proof_correct = {
    "proof": {
        "a": ["0x2ee52fb8db5d87668121686bce8b2c58f1a771330a3a0dbb344a233d0f281b6d", "0x1465b05a559d1dfbad3c94d5afa969f14a83c4adcbc2307e4d298eb2a709b503"],
        "b": [["0x2fcf3d0c753687bdadba4b68731621e01b30cc7544f12c84141ae251b4753e92", "0x0ebcaeea05ae818dc590a5b03f819d7554d566e364d57a4ca2d3e78e32addf1c"], ["0x089ab1e5f2b9a4f666d12a9951bfe6665b5c97f418325c70c2bdc4347c285abe", "0x22c5c1d5747ad09408b83b9b7507523494908e7af980d3426e819edfb23d9600"]],
        "c": ["0x1d13f748930d13807372ec6f7201bb43765692dfef8a4bd2052f2c36178ecaa9", "0x257ec47a0bcb339382150248ccea7d017bda83f73bdb39124337530ed1ff445a"]
    },
    "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000009", "0x0000000000000000000000000000000000000000000000000000000000000000"]
}

contract('TestSolnSquareVerifier', accounts => {

    const account_one = accounts[0];
    
    describe('Test Soln Square verification', function () {
        beforeEach(async function () { 
            const verifier = await Verifier.new({from: account_one});
            this.contract = await SolnSquareVerifier.new(verifier.address, "My cool Token", "MCT", {from: account_one});
        })
        
        // ToDo Test if an ERC721 token can be minted for contract - SolnSquareVerifier
        it('if an ERC721 token can be minted', async function () { 
            await contract.mintNewNFT(
                proof_correct.proof.A,
                proof_correct.proof.A_p,
                proof_correct.proof.B,
                proof_correct.proof.B_p,
                proof_correct.proof.C,
                proof_correct.proof.C_p,
                proof_correct.input,
                71,
                {from: account_one}
            );      
            
            const tokenOwner = await contract.ownerOf(71);
            assert.equal(tokenOwner, account_one, "token owner is not correct");
        })

        // ToDo Test if a new solution can be added for contract - SolnSquareVerifier
    })
})

    
