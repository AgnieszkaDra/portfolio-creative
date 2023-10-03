import React from 'react'
import PropTypes from 'prop-types'
import data from '../../data'

import classes from './styles.module.css'

export const About = (props) => {
  const {
    className,
  elements,
    ...otherProps
  } = props

  const forwardSection = (elements) => {
    alert('handle')
    console.log(elements.name)
    // Toggle the state of the clicked element
    // setElementStates((prevState) => ({
    //   ...prevState,
    //   [elementName]: !prevState[elementName],
    // }));
  }

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
    
      {...otherProps}
    >
          <div class="about-container__title">
                    <h2>About <span>me</span></h2><span class="bg-text">my stats</span>
                </div>
                <div class="about-container__info">
                    <div class="left-about">
                        <h4>Information About me</h4>
                        <p>
                            I am learning alone frontend technologies with the main support of<a>Akademia Samouka</a>
                            During that course I am making tasks, projects and my figure out projects, which you can
                            see on next page.
                            I am learning English on platform Tutlo.
                            I am open to full-time/part-time work connecting with frontend technologies.
                        </p>
                        <div class="btn-con cv">
                        <a href="" class="btn-con__link">
                            <span class="btn-con__link__text">Download CV</span>
                            <span class="btn-con__link__icon"><i class="fas fa-download"></i></span>
                        </a>
                    </div>
                    </div>
                    <div class="right-about">
                        <div class="about-item myown">
                            <div class="abt-text">
                                <p class="large-text projectsAmountMyOwn">10+</p>
                                <p class="small-text">My own figure out<br />projects completed or still developing</p>
                            </div>
                        </div>
                        <div class="about-item course">
                            <div class="abt-text">
                                <p class="large-text projectsAmountCourse">10+</p>
                                <p class="small-text">Projects of Akademia Samouka Course<br />COMPLETED/Developed</p>
                            </div>
                        </div>
                        <div class="about-item learn">
                            <div class="abt-text">
                                <p class="large-text">2+</p>
                                <p class="small-text">YEARS OF<br />Learning</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="about-stats">
                    <h4 class="stat-title">My Skills</h4>
                    <div class="about-stats-con">
                        <div class="progress-bars ">
                            <div class="progress-title">html5</div>
                            <div class="progress html"></div>
                        </div>
                        <div class="progress-bars">
                            <div class="progress-title">CSS</div>
                            <div class="progress css"></div>
                        </div>
                        <div class="progress-bars">
                            <div class="progress-title">SCSS</div>
                            <div class="progress scss"></div>
                        </div>
                        <div class="progress-bars ">
                            <div class="progress-title">JavaScript</div>
                            <div class="progress javascript"></div>
                        </div>
                        <div class="progress-bars ">
                            <div class="progress-title">API</div>
                            <div class="progress api"></div>
                        </div>
                        <div class="progress-bars ">
                            <div class="progress-title">REACT</div>
                            <div class="progress react"></div>
                        </div>
                    </div>
                </div>
                <h4 class="stat-title">My timeline</h4>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="tl-icon">
                            <i class="fas fa-briefcase"></i>
                        </div>
                        <p class="tl-duration">2021 - presents</p>
                        <h5>Akademia Samouka</h5>
                        <p>
                            I am learnig acording to this course.
                        </p>
                    </div>
                    <div class="timeline-item">
                        <div class="tl-icon">
                            <i class="fas fa-briefcase"></i>
                        </div>
                        <p class="tl-duration">2013 - presents</p>
                        <h5>Master of Pharmacy</h5>
                        <p>Work as master of pharmacy in pharmacist</p>
                    </div>
                </div>

    </div>
  )
}

About.propTypes = {
  className: PropTypes.string
}

export default About
