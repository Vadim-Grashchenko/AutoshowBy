package com.example.autoshow20.service;

import com.example.autoshow20.entity.Car;
import com.example.autoshow20.entity.Client;
import com.example.autoshow20.repository.CarRepository;
import com.example.autoshow20.repository.ClientRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class ClientSetviceImpl implements ClientService{

    private final ClientRepository clientRepository;

    @Override
    public List<Client> getAll() {
        return clientRepository.findAll().stream()
                .map(client -> new Client(client.getClientId(),client.getSurname(), client.getName(), client.getPhoneNumber(), client.getEmail())).collect(Collectors.toList());
    }

    @Override
    public Client save(Client client) {
        return clientRepository.saveAndFlush(client);
    }

    @Override
    public void deleteClient(int id) {
        Client client = clientRepository.findById(id).get();
        clientRepository.delete(client);
    }
}
