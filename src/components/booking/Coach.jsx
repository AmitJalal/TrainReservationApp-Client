import { Seat } from './Seat';
export function Coach({
  caoch_seats,
  coach_designation,
  coach_number,
  coach_type,
  seats,
  total_seats,
}) {
  return (
    <div className="">
      <div className="bg-yellow-100 flex justify-evenly p-2 mt-4 mb-2 rounded-lg max-w-[398.5px] mx-auto text-gray-500">
        <h3 className="text-center font-semibold">Caoch : {coach_number}</h3>
        <h3 className="text-center font-semibold">Coach Type: {coach_type}</h3>
        <h3 className="text-center font-semibold">
          Total Seats: {seats.length}
        </h3>
      </div>
      <div className="grid grid-cols-7 gap-2 bg-green-100 rounded-xl py-2 px-2 max-w-[398.5px] mx-auto">
        {seats.map((seat) => (
          <Seat key={seat._id} {...seat} />
        ))}
      </div>
    </div>
  );
}
