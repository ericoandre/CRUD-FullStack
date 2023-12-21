package com.desafio.BackEnd.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_colaborador")
public class Colaborador {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name = "cpf", nullable = false)
    private String cpf;

	@ManyToOne
	@JoinColumn(name="setor_id")
	private Setor setor;

	public Colaborador() {}

	public Colaborador(String nome, String cpf, Setor setor) {
		this.nome = nome;
		this.cpf = cpf;
		this.setor = setor;
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
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
    public String getCpf() {
		return this.cpf;
	}

	public void setSetor(Setor setor) {
		this.setor = setor;
	}

	@ManyToOne
    @JoinColumn(name="setor_id")
    public Setor getSetor() {
		return this.setor;
	}

    @Override
	public String toString() {
		return "Colaborador [id=" + id  + ", nome=" + getNome() + ", cpf=" + getCpf()+", Setor [id=" + setor.getId()  + ", nome=" + setor.getNome() + ", Descricao=" + setor.getDescricao()+ "]" + "]";
	}
}