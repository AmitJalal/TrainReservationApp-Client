import { useState } from 'react';
import { Button, Header, Modal } from '../common';
import { Link } from 'react-router-dom';

export const BookingDetails = (props) => {
  const { message, seats, totalSeatsLeft } = props;

  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpenModal}>See Booking Details</Button>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        overlayClassName="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
        modalClassName="bg-white xsm:w-64 sm:w-80 rounded shadow"
        closeOnEsc={true}
        closeOnOverlayClick={false}
      >
        <Header styles="bg-orange-600 mt-0 mb-2 text-white font-bold">
          Booking Details
        </Header>
        <div className="grid place-items-center my-2 p-2 font-bold">
          <p>{message}</p>
          <p>Now Total Seats Left: {totalSeatsLeft}</p>
        </div>
        {seats.map(({ id, seatNumber }) => (
          <article
            key={id}
            className="px-4 py-2 sm:py-4 grid place-items-center even:bg-gray-200 odd:bg-gray-300 "
          >
            <p>Seat No. {seatNumber}</p>
            <p className="flex max-w-60 text-center">Seat Id. {id}</p>
          </article>
        ))}
        <div className="grid place-items-center m-2 grid-flow-col">
          <Button styles="bg-yellow-300 text-black " onClick={handleCloseModal}>
            Close Modal
          </Button>
          <Link
            to="/coach"
            className="bg-red-600 text-white font-bold px-5 py-3 rounded-md"
          >
            Coaches
          </Link>
        </div>
      </Modal>
    </div>
  );
};

// =======================================

const BookedSeat = {
  message: 'Seats booked successfully.',
  seats: [
    {
      id: '64666c3759051d5a4446ba2d',
      seatNumber: 69,
    },
    {
      id: '64666c3759051d5a4446ba2f',
      seatNumber: 70,
    },
    {
      id: '64666c3759051d5a4446ba31',
      seatNumber: 71,
    },
    {
      id: '64666c3759051d5a4446ba33',
      seatNumber: 72,
    },
  ],
  totalSeatsLeft: 62,
};
