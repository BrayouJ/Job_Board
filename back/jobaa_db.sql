-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mer. 09 oct. 2024 à 11:56
-- Version du serveur : 10.6.18-MariaDB-0ubuntu0.22.04.1
-- Version de PHP : 8.1.2-1ubuntu2.19

USE jobaa_db;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `jobaa_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `adverts`
--

CREATE TABLE `adverts` (
  `id_advert` int(10) NOT NULL,
  `job_title` varchar(50) NOT NULL,
  `id_firm` int(11) NOT NULL,
  `city` text DEFAULT NULL,
  `contract_type` varchar(50) DEFAULT NULL,
  `contract_duration` varchar(50) DEFAULT NULL,
  `salary` decimal(6,2) DEFAULT NULL,
  `date_of_post` date NOT NULL,
  `description` text NOT NULL,
  `degree_required` varchar(50) DEFAULT NULL,
  `experience` varchar(50) DEFAULT NULL,
  `business_hours` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `apply`
--

CREATE TABLE `apply` (
  `id_advert` int(10) NOT NULL,
  `id_user` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `firms`
--

CREATE TABLE `firms` (
  `id_firm` int(10) NOT NULL,
  `firm_name` varchar(50) NOT NULL,
  `headquarters` text DEFAULT NULL,
  `industry` varchar(50) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id_user` int(10) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `cv` text DEFAULT NULL,
  `degree` varchar(50) DEFAULT NULL,
  `phone` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `adverts`
--
ALTER TABLE `adverts`
  ADD PRIMARY KEY (`id_advert`),
  ADD KEY `id_firm` (`id_firm`);

--
-- Index pour la table `apply`
--
ALTER TABLE `apply`
  ADD PRIMARY KEY (`id_advert`,`id_user`),
  ADD KEY `id_user` (`id_user`);

--
-- Index pour la table `firms`
--
ALTER TABLE `firms`
  ADD PRIMARY KEY (`id_firm`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `adverts`
--
ALTER TABLE `adverts`
  MODIFY `id_advert` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `firms`
--
ALTER TABLE `firms`
  MODIFY `id_firm` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(10) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `adverts`
--
ALTER TABLE `adverts`
  ADD CONSTRAINT `adverts_ibfk_1` FOREIGN KEY (`id_firm`) REFERENCES `firms` (`id_firm`);

--
-- Contraintes pour la table `apply`
--
ALTER TABLE `apply`
  ADD CONSTRAINT `apply_ibfk_1` FOREIGN KEY (`id_advert`) REFERENCES `adverts` (`id_advert`),
  ADD CONSTRAINT `apply_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
