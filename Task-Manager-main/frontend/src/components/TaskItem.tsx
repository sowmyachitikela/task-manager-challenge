import type { Task } from '../types/Task';
import {  Typography, Button, Card, CardContent, Stack, Chip } from '@mui/material';
import { deleteTask, updateTask } from '../api/tasks';

export default function TaskItem({ task, onChanged }: { task: Task; onChanged: () => void }) {
  const toggleStatus = () => {
    const nextStatus =
      task.status === 'TODO' ? 'IN_PROGRESS' : task.status === 'IN_PROGRESS' ? 'DONE' : 'TODO';
    updateTask(task.id, { ...task, status: nextStatus }).then(onChanged);
  };

  return (
    <Card variant="outlined" sx={{ mb: 2, borderRadius: 3, boxShadow: 2 }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography variant="h6">{task.title}</Typography>
          <Chip label={task.status} color={
            task.status === 'DONE' ? 'success' :
            task.status === 'IN_PROGRESS' ? 'warning' : 'default'
          } />
        </Stack>
        {task.description && (
          <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
            {task.description}
          </Typography>
        )}
        <Stack direction="row" spacing={1}>
          <Button size="small" variant="outlined" onClick={toggleStatus}>
            Next Status
          </Button>
          <Button size="small" variant="outlined" color="error" onClick={() => deleteTask(task.id).then(onChanged)}>
            Delete
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
