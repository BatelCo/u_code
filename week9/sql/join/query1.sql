USE sql_testing;


-- INSERT INTO customer (id, name, city, gender)
-- VALUES(200, "Byron Trunks1", "Corinth1", 3);

-- INSERT INTO company(id, name, industry, employees)
-- VALUES(100, "Twitch1", "Entertainment1", 800);

-- -- SELECT * FROM customer;
-- -- SELECT * FROM company;

-- INSERT INTO transaction (item_purchased, amount, customer_id, company_id)
-- VALUES("The Everlasting Wind", 2, 200, 100);

-- SELECT * FROM transaction;

-- SELECT * 
-- FROM transaction, customer
-- WHERE transaction.customer_id = customer.id;

SELECT 
    item_purchased, amount, 
    customer.name AS cust_name, -- aliasing
    company.name AS comp_name
FROM 
    transaction, 
    customer, 
    company
WHERE 
    transaction.customer_id = customer.id AND
    transaction.company_id = company.id;