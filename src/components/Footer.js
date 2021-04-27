import React from 'react'

const Footer = () => {
    return (
        <div className="full-footer">
        <div className="footer">
            <div className="footer-container">
                
                <div className="footer-list">
                    <ul>
                        <li>Policy and Privacy</li>

                    </ul>
                </div>
                <div className="footer-list">
                    <ul>
                        <li>Learn More</li>
                        
                    </ul>
                </div>
                <div className="footer-icon-list">
                    <ul>
                        <li style={{fontWeight:'bolder'}}>Contact us</li>
                            <li><i className="fa-2x fa fa-facebook-square" style={{color:'blue'}}/> Facebook</li>
                        <li><i className="fa-2x fa fa-telegram"style={{color:'grey'}} /> Telegram</li>
                        <li><i className="fa-2x fab fa-instagram-square"style={{color:'rose'}} /> Instagram</li>
                    </ul>
                </div>
                <div className="footer-icon-list">
                    <ul>
                        <li>&nbsp;</li>
                        <li><i className='fa-2x fab fa-whatsapp-square'style={{color:'green'}}/> Whatsapp</li>
                        <li><i className="fa-2x fa fa-github-square" /> Github</li>
                        <li><i className="fa-2x fa fa-linkedin-square" style={{color:'blue'}} /> LinkedIn</li>

                    </ul>
                </div>

                


            </div>
            
            </div>
            <div className="footer-end">
            <p> 2021 All Rights Reserved </p>
            
            </div>
        </div>
    )
}

export default Footer
