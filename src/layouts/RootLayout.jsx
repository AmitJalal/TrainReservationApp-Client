import { Footer, Navbar } from '../components';
const RootLayout = ({ children, ...styles }) => {
  return (
    <div className="" {...styles}>
      <Navbar
        className={`h-[79.22px] fixed w-full text-white p-2 z-10 top-0 bg-slate-900`}
      />
      {children}
      <Footer
        className={`h-[532.5px] fixed  w-full bottom-0 bg-blue-950 z-10 text-white text-2xl`}
      />
    </div>
  );
};
export default RootLayout;
