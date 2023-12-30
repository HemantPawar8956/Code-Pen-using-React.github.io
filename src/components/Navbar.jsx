import React, { useState } from 'react'

function Navbar({data:{handelposition}}) {
    
    let arrlist=[
        {
            position:"default",
            element:"Default"
        },
        {
            position:"left",
            element:"Left"
        },
        {
            position:"right",
            element:"Right"
        }
    ]
    return (
        <div
            className='main lg:flex md:flex flex-wrap justify-between items-center px-4 bg-[#eee] py-4'>
            <div className="left">
                <div className="logo font-bold text-2xl text-orange-600 text-center">
                   <h2 className=''>Qspiders</h2>
                </div>
            </div>
            {/* <div className="right flex">
                {arrlist.map((ele,index)=>{
                    return(
                        <li key={index} className='cursor-pointer' onClick={()=>{handelposition(ele.position)}}>{ele.element}</li>
                    )
                })}
            </div> */}
        </div>
    )
}

export default Navbar