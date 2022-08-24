import './App.css';
import SearchComponent from '../Search/Search';
import ToolbarComponent from '../Toolbar/Toolbar';


const App = () => {
    return (
        <div className="App">
                <ToolbarComponent/>
                <SearchComponent/>

        </div>
    );
}
 export default App;