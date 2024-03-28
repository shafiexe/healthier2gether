import React from "react";
import { Box } from "@mui/material";

export const metadata = {
  title: "Helthier2gether",
  description: "Helthier2gether",
};

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <Box>
      <main>{children}</main>
    </Box>
  );
};

export default Layout;
