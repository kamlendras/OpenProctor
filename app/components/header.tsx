"use client";
import * as React from "react";
import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";
import ColorSchemeToggle from "./ColorSchemeToggle";
import Link from "next/link";
import Button from "@mui/joy/Button";
import Typography from '@mui/joy/Typography';

export default function Header() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  return (
    <Box
      // style={{ position: "fixed" }}
      sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "space-between",
        zIndex: 1000,
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
        // sx={{ display: { xs: "none", sm: "flex" } }}
      >
        <div style={{ display: "flex" }}>
        <img src="/icon.svg" width="40" height="40"/> 
        <Typography level="h1" >    Open Proctor</Typography>
        </div>
      </Stack>

      <Box
        style={{ position: "fixed", right: 20, top: 10 }}
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1.5,
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <ColorSchemeToggle />
        <Link href="/instructions">
        <Button variant="solid" size="lg">
        Instructions
          </Button>
          </Link>
          <Link href="/login">

          <Button variant="solid" size="lg" sx={{ml:1}}>
            Log Out
          </Button>
        </Link>
      </Box>
    </Box>
  );
}