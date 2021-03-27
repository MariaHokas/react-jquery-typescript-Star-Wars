import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Planets from "./components/Planets";
import People from "./components/People";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App: React.FC = () => {
  let [page, setPage] = useState("planets");
  return (
    <div className="App">
      <h1>Star Wars Info</h1>

      <QueryClientProvider client={queryClient}>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === "planets" ? <Planets /> : <People />}
        </div>
      </QueryClientProvider>
    </div>
  );
};
export default App;
