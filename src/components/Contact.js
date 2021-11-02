import React from 'react'
import SocialMedia from './SocialMedia'
import { contactInfo } from '../portofolio'

export default function Contact() {
    return (
        <div className="container d-flex my-5"  id="contact">
            <div className="main contact-margin-top flex-fill">
                <div className="contact-div-main">
                    <div className="contact-header">
                        <h1 className="contact-heading contact-title lh-lg">{contactInfo.title}</h1>
                        <p className= "subTitle contact-subtitle bold lh-lg">
                            {contactInfo.subtitle}
                        </p>
                        <div className= "contact-text-div mb-5">
                            <a
                                className="contact-detail-email"
                                href={"mailto:" + contactInfo.email_address}
                            >
                                {contactInfo.email_address}
                            </a>=
                            <SocialMedia />
                            <p className="dark py-3 lh-lg">
                                Made by Winston Wijaya<br/>
                                Theme by <a href="https://github.com/saadpasta/developerFolio">developerFolio</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}