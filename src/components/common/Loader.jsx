import { HashLoader } from 'react-spinners';

export default function Loader({ loading }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0 "></div>
      <HashLoader
        color="#36a0d6"
        loading={loading}
        size={80}
        speedMultiplier={0.9}
      />
    </div>
  );
}
