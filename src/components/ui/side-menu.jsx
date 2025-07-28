import React from 'react'
import "../ui/side-menu.css"

function SideMenu({view}) {
    const classActive = view ? "side-menu-active" :"side-menu-not-active"
    const activeBar = view ? "side-menu-active-bar" : "not-active-bar"

    return (
        <div>


    
       <div   className={` side-menu ${classActive} `} style={{
       }}>

     
     


       </div> 
       {
               <div className={`menu-side-bar ${activeBar}`}>

               </div>
        }

       </div>


    )
}

export default SideMenu