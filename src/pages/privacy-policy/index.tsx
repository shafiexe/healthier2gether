import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, CardMedia, Link, useMediaQuery, useTheme } from "@mui/material";
import Footer from "@/component/Footer";

function PrivacyPolicy() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          "& p": { fontSize: 18 },
          "& h2, h4": {
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            textTransform: "capitalize",
            background:
              "-webkit-linear-gradient(45deg, #176A72 0%, #70A19B 50%, teal 80%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          },
          backgroundImage: 'url("https://ushasoftware.com/bg.svg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat, repeat",
        }}
      >
        <Box
          position={isMobile ? "relative" : "absolute"}
          sx={{ "& a": { textDecoration: "none", color: "#047a8f" } }}
        >
          <Link href="/">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{
                height: isMobile ? 50 : 120,
                width: isMobile ? 50 : 90,
                ml: { xs: 5, md: 12 },
              }}
            >
              <CardMedia
                sx={{
                  height: isMobile ? 50 : 120,
                  width: isMobile ? 50 : 90,
                }}
                image={"./app_logo.png"}
                title="green iguana"
              />
              {!isMobile && (
                <Typography
                  variant="h6"
                  fontSize={16}
                  mt={1}
                  fontWeight="bold"
                  color={"#0097B2"}
                >
                  Healthier2gether
                </Typography>
              )}
            </Box>
          </Link>
        </Box>
        <Typography variant="h2" textAlign={"center"} mb={8}>
          Privacy Policy
        </Typography>
        <Box sx={{ m: { xs: 2, md: 10 }, mb: 5 }}>
          <Typography sx={{ mb: 1 }}>
            <strong>Last modified</strong>: April 15, 2024
          </Typography>
          <Typography variant="h4" gutterBottom>
            Introduction
          </Typography>
          <Typography variant="body1" paragraph>
            Thank you for using Healthier2gether, a static application designed
            to provide health insurance usage guidance and tips. Your privacy
            and trust are important to us, and we are committed to protecting
            the information you share with us. This Privacy Policy explains how
            we collect, use, and disclose information when you use our
            application.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Information We Collect
          </Typography>
          <Typography variant="body1" paragraph>
            Healthier2gether does not collect any personal information,
            including customer contact details or authentication credentials. As
            a static application, we do not require any user registration,
            login, or interaction with personal data.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Information Usage
          </Typography>
          <Typography variant="body1" paragraph>
            The information presented in Healthier2gether is for informational
            purposes only. We do not track, store, or analyze any user data,
            including browsing activity or interactions with the application.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Third-Party Services
          </Typography>
          <Typography variant="body1" paragraph>
            Healthier2gether does not integrate with any third-party services,
            and we do not share any information with third parties.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Data Security
          </Typography>
          <Typography variant="body1" paragraph>
            We implement security measures to protect any information that may
            be stored within the application. However, since we do not collect
            any personal information, the risk of data breach or unauthorized
            access is minimal.
          </Typography>
          <Typography variant="h4" gutterBottom>
            {"Children's Privacy"}
          </Typography>
          <Typography variant="body1" paragraph>
            Healthier2gether is not directed to children under the age of 13,
            and we do not knowingly collect any personal information from
            children.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Changes to this Privacy Policy
          </Typography>
          <Typography variant="body1" paragraph>
            We may update this Privacy Policy from time to time. Any changes
            will be reflected on this page, and we encourage you to review this
            Privacy Policy periodically for any updates.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" component={"div"} sx={{ fontSize: 18 }}>
            If you have any questions or concerns about this Privacy Policy or
            our practices, please contact us at:
            <Typography component={"div"}>
              <a
                href="mailto:admin@healthliteracy.app"
                style={{ fontSize: 18, color: "#237178" }}
              >
                admin@healthliteracy.app
              </a>
              <Typography my={1} sx={{ fontSize: 18 }}>
                or via our number:{" "}
              </Typography>
              <a
                href="tel:+1 (123) 456-7890"
                style={{ fontSize: 18, color: "#237178" }}
              >
                tel:+1 (123) 456-7890
              </a>
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
