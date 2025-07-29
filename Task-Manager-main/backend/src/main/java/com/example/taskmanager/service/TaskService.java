package com.example.taskmanager.service;

import com.example.taskmanager.model.Task;
import com.example.taskmanager.model.TaskStatus;
import com.example.taskmanager.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TaskService {

    @Autowired
    private TaskRepository repository;

    public List<Task> findAll() {
        return repository.findAll();
    }

    public Task findById(UUID id) {
        return repository.findById(id).orElseThrow();
    }

    public Task create(Task task) {
        task.setStatus(task.getStatus() == null ? TaskStatus.TODO : task.getStatus());
        return repository.save(task);
    }

    public Task update(UUID id, Task updatedTask) {
        Task task = findById(id);
        task.setTitle(updatedTask.getTitle());
        task.setDescription(updatedTask.getDescription());
        task.setStatus(updatedTask.getStatus());
        return repository.save(task);
    }

    public void delete(UUID id) {
        repository.deleteById(id);
    }
}
