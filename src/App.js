import './App.css';
import NavigationBar from './components/NavigationBar';
import SearchBar from './components/SearchBar';
import Landing from './components/Landing';
import Isi from './components/Isi';
import Testi from './components/Testi';

import "./style/landingPage.css"
function App() {
  return (
    <div > 
      <div >
        
      <SearchBar/>
      <NavigationBar/>
      <Landing/>
      <Isi/>
      <Testi/>
      </div>
    </div>
  );
}

export default App;
