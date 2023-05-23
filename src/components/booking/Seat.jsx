export function Seat({ seatNumber, isReserved, coach_type, styles }) {
  return (
    <div
      className={`${
        isReserved
          ? 'bg-red-400 text-white'
          : 'even:bg-gray-200 odd:bg-gray-300'
      }  grid place-items-center rounded-lg py-1 min-w-[46px] max-w-[49px] mx-auto ${styles}`}
    >
      <div className="text-[0.6rem] font-medium">{coach_type} </div>
      <p className="font-semibold text-[0.6rem]">{seatNumber}</p>
      <p className="text-[0.55rem] font-light">
        {isReserved ? 'Reserved' : 'Available'}
      </p>
    </div>
  );
}
