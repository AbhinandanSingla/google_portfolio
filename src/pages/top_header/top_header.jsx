import './top_header.css'
import google_logo from '../../assets/top_header/google.png'
import {
    Contact_icon,
    Dotted_icon,
    LinkedIn_icon,
    Menu_icon, Moon_icon,
    Search_icon,
    Setting_icon, Sun_icon,
    Twitter_icon,
    User_icon
} from "./svg_exporter";
import {useContext, useState} from "react";
import {DarkModeContext} from "../../DarkMode";

export const Top_header = () => {
    const [darkMode, setDarkMode] = useContext(DarkModeContext);
    const [darkBtn, setDarkBtn] = useState(false);
    return (<>
            <div className="top_header">
                <div className="max_width">
                    <div className="front_container">
                        <div className="google_logo">
                            <img src={google_logo} alt=""/>
                        </div>
                        <div className="search_box center">
                            <input type="text" name="username" id="username" value={"Abhinandan Singla"} disabled/>
                        </div>
                    </div>
                    <div className="settings center">
                        <figure className="setting_icon">
                            <Setting_icon onClick={() => setDarkBtn(!darkBtn)} color={darkMode ? 'white' : 'black'}/>
                            {
                                darkBtn ? <div className={darkMode ? "setting_box dark_enabled" : "setting_box"}>
                                        {
                                            darkMode ?
                                                <div className="button_container">
                                    <span>
                                        Light Color
                                    </span>
                                                    <div className={"button_ball"}>
                                                        <Sun_icon onClick={() => setDarkMode(!darkMode)}/>
                                                    </div>
                                                </div> :
                                                <div className="button_container">
                                    <span>
                                        Dark Color
                                    </span>
                                                    <div className={"button_ball"}>
                                                        <Moon_icon onClick={() => setDarkMode(!darkMode)}/>
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                    : null
                            }
                        </figure>
                        <figure className="setting_icon">
                            <Menu_icon color={darkMode ? 'white' : "black"}/>
                        </figure>
                        <figure className="user_icon setting_icon">
                            <User_icon/>
                        </figure>
                    </div>
                </div>
                <ul className="connect_bar">
                    <li className="connect_nav connect_nav_active">
                        <figure>
                            <Search_icon className={"inherit"}/>
                        </figure>
                        <span>
                        All
                    </span>
                    </li>
                    <li className="connect_nav">
                        <figure>
                            <LinkedIn_icon className={"inherit"}/>
                        </figure>
                        <a href={'https://www.linkedin.com/in/abhinandansingla'}>
                            LinkedIn
                        </a>
                    </li>
                    <li className="connect_nav">
                        <figure>
                            <Twitter_icon className={"inherit"}/>
                        </figure>
                        <a href={'https://twitter.com/D_Singla'}>
                            Twitter
                        </a>
                    </li>
                    <li className="connect_nav">
                        <figure>
                            <Contact_icon className={"inherit"}/>
                        </figure>
                        <a href={'mailto:abhinandansingla48@gmail.com'}>
                            Contact
                        </a>
                    </li>
                    <li className="connect_nav">
                        <figure>
                            <Dotted_icon className={"inherit"}/>
                        </figure>
                        <span>
                        More
                    </span>
                    </li>
                </ul>
            </div>
        </>
    );
}