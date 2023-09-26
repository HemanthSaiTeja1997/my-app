'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const UserIdpage = ({params}:{params :{userid:string}}) => {
    const route=useRouter();
    const backToOldpage=()=>{
      route.push('/new/old')
    }
  return (
    <div className=' text-black'>
        <div>
        <h1>UserIdpage</h1>
        </div>
     
        <div>
        <h1>My Name is {params.userid}</h1>
        <button className='p-2 m-2 border bg-purple-400 rounded-lg mb-4 focus:outline-none
         focus:border-gray-600 ' onClick={backToOldpage}>VisitToOldUsingButtonanduseRouterHook</button>
        <br />
        <Link className='p-2 m-2 border
         bg-purple-400 rounded-lg mb-4 focus:outline-none
         focus:border-gray-600 ' href='/new/old'>VisitToOldPageUsingLinkTag</Link>
        </div>
    </div>
  )
}

export default UserIdpage
