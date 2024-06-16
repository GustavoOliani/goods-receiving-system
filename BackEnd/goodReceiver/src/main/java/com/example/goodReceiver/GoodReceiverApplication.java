package com.example.goodReceiver;

import java.util.Date;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.goodReceiver.model.Company;
import com.example.goodReceiver.model.Schedule;
import com.example.goodReceiver.repository.CompanyRepository;
import com.example.goodReceiver.repository.ScheduleRepository;

@SpringBootApplication
public class GoodReceiverApplication {

	public static void main(String[] args) {
		SpringApplication.run(GoodReceiverApplication.class, args);
	}

	@Bean
	CommandLineRunner initDataBase(CompanyRepository companyRepository, ScheduleRepository scheduleRepository) {
		return args -> {
			companyRepository.deleteAll();
			scheduleRepository.deleteAll();
			final Company company = new Company("Empresa A", "11111111111111");
			companyRepository.save(company);
			companyRepository.save(new Company("Empresa B", "22222222222222"));
			scheduleRepository.save(new Schedule(company, "123", new Date()) );
		};
	}
}
