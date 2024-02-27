import React from 'react'
import Styles from './Testimonials.module.css'

function Testimonials() {
    return (
        <div className={Styles.testi_con}>
            <h3 className={Styles.testi_title}>Testimonials</h3>
            <div className={Styles.testi_list}>
                <div className={Styles.testi_items}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices felis eu orci sollicitudin porta.
                    </p>
                    <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww" alt="" />
                    <h4>John Doe</h4>
                    <p className={Styles.bio}>Web Developer</p>
                </div>
                <div className={Styles.testi_items}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices felis eu orci sollicitudin porta.
                    </p>
                    <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww" alt="" />
                    <h4>Jane Doe</h4>
                    <p className={Styles.bio}>Web Developer</p>
                </div>
                <div className={Styles.testi_items}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices felis eu orci sollicitudin porta.
                    </p>
                    <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww" alt="" />
                    <h4>Joe Doe</h4>
                    <p className={Styles.bio}>Web Developer</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
