import { createTheme,ThemeProvider } from '@mui/material';
//style
import './index.css'
//component
import Hero from './Components/Hero';
import {Route,Routes} from 'react-router-dom'
import CryptoDetails from './Components/Details/CryptoDetails';
import Banner from './Components/Banner';
import About from './Components/About';
import Skills from './Components/Skills';
import Work from './Components/Work';
import Navbar from './Components/Navbar';
import StoreDetails from './Components/Details/StoreDetails';
import FormDetails from './Components/Details/FormDetails';
import RecipeDetails from './Components/Details/RecipeDetails';
import WeatherDetails from './Components/Details/WeatherDetails';
import WebDetails from './Components/Details/WebDetails';
import Netflix from './Components/Details/Netflix';
import ScrollToTop from './ScrollToTop';


const theme = createTheme({
  palette:{
    primary:{
      main: '#21201e'
    },
    secondary:{
      main: "#cccccc"
    }
  },

})

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/store' element={<StoreDetails />}/>
          <Route path='/form' element={<FormDetails />}/>
          <Route path='/recipe' element={<RecipeDetails />}/>
          <Route path='/weather' element={<WeatherDetails />}/>
          <Route path='/crypto' element={<CryptoDetails />} />
          <Route path='/weblog' element={<WebDetails />} />
          <Route path='/netflix' element={<Netflix />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
