package com.example.goodReceiver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.goodReceiver.model.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long>{

}
