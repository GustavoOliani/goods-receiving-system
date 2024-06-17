package com.example.goodReceiver.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
public class Company {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@JsonProperty("_id")
	private Long id;
	
	@Column(nullable = false)
	private String name;
	
	@Column(length = 14, nullable = false, unique = true)
	private String cnpj;
	
	@OneToMany(mappedBy="supplier")
	private List<Schedule> scheduleList;
	
	public Company(String name, String cnpj) {
		setName(name);
		setCnpj(cnpj);
	}
	
	public Company() {}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCnpj() {
		return cnpj;
	}
	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}
}
