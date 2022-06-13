import React from "react";

const NavBar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }

  return (
    <div className='navbar'>
      {/* Left Side - Social Media Icons */}
      <div className='nav-items-1'>
        Facebook<span className='clr-blk'>M</span>
      </div>
      <div className='nav-items-2'>
        <span>i</span>Twitter
      </div>
      <div className='nav-items-3'>
        Email<span>n</span>
      </div>

      {/* Right Side - Social Media Icons */}
      <div className='nav-items-4'>
        <span>t</span>About
      </div>
      <div className='nav-items-5'>
        Mint<span className='clr-blk'>M</span>
      </div>
      <div className='nav-items-6'>
        <span>e</span>Team
      </div>

      {/* Connect */}
      {isConnected ? (
        <p className='connected'>Connected</p>
      ) : (
        <button onClick={connectAccount} className='btn'>
          Connect
        </button>
      )}
    </div>
  );
};

export default NavBar;
