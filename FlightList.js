import React from 'react';
// import { Card, CardContent, Typography, Button, Container, Grid } from  '@mui/material';
import { list } from './FlightListData';
import { useState } from "react"
import { Link } from "react-router-dom";

// const FlightList = ({ flights, onSelectFlight }) => {
//   return (
//     <Container maxWidth="md">
//       <Typography variant="h4" gutterBottom>Flight Listings</Typography>
//       <Grid container spacing={3}>
//         {
//           flights.map((flight, index) => (
//           <Grid item xs={12} key={index}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6">{flight.airline}</Typography>
//                 <Typography variant="body2">Departure: {flight.departureTime}</Typography>
//                 <Typography variant="body2">Arrival: {flight.arrivalTime}</Typography>
//                 <Typography variant="body2">Price: {flight.price}</Typography>
//                 <Button variant="contained" color="primary" onClick={() => onSelectFlight(flight)}>
//                   Select
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };
function FlightList(){
const [data, setData] = useState(list)
  return(
    <div>
    <table className="table">
    {
      data.map((val)=>{
        return(
          <tr>
        
          <td>{val.name}</td>
          <td>{val.departuretimeandplace}</td>
          <td>{val.arrivaltimeandplace}</td>
          <td>{val.Duration}</td>
          <td>{val.price}</td>
         
          </tr>
          
        )

      })
    }

    </table>
    <nav>
          <Link to="/ConfirmTicket">view ticket</Link>
        </nav>
   
   
    
    </div>

  )
}



export default FlightList;
