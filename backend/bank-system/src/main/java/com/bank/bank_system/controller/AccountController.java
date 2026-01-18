package com.bank.bank_system.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import com.bank.bank_system.entity.Account;
import com.bank.bank_system.entity.Transaction;
import com.bank.bank_system.service.AccountService;
import com.bank.bank_system.repository.TransactionRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/account")
public class AccountController {

    @Autowired
    private AccountService service;

    @Autowired
    private TransactionRepository tRepo;

    @PostMapping("/create")
    public Account create(@RequestBody Account acc) {
        return service.createAccount(acc);
    }

    @GetMapping("/{id}")
    public Optional<Account> get(@PathVariable Long id) {
        return service.getAccount(id);
    }

    @PostMapping("/{id}/deposit")
    public Account deposit(@PathVariable Long id, @RequestParam double amount) {
        return service.deposit(id, amount);
    }

    @PostMapping("/{id}/withdraw")
    public Account withdraw(@PathVariable Long id, @RequestParam double amount) {
        return service.withdraw(id, amount);
    }

    @GetMapping("/{id}/transactions")
    public List<Transaction> getTransactions(@PathVariable Long id) {
        return tRepo.findByAccountId(id);
    }
}
