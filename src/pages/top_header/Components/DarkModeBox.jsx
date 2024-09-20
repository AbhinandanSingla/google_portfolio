import {Moon_icon, Sun_icon} from "../svg_exporter";
import {useContext} from "react";
import {DarkModeContext} from "../../../DarkMode";

export const DarkModeBox = () => {
    const [darkMode, setDarkMode] = useContext(DarkModeContext);
    return (<div className={"setting_box " + (darkMode && "dark_enabled")}>
        <div className="button_container" onClick={() => setDarkMode((prev) => !prev)}>
            <span>
                {!darkMode ? "Dark Color" : "Light Color"}
            </span>
            <div className={"button_ball"}>
                {!darkMode ? <Moon_icon/> : <Sun_icon/>}
            </div>
        </div>
    </div>);
}