import { useEffect, useState } from 'react';
import {
  BookingDetails,
  Button,
  Card,
  Header,
  Input,
  Seat,
} from '../components';
import axios from 'axios';
import { Link } from 'react-router-dom';
const API_URL = import.meta.env.VITE_API_URL;

const Seats = ({ seats, ...booking }) => {
  const { caoch_seats, coach_designation, coach_number, coach_type } = booking;

  const [seatData, setSeatData] = useState(null);
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {}, [seatData]);

  let bookedSeat = 1;
  let userInp = {};

  const handleChange = (e) => {
    bookedSeat = e.target.value;
    userInp.coach_type = coach_type;
    userInp.totalSeats = bookedSeat;
  };

  const bookSeats = async () => {
    try {
      const res = await axios.post(`${API_URL}/book`, userInp);
      console.log(res);
      setSeatData(res.data);
      setPopUp(!popUp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <Header styles={'bg-yellow-300 mt-0 min-w-[100vw] '}>
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl">
          Book Seats in {coach_designation}
        </h1>
        <div className="w-full flex justify-between items-center space-x-2 sm:text-lg md:text-xl">
          <p> Coach {coach_number}</p>
          <p>Type {coach_type}</p>
          <p>{caoch_seats}</p>
        </div>
      </Header>

      <section className="grid gap-2 place-items-center my-4">
        <div className="flex gap-3">
          <Input
            type="number"
            min="1"
            max="7"
            name="Seats"
            text="number of seats"
            onChange={handleChange}
            styles="focus:bg-orange-50 text-yellow-600 placeholder-yellow-600"
          />
          <Button styles="bg-blue-500" onClick={bookSeats} type="button">
            Book
          </Button>
        </div>
      </section>

      <article className="grid grid-cols-7 w-[22rem] mx-auto gap-2">
        {seats.map((seat) => (
          <Seat key={seat.seatNumber} {...seat} styles="max-w[46px]" />
        ))}
      </article>
      {popUp && <BookingDetails {...seatData} />}
    </div>
  );
};

const Booking = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);

  const [booking, setBooking] = useState([]);
  const [seats, setSeats] = useState([]);

  const fetchDesiredCoach = async () => {
    try {
      const res = await axios.get(`${API_URL}/all`, {
        coach_type: selectedSeat,
      });
      let index = coachID[selectedSeat] - 1;
      setBooking(res?.data.coach[index]);
      setSeats(res?.data.coach[index].seats);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDesiredCoach();
  }, [selectedSeat]);

  const handleInputClick = (value) => {
    setSelectedSeat(value);
  };

  return (
    <div>
      {selectedSeat ? (
        <Seats seats={seats} {...booking} />
      ) : (
        <div>
          <Header styles="bg-orange-800 mt-0">
            <h1 className="text-white font-bold text-xs xsm:text-sm sm:text-lg md:text-3xl">
              Please Select the Coach In Which You want to make booking!!
            </h1>
          </Header>
          <section className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center gap-1 xsm:gap-2 mb-5">
            {trainData.map((train) => (
              <Card
                key={train.coach_number}
                styles="bg-yellow-300 relative hover:cursor-pointer"
              >
                <button
                  className="absolute w-full h-full z-1"
                  onClick={() => handleInputClick(train.coach_type)}
                ></button>
                {/* <input
                type="button"
                //   value={train.coach_type}
                className="hidden absolute w-full h-full z-1 bg-red-400"
              /> */}
                <h2 className="text-orange-800 font-bold ">
                  {train.coach_type}
                </h2>
                <p className="">{train.coach_designation}</p>
                <p className="">{train.caoch_seats}</p>
              </Card>
            ))}
          </section>
          <div className="grid place-items-center">
            <Link
              to="/coach"
              className="bg-red-800 text-white px-5 py-3 rounded-md font-bold"
            >
              See All Coaches
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default Booking;

//  ==================== END ===================
//  ==================== END ===================
const trainData = [
  {
    caoch_seats: '7 seats in a row',
    coach_designation: 'AC Chair Car',
    coach_number: 1,
    coach_type: 'CC',
  },
  {
    caoch_seats: '7 seats in a row',
    coach_designation: 'Executive Chair Car',
    coach_number: 2,
    coach_type: 'EC',
  },
  {
    caoch_seats: '7 seats in a row',
    coach_designation: 'AC First Class',
    coach_number: 3,
    coach_type: '1A',
  },
  {
    caoch_seats: '7 seats in a row',
    coach_designation: 'Sleeper Class',
    coach_number: 4,
    coach_type: 'SL',
  },
  {
    caoch_seats: '7 seats in a row',
    coach_designation: 'AC two tier',
    coach_number: 5,
    coach_type: '2A',
  },
];

const coachID = { CC: 1, EC: 2, '1A': 3, SL: 4, '2A': 5 };
