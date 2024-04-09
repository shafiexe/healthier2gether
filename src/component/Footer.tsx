import Box from "@mui/material/Box";
// import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  const footerUrls = [{ name: "Privacy Policy", url: "/privacy-policy" }];

  return (
    <Box
      component={"footer"}
      sx={{
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        backgroundImage:
          'url("https://ushasoftware.com/footer-decoration.svg"), linear-gradient(277.81deg,#7487c8 -.92%,#76a9de 35.24%,#70bcd4 71.61%,#b7ebd9 99.99%)',
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
        p={2}
      >
        <Typography
          color={"primary"}
          display={"inline-flex"}
          sx={{ color: "#fff" }}
        >
          ©&nbsp;{new Date().getFullYear()}&nbsp;Healthier2gether
        </Typography>
        {footerUrls.map((f, index) => (
          <Box key={index}>
            {index !== footerUrls.length && (
              <Typography color={"primary"} component={"span"}>
                &nbsp;|&nbsp;
              </Typography>
            )}
            <Link
              style={{ color: "#fff" }}
              href={f.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {f.name}
            </Link>
          </Box>
        ))}
      </Typography>
    </Box>
  );
};

export default Footer;
