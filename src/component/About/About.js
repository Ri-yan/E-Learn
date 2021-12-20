import React from "react";
import './About.css';
import goal1 from './goal1.svg';
import goal2 from './goal2.svg';
import goal3 from './goal3.svg';

const About=()=>{
    return(
        <div className='about'>
            <div className="qoute">"Being a progammer is not an easy job."</div>
            <div className="forewords">
                <div className="goals">
                    <div className='bottom' style={{padding:'10px 0px 0px 0px','margin-bottom':'30px'} }>Our Goals</div>
                    <ul className='goal-list'>
                        <li>To encourage higher-level thinking and creativity through combined package of resource</li>
                        <li>To promote computer-based educational resources.</li>
                        <li> Provide simple, universal access to information and services for all faculty, staff, and students.</li>
                        <li>Design and develop appropriate technology-driven learning opportunities to support the diverse needs of different learners.</li>
                    </ul>
                    <span className='line'></span>
                </div>
            <div className="ownercard">
                <div className="owner-image-name">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className="owner-img" />
                    <div>Owner</div>
                    </div>
                <div className="owener-words">
                    <div className="greeting">Geetings from E-Learn team.</div>
                    <div style={{margin:'10px 0px'}}>We welcome you to platform where we consistently strive to offer the best of education.</div>
                    <div style={{margin:'10px 0px'}}>This platform has been designed for every coder wishing to expand their jnowledge,share there knowledge and ready to grab their dream job.we have hundred of online material and much more just for the coder inside you.</div>
                    <div style={{margin:'20px 0px 5px 0px', 'font-weight':'600'}}>ThankYou for choosing us and keep supporting us.</div>
                </div>
            </div>
            <div className='goal-list achive'>
                <h2 className='bottom'>About us</h2>
                    <p>E-Learn originated from the idea that there exists a class of readers who respond better to online content and prefer to learn new skills at their own pace from the comforts of their drawing rooms.</p>
                    <p>Our content and resources are freely available and we prefer to keep it that way to encourage our readers acquire as many skills as they would like to. We don’t force our readers to sign up with us or submit their details either. No preconditions and no impediments. Simply Easy Learning!</p>
                </div>
            <div className="achive">
                <h1 className='bottom'>Our Motive</h1>
                <div className="goal-card-section">
                <div className="goal-card">
                    <img src={goal1} alt="" className="goal-img" />
                    <h2>Guide</h2>
                </div>
                <div className="goal-card">
                    <img src={goal2} alt="" className="goal-img" />
                    <h2>Provide</h2>
                </div>
                <div className="goal-card">
                    <img src={goal3} alt="" className="goal-img" />
                    <h2>Rise</h2>
                </div>
            </div>
            <div className='goal-list achive'>
                <h2 className='bottom'>Our Mission</h2>
                <p>Our mission is to deliver Simply Easy Learning with clear, crisp, and to-the-point content on a wide range of technical and non-technical subjects without any preconditions and impediments.</p>
            </div>
            </div>
            
            </div>
            
        </div>
    );
}
export default About;