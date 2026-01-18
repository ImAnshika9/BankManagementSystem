package com.bank.bank_system.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.bank_system.entity.Account;
import com.bank.bank_system.entity.Transaction;
import com.bank.bank_system.repository.AccountRepository;
import com.bank.bank_system.repository.TransactionRepository;

@Service
public class AccountService {

    @Autowired
    private AccountRepository repository;

    @Autowired
    private TransactionRepository tRepo;

    public Account createAccount(Account acc) {
        // Save account
        Account saved = repository.save(acc);

        // Create initial transaction (optional)
        tRepo.save(new Transaction(saved.getId(), "CREATE", saved.getBalance(), saved.getBalance()));

        return saved;
    }

    public Optional<Account> getAccount(Long id) {
        return repository.findById(id);
    }

    public Account deposit(Long id, double amount) {
        Account acc = repository.findById(id).orElseThrow();

        // Update balance
        acc.setBalance(acc.getBalance() + amount);
        Account updated = repository.save(acc);

        // Save transaction
        tRepo.save(new Transaction(id, "DEPOSIT", amount, updated.getBalance()));

        return updated;
    }

    public Account withdraw(Long id, double amount) {
        Account acc = repository.findById(id).orElseThrow();

        // Check balance
        if (acc.getBalance() >= amount) {
            acc.setBalance(acc.getBalance() - amount);
            Account updated = repository.save(acc);

            // Save transaction
            tRepo.save(new Transaction(id, "WITHDRAW", amount, updated.getBalance()));

            return updated;
        }

        throw new RuntimeException("Insufficient balance");
    }
}
