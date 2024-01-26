import React from 'react'
import html from './Skills/html-5.png';
import css from './Skills/css-3.png';
import js from './Skills/js.png';
import php from './Skills/php.png';
import './skills.css';

function Skills() {
  return (
    <div className='skills'>
      <div className="techical">
        <h1>Technical Skills</h1>
        <div className="skill">
        <h3>Web Development</h3>
        <div className="skill-list">
          <div className="name">
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={php} alt="" />
          </div>
          <div className="progress-bar">
            <div className="progress" width={75}>
                    75%
            </div>
          </div>
        </div>
        </div>

        <div className="skill">
        <h3>Web Development</h3>
        <div className="skill-list">
          <div className="name">
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={php} alt="" />
          </div>
          <div className="progress-bar">
            <div className="progress" width={75}>
                    75%
            </div>
          </div>
        </div>
        </div>

        <div className="skill">
        <h3>Web Development</h3>
        <div className="skill-list">
          <div className="name">
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={php} alt="" />
          </div>
          <div className="progress-bar">
            <div className="progress" width={75}>
                    75%
            </div>
          </div>
        </div>
        </div>

        <div className="skill">
        <h3>Web Development</h3>
        <div className="skill-list">
          <div className="name">
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={php} alt="" />
          </div>
          <div className="progress-bar">
            <div className="progress" width={75}>
                    75%
            </div>
          </div>
        </div>
        </div>
        </div>
      <div className="soft">
        <h1>Soft Skills</h1>
        </div>
      </div>
  )
}

export default Skills