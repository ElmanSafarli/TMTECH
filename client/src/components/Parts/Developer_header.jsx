
import React from 'react';
import { Link } from "react-router-dom"



// Images
import cityImg from '../../assets/2002.i504.026_isometric_city_skyscrapers-removebg-preview.png'

const DeveloperHeader = () => {

    return (
        <main>
            <div className="development-content">
                <div className="top">
                    <div className="development-l">
                        <h1>TMTECH Developer Center</h1>
                        <p>Integrate sms, voice, video, 2FA and more into your apps with TMTECH Communication APIs.
                        </p>
                        <div className="btn-group">
                            <Link to="/" className="free">Try it free</Link>
                            <Link to="/documentation" className="doc">See documentaion</Link>
                        </div>
                    </div>
                    <div className="development-r"><img
                        src={cityImg} alt="development" />
                    </div>
                </div>

            </div>
        </main>
    );
};

export default DeveloperHeader;
