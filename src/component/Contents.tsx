import { Box, Grid, Typography, CardMedia } from "@mui/material";
import { EmailOutlined, PhoneOutlined } from "@mui/icons-material";
import React from "react";

export default function Content() {
  return (
    <>
      <Box m={5} p={4} borderRadius={8} textAlign="center">
        <Box mb={8} textAlign="left">
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "bold",
              textTransform: "capitalize",
              background:
                "-webkit-linear-gradient(45deg, #176A72 0%, #70A19B 50%, teal 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About
          </Typography>
          <hr
            style={{
              borderColor: "#0097B2",
              borderWidth: "2px",
              margin: "0",
              width: 95,
            }}
          />
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box sx={{ pr: 5, mt: 3 }}>
                <Typography
                  variant="body1"
                  mb={2}
                  sx={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "18px",
                    lineHeight: "1.6",
                  }}
                >
                  Health literacy is an individual’s ability to find,
                  understand, and use information to make informed decisions
                  about their healthcare. It is the key to taking control of
                  one’s health. However, according to the CDC, nearly 90% of
                  adults struggle to understand crucial health information if it
                  contains complex terminology.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "18px",
                    lineHeight: "1.6",
                  }}
                >
                  Healthier2gether aims to change this by fostering health
                  literacy education at the middle and high school level.
                  Through informative workshops and our app, HealthLit, our
                  organization strives to create a healthier and more informed
                  Georgia.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <CardMedia component="img" image={"./contact.png"} alt="Image" />
            </Grid>
          </Grid>
        </Box>
        <Box textAlign="left">
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "bold",
              textTransform: "capitalize",
              background:
                "-webkit-linear-gradient(45deg, #176A72 0%, #70A19B 50%, teal 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Contact
          </Typography>
          <hr
            style={{
              borderColor: "#047a8f",
              borderWidth: "2px",
              margin: "0",
              width: 125,
            }}
          />
          <Typography
            variant="body1"
            mt={3}
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "18px",
              lineHeight: "1.6",
            }}
          >
            For more information, please contact:
          </Typography>
          <Typography
            variant="body1"
            fontWeight="bold"
            mb={1}
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#047a8f",
            }}
          >
            Kaushal Sinha
          </Typography>
          <Box display={"flex"} textAlign={"center"}>
            <EmailOutlined color="primary" />
            <Typography
              variant="body1"
              ml={1}
              sx={{
                "& a": { textDecoration: "none", color: "#047a8f" },
                fontFamily: "Roboto, sans-serif",
                fontSize: "18px",
                lineHeight: "1.6",
              }}
            >
              <a href="mailto:example@example.com">john.doe@example.com</a>
            </Typography>
          </Box>
          <Box display={"flex"} textAlign={"center"}>
            <PhoneOutlined color="primary" />
            <Typography
              variant="body1"
              ml={1}
              sx={{
                "& a": { textDecoration: "none", color: "#047a8f" },
                fontFamily: "Roboto, sans-serif",
                fontSize: "18px",
                lineHeight: "1.6",
              }}
            >
              <a href="tel:+1 (123) 456-7890">+1 (123) 456-7890</a>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
