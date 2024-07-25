import React, { useState } from 'react';
import { Button, Container, Typography, Grid } from '@material-ui/core';

const SeatSelection = ({ flight, onSeatSelect }) => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const seats = [...Array(30).keys()]; // Example seat numbers

  const handleSeatClick = (seat) => {
    setSelectedSeat(seat);
  };

  const handleSubmit = () => {
    // Handle seat selection logic here
    onSeatSelect(selectedSeat);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>Select Seat</Typography>
      <Typography variant="h6">{flight.airline}</Typography>
      <Typography variant="body2">Departure: {flight.departureTime}</Typography>
      <Typography variant="body2">Arrival: {flight.arrivalTime}</Typography>
      <Typography variant="body2">Price: {flight.price}</Typography>
      <Grid container spacing={2}>
        {seats.map((seat, index) => (
          <Grid item xs={3} key={index}>
            <Button
              variant={selectedSeat === seat ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleSeatClick(seat)}
            >
              {seat}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Confirm Seat
      </Button>
    </Container>
  );
};

export default SeatSelection;
