package com.desafio.BackEnd.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_setor")
public class Setor {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private String descricao;

    public Setor() {}
	
	public Setor(String nome, String descricao) {
		this.nome = nome;
		this.descricao = descricao;
	}
	public void setId(long id) {
		this.id = id;
	}
    public long getId() {
		return this.id;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
    public String getNome() {
		return this.nome;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
    public String getDescricao() {
		return this.descricao;
	}

    @Override
	public String toString() {
		return "Setor [id=" + id  + ", nome=" + getNome() + ", Descricao=" + getDescricao()+ "]";
	}
}
