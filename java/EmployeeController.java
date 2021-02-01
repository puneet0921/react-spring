package com.infy.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infy.exception.EmployeeException;
import com.infy.model.Employee;
import com.infy.repository.EmployeeRepository;

@CrossOrigin
@RestController
@RequestMapping(value="/employee")
public class EmployeeController {
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@GetMapping(value="/list")
	public List<Employee> getAllEmployee(){
		return employeeRepository.findAll();
	}
	@GetMapping(value="/list/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Integer id) throws EmployeeException{
		Employee emp = employeeRepository.findById(id).orElseThrow(()-> new EmployeeException("Employee doesn't exist with id:"+id));
		return ResponseEntity.ok(emp);
	}
	@PostMapping(value="/add")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	@PutMapping(value="/list/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Integer id,@RequestBody Employee employee) throws EmployeeException{
		Employee emp = employeeRepository.findById(id).orElseThrow(()-> new EmployeeException("Employee doesn't exist with id:"+id));
		emp.setFirstName(employee.getFirstName());
		emp.setLastName(employee.getLastName());
		emp.setEmailId(employee.getEmailId());
		Employee updateEmployee = employeeRepository.save(emp);
		return ResponseEntity.ok(updateEmployee);
	}
	@PutMapping(value="/list/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable Integer id) throws EmployeeException{
		Employee emp = employeeRepository.findById(id).orElseThrow(()-> new EmployeeException("Employee doesn't exist with id:"+id));
		employeeRepository.delete(emp);
		Map<String,Boolean> response = new HashMap<>();
		return ResponseEntity.ok(response);
	}
}
