import React from "react";
import './Alternate.css';
const Alternate=({link1,link2,link3})=>{
    return(
        <div className='alternate'>
            <h2>Choose the one that you find best.</h2>
          <div className="alternate-option">
              <div className="option">
                <a rel="noreferrer" target="_blank" href="https://practice.geeksforgeeks.org/courses/dsa-self-paced?source=google&medium=cpc&device=c&keyword=geeksforgeeks&matchtype=b&campaignid=9546568041&adgroup=100624584945&gclid=EAIaIQobChMIqI3OkOXy9AIV18EWBR0_zwAiEAAYASAAEgIoEvD_BwE">Source 1</a>
               </div>
              <div className="option">
                  <a rel="noreferrer" target="_blank" href="https://www.tutorialspoint.com/index.htm">Source 2</a>
              </div>
              <div className="option">
                  <a rel="noreferrer" target="_blank" href="https://www.javatpoint.com/">Source 3</a>
              </div>
          </div>
          <h2>More Options will be added soon.....</h2>
        </div>
    );
}
export default Alternate;