import React from 'react'
import Styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt'

function Portfolio() {
  return (
    <div className={Styles.port_con}>
      <h3 className={Styles.port_title}>Portfolio</h3>
      <div className={Styles.port_list}>
        <div className={Styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://plus.unsplash.com/premium_photo-1678565202049-9e37b2da8060?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
          </Tilt>
          <p>Project Title</p>
        </div>
        <div className={Styles.port_items}> 
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://plus.unsplash.com/premium_photo-1678565202049-9e37b2da8060?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
          </Tilt>
          <p>Project Title</p>
        </div>
        <div className={Styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://plus.unsplash.com/premium_photo-1678565202049-9e37b2da8060?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
          </Tilt>
          <p>Project Title</p>
        </div>
        <div className={Styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://plus.unsplash.com/premium_photo-1678565202049-9e37b2da8060?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
          </Tilt>
          <p>Project Title</p>
        </div>
        <div className={Styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://plus.unsplash.com/premium_photo-1678565202049-9e37b2da8060?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
          </Tilt>
          <p>Project Title</p>
        </div>
        <div className={Styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://plus.unsplash.com/premium_photo-1678565202049-9e37b2da8060?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
          </Tilt>
          <p>Project Title</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
