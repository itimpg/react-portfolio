import React from 'react'
import Styles from './Number.module.css'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

function Number() {
    return (
        <div className={Styles.number_con}>
            <div className={Styles.number_items}>
                <h3>
                    <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                        {({ isVisible }) => (
                            <div>
                                {isVisible ? <CountUp start={0} end={100} duration={5} /> : null}+
                            </div>
                        )}
                    </VisibilitySensor>
                </h3>
                <p>Project Delivered</p>
            </div>
            <div className={Styles.number_items}>
                <h3>
                    <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                        {({ isVisible }) => (
                            <div>
                                {isVisible ? <CountUp start={0} end={50} duration={5} /> : null}+
                            </div>
                        )}
                    </VisibilitySensor>
                </h3>
                <p>Companies Helped</p>
            </div>
            <div className={Styles.number_items}>
                <h3>
                    <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                        {({ isVisible }) => (
                            <div>
                                {isVisible ? <CountUp start={0} end={10} duration={5} /> : null}+
                            </div>
                        )}
                    </VisibilitySensor>
                </h3>
                <p>Year of Experience</p>
            </div>
            <div className={Styles.number_items}>
                <h3>
                    <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                        {({ isVisible }) => (
                            <div>
                                {isVisible ? <CountUp start={0} end={200} duration={5} /> : null}+
                            </div>
                        )}
                    </VisibilitySensor>
                </h3>
                <p>Happy Clients</p>
            </div>

        </div>
    )
}

export default Number
