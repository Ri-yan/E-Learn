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
                    <div style={{padding:'10px 0px'}}>Our Goals</div>
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
            <div className='goal-list achive'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde fuga eos cum laboriosam modi! Eaque ex sit possimus fugiat, nam omnis. Quia necessitatibus, repellendus in eum nemo harum possimus facere!</div>
            <div className="achive">
                <h1>Our Motive</h1>
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
            <div className='goal-list achive'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga inventore aliquid sapiente iure dolores aut suscipit laboriosam, non quos soluta provident nemo quasi quisquam maxime fugit nobis laudantium dolorum assumenda!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus exercitationem quisquam esse magnam iusto aperiam rerum earum atque quidem minus, suscipit deserunt consequatur voluptatum optio at maxime eum asperiores dolore!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio nostrum quaerat, cumque voluptate ea tenetur totam, ipsam sit aperiam similique nihil neque amet consectetur sequi eos velit harum nam voluptatibus?
            </div>
            </div>
            
            </div>
            
        </div>
    );
}
export default About;