// pages/admin/dashboard.js
import { useState, useEffect } from 'react';
import {
  CssVarsProvider,
  CssBaseline,
  Box,
  Typography,
  Card,
  CardContent,
  Table,
  Sheet,
  Chip,
  Button,
  Input,
  Select,
  Option,
  Modal,
  ModalDialog,
  ModalClose,
  Divider,
  Stack,
  Grid,
  IconButton,
  Alert
} from '@mui/joy';
import { Search, Eye, Download, Filter, Users, FileText, BarChart3, Calendar } from 'lucide-react';
import { collection, getDocs, query, orderBy, where } from 'firebase/firestore';
import { db } from '../firebase-config'; // Adjust path to your firebase config

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [testResults, setTestResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalTests: 0,
    averageScore: 0,
    passRate: 0
  });

  // Fetch data from Firebase
  useEffect(() => {
    fetchData();
  }, []);

  // Filter results based on search and filters
  useEffect(() => {
    filterResults();
  }, [testResults, searchTerm, subjectFilter, dateFilter]);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Fetch users
      const usersQuery = query(collection(db, "user"), orderBy("createdAt", "desc"));
      const usersSnapshot = await getDocs(usersQuery);
      const usersData = usersSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setUsers(usersData);

      // Fetch test results
      const testResultsQuery = query(collection(db, "testResults"), orderBy("timestamp", "desc"));
      const testResultsSnapshot = await getDocs(testResultsQuery);
      const testResultsData = testResultsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTestResults(testResultsData);

      // Calculate stats
      calculateStats(usersData, testResultsData);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (usersData, testResultsData) => {
    const totalUsers = usersData.length;
    const totalTests = testResultsData.length;
    const averageScore = totalTests > 0 
      ? testResultsData.reduce((sum, test) => sum + (test.score / test.totalQuestions * 100), 0) / totalTests
      : 0;
    const passRate = totalTests > 0 
      ? (testResultsData.filter(test => (test.score / test.totalQuestions * 100) >= 60).length / totalTests * 100)
      : 0;

    setStats({
      totalUsers,
      totalTests,
      averageScore: Math.round(averageScore * 100) / 100,
      passRate: Math.round(passRate * 100) / 100
    });
  };

  const filterResults = () => {
    let filtered = [...testResults];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(result => 
        result.userEmail?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        result.subject?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Subject filter
    if (subjectFilter !== 'all') {
      filtered = filtered.filter(result => result.subject === subjectFilter);
    }

    // Date filter
    if (dateFilter !== 'all') {
      const now = new Date();
      const filterDate = new Date();
      
      switch (dateFilter) {
        case 'today':
          filterDate.setHours(0, 0, 0, 0);
          filtered = filtered.filter(result => 
            result.timestamp?.toDate() >= filterDate
          );
          break;
        case 'week':
          filterDate.setDate(now.getDate() - 7);
          filtered = filtered.filter(result => 
            result.timestamp?.toDate() >= filterDate
          );
          break;
        case 'month':
          filterDate.setMonth(now.getMonth() - 1);
          filtered = filtered.filter(result => 
            result.timestamp?.toDate() >= filterDate
          );
          break;
      }
    }

    setFilteredResults(filtered);
  };

  const getUserInfo = (userId) => {
    return users.find(user => user.uid === userId) || {};
  };

  const getScoreColor = (score, total) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return 'success';
    if (percentage >= 60) return 'warning';
    return 'danger';
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return 'N/A';
    return timestamp.toDate ? timestamp.toDate().toLocaleString() : new Date(timestamp).toLocaleString();
  };

  const handleViewDetails = (result) => {
    setSelectedUser(result);
    setModalOpen(true);
  };

  const exportToCSV = () => {
    const headers = ['Student Email', 'Subject', 'Score', 'Total Questions', 'Percentage', 'Date'];
    const csvData = filteredResults.map(result => [
      result.userEmail,
      result.subject,
      result.score,
      result.totalQuestions,
      `${Math.round((result.score / result.totalQuestions) * 100)}%`,
      formatTimestamp(result.timestamp)
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'test_results.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getUniqueSubjects = () => {
    return [...new Set(testResults.map(result => result.subject))];
  };

  if (loading) {
    return (
      <CssVarsProvider>
        <CssBaseline />
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Typography level="h4">Loading dashboard...</Typography>
        </Box>
      </CssVarsProvider>
    );
  }

  return (
    <CssVarsProvider>
      <CssBaseline />
      <Box sx={{ p: 3, backgroundColor: 'background.surface' }}>
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography level="h2" sx={{ mb: 1 }}>
            Pannel
          </Typography>
          <Typography level="body-md" color="neutral">
            Monitor and manage all student test results
          </Typography>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box sx={{ p: 1, borderRadius: 'md', backgroundColor: 'primary.100' }}>
                    <Users size={20} color="var(--joy-palette-primary-500)" />
                  </Box>
                  <Box>
                    <Typography level="h3">{stats.totalUsers}</Typography>
                    <Typography level="body-sm" color="neutral">Total Students</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box sx={{ p: 1, borderRadius: 'md', backgroundColor: 'success.100' }}>
                    <FileText size={20} color="var(--joy-palette-success-500)" />
                  </Box>
                  <Box>
                    <Typography level="h3">{stats.totalTests}</Typography>
                    <Typography level="body-sm" color="neutral">Total Tests</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box sx={{ p: 1, borderRadius: 'md', backgroundColor: 'warning.100' }}>
                    <BarChart3 size={20} color="var(--joy-palette-warning-500)" />
                  </Box>
                  <Box>
                    <Typography level="h3">{stats.averageScore}%</Typography>
                    <Typography level="body-sm" color="neutral">Average Score</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box sx={{ p: 1, borderRadius: 'md', backgroundColor: 'danger.100' }}>
                    <Calendar size={20} color="var(--joy-palette-danger-500)" />
                  </Box>
                  <Box>
                    <Typography level="h3">{stats.passRate}%</Typography>
                    <Typography level="body-sm" color="neutral">Pass Rate</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Filters */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
              <Input
                placeholder="Search by email or subject..."
                startDecorator={<Search size={16} />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ minWidth: 250 }}
              />
              
              <Select
                placeholder="Filter by subject"
                value={subjectFilter}
                onChange={(e, value) => setSubjectFilter(value)}
                sx={{ minWidth: 150 }}
              >
                <Option value="all">All Subjects</Option>
                {getUniqueSubjects().map(subject => (
                  <Option key={subject} value={subject}>{subject}</Option>
                ))}
              </Select>
              
              <Select
                placeholder="Filter by date"
                value={dateFilter}
                onChange={(e, value) => setDateFilter(value)}
                sx={{ minWidth: 130 }}
              >
                <Option value="all">All Time</Option>
                <Option value="today">Today</Option>
                <Option value="week">This Week</Option>
                <Option value="month">This Month</Option>
              </Select>
              
              <Button
                variant="outlined"
                startDecorator={<Download size={16} />}
                onClick={exportToCSV}
                disabled={filteredResults.length === 0}
              >
                Export CSV
              </Button>
            </Stack>
          </CardContent>
        </Card>

        {/* Results Table */}
        <Card>
          <CardContent sx={{ p: 0 }}>
            <Sheet sx={{ overflow: 'auto' }}>
              <Table hoverRow>
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Subject</th>
                    <th>Score</th>
                    <th>Percentage</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredResults.length === 0 ? (
                    <tr>
                      <td colSpan={6}>
                        <Box sx={{ textAlign: 'center', py: 4 }}>
                          <Typography level="body-md" color="neutral">
                            No test results found
                          </Typography>
                        </Box>
                      </td>
                    </tr>
                  ) : (
                    filteredResults.map((result) => {
                      const userInfo = getUserInfo(result.userId);
                      const percentage = Math.round((result.score / result.totalQuestions) * 100);
                      
                      return (
                        <tr key={result.id}>
                          <td>
                            <Box>
                              <Typography level="body-sm" fontWeight="md">
                                {result.userEmail}
                              </Typography>
                              <Typography level="body-xs" color="neutral">
                                {userInfo.username || 'N/A'}
                              </Typography>
                            </Box>
                          </td>
                          <td>
                            <Chip size="sm" variant="soft">
                              {result.subject}
                            </Chip>
                          </td>
                          <td>
                            <Typography level="body-sm">
                              {result.score}/{result.totalQuestions}
                            </Typography>
                          </td>
                          <td>
                            <Chip 
                              size="sm" 
                              color={getScoreColor(result.score, result.totalQuestions)}
                            >
                              {percentage}%
                            </Chip>
                          </td>
                          <td>
                            <Typography level="body-xs">
                              {formatTimestamp(result.timestamp)}
                            </Typography>
                          </td>
                          <td>
                            <IconButton
                              size="sm"
                              variant="plain"
                              onClick={() => handleViewDetails(result)}
                            >
                              <Eye size={16} />
                            </IconButton>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </Table>
            </Sheet>
          </CardContent>
        </Card>

        {/* Details Modal */}
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <ModalDialog size="lg" sx={{ maxWidth: 600 }}>
            <ModalClose />
            <Typography level="h4" sx={{ mb: 2 }}>
              Test Result Details
            </Typography>
            
            {selectedUser && (
              <Stack spacing={3}>
                <Box>
                  <Typography level="title-md" sx={{ mb: 1 }}>Student Information</Typography>
                  <Stack spacing={1}>
                    <Typography level="body-sm">
                      <strong>Email:</strong> {selectedUser.userEmail}
                    </Typography>
                    <Typography level="body-sm">
                      <strong>Username:</strong> {getUserInfo(selectedUser.userId).username || 'N/A'}
                    </Typography>
                    <Typography level="body-sm">
                      <strong>Role Number:</strong> {getUserInfo(selectedUser.userId).roleNumber || 'N/A'}
                    </Typography>
                  </Stack>
                </Box>
                
                <Divider />
                
                <Box>
                  <Typography level="title-md" sx={{ mb: 1 }}>Test Information</Typography>
                  <Stack spacing={1}>
                    <Typography level="body-sm">
                      <strong>Subject:</strong> {selectedUser.subject}
                    </Typography>
                    <Typography level="body-sm">
                      <strong>Score:</strong> {selectedUser.score}/{selectedUser.totalQuestions}
                    </Typography>
                    <Typography level="body-sm">
                      <strong>Percentage:</strong> {Math.round((selectedUser.score / selectedUser.totalQuestions) * 100)}%
                    </Typography>
                    <Typography level="body-sm">
                      <strong>Date:</strong> {formatTimestamp(selectedUser.timestamp)}
                    </Typography>
                  </Stack>
                </Box>
                
                {/* {selectedUser.answers && (
                  <>
                    <Divider />
                    <Box>
                      <Typography level="title-md" sx={{ mb: 1 }}>Answer Summary</Typography>
                      <Box sx={{ maxHeight: 200, overflow: 'auto' }}>
                        {selectedUser.answers.map((answer, index) => (
                          <Box key={index} sx={{ mb: 1, p: 1, backgroundColor: 'background.level1', borderRadius: 'sm' }}>
                            <Typography level="body-xs">
                              <strong>Q{index + 1}:</strong> {answer.selectedAnswer || 'No answer'}
                              {answer.isCorrect && <Chip size="sm" color="success" sx={{ ml: 1 }}>Correct</Chip>}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </>
                )} */}
              </Stack>
            )}
          </ModalDialog>
        </Modal>
      </Box>
    </CssVarsProvider>
  );
}