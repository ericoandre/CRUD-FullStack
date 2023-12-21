package com.desafio.BackEnd.controller;

import java.util.List;
import java.util.Optional;

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

import com.desafio.BackEnd.model.Colaborador;
import com.desafio.BackEnd.repository.ColaboradorRepository;

@RestController
@RequestMapping(path = "/api/v1/colaborador")
public class ColaboradorController {
    @Autowired
    private ColaboradorRepository ColaboradorService;

    @CrossOrigin(origins = "*")
    @GetMapping
	public ResponseEntity<List<Colaborador>> getAllColaborador() {
        try{
            return new ResponseEntity<List<Colaborador>>(ColaboradorService.findAll(), HttpStatus.OK);
        }catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
    @CrossOrigin(origins = "*")
    @GetMapping(path ="/{id}")
	public ResponseEntity<Colaborador> getColaboradorById(@PathVariable("id") Long  id) {
		Optional<Colaborador> colaboradorData = ColaboradorService.findById(id);
		try {
			if (colaboradorData.isPresent()) {
				return new ResponseEntity<Colaborador>(colaboradorData.get(), HttpStatus.OK);
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
    public ResponseEntity<HttpStatus> excluirColaboradorPorId(@PathVariable("id") Long id) {
        Optional<Colaborador> colaboradorData = ColaboradorService.findById(id);
		try {
			if (colaboradorData.isPresent()) {
                ColaboradorService.delete(colaboradorData.get());
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			} else {		
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }
    @CrossOrigin(origins = "*")
    @PutMapping(path ="/{id}")
    public ResponseEntity<Colaborador> atualizarColaboradorPorId(@PathVariable("id") Long id, @RequestBody Colaborador colaborador) {
        Optional<Colaborador> colaboradorData = ColaboradorService.findById(id);
		try {
			if (colaboradorData.isPresent()) {
				colaborador.setId(id);
				return new ResponseEntity<Colaborador>(ColaboradorService.save(colaborador), HttpStatus.OK);
			} else {		
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }

    @CrossOrigin(origins = "*")
    @PostMapping
	public ResponseEntity<Colaborador> createColaborador(@RequestBody Colaborador colaborador) {
		try {
			Colaborador _colaborador = ColaboradorService.save(colaborador);
			return new ResponseEntity<Colaborador>(_colaborador, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
