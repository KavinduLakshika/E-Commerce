-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 10, 2024 at 10:07 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `catId` int(11) NOT NULL,
  `catName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `cusId` int(11) NOT NULL,
  `cusName` varchar(255) NOT NULL,
  `cusEmail` varchar(255) NOT NULL,
  `cusPw` varchar(255) NOT NULL,
  `cusGender` varchar(45) DEFAULT NULL,
  `cusPhone1` varchar(45) DEFAULT NULL,
  `cusPhone2` varchar(45) DEFAULT NULL,
  `cusCountry` varchar(45) DEFAULT NULL,
  `cusDob` date DEFAULT NULL,
  `cusImg` varchar(45) DEFAULT NULL,
  `cusStatus` varchar(45) NOT NULL,
  `loginType` varchar(45) DEFAULT NULL,
  `otp` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `delivery`
--

CREATE TABLE `delivery` (
  `deliveryId` int(11) NOT NULL,
  `deliveryCode` varchar(45) NOT NULL,
  `deliveryAddress` varchar(255) NOT NULL,
  `deliveryCity` varchar(255) NOT NULL,
  `deliveryPostal` varchar(45) NOT NULL,
  `deliveryPhone` varchar(45) NOT NULL,
  `deliveryEmail` varchar(255) NOT NULL,
  `deliveryFName` varchar(255) NOT NULL,
  `deliveryLName` varchar(255) NOT NULL,
  `deliveryMsg` varchar(255) DEFAULT NULL,
  `deliveryStatus` varchar(45) DEFAULT NULL,
  `customer_cusId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `delivery_has_order`
--

CREATE TABLE `delivery_has_order` (
  `delivery_deliveryId` int(11) NOT NULL,
  `order_orderId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `orderId` int(11) NOT NULL,
  `orderQty` int(11) DEFAULT NULL,
  `orderDiscount` float NOT NULL,
  `orderPrice` float NOT NULL,
  `orderShippingFee` float DEFAULT NULL,
  `orderDate` datetime DEFAULT NULL,
  `product_productId` int(11) NOT NULL,
  `customer_cusId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orderproduct`
--

CREATE TABLE `orderproduct` (
  `orderProductId` int(11) NOT NULL,
  `TotalAmount` varchar(255) DEFAULT NULL,
  `size` varchar(45) DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  `order_orderId` int(11) NOT NULL,
  `productId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orderproduct_has_product`
--

CREATE TABLE `orderproduct_has_product` (
  `orderProduct_orderProductId` int(11) NOT NULL,
  `product_productId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `productId` int(11) NOT NULL,
  `productName` varchar(255) NOT NULL,
  `productPrice` float NOT NULL,
  `productQty` int(11) NOT NULL,
  `productSize` varchar(45) NOT NULL,
  `productColor` varchar(45) NOT NULL,
  `productDescription` varchar(255) DEFAULT NULL,
  `productImage` varchar(255) DEFAULT NULL,
  `productStatus` varchar(45) NOT NULL,
  `category_catId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `transactionId` int(11) NOT NULL,
  `transactionMethod` varchar(45) DEFAULT NULL,
  `transactionTotalPrice` float DEFAULT NULL,
  `transactionDiscount` float DEFAULT NULL,
  `transactionDate` datetime DEFAULT NULL,
  `order_orderId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userId` int(11) NOT NULL,
  `userFullName` varchar(255) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `userType` varchar(45) NOT NULL,
  `userPw` varchar(255) NOT NULL,
  `userEmail` varchar(255) NOT NULL,
  `userNic` varchar(45) NOT NULL,
  `userAddress` varchar(255) NOT NULL,
  `userImg` varchar(255) DEFAULT NULL,
  `userTP` varchar(45) NOT NULL,
  `userSecondTP` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`catId`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`cusId`);

--
-- Indexes for table `delivery`
--
ALTER TABLE `delivery`
  ADD PRIMARY KEY (`deliveryId`),
  ADD KEY `fk_delivery_customer1_idx` (`customer_cusId`);

--
-- Indexes for table `delivery_has_order`
--
ALTER TABLE `delivery_has_order`
  ADD PRIMARY KEY (`delivery_deliveryId`,`order_orderId`),
  ADD KEY `fk_delivery_has_order_order1_idx` (`order_orderId`),
  ADD KEY `fk_delivery_has_order_delivery1_idx` (`delivery_deliveryId`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`orderId`),
  ADD KEY `fk_order_product1_idx` (`product_productId`),
  ADD KEY `fk_order_customer1_idx` (`customer_cusId`);

--
-- Indexes for table `orderproduct`
--
ALTER TABLE `orderproduct`
  ADD PRIMARY KEY (`orderProductId`),
  ADD KEY `fk_orderProduct_order1_idx` (`order_orderId`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `orderproduct_has_product`
--
ALTER TABLE `orderproduct_has_product`
  ADD PRIMARY KEY (`orderProduct_orderProductId`,`product_productId`),
  ADD KEY `fk_orderProduct_has_product_product1_idx` (`product_productId`),
  ADD KEY `fk_orderProduct_has_product_orderProduct1_idx` (`orderProduct_orderProductId`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`productId`),
  ADD KEY `fk_product_category_idx` (`category_catId`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`transactionId`),
  ADD KEY `fk_transaction_order1_idx` (`order_orderId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `catId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `cusId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `delivery`
--
ALTER TABLE `delivery`
  MODIFY `deliveryId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orderproduct`
--
ALTER TABLE `orderproduct`
  MODIFY `orderProductId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `productId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `transactionId` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `delivery`
--
ALTER TABLE `delivery`
  ADD CONSTRAINT `fk_delivery_customer1` FOREIGN KEY (`customer_cusId`) REFERENCES `customer` (`cusId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `delivery_has_order`
--
ALTER TABLE `delivery_has_order`
  ADD CONSTRAINT `fk_delivery_has_order_delivery1` FOREIGN KEY (`delivery_deliveryId`) REFERENCES `delivery` (`deliveryId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_delivery_has_order_order1` FOREIGN KEY (`order_orderId`) REFERENCES `order` (`orderId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `fk_order_customer1` FOREIGN KEY (`customer_cusId`) REFERENCES `customer` (`cusId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_order_product1` FOREIGN KEY (`product_productId`) REFERENCES `product` (`productId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `orderproduct`
--
ALTER TABLE `orderproduct`
  ADD CONSTRAINT `fk_orderProduct_order1` FOREIGN KEY (`order_orderId`) REFERENCES `order` (`orderId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `orderproduct_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `product` (`productId`);

--
-- Constraints for table `orderproduct_has_product`
--
ALTER TABLE `orderproduct_has_product`
  ADD CONSTRAINT `fk_orderProduct_has_product_orderProduct1` FOREIGN KEY (`orderProduct_orderProductId`) REFERENCES `orderproduct` (`orderProductId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_orderProduct_has_product_product1` FOREIGN KEY (`product_productId`) REFERENCES `product` (`productId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `fk_product_category` FOREIGN KEY (`category_catId`) REFERENCES `category` (`catId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `fk_transaction_order1` FOREIGN KEY (`order_orderId`) REFERENCES `order` (`orderId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
