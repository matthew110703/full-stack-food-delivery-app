// React Imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import { Home, Login, Order, SignUp } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  );
};

export default App;
