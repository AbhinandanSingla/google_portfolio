import './App.css';
import './assets/fonts/Google Sans/style.css';
import './assets/fonts/Arial/style.css';

import {Top_header} from "./pages/top_header/top_header";
import {Overview} from "./pages/home content/home content";
import {useState} from "react";
import {DarkModeContext} from "./DarkMode";
function App(defaultValue) {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? "App dark_theme" : "App light_theme"}>
            <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
                <Top_header/>
                <Overview/>
                <footer>
                    <div className={'top_footer'}>
                        India
                        <span><span className={'footer_dotted'}/>Thank you for visiting! Let's connect and explore potential opportunities together.</span>
                    </div>
                    <div className="bottom_footer">
                        Created By &hearts;    </div>
                </footer>
            </DarkModeContext.Provider>
        </div>
    );
}

export default App;
