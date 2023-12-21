package com.desafio.BackEnd.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.desafio.BackEnd.model.Setor;

public interface SetorRepository extends JpaRepository<Setor, Long> {
    List<Setor> findById(long id);
}