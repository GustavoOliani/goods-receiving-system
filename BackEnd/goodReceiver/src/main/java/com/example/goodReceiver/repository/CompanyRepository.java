package com.example.goodReceiver.repository;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.goodReceiver.model.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long>{
	
	@Modifying
	@Transactional
	@Query("UPDATE Company c SET c.name = ?2, c.cnpj = ?3 WHERE c.id = ?1")
	int updateCompany(Long id, String name, String cnpj);
}