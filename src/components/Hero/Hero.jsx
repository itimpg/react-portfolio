import React from 'react'
import styles from './Hero.module.css'
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";
import Tilt from 'react-parallax-tilt';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
    return (
        <div className={styles.hero_wrapper}>
            <div className={styles.container}>
                <div className={styles.hero_con}>
                    <div className={styles.hero_info}>
                        <p className={styles.text_1}>Hi, it's me</p>
                        <h3 className={styles.text_2}>John Doe</h3>
                        <p className={styles.text_3}>
                            <span style={{ marginRight: '10px' }}>I'm a</span>
                            <TypeAnimation
                                sequence={[
                                    'Front-end Developer',
                                    1000,
                                    'Web Developer',
                                    1000
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                        </p>
                        <p className={styles.text_4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat ac sem non consectetur. Aenean fermentum, ipsum quis imperdiet semper, purus mauris ullamcorper ante, non pulvinar magna dui nec elit. Etiam tincidunt massa in neque finibus tempus. Morbi nisi nisl, imperdiet sed quam at, consequat porttitor augue. Vivamus tempor nisi et justo sodales ullamcorper. Phasellus hendrerit arcu non arcu pulvinar, tincidunt viverra purus faucibus.</p>
                        <ul className={styles.hero_social}>
                            <li><a href='#'><FaGithub /></a></li>
                            <li><a href='#'><FaLinkedin /></a></li>
                            <li><a href='#'><FaFacebook /></a></li>
                        </ul>
                    </div>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                        <div className={styles.hero_img}></div>
                    </Tilt>
                </div>
            </div>
        </div>
    )
}

export default Hero
