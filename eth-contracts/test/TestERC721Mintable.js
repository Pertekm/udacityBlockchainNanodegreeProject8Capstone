var ERC721MintableComplete = artifacts.require('CustomERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // mint multiple tokens
            let addressTo1 = account_one;
            let addressTo2 = account_two;

            let tokenId1 = 1;
            let tokenId2 = 2;
            let tokenId3 = 3;

            await this.contract.mint(addressTo1, tokenId1, {from: account_one});
            await this.contract.mint(addressTo2, tokenId2, {from: account_one});
            await this.contract.mint(addressTo1, tokenId3, {from: account_one});
        })

        it('should return total supply', async function () { 
            let supply = await this.contract.totalSupply.call();

            assert.equal(supply, 3, "should return total supply.");
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