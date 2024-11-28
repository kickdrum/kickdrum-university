---
sidebar_position: 2
---
# Tutorials
## Getting started with SQL

### Install MySQL

Before starting with MySQL, you need to have it installed on your system. Follow the steps below to install MySQL on your operating system:

- **For Windows**:
  1. Download the MySQL Installer from the [MySQL official website  ↗  ](https://dev.mysql.com/downloads/installer/).
  2. Run the installer and follow the on-screen instructions.
  3. After installation, configure MySQL by setting the root password and starting the MySQL service.

- **For macOS**:
  1. You can install MySQL using Homebrew with the following command:
     ```bash
     brew install mysql
     ```
  2. Once installed, start the MySQL service:
     ```bash
     brew services start mysql
     ```
  3. Secure the installation by setting the root password:
     ```bash
     mysql_secure_installation
     ```

- **For Linux (Ubuntu/Debian)**:
  1. Install MySQL using `apt`:
     ```bash
     sudo apt update
     sudo apt install mysql-server
     ```
  2. After installation, start the MySQL service:
     ```bash
     sudo service mysql start
     ```
  3. Secure the installation by running:
     ```bash
     sudo mysql_secure_installation
     ```

---

### Install PostgreSQL

To start using PostgreSQL, you first need to install it on your system. Follow the installation steps below:

- **For Windows**:
  1. Download the PostgreSQL installer from the [PostgreSQL official website ↗  ](https://www.postgresql.org/download/windows/).
  2. Run the installer and follow the on-screen instructions.
  3. After installation, you can access PostgreSQL through the pgAdmin tool or the command line.

- **For macOS**:
  1. Install PostgreSQL using Homebrew with the following command:
     ```bash
     brew install postgresql
     ```
  2. Start the PostgreSQL service:
     ```bash
     brew services start postgresql
     ```

- **For Linux (Ubuntu/Debian)**:
  1. Install PostgreSQL using `apt`:
     ```bash
     sudo apt update
     sudo apt install postgresql postgresql-contrib
     ```
  2. Start the PostgreSQL service:
     ```bash
     sudo service postgresql start
     ```


### Learn SQL

[Comprehensive MySQL Tutorial ↗  ](https://www.javatpoint.com/mysql-tutorial)  
This tutorial covers the basics of MySQL and helps you get started with database management. It includes the installation process, commands, queries, and more!

---

### Core Topics

- #### Tables & Views

  [Learn about Tables & Views ↗  ](https://www.scaler.com/topics/sql/views-in-sql/)  
  Tables are the basic structure in MySQL to store data. Views are virtual tables that are the result of a stored query.

- #### MySQL Clauses

  [Learn about MySQL Clauses ↗  ](https://www.scaler.com/topics/clause-in-sql/)  
  MySQL Clauses help you filter or modify query results. Topics include `WHERE`, `ORDER BY`, `GROUP BY`, and more.

---
