import './App.css';
import './assets/fonts/Google Sans/style.css';
import './assets/fonts/Arial/style.css';

import {Top_header} from "./pages/top_header/top_header";
import {Overview} from "./pages/home content/home content";
import {useState} from "react";
import {DarkModeContext} from "./DarkMode";
import {Footer} from "./pages/footer/Footer";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? "App dark_theme" : "App light_theme"}>
            <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
                <Top_header/>

                <Overview/>
                <Footer/>
            </DarkModeContext.Provider>
        </div>
    );
}

export default App;
