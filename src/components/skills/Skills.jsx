import React from 'react'
import Skill from '../skill/Skill'
import './skills.css'
import {skills} from '../../data';

const Skills = () => {
  return (
    <div className="sk">
      <div className="sk-texts">
        <h1 className="sk-head">Skills</h1>
      </div>

      <div className="sk-list">
      {skills.map((sk)=> (
        <Skill key={sk.id} name={sk.name} link={sk.link} />
      ))}
      </div>
    </div>

  )
}

export default Skills