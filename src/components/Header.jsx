import React from 'react'
import chef from "../images/chef.png";

export default function Header() {
  return (
    <div className='header'>
      <img src={chef} className='chef'></img>
      <h1>Chef Claude</h1>
    </div>
  );
}
