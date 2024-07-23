"use client";
import * as React from "react";
import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";
import ColorSchemeToggle from "./ColorSchemeToggle";
import Link from "next/link";
import Button from "@mui/joy/Button";
const items = [
  { imageLight: 'url("/icon_black.svg")', imageDark: 'url("/icon_white.svg")' },
];

export default function Header() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];
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
          <Box
            sx={{
              mt: 1,
              ml: 5,
              width: 227,
              height: 60,
              backgroundSize: "contain",
              backgroundImage: (theme) =>
                theme.palette.mode === "light"
                  ? items[selectedItemIndex].imageLight
                  : items[selectedItemIndex].imageDark,
            }}
          />
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