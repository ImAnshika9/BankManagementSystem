import { useState } from "react";
import axios from "axios";
import { Card, CardContent, TextField, Button, Typography, Alert } from "@mui/material";

export default function AccountDetails() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const fetchAcc = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/account/${id}`);
      setData(res.data);
      setError("");
    } catch {
      setError("No account found!");
      setData(null);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
      <Card sx={{ width: 400, padding: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>Check Account</Typography>

          {error && <Alert severity="error">{error}</Alert>}

          <TextField
            fullWidth label="Account ID"
            margin="normal"
            value={id}
            onChange={(e)=>setId(e.target.value)}
          />

          <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={fetchAcc}>Search</Button>

          {data && (
            <div style={{ marginTop: 20 }}>
              <Typography><b>Name:</b> {data.name}</Typography>
              <Typography><b>Balance:</b> ₹ {data.balance}</Typography>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
