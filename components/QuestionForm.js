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
  Textarea,
  Typography,
  IconButton,
  Divider,
  Stack
} from '@mui/joy';
import { Add, Delete } from '@mui/icons-material';

export default function QuestionForm({ onAddQuestion }) {
  const [question, setQuestion] = useState({
    question: '',
    image: '',
    options: ['', '', '', ''],
    correctAnswer: 0,
    subject: 'Demo Test'
  });

  const handleOptionChange = (index, value) => {
    const newOptions = [...question.options];
    newOptions[index] = value;
    setQuestion({ ...question, options: newOptions });
  };

  const addOption = () => {
    setQuestion({
      ...question,
      options: [...question.options, '']
    });
  };

  const removeOption = (index) => {
    if (question.options.length > 2) {
      const newOptions = question.options.filter((_, i) => i !== index);
      setQuestion({
        ...question,
        options: newOptions,
        correctAnswer: question.correctAnswer >= newOptions.length ? 0 : question.correctAnswer
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.question.trim() && question.options.every(opt => opt.trim())) {
      onAddQuestion({
        ...question,
        id: Date.now(),
        options: question.options.filter(opt => opt.trim())
      });
      setQuestion({
        question: '',
        image: '',
        options: ['', '', '', ''],
        correctAnswer: 0,
        subject: 'Demo Test'
      });
    }
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography level="h3" mb={2}>Add New Question</Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <FormControl>
              <FormLabel>Subject</FormLabel>
              <Select
                value={question.subject}
                onChange={(e, value) => setQuestion({ ...question, subject: value })}
              >
                <Option value="Demo Test">Demo Test</Option>
                <Option value="Physics">Physics</Option>
                <Option value="Mathematics">Mathematics</Option>
                <Option value="Chemistry">Chemistry</Option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Question</FormLabel>
              <Textarea
                placeholder="Enter your question here..."
                value={question.question}
                onChange={(e) => setQuestion({ ...question, question: e.target.value })}
                minRows={2}
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel>Image URL (Optional)</FormLabel>
              <Input
                placeholder="https://example.com/image.jpg"
                value={question.image}
                onChange={(e) => setQuestion({ ...question, image: e.target.value })}
              />
            </FormControl>

            <Box>
              <FormLabel>Options</FormLabel>
              {question.options.map((option, index) => (
                <Box key={index} sx={{ display: 'flex', gap: 1, mb: 1, alignItems: 'center' }}>
                  <Input
                    placeholder={`Option ${index + 1}`}
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    sx={{ flex: 1 }}
                    required
                  />
                  <Button
                    variant={question.correctAnswer === index ? 'solid' : 'outlined'}
                    color={question.correctAnswer === index ? 'success' : 'neutral'}
                    size="sm"
                    onClick={() => setQuestion({ ...question, correctAnswer: index })}
                  >
                    {question.correctAnswer === index ? 'Correct' : 'Mark Correct'}
                  </Button>
                  {question.options.length > 2 && (
                    <IconButton
                      variant="outlined"
                      color="danger"
                      size="sm"
                      onClick={() => removeOption(index)}
                    >
                      <Delete />
                    </IconButton>
                  )}
                </Box>
              ))}
              <Button
                variant="outlined"
                startDecorator={<Add />}
                onClick={addOption}
                size="sm"
              >
                Add Option
              </Button>
            </Box>

            <Button type="submit" size="lg" color="primary">
              Add Question
            </Button>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
}