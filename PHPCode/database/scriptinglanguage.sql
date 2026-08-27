-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 27, 2026 at 04:04 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `scriptinglanguage`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `cid` int(11) NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `city` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`cid`, `fullname`, `city`) VALUES
(1, 'Arjun Ghimire', 'Biratnagar'),
(2, 'Sonu Thapa', 'Khotang'),
(3, 'Youzeen Lamichane', 'Illam'),
(4, 'Premraj Dhakal', 'Biratnagar'),
(6, 'Garima Khatiwada', 'Kathmandhu');

-- --------------------------------------------------------

--
-- Table structure for table `neworders`
--

CREATE TABLE `neworders` (
  `oid` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `product` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `neworders`
--

INSERT INTO `neworders` (`oid`, `cid`, `product`) VALUES
(2, 4, 'Shirt'),
(3, 1, 'Facewash'),
(4, 5, 'Pen');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `customer` varchar(30) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `customer`, `amount`) VALUES
(1, 'Anish Thapa', 500),
(2, 'Prabesh Ghimire', 1000),
(3, 'Anish Thapa', 1500),
(4, 'Prabesh Ghimire', 2000),
(5, 'Prabesh Ghimire', 500);

-- --------------------------------------------------------

--
-- Table structure for table `resulttable`
--

CREATE TABLE `resulttable` (
  `id` int(11) NOT NULL,
  `studentname` varchar(50) NOT NULL,
  `department` varchar(10) NOT NULL,
  `marks` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `resulttable`
--

INSERT INTO `resulttable` (`id`, `studentname`, `department`, `marks`) VALUES
(1, 'Ram', 'BCA', 75),
(2, 'Sita', 'BCA', 55),
(3, 'Gita', 'BIM', 90),
(4, 'Shyam', 'BIM', 80),
(5, 'Anish Thapa', 'BCA', 60),
(6, 'Hari', 'BCA', 32),
(7, 'Arjun', 'BCA', 45),
(8, 'Binam', 'IT', 1),
(9, 'Biplav', 'CSIT', 1),
(10, 'Gita', 'BIM', 50);

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `studentname` varchar(50) DEFAULT NULL,
  `studentaddress` varchar(100) DEFAULT NULL,
  `studentphonenumber` varchar(15) DEFAULT NULL,
  `studentEmail` varchar(50) DEFAULT NULL,
  `imagelocation` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `studentname`, `studentaddress`, `studentphonenumber`, `studentEmail`, `imagelocation`) VALUES
(1, 'Sonu Thapa', 'Biratnagar-4', '+977-9812345678', 'sonu@gmail.com', ''),
(2, 'Anish Thapa', 'Biratnagar-4 Bargachi', '9801472480', 'psdannb@gmail.com', ''),
(4, 'Prabesh Ghimire', 'Biratnagar-3,Buddha chowlk', '9848665676', 'hencyktomoh@gmail.com', 'studentImages/img5.jpg'),
(5, 'Aashika Sardar', 'Biratnagar', '9812345698', 'psdannb@gmail.com', 'studentImages/multistack.png'),
(6, 'phoenixadmin', 'Biratnagar-4 Bargachi', '9706149087', 'psdannb@gmail.com', 'studentImages/mp-bim.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `neworders`
--
ALTER TABLE `neworders`
  ADD PRIMARY KEY (`oid`),
  ADD KEY `Customer order relationship` (`cid`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `resulttable`
--
ALTER TABLE `resulttable`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `neworders`
--
ALTER TABLE `neworders`
  MODIFY `oid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `resulttable`
--
ALTER TABLE `resulttable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
