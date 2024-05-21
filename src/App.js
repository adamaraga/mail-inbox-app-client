import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Inbox from "./pages/Inbox";
import Message from "./pages/Message";
import "./assets/styles/scss/main.scss";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<div>"page not found"</div>} />

          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="inbox" element={<Inbox />} />
            <Route path="message/:id" element={<Message />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
