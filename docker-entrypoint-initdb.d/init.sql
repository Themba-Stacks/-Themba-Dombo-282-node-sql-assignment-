CREATE TABLE IF NOT EXISTS visitors 
(id serial PRIMARY KEY,
"name" VARCHAR (20) NOT NULL,
age INT NOT NULL,
date_of_visit DATE NOT NULL,
time_of_visit TIME NOT NULL,
assisted_by VARCHAR (20) NOT NULL,
comments VARCHAR (200) NOT NULL)