import React, {useContext} from 'react';
import Headroom from 'react-headroom';
import ToggleSwitch from './ToggleSwitch';
import StyleContext from "../contexts/StyleContext";
import { 
    greeting,
    experienceSection,
    skillSection,
    openSource
} from '../portofolio';

const Header = () => {
    const {isDark} = useContext(StyleContext);
    const viewExperience = experienceSection.display;
    const viewOpenSource = openSource.display;
    const viewSkills = skillSection.display;

    return (
        <Headroom>
            <header className={isDark ? "dark-menu header" : "header"}>
                <a href="/" className="logo">
                    <span className="grey-color"> &lt;</span>
                    <span className="logo-name">{greeting.username}</span>
                    <span className="grey-color">/&gt;</span>
                </a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label
                    className="menu-icon"
                    htmlFor="menu-btn"
                    style={{color: "white"}}>
                    <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
                </label>
                <ul className={isDark ? "dark-menu menu" : "menu"}>
                    {viewSkills && (
                        <li>
                        <a href="#skills">Skills</a>
                        </li>
                    )}
                    {viewExperience && (
                    <li>
                     <a href="#experience">Work Experiences</a>
                    </li>
                    )}
                    {viewOpenSource && (
                        <li>
                        <a href="#opensource">Open Source</a>
                        </li>
                    )}
                <li>
                    <a href="#contact">Contact Me</a>
                </li>
                <li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>
                    <ToggleSwitch />
                    </a>
                </li>
                </ul>
            </header>
        </Headroom>
    )
}

export default Header
