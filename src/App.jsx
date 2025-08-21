import { Route, Routes } from "react-router";

import DefaultLayout from "./components/layout/DefaultLayout";
import Home from "./pages/Home";
import Results from "./pages/Results";

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
      </Route>
    </Routes>
  );
}

export default App;
