var ERC721MintableComplete = artifacts.require('CustomERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    const tokenId1 = 1;
    const tokenId2 = 2;
    const tokenId3 = 3;

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // mint multiple tokens
            let addressTo1 = account_one;
            let addressTo2 = account_two;

            await this.contract.mint(addressTo1, tokenId1, {from: account_one});
            await this.contract.mint(addressTo2, tokenId2, {from: account_one});
            await this.contract.mint(addressTo1, tokenId3, {from: account_one});
        })

        it('should return total supply', async function () { 
            let supply = await this.contract.totalSupply.call();
            assert.equal(supply, 3, "should return total supply.");
        })

        it('should get token balance', async function () { 
            let balance1 = await this.contract.balanceOf.call(account_one);
            assert.equal(balance1, 2, "token balance incorrect");

            let balance2 = await this.contract.balanceOf.call(account_two);
            assert.equal(balance2, 1, "token balance incorrect");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let tokenId1Uri = await this.contract.tokenURI.call(tokenId1);
            assert.equal(tokenId1Uri, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", "token uri wrong");

            let tokenId2Uri = await this.contract.tokenURI.call(tokenId2);
            assert.equal(tokenId2Uri, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/2", "token uri wrong");

            let tokenId3Uri = await this.contract.tokenURI.call(tokenId3);
            assert.equal(tokenId3Uri, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/3", "token uri wrong");
        })

        it('should transfer token from one owner to another', async function () { 
            let ownerBefore = await this.contract.ownerOf.call(tokenId1);
            assert.equal(ownerBefore, account_one);

            await this.contract.transferFrom(account_one, account_two, tokenId1); // no "call", because no let?
            
            let ownerAfter = await this.contract.ownerOf.call(tokenId1);
            assert.equal(ownerAfter, account_two);
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let fail = false;
            try {
                await this.contract.mint(account_one, tokenId2, {from: account_two});
            }
            catch (e) {
                fail = true;
            }

            assert.isTrue(fail, "Should fail");
        })

        it('should return contract owner', async function () { 
            let owner = await this.contract.getOwner.call();
            assert.equal(owner, account_one, "wrong owner");
        })

    });
})