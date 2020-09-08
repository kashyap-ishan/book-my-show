import React from 'react';
import { seatsArrangement } from '../constants'
const SeatArrangement = props => {
  return (
    <div className="container">
      <table className="grid">
        <tbody>
          {
            seatsArrangement.map(row => <tr key={row.id}>
              <td className="row-display">{row.row}</td>
              {row.seats.map(seat => {
                return (<td
                  className={props.reserved.indexOf(seat.seatId) > -1 ? 'reserved' : (props.selected.indexOf(seat.seatId) > -1 ? 'selected' : 'available')}
                  key={seat.number}
                  onClick={() => props.seatSelected(row.row, seat.number, seat.seatId)}
                >{seat.number}</td>)
              })
              }
            </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}
export default SeatArrangement;