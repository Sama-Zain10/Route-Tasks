CREATE DATABASE IF NOT EXISTS retail_store;
USE retail_store;

CREATE TABLE IF NOT EXISTS suppliers (
    supplier_id INT(11) NOT NULL AUTO_INCREMENT,
    supplier_name TEXT NOT NULL,
    contact_number TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (supplier_id)
);

CREATE TABLE IF NOT EXISTS products (
    product_id INT(11) NOT NULL AUTO_INCREMENT,
    product_name TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT(11) NOT NULL DEFAULT 0,
    supplier_id INT(11),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (product_id),
    CONSTRAINT fk_supplier
        FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS sales (
    sale_id INT(11) NOT NULL AUTO_INCREMENT,
    product_id INT(11),
    quantity_sold INT(11) NOT NULL,
    sale_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (sale_id),
    CONSTRAINT fk_product
        FOREIGN KEY (product_id) REFERENCES products(product_id)
        ON DELETE CASCADE
);
