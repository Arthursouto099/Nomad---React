import React from 'react'
import "./banner.css"
import image from "../assets/card1.jpg"

function Banner() {
    return (
        <section className='banner-section' style={{ width: "100%" }}>
            <div className='banner' style={{ width: "95%", height: "740px" }}>




                <div className='card-min-section'>

                    <div className='card-m' style={{
                        position: "relative"
                    }}>

                        <div className='image-card'>



                        </div>


                        <div className='icons-d'>
                            <div className="icons-list-rounded">

                                <div className="rounded">
                                    <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/avatar2-1.png" alt="" />
                                </div>
                                <div className="rounded">
                                    <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/oliver-ragfelt-khV4fTy6-D8-unsplash-1.png" alt="" />
                                </div>
                                <div className="rounded">
                                    <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/avatar3-1.png" alt="" />
                                </div>
                                <div className="rounded">

                                </div>


                            </div>

                            <h1 className='h1-icon' style={{ fontWeight: "lighter", fontSize: "16px" }}>
                                12K+ Membership enjoy our facility


                            </h1>

                        </div>

                        <div  className="sha"  style={{width: "90%",position: "absolute", left: "50%", right: "50%", height: "10px", backgroundColor : " #0000005d",
                        top: "-10px"

                    }}>


                        </div>



                    </div>
                </div>


                <div className='text-banner'>
                    <h1>Less Hassle More Fun</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias asperiores, ad, sit voluptas alias aspernatur est, </p>

                </div>



            </div>
        </section>
    )
}

export default Banner