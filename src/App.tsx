import "./App.css";
import queryClient from "./api/query-client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import FormUser from "./components/FormUser";
import Modify from "./components/Modify";
import ErrorsPage from "./errorsPage/ErrorsPage";

//JSX
// Hook use

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-wilder" element={<FormUser />} />
            <Route path="/wilder/:id" element={<Modify />} />
            <Route path="/errors" element={<ErrorsPage error={undefined} />} />

          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
