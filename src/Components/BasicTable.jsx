import { Avatar, Grid, Typography } from '@mui/material'
import React from 'react'
import Divider from '@mui/material/Divider';

function BasicTable() {
  let data=[
    {
      name:'Wade Warren',
      order:'15478256',
      amount:'$124.00',
      status:'Delivered',
      back:"green",
      colors:'#98fb98',
      divide:<Divider orientation="horizontal" flexItem />,
      image:"https://tse2.mm.bing.net/th?id=OIP.AzEyaqg3vGHeQx6SbYPxPAAAAA&pid=Api&P=0&h=180"
    },
    {
      name:"Jane Cooper",
      order:'48965786',
      amount:'$365.00',
      status:'Delivered',
      back:"green",
      colors:'#98fb98',
      divide:<Divider orientation="horizontal" flexItem />,
      image:'https://tse1.mm.bing.net/th?id=OIP.v--Mzwswhtg97RIhOnc48AHaE7&pid=Api&P=0&h=180'
      
    },
    {
      name:"Guy Hawkins",
      order:'78958215',
      amount:'$45.88',
      status:'Cancelled',
      back:'red',
      colors:'#fa8072',
      divide:<Divider orientation="horizontal" flexItem />,
      image:'https://tse3.mm.bing.net/th?id=OIP.nfNSIIzxQDo2MgmWay7GDwAAAA&pid=Api&P=0&h=18https://tse3.mm.bing.net/th?id=OIP.nfNSIIzxQDo2MgmWay7GDwAAAA&pid=Api&P=0&h=180'
      
    },
    {
      name:"Kristin Watson",
      order:'20985732',
      amount:'$65.00',
      status:'Cancelled',
      back:'red',
      colors:'#fa8072',
      divide:<Divider orientation="horizontal" flexItem />,
      image:'https://tse1.mm.bing.net/th?id=OIP.uH4erQujKDQBoAxb3riFqQHaE8&pid=Api&P=0&h=180'
    },
    {
      name:'Cody Fisher',
      order:'95715620',
      amount:'545.00',
      status:'Delivered',
      back:"green",
      colors:'#98fb98',
      divide:<Divider orientation="horizontal" flexItem />,
      image:'https://tse1.mm.bing.net/th?id=OIP.GAbQGIyOhWftNiB-LHH1jQHaE2&pid=Api&P=0&h=180'
    },
    {
      name:'Savannah Nguyen',
      order:'78514568',
      amount:'$128.20',
      status:'Delivered',
      back:"green",
      colors:'#98fb98',
      divide:<Divider orientation="horizontal" flexItem />,
      image:'https://tse4.mm.bing.net/th?id=OIP.p_1yL_pslRuW65a2XnemCAHaLI&pid=Api&P=0&h=180'
    }
  ]
  return (
    <Grid sx={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between',
      padding:'20px',
      
    }}>
    <Divider orientation="horizontal" flexItem />
    <Grid sx={{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      padding:'20px',
      
    }}>
    <Grid sx={{
        display:'flex',
        
        borderRadius:'20px',
        width:'90px',
        
        alignItems:'center',justifyContent:'center'
      }}> 
    <Typography color={"white"} >Customer</Typography>
    </Grid>
    <Grid sx={{
        display:'flex',
        
        borderRadius:'20px',
        width:'90px',
        alignItems:'center',justifyContent:'center'
      }}>
    <Typography color={"white"}>Order No.</Typography>
    </Grid>
    <Grid sx={{
        display:'flex',
        
        borderRadius:'20px',
        width:'90px',
        alignItems:'center',justifyContent:'center'
      }}>
    <Typography color={"white"}>Amount</Typography>
    </Grid>
    <Grid sx={{
        display:'flex',
        
        borderRadius:'20px',
        width:'90px',
        alignItems:'center',
        justifyContent:'center'
      }}>
    <Typography color={"white"}>Status</Typography>
    </Grid>
      
      
      
    </Grid>
    <Divider orientation="horizontal" flexItem />
    <Grid sx={{
      display:'flex',
      flexDirection:'column',
      gap:'20px',
      padding:'8px'

    }}>
    {
      
      data.map((item)=>{
        return(
          <Grid sx={{
      display:'flex',
      flexDirection:'row',
      justifyContent:"space-between",
      
      background:'#3b444b',
    }}>
    <Grid sx={{
        display:'flex',
        
        
        width:'150px',
        gap:'4px',
        flexDirection:'row',
        
        justifyContent:'space-between',
        alignItems:'center'
      }}>
    <Avatar alt="Remy Sharp" src={item.image} />
    <Typography color={"#d3d3d3"}>{item.name}</Typography>
    </Grid>
    <Grid sx={{
        display:'flex',
      
        borderRadius:'20px',
        width:'20px',
        alignItems:'center',
        justifyContent:'center',
        
      }}>
    <Typography color={"#d3d3d3"} justifyContent={"center"}alignItems={"center"}>{item.order}</Typography>
    </Grid>
     <Grid sx={{
        display:'flex',
        
        borderRadius:'20px',
        width:'90px',
        alignItems:'center',justifyContent:'center'
      }}>
     <Typography color={"#d3d3d3"}>{item.amount}</Typography>
     </Grid>
      
      <Grid sx={{
        display:'flex',
        background:item.back,
        borderRadius:'20px',
        width:'90px',
        height:'30px',
        
        alignItems:'center',
        justifyContent:'center'
      }}>
      <Typography color={item.colors}>{item.status}</Typography>
      </Grid>
      
      </Grid>
      
        )
      
      
      })
      
    
   
    }
    

     
    </Grid>
    <Divider orientation="horizontal" flexItem />
    </Grid>
  )
}

export default BasicTable