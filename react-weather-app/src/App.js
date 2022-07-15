import './App.css';
import{WeatherContextProvider} from "./context/WeatherContext"
import Header from  "./components/Header"
import Main from  "./components/Main"
function App() {
  return (
    <div className="App">
        <WeatherContextProvider>
          <Header/>
          <Main/>
        </WeatherContextProvider>
      
    </div>
  );
}

export default App;
