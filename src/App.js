import { createTheme,ThemeProvider } from '@mui/material';
//style
import './index.css'
//component
import Hero from './Components/Hero';




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
      <Hero />
      </ThemeProvider>
    </div>
  );
}

export default App;
