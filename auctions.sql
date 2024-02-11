-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:8889
-- Час створення: Лют 11 2024 р., 09:57
-- Версія сервера: 5.7.34
-- Версія PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `auctions`
--

-- --------------------------------------------------------

--
-- Структура таблиці `AUCTION`
--

CREATE TABLE `AUCTION` (
  `ID` int(11) NOT NULL,
  `NameAuction` varchar(128) NOT NULL,
  `AboutAuction` text NOT NULL,
  `PhotoAuction_1` varchar(255) NOT NULL,
  `PhotoAuction_2` varchar(255) NOT NULL,
  `PhotoAuction_3` varchar(255) NOT NULL,
  `AuctionActive` tinyint(1) NOT NULL,
  `BET` int(11) NOT NULL,
  `PREV_BET` int(11) NOT NULL,
  `DATE_CREATE` date NOT NULL,
  `DATE_END` date NOT NULL,
  `USER_CREATE` varchar(128) NOT NULL,
  `USER_BET` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `AUCTION`
--

INSERT INTO `AUCTION` (`ID`, `NameAuction`, `AboutAuction`, `PhotoAuction_1`, `PhotoAuction_2`, `PhotoAuction_3`, `AuctionActive`, `BET`, `PREV_BET`, `DATE_CREATE`, `DATE_END`, `USER_CREATE`, `USER_BET`) VALUES
(22, 'Автомобіль', 'Тестовий лот', '', '', '', 0, 15000, 0, '2024-02-11', '2025-01-01', 'valer4ik312', '-'),
(23, 'Диван', 'тестовий лот', '', '', '', 1, 110, 0, '2024-02-11', '2025-01-01', 'valer4ik312', 'sashik');

-- --------------------------------------------------------

--
-- Структура таблиці `COMMENT`
--

CREATE TABLE `COMMENT` (
  `ID` int(11) NOT NULL,
  `AUCTION_ID` int(11) NOT NULL,
  `AUTHOR_COMMENT` text NOT NULL,
  `MESSAGE` text NOT NULL,
  `DATE` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `COMMENT`
--

INSERT INTO `COMMENT` (`ID`, `AUCTION_ID`, `AUTHOR_COMMENT`, `MESSAGE`, `DATE`) VALUES
(6, 19, 'valer4ik312', 'Hello world!', '2024-02-11'),
(7, 17, 'valer4ik312', 'hello world!', '2024-02-11'),
(8, 23, 'valer4ik312', 'Test Message!', '2024-02-11');

-- --------------------------------------------------------

--
-- Структура таблиці `USERS`
--

CREATE TABLE `USERS` (
  `ID` int(11) NOT NULL,
  `PIB` text NOT NULL,
  `USERNAME` text NOT NULL,
  `PASSWORD` varchar(255) NOT NULL,
  `PHONE` varchar(13) NOT NULL,
  `PHOTO_PROFILE` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `USERS`
--

INSERT INTO `USERS` (`ID`, `PIB`, `USERNAME`, `PASSWORD`, `PHONE`, `PHOTO_PROFILE`) VALUES
(14, 'Чернадчук Валерій', 'valer4ik312', '4297f44b13955235245b2497399d7a93', ' 380976811804', 'https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png'),
(15, 'Бондаренко Олександр', 'sashik', '4297f44b13955235245b2497399d7a93', ' XXXXXXXXXXXX', 'https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png');

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `AUCTION`
--
ALTER TABLE `AUCTION`
  ADD PRIMARY KEY (`ID`);

--
-- Індекси таблиці `COMMENT`
--
ALTER TABLE `COMMENT`
  ADD PRIMARY KEY (`ID`);

--
-- Індекси таблиці `USERS`
--
ALTER TABLE `USERS`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `AUCTION`
--
ALTER TABLE `AUCTION`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT для таблиці `COMMENT`
--
ALTER TABLE `COMMENT`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблиці `USERS`
--
ALTER TABLE `USERS`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
