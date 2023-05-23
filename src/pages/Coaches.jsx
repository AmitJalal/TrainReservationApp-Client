import axios from 'axios';
import { useEffect, useState } from 'react';
import { Coach, Header, Loader } from '../components';

const API_URL = import.meta.env.VITE_API_URL;

export const Coaches = ({ ...styles }) => {
  const [coaches, setCoaches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchCoaches = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${API_URL}/all`);
      // console.log(response.data.coach);
      setCoaches(response.data?.coach);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCoaches();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader {...isLoading}/>
      ) : (
        <>
          {' '}
          <Header styles="bg-yellow-400 mt-0 text-xl font-bold">Coaches</Header>
          <div className="container grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {coaches.map((coach) => (
              <Coach key={coach.coach_number} {...coach} />
            ))}
          </div>
        </>
      )}
    </>
  );
};
