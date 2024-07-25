import React, { useState } from 'react';
import { Button, TextField, Typography, Container } from '@mui/material';
import { Link } from "react-router-dom";


const FlightSearch = ({ onSearch }) => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle flight search logic here
    onSearch(departure, destination, date);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Search Flights</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Departure"
          fullWidth
          margin="normal"
          variant="outlined"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
        />
        <TextField
          label="Destination"
          fullWidth
          margin="normal"
          variant="outlined"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <TextField
          label="Date"
          fullWidth
          margin="normal"
          variant="outlined"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
         <nav>
          <Link to="/flightList">Search</Link>
        </nav>
      </form>
    </Container>
  );
};

export default FlightSearch;
