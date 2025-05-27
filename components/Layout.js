"use client";
import { useAuth } from "../contexts/AuthContext";
import * as React from "react";
import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";
import ColorSchemeToggle from "./ColorSchemeToggle";
import Link from "next/link";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";

export default function Layout({ children }) {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const [open, setOpen] = React.useState(false);
   

  return (
        
    <CssVarsProvider disableTransitionOnChange defaultMode="dark">
      <CssBaseline />
      
      <div className="min-h-screen bg-gray-100">
        <nav>
          <Box
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
            >
              <div style={{ display: "flex" }}>
                <img src="/icon.svg" width="40" height="40" />
                <Typography level="h1" className="tab_title">
                  Open Proctor
                </Typography>
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

              {currentUser && (
                <div className="flex items-center gap-4">
                  <Button
                    variant="solid"
                    size="lg"
                    sx={{ ml: 1 }}
                    onClick={handleLogout}
                  >
                    Log Out
                  </Button>
                </div>
              )}
            </Box>
          </Box>
        </nav>
        <main>{children}</main>
      </div>
    </CssVarsProvider>
 
  );
}
