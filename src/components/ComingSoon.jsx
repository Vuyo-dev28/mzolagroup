import React from 'react'
import '../../comingSoon.css'
import { HERO_WORK_IMAGE } from '../data/workGallery'

const ComingSoon = () => {
    return (
        <div className="cs-container">
            <div className="cs-card">

                {/* Brand Header */}
                <div className="cs-brand">
                    <img src={HERO_WORK_IMAGE.src} alt="Mzola Group" />
                    <h2>Mzola Group (Pty) Ltd</h2>
                </div>

                {/* Badge */}
                <div className="cs-badge">
                    <span className="dot"></span>
                    Coming Soon
                </div>

                {/* Content */}
                <div className="cs-content">
                    <div className="emoji">🚀</div>
                    <p className="sub">WE'RE LAUNCHING SOON</p>

                    <h1>
                        Something <span>Powerful</span> is Coming.
                    </h1>

                    <p className="desc">
                        We're working hard to bring you an amazing experience.
                        Stay tuned.
                    </p>

                    {/* <button className="notify-btn">
                        ✉️ Notify Me
                    </button> */}
                </div>

                {/* Shapes */}
                <div className="shape shape-left"></div>
                <div className="shape shape-right"></div>
                <div className="shape shape-bottom"></div>

            </div>
        </div>
    )
}

export default ComingSoon