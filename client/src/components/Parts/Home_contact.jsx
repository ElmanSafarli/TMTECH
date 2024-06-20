import React from 'react';

// Images
import contactImg from '../../assets/3d-abstract-landscape-background-with-extruding-blocks.jpg'


const HomeContact = () => {

    return (
        <section>
            <div className="contact">
                <div className="contact-us">
                    <div className="content">
                        <div className="main">
                            <img className="fill-img" src={contactImg}
                                alt="contact" />
                        </div>
                        <div className="info">
                            <div>
                                <h3>Want to know more about how our technology is <span>helping</span> MNOs and Aggregators?
                                </h3>
                                <a href="/contact">Book a call</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default HomeContact;
