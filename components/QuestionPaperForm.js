import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  FormLabel,
  Input,
  Select,
  Option,
  Typography,
  Alert,
  CircularProgress
} from '@mui/joy';

export default function QuestionPaperForm({ questions, onSave, loading }) {
  const [paperDetails, setPaperDetails] = useState({
    title: '',
    subject: 'Demo Test',
    duration: 60,
    instructions: 'Answer all questions. Each question carries equal marks.'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (questions.length === 0) {
      alert('Please add at least one question before saving.');
      return;
    }
    onSave(paperDetails);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography level="h3" mb={2}>Save Question Paper</Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <FormControl>
              <FormLabel>Paper Title</FormLabel>
              <Input
                placeholder="e.g., Physics Mid-term Exam"
                value={paperDetails.title}
                onChange={(e) => setPaperDetails({ ...paperDetails, title: e.target.value })}
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel>Subject</FormLabel>
              <Select
                value={paperDetails.subject}
                onChange={(e, value) => setPaperDetails({ ...paperDetails, subject: value })}
              >
                <Option value="Demo Test">Demo Test</Option>
                <Option value="Physics">Physics</Option>
                <Option value="Mathematics">Mathematics</Option>
                <Option value="Chemistry">Chemistry</Option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Duration (minutes)</FormLabel>
              <Input
                type="number"
                value={paperDetails.duration}
                onChange={(e) => setPaperDetails({ ...paperDetails, duration: parseInt(e.target.value) })}
                required
                min="1"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Instructions</FormLabel>
              <Input
                value={paperDetails.instructions}
                onChange={(e) => setPaperDetails({ ...paperDetails, instructions: e.target.value })}
              />
            </FormControl>

            <Alert color="primary" variant="soft">
              <Typography level="body2">
                This paper will contain {questions.length} question(s)
              </Typography>
            </Alert>

            <Button
              type="submit"
              size="lg"
              color="success"
              disabled={loading || questions.length === 0}
              startDecorator={loading ? <CircularProgress size="sm" /> : null}
            >
              {loading ? 'Saving...' : 'Save to Firebase'}
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
}