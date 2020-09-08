import React from 'react';
import {seatsArrangement} from './../constants';
const CostDisplay = props => {
  const calculateCost = () => {
    return  seatsArrangement.reduce((acc, curr) => {
      return curr.seats.reduce((a2, c2) => {
        if(props.selectedSeats.indexOf(c2.seatId) >  -1) {
          return acc + (c2.type === 'Club' ?  100: 50)
        } else {
          return acc+a2;
        }
      }, acc)
    }, 0);
  }
  return (
    <>
    <div>Total Cost</div>
    <div>{props.selectedSeats.length * 100}</div>
    </>
  )
}

export default CostDisplay;