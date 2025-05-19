<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20250516103322 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Create initial database schema for restaurant application';
    }

    public function up(Schema $schema): void
    {
        // User table
        $this->addSql('CREATE TABLE user (
            id INT AUTO_INCREMENT NOT NULL,
            email VARCHAR(180) NOT NULL,
            roles JSON NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at DATETIME NOT NULL,
            updated_at DATETIME NOT NULL,
            UNIQUE INDEX UNIQ_8D93D649E7927C74 (email),
            PRIMARY KEY(id)
        ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');

        // Reservation table
        $this->addSql('CREATE TABLE reservation (
            id INT AUTO_INCREMENT NOT NULL,
            customer_name VARCHAR(255) NOT NULL,
            customer_email VARCHAR(255) NOT NULL,
            customer_phone VARCHAR(20) NOT NULL,
            reservation_time DATETIME NOT NULL,
            party_size INT NOT NULL,
            special_requests LONGTEXT DEFAULT NULL,
            is_confirmed TINYINT(1) DEFAULT 0 NOT NULL,
            created_at DATETIME NOT NULL,
            updated_at DATETIME NOT NULL,
            PRIMARY KEY(id)
        ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');

        // Order table
        $this->addSql('CREATE TABLE `order` (
            id INT AUTO_INCREMENT NOT NULL,
            customer_name VARCHAR(255) NOT NULL,
            customer_email VARCHAR(255) NOT NULL,
            customer_phone VARCHAR(20) NOT NULL,
            order_time DATETIME NOT NULL,
            pickup_time DATETIME NOT NULL,
            order_items JSON NOT NULL,
            total_amount DOUBLE PRECISION NOT NULL,
            status VARCHAR(20) DEFAULT \'received\' NOT NULL,
            created_at DATETIME NOT NULL,
            updated_at DATETIME NOT NULL,
            PRIMARY KEY(id)
        ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE reservation');
        $this->addSql('DROP TABLE `order`');
    }
}