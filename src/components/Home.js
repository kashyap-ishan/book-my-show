import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

import './home.css';

const Home = () => {
  const [numOfSeats, setNumOfSeats]  = useState(1);
  const history = useHistory();
  
  const handleSubmit = (e) => {
    history.push({
      pathname: '/book-seat',
      state: { numberOfSeats: numOfSeats}
    })
    e.preventDefault();
    
  }
  return (<div className="home-content">
    <h4>Welcome User To Book my Movie</h4>
    <form onSubmit={handleSubmit}>
      <label>
        Please Select number of tickets:
        <select value={numOfSeats} onChange={(e) => setNumOfSeats(e.target.value)}>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
              return <option key={`${i}key`} value={i}> {i}</option>
            })
          }
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  </div>)
};

export default Home;