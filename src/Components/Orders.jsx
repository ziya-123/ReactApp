import { Grid, Typography } from '@mui/material'
import React from 'react'
import BasicTable from './BasicTable'



function Orders() {
  return (
    <Grid sx={{
        display:'flex',
        flexDirection:'column',
        width:'790px',
        background:'#3b444b',
        height:'520px',
        borderRadius:'12px',
        

    }}>
        <Typography display={"flex"} fontWeight={"bold"}color={"white"} justifyContent={"intial"} fontSize={"24px"} paddingTop={"12px"} paddingLeft={"18px"}>Recent Orders</Typography>
        <BasicTable/>
    </Grid>
  )
}

export default Orders