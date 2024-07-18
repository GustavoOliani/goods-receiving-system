package com.example.goodReceiver.repository;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.goodReceiver.model.Company;
import com.example.goodReceiver.model.Schedule;

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Long>{
	
	@Modifying
	@Transactional
	@Query("UPDATE Schedule s SET s.supplier = ?2, s.fiscalNote = ?3, s.receiptDate= ?4 WHERE s.id = ?1")
	int updateSchedule(Long id, Company supplier, String fiscalNote, Date receiptDate);

}
