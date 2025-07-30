import React from 'react'
import Header from '../layouts/Header'
import Banner from './Banner'
import Section from './Section'
import "./global.css"
import Button from '../components/Button'
import Card from '../components/Card'
import { MiniCard } from '../components/Card'
import { SunMedium, User, User2, User2Icon, Camera, Star } from 'lucide-react'
import Carousel from '../components/ui/Carousel'

function Home() {
   return (
      <div >
         <Header></Header>

         <main style={{ width: "100%", height: "100%" }}>

            <Banner></Banner>

            <Section >
               <div className='text-s-1'>
                  <h1>Recommended Destination</h1>

                  <Button>View More</Button>


               </div>

               <div className='cards-1' style={{ justifyContent: 'center', display: "flex", overflow: "hidden" }}>
                  <Card url="https://images.pexels.com/photos/3209053/pexels-photo-3209053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                     title="Caspian Sea Beach, Aktau"
                     desc="A Unique Seaside Escape in Central Asia"
                  >

                  </Card>

                  <Card url="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg" title="Pink Beach, Komodo Island" desc="A Rare Natural Wonder with Blush-Toned Sand">

                  </Card>

                  <Card url="https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg" title="Tanjung Bira, South Sulawesi" desc="White Sands and Turquoise Waters Away from the Crowds">

                  </Card>
               </div>



            </Section>



            <Section bg='variant'>
               <div className='adventures'>
                  <div className='a-h1'>
                     <h1>Elevate Your Epic Adventures</h1>
                  </div>
                  <div className='a-p' >
                     <p>We are a travel agency that specializes in customizing trips according to your preferences, needs, and desires</p>
                  </div>




               </div>

               <div style={{ height: "1px", width: "100%", background: "#7F7F7F", margin: "50px 0" }}></div>




               <div className='cards-2' style={{ width: '100%', minHeight: "500px", display: "flex", gap: "20px" }}>
                  <div className='cards-area' style={{ flex: 1, justifyContent: 'center' }}>
                     <MiniCard icon={<SunMedium width={"24px"} color='#FF7526'></SunMedium>} num="1" title="Diving and Snorkeling" description="The travel package includes lending services for diving and snorkeling equipment">

                     </MiniCard>
                     <MiniCard icon={<User2Icon width="24px" color='#FF7526'></User2Icon>} num="2" title="Professional Tour Guide" description="A professional tour guide is someone who can make your travel experience more enjoyable">

                     </MiniCard>
                     <MiniCard icon={<Camera width="24px" color='#FF7526'></Camera>} num="3" title="Memorable" description="Every moment of yours is captured by professional photography staff provided by travel">

                     </MiniCard>
                     <MiniCard icon={<Star width="24px" color='#FF7526'></Star>} num="4" title="Easy and Comfort" description="Travel agency provides complete and reliable travel packages lorem ipsum slopedia margin large">

                     </MiniCard>


                  </div>


                  <div className=' card image-square' style={{ flex: 1 }}>

                  </div>


               </div>


            </Section>


            <Section url='https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg' isSmoke={"sim"}>
               <div className='' style={{ height: "100vh" }}>

                  <div className='section-3'>
                  <div className='text-banner-2'>
                     <div>
                     <h1>
                        Where Comfort Meets Convenience — Our Top Stay Picks for You
                        </h1>
                     </div>

                     <div>
                     <Button variant='variant' >Book Now</Button>
                     </div>
                     
                        
                  </div>

                  </div>
               

                  <div className='carousel'>
                     <Carousel></Carousel>
                  </div>



            </div>



         </Section>





      </main>


   </div>
)
}

export default Home