import React from "react";
import './Footer.css';

const Footer=()=>{
    return(
        <div className="Footer">
            <h1 style={{'text-align':'center','font-family': "'Kaushan Script', cursive"
}}>EXPLORE MORE</h1>
            <div className="footer-tile">
                <div className="tile1">
                    <h3>SOCIAL LINKS</h3>
                    <div className="social">
                    <img className='social-icon' alt='facebook' src="https://img.icons8.com/material/48/000000/twitter.png"/>
                    <img className='social-icon'alt='twitter' src="https://img.icons8.com/material/48/000000/facebook-new.png"/>
                    <img className='social-icon' alt='instagram' src="https://img.icons8.com/material/48/000000/instagram-new.png"/>
                    <img className='social-icon' alt='linkedin' src="https://img.icons8.com/material/48/000000/linkedin.png"/>
                    </div>
                    <img className='social-icon' alt='linkedin' src="https://img.icons8.com/material/48/000000/gmail.png"/>
                </div>
                <div className="tile1">
                    <h3>OUR SERVICES</h3>
                    <ul>
                        <li>Website Development</li>
                        <li>Android Development</li>
                        <li>Website Designing</li>
                        <li>And many more..</li>
                    </ul>
                </div>
                <div className="tile1">
                    <h3 >CONTACT DETAILS</h3>
                    <dl>
                        <dt><h5>Contact</h5></dt>
                        <dd>0511-000##</dd>
                        <dt><h5>Adderess</h5></dt>
                        <dd>India</dd>
                        <dt><h5>Email</h5></dt>
                        <dd>ELearn@email.com</dd>
                    </dl>
                </div>
                <div className="tile1">
                    <h3>SUBSCRIBE</h3>
                    <h4>Enter Your mail to gets regular update</h4>
                    <form action="post">
                    <input className='input-mail' type="email" placeholder='enter here' />
                    <input type="submit" value='subscribe' className="input-submit" />
                    </form>
                </div>
            </div>
            <div className="closing">
                <div>@Mohd Riyan</div>
                <div >
                    <a href="https://github.com/Ri-yan"><img style={{'background-color':'white',margin:'3px'}} className='social-icon' alt='github' src="https://img.icons8.com/material/48/000000/github.png"/></a>
                    <a href="https://www.linkedin.com/in/mohd-riyan-0330b4225/"><img  style={{'background-color':'white',margin:'3px'}} className='social-icon' alt='linkedin' src="https://img.icons8.com/material/48/000000/linkedin.png"/></a>
                </div>
            </div>
        </div>
    );
}
export default Footer;