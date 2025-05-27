import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  IconButton,
  Stack,
  Divider
} from '@mui/joy';
import { Delete, Edit, Image } from '@mui/icons-material';

export default function QuestionsList({ questions, onDeleteQuestion, onEditQuestion }) {
  return (
    <Box>
      <Typography level="h3" mb={2}>Questions ({questions.length})</Typography>
      {questions.length === 0 ? (
        <Card variant="outlined">
          <CardContent>
            <Typography level="body1" color="neutral">
              No questions added yet. Use the form above to add questions.
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Stack spacing={2}>
          {questions.map((q, index) => (
            <Card key={q.id} variant="outlined">
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography level="title-md" mb={1}>
                      Q{index + 1}. {q.question}
                    </Typography>
                    <Chip size="sm" variant="soft" color="primary">
                      {q.subject}
                    </Chip>
                  </Box>
                  <Box>
                    <IconButton variant="outlined" size="sm" sx={{ mr: 1 }}>
                      <Edit />
                    </IconButton>
                    <IconButton
                      variant="outlined"
                      color="danger"
                      size="sm"
                      onClick={() => onDeleteQuestion(q.id)}
                    >
                      <Delete />
                    </IconButton>
                  </Box>
                </Box>

                {q.image && (
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Image fontSize="small" />
                      <Typography level="body2">Image attached</Typography>
                    </Box>
                    <img
                      src={q.image}
                      alt="Question illustration"
                      style={{
                        maxWidth: '200px',
                        maxHeight: '150px',
                        objectFit: 'contain',
                        border: '1px solid #e0e0e0',
                        borderRadius: '4px'
                      }}
                    />
                  </Box>
                )}

                <Box>
                  <Typography level="body2" fontWeight="md" mb={1}>Options:</Typography>
                  {q.options.map((option, optIndex) => (
                    <Box key={optIndex} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                      <Typography level="body2" sx={{ minWidth: '20px' }}>
                        {String.fromCharCode(65 + optIndex)}.
                      </Typography>
                      <Typography level="body2">{option}</Typography>
                      {q.correctAnswer === optIndex && (
                        <Chip size="sm" color="success" variant="soft">
                          Correct
                        </Chip>
                      )}
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>
      )}
    </Box>
  );
}