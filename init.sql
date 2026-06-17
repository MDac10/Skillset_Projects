CREATE TABLE IF NOT EXISTS employees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    salary INTEGER
);

-- Insertion into a table
INSERT INTO employees (firstName, lastName, salary) VALUES
('John', 'Doe', 50000),
('Jane', 'Smith', 60000),
('Bob', 'Johnson', 55000);
