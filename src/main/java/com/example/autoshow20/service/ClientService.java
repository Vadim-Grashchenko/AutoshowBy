package com.example.autoshow20.service;

import com.example.autoshow20.entity.Car;
import com.example.autoshow20.entity.Client;

import java.util.List;

public interface ClientService {
    List<Client> getAll();
    Client save(Client client);
    void deleteClient(int id);
}
