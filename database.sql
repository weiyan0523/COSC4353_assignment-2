CREATE DATABASE NWC;

CREATE TABLE FuelQuote(
    UserID VARCHAR(5) NOT NULL,
    GallonsRequested INT NOT NULL,
    DATE VARCHAR(50) NOT NULL,
    SuggestedPrice INT,
    TotalAmountDue INT,
    PRIMARY KEY (UserID)
);

CREATE TABLE ClientInformation(
    UserID VARCHAR(5) NOT NULL,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    StreetAddress VARCHAR(100) NOT NULL,
    City VARCHAR(100) NOT NULL,
    State VARCHAR(2) NOT NULL,
    Zipcode VARCHAR(10) NOT NULL,
    PRIMARY KEY (UserID)  
);

CREATE TABLE UserCredentials(
    UserID VARCHAR(5) NOT NULL,
    Username VARCHAR(50) NOT NULL,
    PasswordEncrypted VARCHAR(255) NOT NULL,
    PRIMARY KEY (UserID)
);
