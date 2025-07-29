import { useState } from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [refresh, setRefresh] = useState(false);
  const toggleRefresh = () => setRefresh(!refresh);

  return (
    <Box
      minHeight="100vh"
      bgcolor="#f5f5f5"
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding={2}
    >
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 4, borderRadius: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            📝 Task Manager
          </Typography>
          <TaskForm onTaskAdded={toggleRefresh} />
          <TaskList refresh={refresh} />
        </Paper>
      </Container>
    </Box>
  );
}

export default App;
