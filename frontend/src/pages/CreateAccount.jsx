import { useState } from "react";
import axios from "axios";
import { Card, CardContent, TextField, Button, Typography, Alert } from "@mui/material";

export default function CreateAccount() {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState("");
  const [success, setSuccess] = useState("");

  const create = async () => {
    try {
      const res = await axios.post("http://localhost:8080/account/create", {
        name,
        balance: Number(balance),
      });
      setSuccess(`Account created with ID: ${res.data.id}`);
      setName("");
      setBalance("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
      <Card sx={{ width: 400, padding: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>Create Account</Typography>

          {success && <Alert severity="success">{success}</Alert>}

          <TextField
            fullWidth margin="normal" label="Name"
            value={name} onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth margin="normal" label="Opening Balance"
            value={balance} onChange={(e) => setBalance(e.target.value)}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ marginTop: 2 }}
            onClick={create}
          >
            Create
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
