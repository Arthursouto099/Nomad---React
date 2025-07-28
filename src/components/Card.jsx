import React from 'react'
import "./card.css"
import { Calendar, Star } from 'lucide-react'
import Button from './Button'

function Card({ url, title, desc, date, nota, category }) {
  return (
    <div className='card' style={{


    }}>


      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img src={url} style={{ borderRadius: '10px' }} width="90%" alt="" />
      </div>

      <div style={{ width: "100%", display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
        <div style={{ width: "90%", marginTop: "20px", display: "flex", flexDirection: "column", gap: "7px" }}>
          <h1>{title}</h1>
          <p style={{ fontSize: "14px" }}>{desc}</p>

          <div style={{ display: "flex", gap: "20px", fontSize: "12px", marginTop: "5px", color: "#7F7F7F" }}>
            <p style={{ display: "flex", alignItems: "center", gap: "10px", }} > <Calendar width="13px" ></Calendar>  12 jun - 20 jun</p>
            <div style={{ height: "17px", width: "1px", backgroundColor: "#EDEDED" }}></div>
            <p style={{ display: "flex", alignItems: "center", gap: "10px", }} > <Star width="13px" ></Star>  5.0 rating</p>
            <div style={{ height: "17px", width: "1px", backgroundColor: "#EDEDED" }}></div>

            <p style={{ display: "flex", alignItems: "center", gap: "10px", }} > <Calendar width="13px" ></Calendar>  Beach</p>
          </div>

          <div style={{ width: "100%", backgroundColor: "#EDEDED", height: "1px", marginTop: "14px", marginBottom: "14px" }}></div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <h1>$1,580</h1>
              <p>9 day package</p>
            </div>


            <Button>Book Now</Button>
          </div>
        </div>



      </div>














    </div>
  )
}




export function SubCard({ children }) {


  return (
    <div className='sub_card' >
      {children}
    </div>
  )

}

export function MiniCard({ icon, title, description, num }) {
  return (
    <SubCard>
      <div style={{margin: "0px 20px"}}>

      

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          border: '1px solid #E5E7EB',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
          backgroundColor: '#FAFAFA',
        }}>
          {icon}
        </div>

        <div>
          <h1>
            0{num}
          </h1>
        </div>
      </div>


      <div style={{marginTop: "50px", display: "flex" , flexDirection: "column", gap: "20px"}}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      </div>


    </SubCard>
  )
}


export default Card