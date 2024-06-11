package com.example.goodReceiver.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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

	@GetMapping
	public List<Company> supplierList(){
		return companyRepository.findAll();
	}
}
