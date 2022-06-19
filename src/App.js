
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import AppSettingsScreen from './screens/AppSetttingsScreen/AppSettingsScreen';

function App() {
  return (
    <>

      <Routes>

        <Route exact path="/" element={<HomeScreen/>}/>
        <Route exact path="updates" element={<AppSettingsScreen/>}/>


      </Routes>
      
    </>
  );
}

export default App;
