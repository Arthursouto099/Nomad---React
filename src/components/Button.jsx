import React from 'react'
import "./ui/Button.css"

function Button({variant = "default" , children})  {
  const classB = variant === "default" ? "btn-d" : "btn-v"
  const backgroundColor = variant === "default"? "#fff" : "#FF7526"
  const fontColor = variant === "default" ? "#000" : "#fff"
  const borderColor  = variant === "default" ? "1px solid #F7F6F6 " : "none"

  return (
    <button className={classB} onMouseEnter 
    style={{
        padding: "14px",
        width: "140px",
        borderRadius: "7%",
        fontWeight: "500",
        fontSize: "16px",
        border: borderColor,
    }}
    >{children}</button>
    )
}

export default Button