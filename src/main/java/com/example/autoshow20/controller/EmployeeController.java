package com.example.autoshow20.controller;

import com.example.autoshow20.entity.Car;
import com.example.autoshow20.entity.Employee;
import com.example.autoshow20.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@AllArgsConstructor
public class EmployeeController {

    private final EmployeeService employeeService;

    @GetMapping("/employees")
    public List<Employee> getAll() {
        return employeeService.getAll();
    }




}
