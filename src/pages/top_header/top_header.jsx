import './top_header.css'
import google_logo from '../../assets/top_header/google.png'
import {
    Contact_icon,
    Dotted_icon,
    LinkedIn_icon,
    Menu_icon,
    Search_icon,
    Setting_icon,
    Twitter_icon,
    User_icon
} from "./svg_exporter";

export const Top_header = () => {
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
                        <Setting_icon/>
                    </figure>
                    <figure className="setting_icon">
                        <Menu_icon/>
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
                    <span>
                        LinkedIn
                    </span>
                </li>
                <li className="connect_nav">
                    <figure>
                        <Twitter_icon className={"inherit"}/>
                    </figure>
                    <span>
                        Twitter
                    </span>
                </li>
                <li className="connect_nav">
                    <figure>
                        <Contact_icon className={"inherit"}/>
                    </figure>
                    <span>
                        Contact
                    </span>
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
    </>);
}