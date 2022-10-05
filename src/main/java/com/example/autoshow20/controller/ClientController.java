package com.example.autoshow20.controller;

import com.example.autoshow20.entity.Car;
import com.example.autoshow20.entity.Client;
import com.example.autoshow20.service.ClientService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/")
@AllArgsConstructor
@RestController
public class ClientController {

    private final ClientService clientService;
    @GetMapping("/clients")
    public List<Client> getAll() {
        return clientService.getAll();
    }

    @PostMapping("/client/save")
    public Client save(@RequestBody Client client) {

        return clientService.save(client);
    }

    @DeleteMapping("/client/{id}")
    public void deleteClient(@PathVariable("id") int id) {
        clientService.deleteClient(id);
    }



}
