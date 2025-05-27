import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import {
  Container,
  Typography,
  Box,
  Grid,
  Alert,
  Button
} from '@mui/joy';
import QuestionForm from './QuestionForm';
import QuestionsList from './QuestionsList';
import QuestionPaperForm from './QuestionPaperForm';

export default function Home() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleAddQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  const handleDeleteQuestion = (questionId) => {
    setQuestions(questions.filter(q => q.id !== questionId));
  };

  const handleSaveQuestionPaper = async (paperDetails) => {
    setLoading(true);
    setSuccessMessage('');

    try {
      const questionPaper = {
        ...paperDetails,
        questions: questions,
        totalQuestions: questions.length,
        createdAt: new Date().toISOString(),
        createdBy: 'admin' // You can replace this with actual user info
      };

      const docRef = await addDoc(collection(db, 'questionPapers'), questionPaper);
      
      setSuccessMessage(`Question paper saved successfully! Document ID: ${docRef.id}`);
      
      // Optional: Clear the form after successful save
      // setQuestions([]);
      
    } catch (error) {
      console.error('Error saving question paper:', error);
      alert('Error saving question paper. Please check your Firebase configuration.');
    } finally {
      setLoading(false);
    }
  };

  const clearAllQuestions = () => {
    if (window.confirm('Are you sure you want to clear all questions?')) {
      setQuestions([]);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography level="h1" mb={2}>
          Question Paper Creator
        </Typography>
        <Typography level="body1" color="neutral">
          Create and save question papers to Firebase with ease
        </Typography>
      </Box>

      {successMessage && (
        <Alert color="success" variant="soft" sx={{ mb: 3 }}>
          {successMessage}
        </Alert>
      )}

      <Grid container spacing={3}>
        <Grid xs={12} md={6}>
          <QuestionForm onAddQuestion={handleAddQuestion} />
        </Grid>
        
        <Grid xs={12} md={6}>
          <QuestionPaperForm
            questions={questions}
            onSave={handleSaveQuestionPaper}
            loading={loading}
          />
        </Grid>

        <Grid xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography level="h2">Current Question Paper</Typography>
            {questions.length > 0 && (
              <Button variant="outlined" color="danger" onClick={clearAllQuestions}>
                Clear All Questions
              </Button>
            )}
          </Box>
          <QuestionsList
            questions={questions}
            onDeleteQuestion={handleDeleteQuestion}
          />
        </Grid>
      </Grid>
    </Container>
  );
}