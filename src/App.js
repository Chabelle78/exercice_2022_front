import "./App.css";
import queryClient from "../src/api/query-client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import FormUser from "./components/FormUser";
import Modify from "./components/Modify";

//JSX
// Hook use

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create-wilder" element={<FormUser />} />
            <Route path="/wilder/:id" element={<Modify />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
