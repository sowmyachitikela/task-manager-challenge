import { useEffect, useState } from 'react';
import { getTasks } from '../api/tasks';
import type { Task } from '../types/Task';
import TaskItem from './TaskItem';

import { Box, Typography, Fade, Stack } from '@mui/material';
import { Inbox } from '@mui/icons-material';

export default function TaskList({ refresh }: { refresh: boolean }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = () => {
    setLoading(true);
    getTasks()
      .then(setTasks)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchTasks();
  }, [refresh]);

  if (loading) {
    return (
      <Typography variant="body1" align="center" sx={{ mt: 4 }}>
        Loading tasks...
      </Typography>
    );
  }

  if (tasks.length === 0) {
    return (
      <Box textAlign="center" mt={4}>
        <Inbox fontSize="large" color="disabled" />
        <Typography variant="subtitle1" color="text.secondary">
          No tasks yet. Add one above!
        </Typography>
      </Box>
    );
  }

  return (
    <Stack spacing={2}>
      {tasks.map((task, index) => (
        <Fade in key={task.id} timeout={300 + index * 50}>
          <div>
            <TaskItem task={task} onChanged={fetchTasks} />
          </div>
        </Fade>
      ))}
    </Stack>
  );
}
