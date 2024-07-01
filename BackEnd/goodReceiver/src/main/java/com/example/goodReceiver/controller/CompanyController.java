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
@RequestMapping
public class CompanyController {
	private final String path = "/api/company";
	
	private final CompanyRepository companyRepository;
	
	public CompanyController(CompanyRepository companyRepository) {
		this.companyRepository = companyRepository;
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(path)
	public List<Company> supplierList(){
		System.out.println("--------------------------GET COMPANIES--------------------------");
		return companyRepository.findAll();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(path + "/{id}")
	public ResponseEntity<Company> findfById(@PathVariable("id") Long id) {
		System.out.println("--------------------------Get company--------------------------");
		return companyRepository.findById(id)
				.map(record -> ResponseEntity.ok().body(record))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(path)
	public ResponseEntity<Company> saveCompany(@RequestBody Company company) {
		//TODO process POST request
		//Company company = new Company(entity.getName(), entity.getCnpj());
		System.out.println("--------------------------INSERT--------------------------");
		System.out.println("body: " + company.getCnpj());
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(companyRepository.save(company));
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(path + "/{id}")
	public ResponseEntity<Integer> updateCompany(@RequestBody Company company) {
		//TODO process POST request
		System.out.println("--------------------------UPDATE--------------------------");
		System.out.println("body: " + company.getCnpj());
		return ResponseEntity.status(HttpStatus.OK).body(companyRepository.updateCompany(company.getId(), company.getName(), company.getCnpj()));
	}
}
