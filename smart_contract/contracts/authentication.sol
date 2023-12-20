// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Authentication {
    mapping(address => string) private userToEmail;

    function setEmail(string memory email) public {
        userToEmail[msg.sender] = email;
    }

    function getEmail() public view returns (string memory) {
        return userToEmail[msg.sender];
    }
}
