package com.example.autoshow20.service;

import com.example.autoshow20.entity.Employee;
import com.example.autoshow20.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class EmployeeServiceImpl implements EmployeeService{

    private final EmployeeRepository employeeRepository;

    @Override
    public List<Employee> getAll() {
            return employeeRepository.findAll();
    }
}
