import { Metadata } from "next";
import NavBar from "../component/NavBar";
import { Box, Typography } from "@mui/material";
import Footer from "../component/Footer";
import React from "react";
import Content from "../component/Contents";
// import "../styles/tailwind.css";

export const metadata: Metadata = {
  title: "Helthier2gether",
};

export default function Page() {
  return (
    <Box
      sx={{
        backgroundImage:
          'url("https://ushasoftware.com/decoration.svg"), url("https://ushasoftware.com/bg.svg")',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat, repeat",
      }}
    >
      <NavBar />
      <Box sx={{ m: { sx: 5, md: 20, lg: 20 }, mt: { xs: 10, md: 2 } }} pb={10}>
        <Typography
          variant="h1"
          sx={{
            fontSize: 56,
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            textTransform: "capitalize",
            textAlign: "center",
            background:
              "-webkit-linear-gradient(45deg, #0097B2 0%, teal 50%, #22606b 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          mb={5}
          maxWidth={800}
        >
          Ignite the spark in your health literacy journey
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: 36,
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            textAlign: "center",
            color: "#2e2828",
          }}
          maxWidth={800}
        >
          Take control of your health by learning more about the fundamentals of
          health literacy.
        </Typography>
      </Box>
      <Content />
      <Footer />
    </Box>
  );
}
