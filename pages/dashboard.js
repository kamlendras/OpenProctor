import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { subjects } from "../data/questions";
import { db } from "../firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Chip,
  CircularProgress,
  Stack,
  Divider,
} from "@mui/joy";
import { PlayArrow, Assessment } from "@mui/icons-material";
import Question from "../components/question";
import Result from "../components/result";

export default function Dashboard() {
  const { currentUser } = useAuth();
  const router = useRouter();
  const [testResults, setTestResults] = useState([]);

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
      return;
    }

    fetchTestResults();
  }, [currentUser]);

  const fetchTestResults = async () => {
    if (!currentUser) return;

    try {
      const q = query(
        collection(db, "testResults"),
        where("userId", "==", currentUser.uid)
      );
      const querySnapshot = await getDocs(q);
      const results = [];
      querySnapshot.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setTestResults(
        results.sort((a, b) => b.timestamp.seconds - a.timestamp.seconds)
      );
    } catch (error) {
      console.error("Error fetching test results:", error);
    }
  };

  const startTest = (subject) => {
    router.push(`/test/${encodeURIComponent(subject)}`);
  };

  const getScoreColor = (score) => {
    if (score >= 24) return "success";
    if (score >= 18) return "warning";
    return "danger";
  };

  const getScoreLabel = (score) => {
    if (score >= 24) return "Excellent";
    if (score >= 18) return "Good";
    return "Needs Improvement";
  };

  if (!currentUser) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
      >
        <CircularProgress size="lg" />
      </Box>
    );
  }

  return (
    <>
      <Box sx={{ maxWidth: 1200, mx: "auto", p: 3 }}>
        <Typography level="h1" sx={{ mb: 4, fontWeight: "bold" }}>
          Test Dashboard
        </Typography>

        <Grid container spacing={4}>
          <Grid xs={12} md={6}>
            <Typography level="h2" sx={{ mb: 3, fontWeight: "bold" }}>
              Available Tests
            </Typography>
            <Stack spacing={2}>
              {subjects.map((subject) => (
                <Card
                  key={subject}
                  variant="outlined"
                  sx={{ transition: "all 0.2s" }}
                >
                  <CardContent>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box>
                        <Typography
                          level="title-lg"
                          sx={{ fontWeight: "semibold" }}
                        >
                          {subject}
                        </Typography>
                        <Typography
                          level="body-sm"
                          sx={{ color: "text.secondary" }}
                        >
                          140 Questions
                        </Typography>
                      </Box>
                      <Button
                        variant="solid"
                        color="primary"
                        startDecorator={<PlayArrow />}
                        onClick={() => startTest(subject)}
                        sx={{ borderRadius: "lg" }}
                      >
                        Start Test
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Typography level="h2" sx={{ mb: 3, fontWeight: "bold" }}>
              Previous Results
            </Typography>
            <Box sx={{ maxHeight: 400, overflowY: "auto" }}>
              <Stack spacing={2}>
                {testResults.length === 0 ? (
                  <Card variant="soft" color="neutral">
                    <CardContent>
                      <Box display="flex" alignItems="center" gap={2}>
                        <Assessment sx={{ color: "text.secondary" }} />
                        <Typography
                          level="body-md"
                          sx={{ color: "text.secondary" }}
                        >
                          No test results yet. Take a test to see your results
                          here!
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                ) : (
                  testResults.map((result) => (
                    <Card key={result.id} variant="outlined">
                      <CardContent>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="flex-start"
                        >
                          <Box sx={{ flex: 1 }}>
                            <Typography
                              level="title-md"
                              sx={{ fontWeight: "semibold", mb: 1 }}
                            >
                              {result.subject}
                            </Typography>
                            <Typography
                              level="body-sm"
                              sx={{ color: "text.secondary", mb: 1 }}
                            >
                              Score: {result.score}/30 (
                              {Math.round((result.score / 30) * 100)}%)
                            </Typography>
                            <Typography
                              level="body-xs"
                              sx={{ color: "text.tertiary" }}
                            >
                              {new Date(
                                result.timestamp.seconds * 1000
                              ).toLocaleDateString()}
                            </Typography>
                          </Box>
                          <Chip
                            variant="soft"
                            color={getScoreColor(result.score)}
                            size="sm"
                          >
                            {getScoreLabel(result.score)}
                          </Chip>
                        </Box>
                      </CardContent>
                    </Card>
                  ))
                )}
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <br />
        <Result />
        <Question />
      </Box>
    </>
  );
}
