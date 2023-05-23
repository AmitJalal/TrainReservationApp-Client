import RootLayout from '../layouts/RootLayout';
import backgroundImage from '../assets/images/blur.jpg';
import Booking from './Booking';

const Home = () => {
  return (
    <div className="">
      {/* <RootLayout
      className={`min-h-screen bg-cover bg-center`}
      style={{ backgroundImage: `url(${backgroundImage})`}}
       children={<Coaches />}
     /> */}

      <Booking />
    </div>
  );
};
export default Home;
