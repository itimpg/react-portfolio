import React from 'react'
import Styles from './Services.module.css'
import { FaCode, FaPaintbrush, FaDesktop } from "react-icons/fa6";

function Services() {
    return (
        <div className={Styles.services_con}>
            <h3 className={Styles.services_title}>My Services</h3>
            <div className={Styles.services_list}>
                <div className={Styles.services_items}>
                    <FaCode />
                    <h4>Web Development</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices felis eu orci sollicitudin porta. Duis vitae arcu arcu. Vestibulum sollicitudin vulputate semper.
                    </p>
                </div>
                <div className={Styles.services_items}>
                    <FaPaintbrush />
                    <h4>Web Design</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices felis eu orci sollicitudin porta. Duis vitae arcu arcu. Vestibulum sollicitudin vulputate semper.
                    </p>
                </div>
                <div className={Styles.services_items}>
                    <FaDesktop />
                    <h4>Consulting</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices felis eu orci sollicitudin porta. Duis vitae arcu arcu. Vestibulum sollicitudin vulputate semper.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services
