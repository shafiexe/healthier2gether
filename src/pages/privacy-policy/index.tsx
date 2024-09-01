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
          "& p": { fontSize: 14 },
          "& h6": { fontSize: 18 },
          "& h4": { fontSize: 24 },
          "& h4, h6": {
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
          justifyContent={isMobile ? "center" : "left"}
          display={"flex"}
          mb={1}
          sx={{ "& a": { textDecoration: "none", color: "#047a8f" } }}
        >
          <Link href="/">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{
                height: 120,
                width: 90,
                ml: { sm: 5, md: 13 },
              }}
            >
              <CardMedia
                sx={{
                  height: isMobile ? 90 : 120,
                  width: isMobile ? 90 : 90,
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
        <Typography
          fontSize={{ xs: 36, md: 56 }}
          variant="h4"
          textAlign={"center"}
          mb={8}
        >
          Privacy Policy
        </Typography>
        <Box sx={{ m: { xs: 2, md: 10 }, mb: 5 }}>
          <Typography sx={{ mb: 1, mt: 15 }}>
            <strong>Last modified</strong>: September 01, 2024
          </Typography>
          <Typography fontSize={{ xs: 28, md: 36 }} variant="h6" gutterBottom>
            Introduction
          </Typography>
          <Typography variant="body1" paragraph>
            This Privacy Policy is issued by Healthier2gether LLC, the entity
            responsible for the HealthLit application.
          </Typography>
          <Typography fontSize={{ xs: 28, md: 36 }} variant="h6" gutterBottom>
            Information We Collect
          </Typography>
          <Typography variant="body1" paragraph>
            Healthier2gether LLC does not collect any data.
          </Typography>
          <Typography fontSize={{ xs: 28, md: 36 }} variant="h6" gutterBottom>
            Information Usage
          </Typography>
          <Typography variant="body1" paragraph>
            Healthier2gether LLC does not collect any data.
          </Typography>
          <Typography fontSize={{ xs: 28, md: 36 }} variant="h6" gutterBottom>
            Third-Party Services
          </Typography>
          <Typography variant="body1" paragraph>
            Healthier2gether does not integrate with any third-party services,
            and Healthier2gether LLC do not share any information with third
            parties.
          </Typography>
          <Typography fontSize={{ xs: 28, md: 36 }} variant="h6" gutterBottom>
            Data Security
          </Typography>
          <Typography variant="body1" paragraph>
            Healthier2gether LLC implement security measures to protect any
            information that may be stored within the application. However,
            since Healthier2gether LLC do not collect any personal information,
            the risk of data breach or unauthorized access is minimal.
          </Typography>
          <Typography fontSize={{ xs: 28, md: 36 }} variant="h6" gutterBottom>
            {"Children's Privacy"}
          </Typography>
          <Typography variant="body1" paragraph>
            Healthier2gether is not directed to children under the age of 13,
            and Healthier2gether LLC do not knowingly collect any personal
            information from children.
          </Typography>
          <Typography fontSize={{ xs: 28, md: 36 }} variant="h6" gutterBottom>
            Changes to this Privacy Policy
          </Typography>
          <Typography variant="body1" paragraph>
            Healthier2gether LLC may update this Privacy Policy from time to
            time. Any changes will be reflected on this page, and
            Healthier2gether LLC encourage you to review this Privacy Policy
            periodically for any updates.
          </Typography>
          <Typography fontSize={{ xs: 28, md: 36 }} variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" component={"div"} sx={{ fontSize: 14 }}>
            Healthier2gether is a nonprofit organization committed to enhancing
            health literacy among K-12 students in Georgia. Healthier2gether LLC
            believe that by equipping young people with the knowledge and skills
            to understand their health, Healthier2gether LLC can empower them to
            make informed decisions for a lifetime of well-being.
            <Typography
              component={"div"}
              style={{ marginTop: 15, fontSize: 14 }}
            >
              For any questions about this privacy policy or our data practices,
              please contact us at
              <a
                href="mailto:admin@healthliteracy.app"
                style={{ marginLeft: 5, fontSize: 14, color: "#237178" }}
              >
                admin@healthliteracy.app
              </a>
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Footer home />
    </>
  );
}

export default PrivacyPolicy;
