import React, { useState } from 'react';
import {SEATS, NEXT_ROW} from './constants';
import './seatBooking.css';
const SeatingStructure = props => {
  console.log(props.selected);
  return (
    <div className="container">
      <table className="grid">
        <tbody>
          <tr>
            {
              props.seats.map(row =>
                <td className={props.reserved.indexOf(row) > -1 ? 'reserved' : (props.selected.indexOf(row) > -1 ? 'selected' : 'available')}
                  key={row}
                  onClick={() => props.seatSelected(row)}>{row}</td>)
            }
          </tr>
        </tbody>
      </table>
    </div>
  )
}
const SeatBooking = (props) => {
  const [availableSeats, setAvailableSeats] = useState(['A1', 'A2', 'A3', 'A4', 'A5', 'A6']);
  const [reservedSeats, setReservedSeats] = useState(['C1']);
  const [selectedSeats, setSelectedSeats] = useState([]);
    const numberOfSeats = props.location.state.numberOfSeats;

  const seatSelected = seat => {
    if (reservedSeats.indexOf(seat) > -1) return;
    // check if already selected seats
    if (selectedSeats.length >= numberOfSeats && selectedSeats.indexOf(seat) === -1) {
      setSelectedSeats([]);
    } else {
      const nextSeats = [];
      let [row, ...number] = [...seat];
      number = parseInt(number.join(''));
      for (let i = 0; i < numberOfSeats; i++) {
        if (number + i <= 11) {
          nextSeats.push(row + (number + i))
        } else {
          if (NEXT_ROW[row]) {
            nextSeats.push(NEXT_ROW[row] + (number - i))
            number--;
          }
        }
      }
      setSelectedSeats([...selectedSeats, ...nextSeats])
    }
  }
  return (
    <>
    <h3>Select {numberOfSeats} seats</h3>
  <SeatingStructure
    seats={SEATS}
    available={availableSeats}
    reserved={reservedSeats}
    selected={selectedSeats}
    seatSelected={seatSelected}
  > </SeatingStructure>
  </>
  )
};

export default SeatBooking;