CREATE DATABASE NWC;

CREATE TABLE FuelQuote(
    UserID INT NOT NULL,
    GallonsRequested INT NOT NULL,
    DATE VARCHAR(50) NOT NULL,
    SuggestedPrice INT,
    TotalAmountDue INT,
    PRIMARY KEY (UserID)
);

CREATE TABLE ClientInformation(
    UserID INT NOT NULL,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    StreetAddress VARCHAR(255) NOT NULL,
    City VARCHAR(255) NOT NULL,
    State VARCHAR(50) NOT NULL,
    Zipcode VARCHAR(50) NOT NULL,
    PRIMARY KEY (UserID)  
);

CREATE TABLE UserCredentials(
    UserID INT NOT NULL,
    Username VARCHAR(50) NOT NULL,
    PasswordEncrypted VARCHAR(255) NOT NULL,
    PRIMARY KEY (UserID)
);