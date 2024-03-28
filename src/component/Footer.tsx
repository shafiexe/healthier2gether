import Box from "@mui/material/Box";
// import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import React from "react";

export const Footer = () => {
  const footerUrls = [
    { name: "Terms of Service", url: "https://www.cloudsteer.io/terms" },
    { name: "Privacy Policy", url: "https://www.cloudsteer.io/privacy" },
  ];

  return (
    <Box
      component={"footer"}
      sx={{
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: { md: 50 },
        backgroundImage: 'url("./bg2.jpeg")',
        backgroundSize: "cover",
        alignContent: "center",
      }}
    >
      <Typography
        display="flex"
        justifyContent="center"
        alignItems={"center"}
        pt={1.5}
        sx={{ flexFlow: "row wrap" }}
        data-testid="footer-content"
        component={"div"}
      >
        <Typography
          color={"primary"}
          display={"inline-flex"}
          sx={{ color: "#047a8f" }}
        >
          ©&nbsp;{new Date().getFullYear()}&nbsp;Healthier2gether
        </Typography>
        {/* {footerUrls.map((f, index) => (
          <Box key={index}>
            {index !== footerUrls.length && (
              <Typography color={"primary"} component={"span"}>
                &nbsp;|&nbsp;
              </Typography>
            )}
            <Link href={f.url} target="_blank" rel="noopener noreferrer">
              {f.name}
            </Link>
          </Box>
        ))} */}
      </Typography>
    </Box>
  );
};

export default Footer;
