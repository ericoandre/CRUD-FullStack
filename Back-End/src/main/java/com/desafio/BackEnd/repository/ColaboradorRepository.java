package com.desafio.BackEnd.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.desafio.BackEnd.model.Colaborador;

import jakarta.transaction.Transactional;

public interface ColaboradorRepository extends JpaRepository<Colaborador, Long> {
    List<Colaborador> findById(long id);

    @Transactional
    void deleteById(long Id);
}