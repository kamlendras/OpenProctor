"use client";
import React from "react";
import Sheet from "@mui/joy/Sheet";
import CssBaseline from "@mui/joy/CssBaseline";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "next/link";
import Stack from "@mui/joy/Stack";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/router";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase-config"; // Adjust the import path as needed

export default function LoginFinal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const router = useRouter();

  // Function to generate a random role number
  function generateRoleNumber() {
    return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit number
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    if (!username.trim()) {
      return setError("Username is required");
    }

    if (!dateOfBirth) {
      return setError("Date of birth is required");
    }

    if (!phoneNumber.trim()) {
      return setError("Phone number is required");
    }

    try {
      setError("");
      setLoading(true);
      
      // Create user account
      const userCredential = await signup(email, password);
      const user = userCredential.user;
      
      // Generate role number
      const roleNumber = generateRoleNumber();
      
      // Save additional user data to Firestore
      await setDoc(doc(db, "user", user.uid), {
        email: email,
        username: username.trim(),
        dateOfBirth: dateOfBirth,
        phoneNumber: phoneNumber.trim(),
        roleNumber: roleNumber,
        createdAt: new Date().toISOString(),
        uid: user.uid
      });
      
      router.push("/dashboard");
    } catch (error) {
      setError("Failed to create an account: " + error.message);
    }
    setLoading(false);
  }

  return (
    <main>
      <CssBaseline />
      <Sheet
        sx={{
          width: 320,
          mx: "auto",
          my: 4,
          py: 3,
          px: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "lg",
          boxShadow: "lg",
        }}
        variant="soft"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          {error && <div style={{ color: 'red', marginBottom: '8px' }}>{error}</div>}
          <Typography level="body-sm">Sign up to continue.</Typography>
        </div>
        <Stack sx={{ gap: 4, mt: 0 }}>
          <form onSubmit={handleSubmit}>
            <Stack sx={{ gap: 2 }}>
              <FormControl required>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                />
              </FormControl>
              
              <FormControl required>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </FormControl>
              
              <FormControl required>
                <FormLabel>Date of Birth</FormLabel>
                <Input
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  required
                />
              </FormControl>
              
              <FormControl required>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your phone number"
                  required
                />
              </FormControl>
              
              <FormControl required>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </FormControl>
              
              <FormControl required>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  required
                />
              </FormControl>
            </Stack>
            
            <Typography level="body-sm" sx={{ mt: 2 }}>
              Already have an account?{" "}
              <Link href="/login" level="title-sm">
                Log In
              </Link>
            </Typography>
            
            <Stack sx={{ gap: 4, mt: 2 }}>
              <Button disabled={loading} type="submit">
                {loading ? "Creating Account..." : "Sign Up"}
              </Button>
            </Stack>
          </form>
        </Stack>
      </Sheet>
    </main>
  );
}

// "use client";
// import React from "react";
// import Sheet from "@mui/joy/Sheet";
// import CssBaseline from "@mui/joy/CssBaseline";
// import Typography from "@mui/joy/Typography";
// import FormControl from "@mui/joy/FormControl";
// import FormLabel from "@mui/joy/FormLabel";
// import Input from "@mui/joy/Input";
// import Button from "@mui/joy/Button";
// import Link from "next/link";
// import Stack from "@mui/joy/Stack";
// import { useState } from "react";
// import { useAuth } from "../contexts/AuthContext";
// import { useRouter } from "next/router";
// import { doc, setDoc } from "firebase/firestore";
// import { db } from "../firebase-config"; // Adjust the import path as needed

// export default function LoginFinal() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [dateOfBirth, setDateOfBirth] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { signup } = useAuth();
//   const router = useRouter();

//   // Function to generate a random role number
//   function generateRoleNumber() {
//     return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit number
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       return setError("Passwords do not match");
//     }

//     if (!username.trim()) {
//       return setError("Username is required");
//     }

//     if (!dateOfBirth) {
//       return setError("Date of birth is required");
//     }

//     try {
//       setError("");
//       setLoading(true);
      
//       // Create user account
//       const userCredential = await signup(email, password);
//       const user = userCredential.user;
      
//       // Generate role number
//       const roleNumber = generateRoleNumber();
      
//       // Save additional user data to Firestore
//       await setDoc(doc(db, "users", user.uid), {
//         email: email,
//         username: username.trim(),
//         dateOfBirth: dateOfBirth,
//         roleNumber: roleNumber,
//         createdAt: new Date().toISOString(),
//         uid: user.uid
//       });
      
//       router.push("/dashboard");
//     } catch (error) {
//       setError("Failed to create an account: " + error.message);
//     }
//     setLoading(false);
//   }

//   return (
//     <main>
//       <CssBaseline />
//       <Sheet
//         sx={{
//           width: 320,
//           mx: "auto",
//           my: 4,
//           py: 3,
//           px: 2,
//           display: "flex",
//           flexDirection: "column",
//           gap: 2,
//           borderRadius: "lg",
//           boxShadow: "lg",
//         }}
//         variant="soft"
//       >
//         <div>
//           <Typography level="h4" component="h1">
//             <b>Welcome!</b>
//           </Typography>
//           {error && <div style={{ color: 'red', marginBottom: '8px' }}>{error}</div>}
//           <Typography level="body-sm">Sign up to continue.</Typography>
//         </div>
//         <Stack sx={{ gap: 4, mt: 0 }}>
//           <form onSubmit={handleSubmit}>
//             <Stack sx={{ gap: 2 }}>
//               <FormControl required>
//                 <FormLabel>Username</FormLabel>
//                 <Input
//                   type="text"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   placeholder="Enter your username"
//                   required
//                 />
//               </FormControl>
              
//               <FormControl required>
//                 <FormLabel>Email</FormLabel>
//                 <Input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email"
//                   required
//                 />
//               </FormControl>
              
//               <FormControl required>
//                 <FormLabel>Date of Birth</FormLabel>
//                 <Input
//                   type="date"
//                   value={dateOfBirth}
//                   onChange={(e) => setDateOfBirth(e.target.value)}
//                   required
//                 />
//               </FormControl>
              
//               <FormControl required>
//                 <FormLabel>Password</FormLabel>
//                 <Input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Enter your password"
//                   required
//                 />
//               </FormControl>
              
//               <FormControl required>
//                 <FormLabel>Confirm Password</FormLabel>
//                 <Input
//                   type="password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   placeholder="Confirm your password"
//                   required
//                 />
//               </FormControl>
//             </Stack>
            
//             <Typography level="body-sm" sx={{ mt: 2 }}>
//               Already have an account?{" "}
//               <Link href="/login" level="title-sm">
//                 Log In
//               </Link>
//             </Typography>
            
//             <Stack sx={{ gap: 4, mt: 2 }}>
//               <Button disabled={loading} type="submit">
//                 {loading ? "Creating Account..." : "Sign Up"}
//               </Button>
//             </Stack>
//           </form>
//         </Stack>
//       </Sheet>
//     </main>
//   );
// }

// "use client";
// import React from "react";
// import Sheet from "@mui/joy/Sheet";
// import CssBaseline from "@mui/joy/CssBaseline";
// import Typography from "@mui/joy/Typography";
// import FormControl from "@mui/joy/FormControl";
// import FormLabel from "@mui/joy/FormLabel";
// import Input from "@mui/joy/Input";
// import Button from "@mui/joy/Button";
// import Link from "next/link";
// import Stack from "@mui/joy/Stack";
// import { useState } from "react";
// import { useAuth } from "../contexts/AuthContext";
// import { useRouter } from "next/router";

// export default function LoginFinal() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { signup } = useAuth();
//   const router = useRouter();

//   async function handleSubmit(e) {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       return setError("Passwords do not match");
//     }

//     try {
//       setError("");
//       setLoading(true);
//       await signup(email, password);
//       router.push("/dashboard");
//     } catch (error) {
//       setError("Failed to create an account: " + error.message);
//     }
//     setLoading(false);
//   }
//   return (
//     <main>
//       <CssBaseline />
//       <Sheet
//         sx={{
//           width: 320,
//           mx: "auto",
//           my: 4,
//           py: 3,
//           px: 2,
//           display: "flex",
//           flexDirection: "column",
//           gap: 2,
//           borderRadius: "lg",
//           boxShadow: "lg",
//         }}
//         variant="soft"
//       >
//         <div>
//           <Typography level="h4" component="h1">
//             <b>Welcome!</b>
//           </Typography>
//           {error && <div>{error}</div>}
//           <Typography level="body-sm">Sign up to continue.</Typography>
//         </div>
//         <Stack sx={{ gap: 4, mt: 0 }}>
//           <form onSubmit={handleSubmit}>
//             <FormControl required>
//               <FormLabel>Email</FormLabel>
//               <Input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </FormControl>
//             <FormControl required>
//               <FormLabel>Password</FormLabel>
//               <Input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </FormControl>
//             <FormControl required>
//               <FormLabel>Confirm Password</FormLabel>
//               <Input
//                 type="password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />
//             </FormControl>
//             <Typography level="body-sm">
//               Already have an account?{" "}
//               <Link href="/login" level="title-sm">
//                 Log In
//               </Link>
//             </Typography>
//             <Stack sx={{ gap: 4, mt: 2 }}>
//               <Button disabled={loading} type="submit">
//                 {loading ? "Creating Account..." : "Sign Up"}
//               </Button>
//             </Stack>
//           </form>
//         </Stack>
//       </Sheet>
//     </main>
//   );
// }
