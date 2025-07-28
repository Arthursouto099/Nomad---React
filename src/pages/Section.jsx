import React from 'react'
import "./sections.css"


function Section({children, bg="default"}) {
  const bgColor = bg === "default"? "#fff" : "#FAFAFA"
  
  return (



    <section className='' style={{backgroundColor: bgColor}}>
        <div className="container">
            {children}
        </div>

    </section>
  )
}

export default Section