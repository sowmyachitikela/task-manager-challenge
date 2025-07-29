import { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { createTask } from '../api/tasks';

export default function TaskForm({ onTaskAdded }: { onTaskAdded: () => void }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    if (!title) return;
    await createTask({ title, description });
    setTitle('');
    setDescription('');
    onTaskAdded();
  };

  return (
    <Box display="flex" flexDirection="column" gap={2} mb={3}>
      <TextField
        label="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        multiline
        rows={3}
      />
      <Button variant="contained" onClick={handleSubmit}>Add Task</Button>
    </Box>
  );
}
