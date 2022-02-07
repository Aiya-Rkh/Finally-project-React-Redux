import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar1() {
  return (
    <AppBar position="static" style={{ backgroundColor: "dimgrey" }}>
      <Toolbar
        // variant="dense"
        sx={{ my: -1 }}
      >
        <Box
          sx={{
            flexGrow: 0,
            ml: 15,
            bgcolor: "orangered",
            display: { xs: "none", md: "flex" },
          }}
          style={{
            padding: "11px 15px 10px 15px",
            webkitTransform: "skew(-12deg)",
            transform: "skew(-12deg)",
          }}
        >
          <Typography variant="h6">Распродажа</Typography>
        </Box>
        <Link
          to="/new"
          style={{
            listStyleType: "none",
            color: "white",
            marginRight: "3%",
            padding: "0 0 0 40px",
          }}
        >
          <Box sx={{ flexGrow: 0.1, display: { xs: "none", md: "flex" } }}>
            <Typography>Новинки</Typography>
          </Box>
        </Link>
        <Box sx={{ flexGrow: 0.1, display: { xs: "none", md: "flex" } }}>
          <Typography>Одежда</Typography>
        </Box>
        <Box sx={{ flexGrow: 0.1, display: { xs: "none", md: "flex" } }}>
          <Typography>Обувь</Typography>
        </Box>
        <Box sx={{ flexGrow: 0.1, display: { xs: "none", md: "flex" } }}>
          <Typography>Для спорта</Typography>
        </Box>
        <Box sx={{ flexGrow: 0.1, display: { xs: "none", md: "flex" } }}>
          <Typography>Аксессуары</Typography>
        </Box>
        <Box sx={{ flexGrow: 0.1, display: { xs: "none", md: "flex" } }}>
          <Typography>Topshop</Typography>
        </Box>
        <Box sx={{ flexGrow: 0.1, display: { xs: "none", md: "flex" } }}>
          <Typography>Лицо и тело</Typography>
        </Box>
        <Box
          sx={{
            ml: "15%",
            flexGrow: 0,
            display: { md: "none" },
          }}
        >
          <Typography variant="h9">
            ВПЕРВЫЕ ЗДЕСЬ? Получи скидку -20% с промокодом: HEYYOU
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
