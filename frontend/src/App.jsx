import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import AccountDetails from "./pages/AccountDetails";
import Transactions from "./pages/Transactions";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/create" element={<CreateAccount />} />
        <Route path="/details" element={<AccountDetails />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
      </Routes>
    </BrowserRouter>
  );
}
