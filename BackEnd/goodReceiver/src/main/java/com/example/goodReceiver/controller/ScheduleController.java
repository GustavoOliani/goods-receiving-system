package com.example.goodReceiver.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.goodReceiver.model.Company;
import com.example.goodReceiver.model.Schedule;
import com.example.goodReceiver.repository.ScheduleRepository;

import lombok.AllArgsConstructor;

import java.util.Date;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping
@AllArgsConstructor
public class ScheduleController {
	private final String path = "/api/schedule";

	private final ScheduleRepository scheduleRepository;
	
	public ScheduleController(ScheduleRepository scheduleRepository) {
		this.scheduleRepository = scheduleRepository;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(path)
	public @ResponseBody List<Schedule> scheduleList(){
		return scheduleRepository.findAll();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(path + "/{id}")
	public ResponseEntity<Schedule> findfById(@PathVariable("id") Long id) {
		System.out.println("--------------------------Get FINDBYID--------------------------");
		return scheduleRepository.findById(id)
				.map(record -> ResponseEntity.ok().body(record))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(path)
	public ResponseEntity<Schedule> saveSchedule(@RequestBody Schedule entity) {
		//TODO process POST request
		System.out.println("POST schedule: " + entity.getReceiptDate());
		//Schedule schedule = new Schedule(entity.getSupplier(), entity.getFiscalNote(), entity.getReceiptDate());
		return ResponseEntity.status(HttpStatus.CREATED).body(scheduleRepository.save(entity));
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(path + "/{id}")
	public ResponseEntity<Integer> updateSchedule(@RequestBody Schedule schedule) {
		//TODO process POST request
		System.out.println("--------------------------UPDATE--------------------------");
		System.out.println("body: " + schedule.getSupplier());
		return ResponseEntity.status(HttpStatus.OK).body(scheduleRepository.updateSchedule(schedule.getId(), schedule.getSupplier(), schedule.getFiscalNote(), schedule.getReceiptDate()));
	}
	
}
