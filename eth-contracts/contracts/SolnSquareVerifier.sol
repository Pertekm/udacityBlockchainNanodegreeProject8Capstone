pragma solidity >=0.4.21 <0.6.0;

import "./ERC721Mintable.sol";

// a contract call to the zokrates generated solidity contract Verifier
contract Verifier {
        function verifyTx(
/*            
            uint[2] memory a,
            uint[2] memory a_p,
            uint[2][2] memory b,
            uint[2] memory b_p,
            uint[2] memory c,
            uint[2] memory c_p,
            //uint[2] memory h,
            //uint[2] memory k,
            uint[2] memory input
*/
            uint[2] memory a,
            uint[2][2] memory b,
            uint[2] memory c,
            uint[2] memory input
        ) public returns (bool r);
}

// Soln is an abbreviation for Solution
contract SolnSquareVerifier is CustomERC721Token {
    Verifier private verifierContract;

    constructor(address verifierAddress, string memory name, string memory symbol)
        CustomERC721Token(name, symbol)
        public
    {
        verifierContract = Verifier(verifierAddress);
    }

    // TODO define a solutions struct that can hold an index & an address


    // TODO define an array of the above struct


    // TODO define a mapping to store unique solutions submitted



    // TODO Create an event to emit when a solution is added



    // TODO Create a function to add the solutions to the array and emit the event



    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSupply
    /*
    function mint(address to, uint256 tokenId
    ) public onlyOwner returns(bool) {
        super._mint(to, tokenId);
        super._setTokenURI(tokenId);

        // If no errors (e.g. require fail in functions), return success
        return true;
    }
    */
}
