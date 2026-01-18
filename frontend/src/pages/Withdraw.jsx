import { useState } from "react";
import { withdraw } from "../services/api";
import { TextField, Button, Typography, Box } from "@mui/material";

export default function Withdraw() {
  const [id, setId] = useState("");
  const [amount, setAmount] = useState("");
  const [msg, setMsg] = useState("");

  const handleWithdraw = async () => {
    try {
      await withdraw(id, amount);
      setMsg("Withdrawal successful!");
    } catch {
      setMsg("Error withdrawing money");
    }
  };

  return (
    <Box sx={{ width: 400, mx: "auto", mt: 5 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Withdraw Money</Typography>
      <TextField label="Account ID" fullWidth sx={{ mb: 2 }} value={id} onChange={e => setId(e.target.value)} />
      <TextField label="Amount" fullWidth sx={{ mb: 2 }} value={amount} onChange={e => setAmount(e.target.value)} />
      <Button variant="contained" fullWidth onClick={handleWithdraw}>Withdraw</Button>
      {msg && <Typography sx={{ mt: 2 }}>{msg}</Typography>}
    </Box>
  );
}
