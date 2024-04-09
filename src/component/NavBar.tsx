import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  CardMedia,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";

const NavBar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar
        sx={{
          boxShadow: "none",
          background: "transparent",
        }}
        position="static"
      >
        <Toolbar
          sx={{
            "& a": { textDecoration: "none", color: "#047a8f" },
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "center" : "flex-start",
          }}
        >
          <Box
            m={5}
            mt={2}
            sx={{
              flexGrow: 1,
              display: isMobile ? "flex" : "initial",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href="/">
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{ height: isMobile ? 50 : 120, width: isMobile ? 50 : 90 }}
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
                  >
                    Healthier2gether
                  </Typography>
                )}
              </Box>
            </Link>
          </Box>
          <Box
            display={"flex"}
            m={3}
            sx={{
              "& h2": {
                m: 2,
                px: 1,
                fontSize: 22,
              },
              "& h6": {
                px: 1,
                fontSize: 20,
              },
              "& h2:hover": { textDecoration: "underline" },
            }}
          >
            <Link href="?search=about">
              <Typography component={isMobile ? "h6" : "h2"} color="inherit">
                About
              </Typography>
            </Link>
            <Link href="/blog" target="_blank">
              <Typography component={isMobile ? "h6" : "h2"} color="inherit">
                Blog
              </Typography>
            </Link>
            <Link href="?search=get-involved">
              <Typography component={isMobile ? "h6" : "h2"} color="inherit">
                Get Involved
              </Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
