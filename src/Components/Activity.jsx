import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Grid, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function Activity() {
  return (
    <Grid sx={{
      display:'flex',
      padding:'16px',
      width:'780px',
       height:'350px',
      flexDirection:'column',
      background:'#3b444b',
      justifyContent:'space-between',
      marginLeft:'22px',
      borderRadius:'12px'
    }}>
    <Grid sx={{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between'
    }}>
    <Typography color={"white"}padding={"12px"} textAlign={"left"} fontSize={"24px"}>Activity</Typography>
    <Grid sx={{
      display:'flex',
      flexDirection:'row',
      backgroundColor:'grey',
      borderRadius:'40px',
      alignItems:'center',
      padding:'8px',
      fontSize:"12px"
      
    }}>
    <Typography color={"white"}   >Weekly</Typography>

    <ArrowDropDownIcon sx={{
      color:'white',
      padding:'6px',
      
    }}/>
    
    </Grid>
    
    </Grid>
   
    <BarChart sx={{
      borderRadius:'12px'
    }}
      series={[
        { data: [4, 2, 5, 4, 1]},
        { data: [2, 8, 1, 3, 1]},
        { data: [14, 6, 5, 8, 9] },
       
      ]}
      
      barLabel={(item, context) => {
        if ((item.value ?? 0) > 10) {
          return 'High';
        }
        return context.bar.height < 60 ? null : item.value?.toString();
      }}
      width={780}
      height={250}
    /> 
    </Grid>
   
  );
}
