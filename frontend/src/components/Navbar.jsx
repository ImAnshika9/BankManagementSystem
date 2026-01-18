import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* Title */}
      <Box sx={{
        width: "100%",
        textAlign: "center",
        background: "#1976d2",
        color: "white",
        padding: "10px 0",
        fontSize: "26px",
        fontWeight: "bold",
        letterSpacing: "1px"
      }}>
        Bank System
      </Box>

      {/* Menu */}
      <AppBar position="static" sx={{ background: "#1976d2" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/create">Create Account</Button>
          <Button color="inherit" component={Link} to="/details">View Account</Button>
          <Button color="inherit" component={Link} to="/deposit">Deposit</Button>
          <Button color="inherit" component={Link} to="/withdraw">Withdraw</Button>
          <Button color="inherit" component={Link} to="/transactions">Transactions</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
