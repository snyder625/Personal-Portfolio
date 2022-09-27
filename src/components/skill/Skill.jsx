import React from 'react'
import './skill.css'

const Skill = ({name, link}) => {
  return (
    <div className="s">
        <div class="first-div">
            <div class="outer-div">
                <div class="inner-div">
                    <h1 className="main"> {name} </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skill