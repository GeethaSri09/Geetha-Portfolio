import React from 'react';
import './profiles.css';
import './script.js';
import codechef from '../../assests/codechef.png'
import leetcode from '../../assests/leetcode.png'
import geeksforgeeks from '../../assests/geeks_for_geeks.png'
import github from '../../assests/github.jpg'
import HackerRank from '../../assests/hackerrank.png'
import linkedin from '../../assests/linkedin.png'

const Profiles = () => {

  return (
    <section id="profiles">
      <div className="profilestitle">
        Profiles
      </div>
      <div className="container">
        <div className="slider">
          <div className="slide">
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <input type="radio" name="radio-btn" id="radio4" />
            <input type="radio" name="radio-btn" id="radio5" />
            <input type="radio" name="radio-btn" id="radio6" />
            <input type="radio" name="radio-btn" id="radio7" />

            <div className="st first">
              <img src={leetcode} alt="leetcode"/>
              <p>Leetcode</p>
              <a href="https://leetcode.com/u/geethasri6060/" target="_blank" rel="noopener noreferrer">View Profile</a>
            </div>
            <div className="st">
              <img src={codechef} alt="codechef"/>
              <p>Codechef</p>
              <a href="https://www.codechef.com/users/geethasrin" target="_blank" rel="noopener noreferrer">View Profile</a>
            </div>
           <div className="st">
              <img src={geeksforgeeks} alt="geeksforgeeks"/>
              <p>GeeksForGeeks</p>  
              <a href="https://www.geeksforgeeks.org/user/nimmadalagapfq/" target="_blank" rel="noopener noreferrer">View Profile</a>
            </div>
            <div className="st">
              <img src={linkedin} alt="Linkedin" />
              <p>Linkedin</p>
              <a href="https://www.linkedin.com/in/geethasri-nimmadala-3257b7270/" target="_blank" rel="noopener noreferrer">View Profile</a>
            </div>
            <div className="st">
              <img src={github} alt="hackerearth"/>
              <p>Github</p>
              <a href="https://github.com/GeethaSri09" target="_blank" rel="noopener noreferrer">View Profile</a>
            </div>
            <div className="st">
              <img src={HackerRank} alt="hackerrank"/>
              <p>HackerRank</p>
              <a href="https://www.hackerrank.com/profile/nimmadalageetha1" target="_blank" rel="noopener noreferrer">View Profile</a>
            </div>

            <div className="nav-auto">
              <div className="a-b1"></div>
              <div className="a-b2"></div>
              <div className="a-b3"></div>
              <div className="a-b4"></div>
              <div className="a-b5"></div>
              <div className="a-b6"></div>
            </div>
          </div>

          <div className="nav-m">
            <label htmlFor="radio1" className="m-btn"></label>
            <label htmlFor="radio2" className="m-btn"></label>
            <label htmlFor="radio3" className="m-btn"></label>
            <label htmlFor="radio4" className="m-btn"></label>
            <label htmlFor="radio5" className="m-btn"></label>
            <label htmlFor="radio6" className="m-btn"></label>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Profiles;
