import React, { useState } from 'react';
import { SEATS, NEXT_ROW } from '../constants';
import SeatArrangement from './seatArrangement';
import CostDisplay from './../Cost/CostDisplay';
import './seatBooking.css';

const SeatBooking = (props) => {
  const [availableSeats, setAvailableSeats] = useState([]);
  const [reservedSeats, setReservedSeats] = useState([1,2,3,4, 24]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const requestedNumOfSeats = parseInt(props.location.state.numberOfSeats);
  const seatSelected = (row, seat, seatId) => {
    if(reservedSeats.indexOf(seat.seatId) > -1) return;
    if (selectedSeats.length >= requestedNumOfSeats && selectedSeats.indexOf(seat) === -1) {
      setSelectedSeats([]);
    } else {
      const nextSeats = [];
      for (let i = 0; i < requestedNumOfSeats; i++) {
          if(reservedSeats.indexOf(seatId + i) === -1) {
            nextSeats.push(seatId + i)
          }
      }
      if(nextSeats.length === requestedNumOfSeats) {
        setSelectedSeats([ ...nextSeats])
      } else {
        setSelectedSeats([...selectedSeats, seatId])
      }
    }
  }
  return (
    <>
      <h3>Select {requestedNumOfSeats} seats</h3>
      <SeatArrangement
        available={availableSeats}
        reserved={reservedSeats}
        selected={selectedSeats}
        seatSelected={seatSelected}
      />
      <CostDisplay selectedSeats={selectedSeats}/>
    </>
  )
};

export default SeatBooking;