import { Coaches } from './pages/Coaches';
import Home from './pages/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coach" element={<Coaches />} />
      </Routes>
    </Router>
  );
};
export default App;
