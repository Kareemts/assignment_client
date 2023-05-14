import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminPanel } from "./pages/admin/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
