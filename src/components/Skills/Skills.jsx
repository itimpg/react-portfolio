import React from 'react'
import Styles from './Skills.module.css'
import { FaSquareJs, FaReact, FaSass, FaGitAlt, FaNode } from 'react-icons/fa6' 

function Skills() {
  return (
    <div className={Styles.skills_con}>
        <h3 className={Styles.skills_title}>My Skill Set</h3>
        <ul className={Styles.skills_list}>
            <li><FaSquareJs/></li>
            <li><FaReact/></li>
            <li><FaSass/></li>
            <li><FaGitAlt/></li>
            <li><FaNode/></li>
        </ul>
    </div>
  )
}

export default Skills
