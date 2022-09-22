import React from 'react'
import './about.css'
import Award from '../../img/award.png'

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src="" alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia in mi at gravida. Cras sit amet finibus leo, vel ornare ipsum. Sed eget ultrices diam, nec tincidunt justo.</p>
        <p className="a-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia in mi at gravida. Cras sit amet finibus leo, vel ornare ipsum. Sed eget ultrices diam, nec tincidunt justo. In id lectus semper, placerat orci vel, sodales lacus. Nam massa massa, vestibulum id mi vitae, ullamcorper ullamcorper arcu.</p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Award 2022</h4>
            <p className="a-award-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia in mi at gravida. Cras sit amet finibus leo, vel ornare ipsum. Sed eget ultrices diam, nec tincidunt justo. In id lectus semper, placerat orci vel, sodales lacus. Nam massa massa, vestibulum id mi vitae, ullamcorper ullamcorper arcu.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About