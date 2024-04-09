import {
  Box,
  Grid,
  Typography,
  CardMedia,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { EmailOutlined, PhoneOutlined } from "@mui/icons-material";
import React from "react";
import ContactForm from "./Contact";
import { useRouter } from "next/router";

export default function Content() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();
  const aboutRef: any = React.useRef(null);
  const getInvolvedRef: any = React.useRef(null);

  React.useEffect(() => {
    const { search } = router.query;
    // Check if the query parameter exists and matches the element's ID
    if (search === "about") {
      // Scroll the element into view
      if (aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else if (search === "get-involved") {
      // Scroll the element into view
      if (getInvolvedRef.current) {
        getInvolvedRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router.query]);

  return (
    <>
      <Box
        sx={{ m: { xs: 1, md: 5 }, p: { xs: 1, md: 5 } }}
        borderRadius={8}
        textAlign="center"
      >
        <Box mb={8} textAlign="left">
          <Typography
            ref={aboutRef}
            variant="h4"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: { xs: 28, md: 34 },
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
              width: isMobile ? 75 : 95,
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
              <CardMedia component="img" image={"./contact1.png"} alt="Image" />
            </Grid>
          </Grid>
        </Box>
        <Box textAlign="left">
          <Typography
            ref={getInvolvedRef}
            variant="h4"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "bold",
              fontSize: { xs: 28, md: 34 },
              textTransform: "capitalize",
              background:
                "-webkit-linear-gradient(45deg, #176A72 0%, #70A19B 50%, teal 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Get Involved
          </Typography>
          <hr
            style={{
              borderColor: "#047a8f",
              borderWidth: "2px",
              margin: "0",
              width: isMobile ? 165 : 200,
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
            Our health literacy application offers a direct way for users to
            reach out to us without requiring authentication. Simply send an
            inquiry message, and our team will respond promptly. Your engagement
            helps us continue our mission of promoting health knowledge and
            informed decision-making.
          </Typography>
          <ContactForm />
        </Box>
      </Box>
    </>
  );
}
