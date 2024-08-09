import { Typography,Grid, Avatar } from '@mui/material'
import React from 'react'
import Rating from '@mui/material/Rating';
function Feedback() {
  const [value, setValue] = React.useState(4);
  const [val,setV]=React.useState(5)
  let data=[
    {

    
    name1:'Jenny Wilson',
    icon:<Avatar></Avatar>,
    rat:<Rating name="read-only" value={value} readOnly color='white' />,
    image:'https://tse2.mm.bing.net/th?id=OIP.bSU1r2HdOHU3ACZv0rik0wHaE8&pid=Api&P=0&h=180',
    description:'The Food was excellent and so was the service.I had the mushroom risotio with scallaps which was  awesome.I had  a burger over greens(giuten-free) which was also very good they were very conscientious about giuten allergies',
    },
    {

    
      name1:'Dianne Russel',
      icon:<Avatar></Avatar>,
      rat:<Rating name="read-only" value={val} readOnly color='white' />,
      image:'https://tse1.mm.bing.net/th?id=OIP.LRlh6OP9TOFtIkbeNUxRUgHaEK&pid=Api&P=0&h=180',
      description:'We have enjoyed the  Eggs benedict served on homemade foccacia bread not coffee .Perfect service'
      },
      {

    
        name1:'Devon Lane',
        icon:<Avatar></Avatar>,
        rat:<Rating name="read-only" value={value} readOnly color='white' />,
        image:'https://tse4.mm.bing.net/th?id=OIP.p_1yL_pslRuW65a2XnemCAHaLI&pid=Api&P=0&h=180',
        description:'Normally wings are wings  but their lean meaty tender act',
        },
  ]
  return (
    <Grid sx={{
         display:'flex',
        flexDirection:'column',
        backgroundColor:"#3b444b",
        borderRadius:'12px',
        width:'550px',
        height:'520px'
    }}>
        <Typography display={"flex"} color={"white"} padding={"16px"} fontSize={"24px"} fontWeight={"bold"}>Customer's Feedback</Typography>
        <Grid sx={{
          display:"flex",
          flexDirection:'column',
          marginLeft:"12px"
        }}>
        {
          data.map((item)=>{
            return(
              <Grid sx={{
          display:'flex',
          flexDirection:'column',
          padding:'12px',
          gap:'4px',
         }}>
         <Grid sx={{
          display:'flex',
          flexDirection:'row',
          gap:'8px',
         }}>
         <Avatar src={item.image}></Avatar>
         <Typography display={"flex"} justifyContent={'center'}alignItems={'center'} color={"#d3d3d3"}>{item.name1}</Typography>
         </Grid>
        
         {item.rat}
         <Grid sx={{
          display:'flex'
         }}>
         <Typography color={"#d3d3d3"} sx={{
          display:'flex',
          textAlign:'left'
         }}>{item.description}</Typography>
         </Grid>

         </Grid>
            )
          })
        }
         
        </Grid>
    </Grid>
  )
}

export default Feedback