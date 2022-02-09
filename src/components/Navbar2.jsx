import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar2() {
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "darkgrey" }}
      sx={{ display: { sx: "none", md: "flex" } }}
    >
      <Toolbar sx={{ my: -1, display: { xs: "none", md: "flex" } }}>
        <Box
          sx={{
            flexGrow: 0,
            ml: "7%",
          }}
          style={{
            color: "white",
            border: "2px solid",
            padding: "6px",
            marginRight: "18%",
          }}
        >
          <Link to="/new">ЖЕНСКОЕ</Link>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            // mr: "15%",
          }}
        >
          <Typography variant="h10">
            ВПЕРВЫЕ ЗДЕСЬ? Получи скидку -20% с промокодом: HEYYOU
          </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 0,
          }}
          style={{ border: "2px solid", padding: "6px", marginRight: "7%" }}
        >
          <Link to="/">МУЖСКОЕ</Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
