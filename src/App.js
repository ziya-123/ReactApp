
import './App.css';
import Sidebar from './Components/Sidebar';
import { Grid } from '@mui/material';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import Activity from './Components/Activity';
import Middle from './Components/Middle';
import Orders from './Components/Orders';
import Feedback from './Components/Feedback';
import { useEffect } from 'react';




function App() {
  useEffect(() => {
    document.title = 'MY APP';
  }, []);
  return (
    <div className="App">
    <Grid sx={{
      display:'flex',
      flexDirection:'row',
      
    }}>
    
    <Sidebar/>
    <Grid sx={{
      display:'flex',
      flexDirection:'column',
      width:'100%',
      background:"#100c08"
    }}>
    <Header/>
    <Dashboard/>
    <Grid sx={{
      display:'flex',
      flexDirection:'row',
      gap:'36px'
    }}>
    <Activity/>
    <Middle/>
    </Grid>
    <Grid sx={{
      display:'flex',
      flexDirection:'row',
       padding:'20px',
       gap:'32px'
    }}>
    <Orders/>
    <Feedback/>
    </Grid>
    
    
    </Grid>
    
    </Grid>
      
    </div>
  );
}

export default App;
