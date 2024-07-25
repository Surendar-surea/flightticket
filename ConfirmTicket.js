// import React, { useState } from 'react';
// import { Button, TextField, Typography, Container } from '@mui/material';
// const ConfirmationPage = ({ flight, onConfirm }) => {
//   const [contactInfo, setContactInfo] = useState('');
//   const [passengerDetails, setPassengerDetails] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle confirmation logic here
//     onConfirm(contactInfo, passengerDetails);
//   };

//   return (
//     <Container maxWidth="sm">
//       <Typography variant="h4" gutterBottom>Confirm Flight</Typography>
//       <Typography variant="h6">{flight.airline}</Typography>
//       <Typography variant="body2">Departure: {flight.departureTime}</Typography>
//       <Typography variant="body2">Arrival: {flight.arrivalTime}</Typography>
//       <Typography variant="body2">Price: {flight.price}</Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Contact Information"
//           fullWidth
//           margin="normal"
//           variant="outlined"
//           value={contactInfo}
//           onChange={(e) => setContactInfo(e.target.value)}
//         />
//         <TextField
//           label="Passenger Details"
//           fullWidth
//           margin="normal"
//           variant="outlined"
//           value={passengerDetails}
//           onChange={(e) => setPassengerDetails(e.target.value)}
//         />
//         <Button type="submit" variant="contained" color="primary">Confirm</Button>
//       </form>
//     </Container>
//   );
// };

// export default ConfirmationPage;
function ConfirmTicket(){
  return(
    <div>
    ticket is confirmed!
    </div>

  )
}
export default ConfirmTicket;
