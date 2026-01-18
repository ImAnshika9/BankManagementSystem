import { useState } from "react";
import { deposit } from "../services/api";
import { TextField, Button, Typography, Box } from "@mui/material";

export default function Deposit() {
  const [id, setId] = useState("");
  const [amount, setAmount] = useState("");
  const [msg, setMsg] = useState("");

  const handleDeposit = async () => {
    try {
      await deposit(id, amount);
      setMsg("Deposit successful!");
    } catch {
      setMsg("Error making deposit");
    }
  };

  return (
    <Box sx={{ width: 400, mx: "auto", mt: 5 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Deposit Money</Typography>
      <TextField label="Account ID" fullWidth sx={{ mb: 2 }} value={id} onChange={e => setId(e.target.value)} />
      <TextField label="Amount" fullWidth sx={{ mb: 2 }} value={amount} onChange={e => setAmount(e.target.value)} />
      <Button variant="contained" fullWidth onClick={handleDeposit}>Deposit</Button>
      {msg && <Typography sx={{ mt: 2 }}>{msg}</Typography>}
    </Box>
  );
}
