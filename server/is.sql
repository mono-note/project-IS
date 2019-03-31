CREATE TABLE Role
(
  role_id varchar(2),
  name varchar(50),
  CONSTRAINT Role PRIMARY KEY (role_id)
);

CREATE TABLE Users
(
  user_id varchar(10) NOT NULL,
  username varchar(50) NOT NULL,
  password varchar(50) NOT NULL,
  role_id varchar(2) NOT NULL,
  CONSTRAINT user_pk PRIMARY KEY (user_id),
  CONSTRAINT user_fk_role FOREIGN KEY (role_id)
    REFERENCES Role(role_id)
);

CREATE TABLE Customer
(
  customer_id varchar(10) NOT NULL,
  firstname varchar(100) NOT NULL,
  lastname varchar(100) NOT NULL,
  phone number(10) NOT NULL,
  email varchar(100) NOT NULL,
  address varchar(255) NOT NULL,
  birthdate varchar(20) NOT NULL,
  user_id varchar(10) NOT NULL,
  CONSTRAINT customer_pk PRIMARY KEY (customer_id),
  CONSTRAINT customer_fk_user FOREIGN KEY (user_id)
    REFERENCES Users(user_id)
);


CREATE TABLE Status
(
  id varchar(2) NOT NULL,
  name varchar(50) NOT NULL,
  CONSTRAINT status_pk PRIMARY KEY (id)
);

CREATE TABLE Court
(
  court_id varchar(10) NOT NULL,
  court_no number(10) NOT NULL,
  court_type varchar(10) NOT NULL,
  court_color varchar(50) NOT NULL,
  price decimal NOT NULL,
  status varchar(2) NOT NULL,
  CONSTRAINT court_pk PRIMARY KEY (court_id),
  CONSTRAINT court_fk_status FOREIGN KEY (status)
    REFERENCES Status(id)
);

CREATE TABLE Time_Schedule
(
  time_code varchar(20) NOT NULL,
  time_range varchar(50) NOT NULL,
  CONSTRAINT ts_pk PRIMARY KEY (time_code)
);

CREATE TABLE Reservation
(
  reserve_id varchar(10) NOT NULL,
  customer_id varchar(10) NOT NULL,
  court_id varchar(10) NOT NULL,
  reserve_date date NOT NULL,
  reserve_time varchar(20) NOT NULL,
  create_at timestamp NOT NULL,
  update_at timestamp NOT NULL,
  CONSTRAINT reserve_pk PRIMARY KEY (reserve_id),
  CONSTRAINT reserve_fk_customer FOREIGN KEY (customer_id)
    REFERENCES Customer(customer_id),
  CONSTRAINT reserve_fk_court FOREIGN KEY (court_id)
    REFERENCES Court(court_id),
  CONSTRAINT reserve_fk_time FOREIGN KEY (reserve_time)
    REFERENCES Time_Schedule(time_code)
);


CREATE TABLE Promotion
(
  code varchar(20) NOT NULL,
  pro_start date NOT NULL,
  pro_end date NOT NULL,
  discount decimal NOT NULL,
  pro_name varchar(50) NOT NULL,
  CONSTRAINT promotion_pk PRIMARY KEY (code)
);

CREATE TABLE Billing
(
  bill_id varchar(10) NOT NULL,
  reserve_id varchar(10) NOT NULL,
  bill_date date NOT NULL,
  pro_code varchar(20) NOT NULL,
  amount decimal NOT NULL,
  create_at timestamp NOT NULL,
  update_at timestamp NOT NULL,
  CONSTRAINT billing_pk PRIMARY KEY (bill_id),
  CONSTRAINT billing_fk_reserve FOREIGN KEY (reserve_id)
    REFERENCES Reservation(reserve_id),
  CONSTRAINT billing_fk_promotion FOREIGN KEY (pro_code)
    REFERENCES Promotion(code)
);



Drop Table Billing;
Drop table Promotion;
Drop Table Reservation;
Drop Table Time_Schedule;
Drop Table Court;
Drop Table Status;
Drop Table Customer;
Drop Table Users;
Drop Table Role;


INSERT INTO Status VALUES ('0','Unavailable');
INSERT INTO Status VALUES ('1','Available');

INSERT INTO Court VALUES ('c101','101','Rubber','Blue','150','0');
INSERT INTO Court VALUES ('c102','102','Rubber','Blue','150','0');
INSERT INTO Court VALUES ('c103','103','Rubber','Blue','150','0');
INSERT INTO Court VALUES ('c104','104','Rubber','Blue','150','0');
INSERT INTO Court VALUES ('c105','105','Rubber','Blue','150','0');
INSERT INTO Court VALUES ('c106','106','PVC','Red','120','0');
INSERT INTO Court VALUES ('c107','107','PVC','Red','120','0');
INSERT INTO Court VALUES ('c108','108','PVC','Red','120','0');


INSERT INTO Time_Schedule VALUES ('t1011','10.00-11.00');
INSERT INTO Time_Schedule VALUES ('t1112','11.00-12.00');
INSERT INTO Time_Schedule VALUES ('t1213','12.00-13.00');
INSERT INTO Time_Schedule VALUES ('t1314','13.00-14.00');
INSERT INTO Time_Schedule VALUES ('t1415','14.00-15.00');
INSERT INTO Time_Schedule VALUES ('t1516','15.00-16.00');
INSERT INTO Time_Schedule VALUES ('t1617','16.00-17.00');
INSERT INTO Time_Schedule VALUES ('t1718','17.00-18.00');
INSERT INTO Time_Schedule VALUES ('t1819','18.00-19.00');
INSERT INTO Time_Schedule VALUES ('t1920','19.00-20.00');
INSERT INTO Time_Schedule VALUES ('t2021','20.00-21.00');
INSERT INTO Time_Schedule VALUES ('t2122','21.00-22.00');


UPDATE Court
SET court_no = value1, price = value2
WHERE court_id = vid;

DELETE FROM Court WHERE court_id = vid;

CREATE SEQUENCE 'detail_seq' START WITH 1;
INSERT INTO Reservation VALUES ('R0001','C0002','RD-0001','20/2/2019',sysdate,sysdate)
INSERT INTO Reservation_Detail VALUES ('detail_seq'.nextvalue,'RD-0001','COR-001','t1617')
INSERT INTO Reservation_Detail VALUES ('detail_seq'.nextvalue,'RD-0001','COR-001','t1718')