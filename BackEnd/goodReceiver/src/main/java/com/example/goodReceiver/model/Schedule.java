package com.example.goodReceiver.model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
@Entity
public class Schedule {
	
	@Id @GeneratedValue
	@JsonProperty("_id")
	private Long id;
	
	@ManyToOne
	private Company supplier;
	
	@Column(nullable = true, unique = false)
	private String fiscalNote;
	
	
	// A data precisa incorporar os campos receiptDate: Date e receiptTime: Time no back
	@Column(nullable = true)
	private Date receiptDate;
	
	public Schedule(Company supplier, String fiscalNote, Date receiptDate) {
		this.supplier = supplier;
		this.fiscalNote = fiscalNote;
		this.receiptDate = receiptDate;
	}
	
	public Schedule() {}
	
	public Long getId() {
		return id;
	}

	public Company getSupplier() {
		return supplier;
	}

	public void setSupplier(Company supplier) {
		this.supplier = supplier;
	}

	public String getFiscalNote() {
		return fiscalNote;
	}

	public void setFiscalNote(String fiscalNote) {
		this.fiscalNote = fiscalNote;
	}

	public Date getReceiptDate() {
		return receiptDate;
	}

	public void setReceiptDate(Date receiptDate) {
		this.receiptDate = receiptDate;
	}

	
}
