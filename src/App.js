import './App.css';
import './assets/fonts/Arial/style.css';
import './assets/fonts/Google Sans/style.css';
import {Top_header} from "./pages/top_header/top_header";
import {Overview} from "./pages/home content/home content";
import {Page} from "./pages/experience/experience";

function App() {
    return (
        <div className="App">
            <Top_header/>
            <Overview/>
        </div>
    );
}

export default App;
