import {  Grid, Typography } from '@mui/material'
import React from 'react'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { PieChart } from '@mui/x-charts/PieChart';

function Dashboard() {
   

const data = [
  { value: 70},
  { value: 10  },
  
];

const size = {
  width: 200,
  height: 150,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}
    let d=[
        {
            icon:<ArrowDropUpIcon sx={{color:'green'}}/>,
            title:"Total orders",
            price:"75",
            sicon:<BusinessCenterIcon sx={{display:'flex',
            background:"#778ba5",
            borderRadius:'12px',
            color:"blue",
            padding:'16px',
            fontSize:'30px'}}/>,
            per:"3%",
            color:'green'
           
        },
        {
            icon:<ArrowDropDownIcon sx={{color:'red'}}/>,
            title:"Total Delivered",
            price:"70",
            sicon:<WorkHistoryIcon sx={{display:'flex',
            background:"#90ee90",
            borderRadius:'12px',
            color:"#006400",
            padding:'16px',
            fontSize:'30px'}}/>,
            per:"3%",
            color:'red'
            

            
        },
        {
            icon:<ArrowDropUpIcon sx={{color:'green'}}/>,
            title:"Total Cancelled",
            price:"05",
            sicon:<DeleteForeverIcon sx={{display:'flex',
                background:"#ff9999",
                borderRadius:'12px',
                color:"#e60026",
                padding:'16px',
                fontSize:'30px'}}/>,
            per:"3%",
            color:'green'
           
        },
        {
            icon:<ArrowDropDownIcon sx={{color:'red'}}/>,
            title:"Total Revenue",
            price:"$12k",
            sicon:<MonetizationOnIcon sx={{
                display:'flex',
                background:"#ffc0cb",
                borderRadius:'12px',
                color:"#e75480",
                padding:'16px',
                fontSize:'30px'

            }}/>,
            per:"3%",
            color:'red'
           
        }
    ]
  return (
    <Grid sx={{
     display:'flex',
     
        
        justifyContent:'initial',
        padding:'12px',
       
        flexDirection:'column',
        // marginLeft:'12px'
    }} className='max-w-[300px]'>
        <Typography fontSize={"28px"} fontWeight={"bold"} color={"white"} display={"flex"} marginLeft={"14px"}>Dashboard</Typography>
        <Grid sx={{
            display:'flex',
            flexDirection:'row',
            gap:'20px',
            justifyContent:'space-between',
            padding:'16px'
        }}>
        
        {
            d.map((item)=>{
                return(
                   <Grid sx={{
                    display:'flex',
                    flexDirection:'row',
                    xs: 0,
                    sm: 600,
                    md: 900,
                    lg: 1200,
                    xl: 1536
                  
                   }}>
                   <Grid sx={{
            display:'flex',
            flexDirection:'column',
            background:'#3b444b',
            justifyContent:"space-between",
            
            width:'170px',
            height:"170px",
            borderRadius:'12px'

        }}>
        <Grid sx={{
            display:"flex",
            flexDirection:'column',
            padding:'12px'
        }}>
         {item.sicon}
         <Typography color={"white"} display={"flex"}>{item.title}</Typography>
        </Grid>
        <Grid sx={{
            display:"flex",
          justifyContent:'space-between',
            padding:'14px'
        }}>
            <Typography color={"white"} fontSize={"30px"} fontWeight={"bold"}>
                {item.price}
            </Typography>
            <Grid sx={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'flex-end',
                alignItems:'flex-end',
                padding:'8px'


                
            }}>
            {item.icon}
            <Typography color={item.color} display={"flex"} >
                {item.per}
            </Typography>
            
            </Grid>
            
        </Grid>
            
        </Grid>
                   </Grid>
                    
                )
            })
        }
        <Grid sx={{
            display:'flex',
            width:'550px',
             
            borderRadius:'12px',
            flexDirection:'row',
            justifyContent:'space-between',
            height:'170px',
            padding:'16px',
            
            background:'#3b444b'
        }}>
        <Grid sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between',
            
        }}>
        <Grid sx={{
            display:'flex'
        }}>
        <Typography color={"white"} >
        New Profit
        </Typography>
        </Grid>
        
<Grid sx={{display:'flex'}}>
<Typography color={"white"} fontSize={"32px"}  fontWeight={"bold"}>$ 6759.25</Typography>
</Grid>
        
        <Grid sx={{
            display:'flex',
            flexDirection:'row'
        }}>
        <ArrowDropUpIcon sx={{color:'green'}}/>
            <Typography color={"green"}>3%</Typography>
        </Grid>

        </Grid>
        <Grid sx={{
            display:'flex',
            flexDirection:'row',
            marginBottom:'30px',
            justifyContent:'flex-end',
            width:'330px',
            color:'white',
            height:'150px'
            
            
            
        }}>
        <Grid sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between',
            alignItems:'center'
            
        }}>
        <PieChart series={[{ data, innerRadius: 70 }]} {...size}>
      <PieCenterLabel sx={{
        color:'white'
      }} color={"white"}>70%</PieCenterLabel>
    </PieChart>
    <Typography>The value here is recorded</Typography>
        </Grid>
        
    
        </Grid>
        </Grid>
        </Grid>
        
       
        
    </Grid>
  )
}

export default Dashboard