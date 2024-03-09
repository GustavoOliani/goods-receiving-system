package com.example.goodReceiver;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.goodReceiver.model.Company;
import com.example.goodReceiver.repository.CompanyRepository;

@SpringBootApplication
public class GoodReceiverApplication {

	public static void main(String[] args) {
		SpringApplication.run(GoodReceiverApplication.class, args);
	}

	@Bean
	CommandLineRunner initDataBase(CompanyRepository companyRepository) {
		return args -> {
			companyRepository.deleteAll();
			companyRepository.save(new Company("Empresa A", "11111111111111"));
			companyRepository.save(new Company("Empresa B", "22222222222222"));
		};
	}
}
