package com.example.taskmanager.service;

import com.example.taskmanager.model.Task;
import com.example.taskmanager.model.TaskStatus;
import com.example.taskmanager.repository.TaskRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class TaskServiceTest {

    @Mock
    private TaskRepository taskRepository;

    @InjectMocks
    private TaskService taskService;

    @Test
    void shouldReturnAllTasks() {
        List<Task> mockTasks = List.of(new Task(UUID.randomUUID(), "Test", "Desc", TaskStatus.TODO));
        when(taskRepository.findAll()).thenReturn(mockTasks);

        List<Task> tasks = taskService.findAll();
        assertEquals(1, tasks.size());
        assertEquals("Test", tasks.get(0).getTitle());
    }

    @Test
    void shouldCreateTaskWithDefaultStatus() {
        Task task = new Task(null, "Test", "Desc", null);
        Task savedTask = new Task(UUID.randomUUID(), "Test", "Desc", TaskStatus.TODO);

        when(taskRepository.save(any(Task.class))).thenReturn(savedTask);

        Task result = taskService.create(task);
        assertEquals(TaskStatus.TODO, result.getStatus());
    }
}
