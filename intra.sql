-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 19, 2015 at 02:41 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `intra`
--

-- --------------------------------------------------------

--
-- Table structure for table `appliedjobs`
--

CREATE TABLE IF NOT EXISTS `appliedjobs` (
  `dcuuser` varchar(11) NOT NULL,
  `cuser` varchar(11) NOT NULL,
  `cname` varchar(30) NOT NULL,
  `position` varchar(30) NOT NULL,
  `interview` varchar(5) NOT NULL,
  `confirm` varchar(5) NOT NULL,
  `attendedinterview` varchar(4) NOT NULL,
  `joboffer` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appliedjobs`
--

INSERT INTO `appliedjobs` (`dcuuser`, `cuser`, `cname`, `position`, `interview`, `confirm`, `attendedinterview`, `joboffer`) VALUES
('woodsa22', 'micros21', 'Microsoft', 'Junior App Developer', 'yes', '', '', ''),
('woodsa22', 'micros21', 'Microsoft', 'Software tester', '', '', '', ''),
('gibbos88', 'micros21', 'Microsoft', 'Software tester', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE IF NOT EXISTS `companies` (
  `cname` varchar(30) NOT NULL,
  `cuser` varchar(11) NOT NULL,
  `cpass` varchar(100) NOT NULL,
  `caddress` varchar(100) NOT NULL,
  `cdesc` varchar(500) NOT NULL,
  `cmail` varchar(30) NOT NULL,
  `cphone` int(15) NOT NULL,
  `contactname` varchar(30) NOT NULL,
  `contactposition` varchar(30) NOT NULL,
  `cwebsite` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`cname`, `cuser`, `cpass`, `caddress`, `cdesc`, `cmail`, `cphone`, `contactname`, `contactposition`, `cwebsite`) VALUES
('Microsoft', 'micros21', '$2a$07$usesomadasdsadsadsadae.Q0PRybPniVd72.qQ.9q6yjoslUZ1p.', 'Sandyford Industrial Estate, Carmanhall Road, Dubl', 'Microsoft Corporation is an American multinational corporation headquartered in Redmond, Washington, that develops, manufactures, licenses, supports and sells computer software, consumer electronics and personal computers and services.', 'microsoftcontact@hotmail.com', 2147483647, 'Sarah Codd', 'HR manager', 'http://www.microsoft.com/ireland/about/contact.html'),
('Sap', 'sap12345', '$2a$07$usesomadasdsadsadsadae.Q0PRybPniVd72.qQ.9q6yjoslUZ1p.', '', '', '', 0, '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE IF NOT EXISTS `jobs` (
  `username` varchar(11) NOT NULL,
  `cname` varchar(30) NOT NULL,
  `position` varchar(30) NOT NULL,
  `jobdesc` varchar(500) NOT NULL,
  `location` varchar(80) NOT NULL,
  `date` date NOT NULL,
  `requirements` varchar(100) NOT NULL,
  `languages` varchar(100) NOT NULL,
  `available` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`username`, `cname`, `position`, `jobdesc`, `location`, `date`, `requirements`, `languages`, `available`) VALUES
('micros21', 'Microsoft', 'Junior App Developer', 'Working hands on with android app development with a team of experienced software engineers', 'Block B, Atrium Building, Sandyford Indu', '2015-05-05', '2.2 or higher', 'c#.net, Angular', 'yes'),
('sap12345', 'Sap', 'Junior Software Engineer', 'Working with leading Sap software on a daily basis. ', '1012-1014 Kingswood Avenue Citywest Busi', '2015-04-04', '2.1 or higher', 'java', 'yes'),
('spanishP', 'Spanish Point', 'ASP.NET developer', 'You will be trained to design and implement websites that use the .NET framework. You will be exposed to well known Microsoft technologies such as Office 365, sharepoint, sql server.', 'Spanish Point Head Offices, John Rogerso', '2015-06-05', '2.1 or higher', 'C#.net, Asp.net, java, SQL', 'no'),
('google11', 'Google', 'Software Developer intern', 'You will be working with the most advanced senior software developers based in Dublin.', 'Google Ireland Ltd, Gordon House, Barrow', '2015-03-11', '1.1 or higher', 'Java, C++, Haskell', 'no'),
('micros21', 'Microsoft', 'Software tester', 'You will learn how to use various testing tools. Once you have come familiar with these tools you will take part in vigorous tests against our latest software.', 'Block B, Atrium Building, Sandyford Indu', '2015-06-05', '1.1 or higher', 'Java, C', 'yes');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE IF NOT EXISTS `reviews` (
  `cname` varchar(20) NOT NULL,
  `author` varchar(30) NOT NULL,
  `review` text NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`cname`, `author`, `review`, `date`) VALUES
('Sony', 'Sean Gibbons', 'I really enjoyed working with Sony I''d highly recommend it to anyone who''s interested in working with systems like the playstation network and playstation operating systems.', '2014-10-01'),
('Blizzard', 'Jim Walsh', 'I didn''t enjoy my time with Blizzard as we were given work and received minimal help. The work was stressful, working 10 hours straight with just one lunch break is not fun. If you like to work on your own this is the job for you, if not i''d think twice about applying.', '2014-10-12'),
('IBM', 'Paddy Conway', 'Working with IBM has transformed me completely. Before working with the company I was given a task and I would complete it, make it work. I''ve learned that you must constantly keep the requirements in mind, the stakeholder(s) need to be happy with your product or it''ll have to be redeveloped or even worse, scrapped. You must keep resources in mind and time. Completing the project within it''s deadline is very important. ', '2014-09-25'),
('Ebay', 'Sean Murphy', 'This job consists of database work and server maintenance. I really enjoyed my time here!', '2015-03-05'),
('Synchronous', 'Amy Walsh', 'Working with angular was a tonne of fun. Single page applications are awesome.', '2015-03-05');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE IF NOT EXISTS `students` (
  `name` varchar(50) DEFAULT NULL,
  `address` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `email` varchar(80) NOT NULL,
  `phone` int(11) NOT NULL,
  `studentnum` int(8) NOT NULL,
  `dcuuser` varchar(10) NOT NULL,
  `dcupass` varchar(100) NOT NULL,
  `degree` varchar(100) NOT NULL,
  `profilepic` text NOT NULL,
  `profilebio` text NOT NULL,
  `projectinterests` text NOT NULL,
  `preferences` varchar(255) NOT NULL,
  `cv` text NOT NULL,
  `lcresults` text NOT NULL,
  `jobs` varchar(255) NOT NULL,
  `hired` varchar(5) NOT NULL,
  `cname` varchar(30) NOT NULL,
  `position` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`name`, `address`, `dob`, `email`, `phone`, `studentnum`, `dcuuser`, `dcupass`, `degree`, `profilepic`, `profilebio`, `projectinterests`, `preferences`, `cv`, `lcresults`, `jobs`, `hired`, `cname`, `position`) VALUES
('Aaron Woods', '68 Ballygall road east, Glasnevin,Dublin 11', '1994-01-06', 'aaron.woods22@mail.dcu.ie', 879529237, 12407652, 'woodsa22', '$2a$07$usesomadasdsadsadsadae8S3M3I8D3O6byz9bTjDnASc6bdog9Ji', 'case3', '', 'I like to code in AngularJS. Please hire me?', 'The Angular framework is superb. I like to work on Angular js in my spare time', 'Angular, Java, c++, php.', 'I''m interested in working with you...(cv continued)', 'Maths A2\r\nIrish B2\r\nEnglish B2\r\nGeography B3\r\nHistory C3\r\nBusiness B3\r\nBiology C1', 'sap, spanishpoint', '', '', ''),
('Sean Gibbons', '67 ballygall road west, Whitehall, Dublin 9', '1995-03-09', 'sean.gibbons88@mail.dcu.ie', 877266253, 12509827, 'gibbos88', '$2a$07$usesomadasdsadsadsadae43p9rGgXDqBdw8JQV3prJGA8GgD6Vuu', 'case3', '', 'I work hard, i like to play and make games.', 'I like to work on games written in java. ', 'java, game dev, c++, c, haskell', 'Please hire me ladidida', 'Irish\r\nMath\r\nEnglish\r\nAccounting\r\nBusiness\r\nBiology\r\nGeography', 'o2, google', '', '', ''),
('Sinead Carr', 'beach road, cork', '1992-10-01', 'sinead.carr99.mail.dcu.ie', 867266253, 11408723, 'carrsi99', '$2a$07$usesomadasdsadsadsadae43p9rGgXDqBdw8JQV3prJGA8GgD6Vuu', 'ec3', '', 'I like working hard uninterrupted and on my own', 'Os dev, Web dev', 'Angular, elastic search.', 'I would love real experience in the industry', 'Irish b3\r\nMaths A2\r\nEngish D3\r\nChemistry C2\r\nBiology A1\r\nPhysics C3\r\nHistory C1', 'Microsoft, Spanish Point', 'yes', 'Google', 'Software Developer intern'),
('Harry Quigley', '20 Hill road, Enniscorthy', '1993-11-02', 'quigleyh@mail.dcu.ie', 865432635, 12309827, 'quigley', '$2a$07$usesomadasdsadsadsadae43p9rGgXDqBdw8JQV3prJGA8GgD6Vuu', 'case3', '', 'I like computers', 'computers', '', '', '', '', '', '', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
