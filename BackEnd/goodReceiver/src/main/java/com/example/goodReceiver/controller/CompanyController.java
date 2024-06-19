package com.example.goodReceiver.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.goodReceiver.model.Company;
import com.example.goodReceiver.repository.CompanyRepository;

@RestController
@RequestMapping("/api/company")
public class CompanyController {
	
	private final CompanyRepository companyRepository;
	
	public CompanyController(CompanyRepository companyRepository) {
		this.companyRepository = companyRepository;
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping
	public List<Company> supplierList(){
		return companyRepository.findAll();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/{id}")
	public ResponseEntity<Company> findfById(@PathVariable("id") Long id) {
		return companyRepository.findById(id)
				.map(record -> ResponseEntity.ok().body(record))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping
	public ResponseEntity<Company> saveCompany(@RequestBody Company company) {
		//TODO process POST request
		//Company company = new Company(entity.getName(), entity.getCnpj());
		return ResponseEntity.status(HttpStatus.CREATED).body(companyRepository.save(company));
	}
}
