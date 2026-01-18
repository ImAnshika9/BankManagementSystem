package com.bank.bank_system.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.bank.bank_system.entity.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByAccountId(Long accountId);
}
