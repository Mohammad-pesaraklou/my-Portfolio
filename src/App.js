import Hero from './Components/Hero';
import './index.css'
import { createTheme,ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette:{
    primary:{
      main: '#21201e'
    },
    secondary:{
      main: "#cccccc"
    }
  }
})

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
      <Hero />
      </ThemeProvider>
    </div>
  );
}

export default App;
