// ToDo siehe Zeile 454 in eth-contracts\contracts\ERC721Mintable.sol
var ERC721MintableComplete = artifacts.require('ERC721Mintable');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
        })

        it('should return total supply', async function () { 
            // ToDo
        })

        it('should get token balance', async function () { 
            // ToDo
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            // ToDo
        })

        it('should transfer token from one owner to another', async function () { 
            // ToDo
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            // ToDo
        })

        it('should return contract owner', async function () { 
            // ToDo
        })

    });
})