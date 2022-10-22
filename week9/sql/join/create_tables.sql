USE sql_testing;
-- don't forget your USE ...;

-- CREATE TABLE customer(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(20),
--     city VARCHAR(20),
--     gender INT
-- );

-- CREATE TABLE company(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(20),
--     industry VARCHAR(20),
--     employees INT
-- );

-- SELECT * FROM customer;
-- SELECT * FROM company;


-- FOREIGN KEY (FK) definitions. These lines create a relationship between this table and the others

-- CREATE TABLE transaction(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    
--     item_purchased VARCHAR(20),
--     amount INT,
--     discount FLOAT DEFAULT 0, 
   
--     customer_id INT,
--     company_id INT,
--     -- REFERENCES command to tell SQL which table and what property in that table we are creating a relationship through
--     FOREIGN KEY(customer_id) REFERENCES customer(id),
--     FOREIGN KEY(company_id) REFERENCES company(id)
-- );