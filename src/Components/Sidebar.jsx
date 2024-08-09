import { Grid,  } from '@mui/material'
import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import InsertChartOutlinedTwoToneIcon from '@mui/icons-material/InsertChartOutlinedTwoTone';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
function Sidebar() {
  return (
   <Grid sx={{
    display:'flex',
    flexDirection:'row',
    background:'#3b444b',
    width:'70px',
    height:'1250px',
    

   }}>
   <Grid sx={{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between'
   }}>
   <Grid>
   <DashboardIcon sx={{
        color:'blueViolet',
        padding:'16px',
        fontSize:'30px',
        
    }}></DashboardIcon>
    <HomeIcon sx={{
        color:'blueViolet',
        padding:'16px',
        fontSize:'30px'
    }}></HomeIcon>
    <InsertChartOutlinedTwoToneIcon sx={{
        color:'whiteSmoke',
        padding:'16px',
        fontSize:'30px'
    }}></InsertChartOutlinedTwoToneIcon>
    <AssignmentTurnedInOutlinedIcon sx={{
        color:'white',
        padding:'16px',
        fontSize:'30px'
    }}></AssignmentTurnedInOutlinedIcon>
    <WorkHistoryOutlinedIcon sx={{
        color:'white',
        padding:'16px',
        fontSize:'30px'
    }}></WorkHistoryOutlinedIcon>
    <LocalMallOutlinedIcon sx={{
        color:'white',
        padding:'16px',
        fontSize:'30px'
    }}></LocalMallOutlinedIcon>
   </Grid>
   <Grid>
    <LogoutOutlinedIcon sx={{
         color:'white',
        padding:'16px',
        fontSize:'30px'
    }}></LogoutOutlinedIcon>
   </Grid>
   
      
   </Grid>
  
   </Grid>
  )
}

export default Sidebar