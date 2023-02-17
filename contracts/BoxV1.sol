// SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

contract BoxV1{

    event Value(uint256 value);
    uint256 internal value;

    function set(uint256 num) public{
      
      value=num+1;
      emit Value(value);
    }

    function get() public view returns(uint256){
        return value;
    }
}