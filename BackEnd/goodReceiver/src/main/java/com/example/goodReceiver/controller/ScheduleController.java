package com.example.goodReceiver.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.goodReceiver.model.Schedule;
import com.example.goodReceiver.repository.ScheduleRepository;

import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/schedule")
@AllArgsConstructor
public class ScheduleController {

	private final ScheduleRepository scheduleRepository;
	
	public ScheduleController(ScheduleRepository scheduleRepository) {
		this.scheduleRepository = scheduleRepository;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping
	public @ResponseBody List<Schedule> scheduleList(){
		return scheduleRepository.findAll();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping
	public ResponseEntity<Schedule> saveSchedule(@RequestBody Schedule entity) {
		//TODO process POST request
		System.out.println("POST schedule: " + entity.getReceiptDate());
		//Schedule schedule = new Schedule(entity.getSupplier(), entity.getFiscalNote(), entity.getReceiptDate());
		return ResponseEntity.status(HttpStatus.CREATED).body(scheduleRepository.save(entity));
	}
	
}
