import { Grid, Typography } from '@mui/material'
import React from 'react'
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { ArrowBackIosOutlined, LunchDining } from '@mui/icons-material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
function Middle() {
  return (
    <Grid sx={{
        display:'flex',
        flexDirection:'column',
        backgroundColor:"#3b444b",
        borderRadius:'12px',
        width:'550px',
        height:'350px'

    }}>
    <Grid sx={{
        display:"flex",
        flexDirection:'column',
        margin:'12px'
    }}>
    
    <Grid sx={{
        display:'flex',
        flexDirection:"row",
        padding:'12px',
        
        justifyContent:'space-between',
    }}>
    <Grid sx={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    
        alignItems:'center'
    }}>
    <Grid sx={{
        display:'flex',
        flexDirection:'row'
        
    }}>
    <Grid sx={{
        display:'flex',
        background:'#ff5349',
        borderRadius:'50px',
        justifyContent:'space-between',
        padding:"24px"
    }}>
    <MyLocationIcon sx={{
        color:"red",fontSize:'35px'
    }}/>
    </Grid>
    
    <Grid sx={{
        display:'flex',
        alignItems:'center'
    }}> 
    <Typography color={"#d3d3d3"} padding={"12px"} fontSize={"18px"}>Goals</Typography>
    </Grid>
    </Grid>
    
    
    
     
    </Grid>
    
    <Grid sx={{
        display:'flex',
        background:'grey',
        width:'20px',
        padding:'12px',
        margin:'28px',
        height:'20px',
        borderRadius:'40px',
        justifyContent:'center',
        alignItems:'center'
    }}>
    <ArrowForwardIosIcon sx={{ 
        display:'flex',
        color:'white',
        alignItems:'center'
     }} fontSize='20px'/>
    </Grid>
    </Grid>
    <Grid sx={{
        display:'flex',
        flexDirection:"row",
        padding:'12px',
        
        justifyContent:'space-between',
    }}>
    <Grid sx={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    
        alignItems:'center'
    }}>
    <Grid sx={{
        display:'flex',
        flexDirection:'row'
        
    }}>
    <Grid sx={{
        display:'flex',
        background:'#4169e1',
        borderRadius:'50px',
        justifyContent:'space-between',
        padding:"24px"
    }}>
    
    <LunchDining sx={{
        color:"blue",fontSize:'35px'
    }}/>
    </Grid>
    
    <Grid sx={{
        display:'flex',
        alignItems:'center'
    }}> 
    <Typography color={"#d3d3d3"} padding={"12px"} fontSize={"18px"}>Popular Dishes</Typography>
    </Grid>
    </Grid>
    
    
    
     
    </Grid>
    
    <Grid sx={{
        display:'flex',
        background:'grey',
        width:'20px',
        padding:'12px',
        margin:'28px',
        height:'20px',
        borderRadius:'40px',
        justifyContent:'center',
        alignItems:'center'
    }}>
    <ArrowForwardIosIcon sx={{ 
        display:'flex',
        color:'white',
        alignItems:'center'
     }} fontSize='20px'/>
    </Grid>
    </Grid>
    <Grid sx={{
        display:'flex',
        flexDirection:"row",
        padding:'12px',
        
        justifyContent:'space-between',
    }}>
    <Grid sx={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    
        alignItems:'center'
    }}>
    <Grid sx={{
        display:'flex',
        flexDirection:'row'
        
    }}>
    <Grid sx={{
        display:'flex',
        background:'#004953',
        borderRadius:'50px',
        justifyContent:'space-between',
        padding:"24px"
    }}>
    
    <RestaurantMenuIcon 
        sx={{
        color:"teal",fontSize:'35px'
    
    }}/>
    </Grid>
    
    <Grid sx={{
        display:'flex',
        alignItems:'center'
    }}> 
    <Typography color={"#d3d3d3"} padding={"12px"} fontSize={"18px"}>Menus</Typography>
    </Grid>
    </Grid>
    
    
    
     
    </Grid>
    
    <Grid sx={{
        display:'flex',
        background:'grey',
        width:'20px',
        padding:'12px',
        margin:'28px',
        height:'20px',
        borderRadius:'40px',
        justifyContent:'center',
        alignItems:'center'
    }}>
    <ArrowForwardIosIcon sx={{ 
        display:'flex',
        color:'white',
        alignItems:'center'
     }} fontSize='20px'/>
    </Grid>
    </Grid>
    </Grid>
    
        
        
    </Grid>
  )
}

export default Middle