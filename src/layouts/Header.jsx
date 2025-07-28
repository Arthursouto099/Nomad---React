import React, { useEffect } from 'react'
import "../layouts/header.css"
import Button from '../components/Button'
import PopMenu from '../components/ui/pop-menu'
import { useState } from 'react'
import SideMenu from '../components/ui/side-menu'





function Header() {
    const [isPopMenu, setPopMenu] = useState(false)
    const [displayWidth, setWidthDisplay] = useState(window.innerWidth)
    const [isSide, setSide] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setWidthDisplay(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])


    return (
        <header style={{
            display: 'flex'


        }}>
            {displayWidth > 900 ? (

                <nav style={{
                    display: "flex",
                    gap: "20px"
                }}>
                    <a onMouseEnter={() => setPopMenu(false)} href="#">Home</a>
                    <a onMouseEnter={() => setPopMenu(true)} style={{ position: "relative", display: "flex", alignItems: "center", gap: "7px" }} href="#">Pages <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-360 280-560h400L480-360Z" /></svg>
                        <PopMenu onMouseOut={() => setPopMenu(false)} view={isPopMenu} >

                        </PopMenu>

                    </a>
                    <a onMouseEnter={() => setPopMenu(false)} href="">Package</a>
                    <a onMouseEnter={() => setPopMenu(false)} href="">Destination</a>
                </nav>





            ) : (
                // Aqui vai o JSX para a condição falsa (se a largura for menor ou igual a 900)
                null
            )}






            <div className='logo' style={{


            }}>

                <img width="100px" src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/nomad-logo.png" alt="" />
            </div>




            {displayWidth > 900 ? (
                <div style={{
                    display: "flex",
                    gap: "10px"
                }}>

                    <Button variant="default">
                        Blog
                    </Button>

                    <Button variant="jreg">
                        Contact
                    </Button>

                </div>
            ) : (

                <div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg"style={{cursor: "pointer"}} onClick={() => setSide(true)} height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>


                        <SideMenu view={isSide}>

                        </SideMenu>
                    </div>
                </div>




            )

            }



        </header>
    )
}

export default Header