import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
console.log(API_URL);
const SeatBooking = () => {
  const [seats, setSeats] = useState([]);
  const [value, setValue] = useState('');
  const [bookedSeats, setBookedSeats] = useState(0);

  const fetchSeats = async () => {
    try {
      const response = await axios.get(`${API_URL}/all`);
      console.log(response);
      console.log(response.data?.coach);
      setSeats(response.data?.coach[0]?.seats);
    } catch (error) {
      console.error('Error fetching seats:', error);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const bookSeats = async () => {
    let seatsToBeBooked = value;
    if (
      seatsToBeBooked > 7 ||
      seatsToBeBooked < 1 ||
      typeof seatsToBeBooked == 'undefined' ||
      typeof seatsToBeBooked == 'NaN'
    ) {
      alert('please book valid number of seats');
      return;
    }

    const data = { totalSeats: seatsToBeBooked };

    try {
      const response = await axios.post(`${API_URL}/book`, data);
      setBookedSeats(response.data?.seats);
      console.log(response.data?.seats);
    } catch (error) {
      console.error('Error booking seats:', error);
    }
  };

  useEffect(() => {
    fetchSeats();
  }, []);

  const getSeatColor = (seatId) => {
    const seat = seats.find((seat) => seat._id === seatId);
    if (seat && seat.isReserved) {
      return 'bg-red-400';
    } else if (seat && !seat.isReserved) return 'bg-stone-200';
    else {
      return '';
    }
  };

  return (
    <div className="min-h-[100vh] min-w-[100vw] grid  place-items-center bg-slate-50">
      <div className="grid place-items-center gap-x-2 gap-y-2 grid-cols-7 max-w-md p-4 mx-auto border-slate-300 border-2 rounded-xl">
        {seats.map((seat) => {
          const { _id, seatNumber, isReserved } = seat;
          return (
            <div
              key={_id}
              className={`grid place-items-center  w-10 h-10 border rounded-full  cursor-pointer ${getSeatColor(
                _id
              )}`}
              // onClick={() => handleSeatClick(_id)}
            >
              {seatNumber}
            </div>
          );
        })}
      </div>
      {/* <div className=' bg-slate-500'>Please let us know how many seats reservation you want</div> */}
      <div className="grid place-items-center gap-2">
        <div className="max-w-[375px] grid grid-cols-5 gap-3">
          <label className="bg-yellow-600 text-white font-bold rounded-sm grid place-items-center col-span-2 p-1 min-w-fit ">
            Seats :{' '}
          </label>
          <input
            type="number"
            min="1"
            max="7"
            name="Seats"
            value={value}
            placeholder="number of seats"
            onChange={handleChange}
            className="min-w-[150px] col-span-3 p-2 border-[.5px] focus:outline-none focus:bg-orange-50 text-yellow-600 placeholder-yellow-600"
          />
        </div>
        <button
          className="grid place-items-center bg-blue-500 hover:brightness-90 rounded-md text-white font-bold py-2 px-4 "
          onClick={bookSeats}
        >
          Book Seats
        </button>
      </div>
      {bookedSeats !== 0 && (
        <div>
          <h2>Booked Seats Details</h2>
          {bookedSeats.map(({ id, seatNumber }) => (
            <div key={id} className="flex gap-3">
              <h3>Seat : {seatNumber}</h3>
              <h3>ID : {id}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SeatBooking;
