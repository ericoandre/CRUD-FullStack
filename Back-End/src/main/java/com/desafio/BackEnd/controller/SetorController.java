package com.desafio.BackEnd.controller;

import java.util.List;
import java.util.Optional;


import com.desafio.BackEnd.model.Setor;
import com.desafio.BackEnd.repository.SetorRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/setor")
public class SetorController {

    @Autowired
    private SetorRepository service;

    @CrossOrigin(origins = "*")
    @GetMapping
	public ResponseEntity<List<Setor>> getAllSetor() {
        try{
            return new ResponseEntity<List<Setor>>(service.findAll(), HttpStatus.OK);
        }catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
    @CrossOrigin(origins = "*")
    @GetMapping(path ="/{id}")
	public ResponseEntity<Setor> getSetorById(@PathVariable("id") Long  id) {
		Optional<Setor> setorData = service.findById(id);
		try {
			if (setorData.isPresent()) {
				return new ResponseEntity<Setor>(setorData.get(), HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
    @CrossOrigin(origins = "*")
    @DeleteMapping(path ="/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public ResponseEntity<HttpStatus> excluirPorId(@PathVariable("id") Long id) {
        Optional<Setor> setorData = service.findById(id);
		try {
			if (setorData.isPresent()) {
				service.delete(setorData.get());
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}else{
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
    @CrossOrigin(origins = "*")
    @PutMapping(path ="/{id}")
    public ResponseEntity<Setor> atualizarPorId(@PathVariable("id") Long id, @RequestBody Setor setor) {
        Optional<Setor> setorData = service.findById(id);
		try {
			if (setorData.isPresent()) {
				Setor _setor = new Setor(setor.getNome(), setor.getDescricao());
				_setor.setId(id);
				return new ResponseEntity<Setor>(service.save(_setor), HttpStatus.OK);
			} else {		
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }
    @CrossOrigin(origins = "*")
    @PostMapping
	public ResponseEntity<Setor> createSetor(@RequestBody Setor setor) {
		try {
			Setor _setor = service.save(new Setor(setor.getNome(), setor.getDescricao()));
			return new ResponseEntity<Setor>(_setor, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
