-- CreateTable
CREATE TABLE `Fotos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `livroId` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Fotos` ADD CONSTRAINT `Fotos_livroId_fkey` FOREIGN KEY (`livroId`) REFERENCES `Livros`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
