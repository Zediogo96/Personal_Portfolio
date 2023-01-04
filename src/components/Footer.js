import "./Footer.css";

import React from 'react'

import { FaHome, FaPhone, FaLaptop, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
    // _blank opens the link in a new tab
    const handleSocial = (e) => {
        switch (e) {
            case "gh": {
                window.open("https://github.com/Zediogo96", "_blank" ); break
            }
            case "ig": {
                window.open("https://www.instagram.com/zediogo96/", "_blank"); break
            }
            case "li": {
                window.open("https://www.linkedin.com/in/josédpinto/", "_blank"); break
            }
        }
    }

    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-content-left">
                    <div className="location">
                        <h4> <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            Rua Manuel Rocha Páris, Vereda 3
                            Nº 30, Hab. 404 </h4>
                    </div>

                    <div className="phone">
                        <h4> <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            +351 918072316 </h4>
                    </div>

                    <div className="email">
                        <h4> <FaLaptop size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            zediogox@hotmail.com </h4>
                    </div>

                </div>

                <div className="footer-content-right">
                    <h4> About me </h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
                    <div className="socials">
                        <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} onClick={() => handleSocial('gh')} />
                        <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} onClick={() => handleSocial('ig')} />
                        <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} onClick={() => handleSocial('li')} />

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer