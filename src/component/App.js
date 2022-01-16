import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Add from "./Add";
import Edit from "./Edit";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element = {<Home />} />
        <Route exact path="/add" element={<Add />} />
        <Route exact path="/edit/:id" element={<Edit /> } />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
