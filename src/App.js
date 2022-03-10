import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import styledComponents from "styled-components";
import queryClient from "../src/api/query-client";
import { QueryClientProvider } from "react-query";

//JSX
// Hook use
const Body = styledComponents.div`
display:flex
justify-content: center;
margin-block: 2rem;
gap: 2rem;
`
function App() {
;
  return (
    <div className="">
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Body>
      <Cards />
      </Body>
      </QueryClientProvider>
 </div>
  );
}

export default App;
