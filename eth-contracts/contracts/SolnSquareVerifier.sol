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

    using Counters for Counters.Counter;

    Verifier private verifierContract;

    struct Solution {
        uint indexOfSoln;
        address addressOfSoln;
        bool passed;
    }

    Solution[] solution;

    // a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) solnSubmitted; // hash of input[0],input[1] -> solution

    Counters.Counter private currentSolnIndex;

    // an event to emit when a solution is added
    event SolutionAdded(uint index, address solutionAddress);

    constructor(address verifierAddress, string memory name, string memory symbol)
        CustomERC721Token(name, symbol)
        public {
        verifierContract = Verifier(verifierAddress);
    }

    function addSolution(
            uint[2] memory a,
            uint[2][2] memory b,
            uint[2] memory c,
            uint[2] memory input)
            public {
        bytes32 solnHash = keccak256(abi.encodePacked(input[0], input[1]));
        require(solnSubmitted[solnHash].addressOfSoln == address(0), "Solution has already been added");

        bool isVerified = verifierContract.verifyTx(a, b, c, input);
        require(isVerified, "Solution is not verified");

        solnSubmitted[solnHash] = Solution(currentSolnIndex.current(), msg.sender, false);

        emit SolutionAdded(currentSolnIndex.current(), msg.sender);
        currentSolnIndex.increment();
    }


    // mint new NFT only after the solution has been verified
    function mintNewNFT(uint input1, uint input2, address to) public
    {
        bytes32 solnHash = keccak256(abi.encodePacked(input1, input2));

        require(solnSubmitted[solnHash].addressOfSoln != address(0), "Solution does not exist");
        require(solnSubmitted[solnHash].passed == false, "Solution has already been passed");
        require(solnSubmitted[solnHash].addressOfSoln == msg.sender, "Only sender with solutionAddress can mint token");

        super.mint(to, solnSubmitted[solnHash].indexOfSoln);
        solnSubmitted[solnHash].passed = true;
    }
}