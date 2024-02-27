import React from 'react'
import Styles from './Contact.module.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa6'

function Contact() {
    return (
        <div className={Styles.contact_wrapper}>
            <div className={Styles.contact_con}>
                <div className={Styles.contact_info}>
                    <h3>Get in touch</h3>
                    <p className={Styles.contact_desc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices felis eu orci sollicitudin porta. Duis vitae arcu arcu.
                    </p>
                    <p className={Styles.contact_address}>
                        123 Main Street <br />
                        Bangkok, Thailand
                    </p>
                    <p><FaPhone />(+66) 85 234 2345</p>
                    <p><FaEnvelope />support@site.com</p>
                </div>
                <div className={Styles.contact_form}>
                    <form action="">
                        <div className={Styles.input_group}>
                            <div>
                                <label htmlFor='first name'>First Name</label>
                                <input type='text' placeholder='eg. John' />
                            </div>
                            <div>
                                <label htmlFor='last name'>Last Name</label>
                                <input type='text' placeholder='eg. Doe' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor='email address'>Address</label>
                            <input type='email' placeholder='eg. john@gmail.com' />
                        </div>
                        <div>
                            <label htmlFor='message'>Your Message</label>
                            <textarea id="" cols="30" rows="10" placeholder='Type here' ></textarea>
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
