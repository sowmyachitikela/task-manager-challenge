package com.example.taskmanager.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Task {
    @Id
    @GeneratedValue
    private UUID id;

    @NotBlank(message = "Title is mandatory")
    private String title;

    private String description;

    @Enumerated(EnumType.STRING)
    private TaskStatus status;
}
