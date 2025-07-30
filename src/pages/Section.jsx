import React from 'react'
import "./sections.css"


function Section({children, bg="default", url = "", isSmoke}) {
  const bgColor = bg === "default"? "#fff" : "#FAFAFA"
  const isImageBg = url !== "" ? "section_bg" : "" 
 


  return (



    <section className={`${isImageBg}`} style={{backgroundColor: bgColor, backgroundImage: `url(${url})`,  position: "relative", backgroundPosition: "center" , backgroundSize: "cover"}}>
        <div className="container">
            {children}
        </div>


        {isSmoke !== undefined ? (
        
          <div className='smoke_bar'>

          </div>
        
      ) : null}

    </section>
  )
}

export default Section