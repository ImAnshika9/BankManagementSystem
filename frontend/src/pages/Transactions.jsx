import { useEffect, useState } from "react";
import axios from "axios";
import { TextField, Button, Card, CardContent, Typography, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

export default function Transactions() {
  const [id, setId] = useState("");
  const [rows, setRows] = useState([]);

  const fetchTxn = async () => {
    const res = await axios.get(`http://localhost:8080/account/${id}/transactions`);
    setRows(res.data);
  };

  return (
    <div style={{ padding: 30 }}>
      <Typography variant="h4" gutterBottom>Transaction History</Typography>

      <TextField
        label="Account ID"
        value={id}
        onChange={(e)=>setId(e.target.value)}
        sx={{ mr: 2 }}
      />

      <Button variant="contained" onClick={fetchTxn}>Fetch</Button>

      {rows.length > 0 && (
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><b>Type</b></TableCell>
                  <TableCell><b>Amount</b></TableCell>
                  <TableCell><b>Balance</b></TableCell>
                  <TableCell><b>Time</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((r,i)=>(
                  <TableRow key={i}>
                    <TableCell>{r.type}</TableCell>
                    <TableCell>{r.amount}</TableCell>
                    <TableCell>{r.closingBalance}</TableCell>
                    <TableCell>{r.timestamp.replace("T", " ")}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
