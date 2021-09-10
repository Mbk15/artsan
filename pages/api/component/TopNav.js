import React from 'react'
import Image from 'next/image'
export default function TopNav() {
  return (
    <div className="quicklink">
      <div className="quicklink__child">
     
        <Image src="/homelogo.png" width="45" height="24"/>
      
     
        <Image src="/navicon.png" width="25" height="25"/>
      
   </div>
      
    </div>
  )
}