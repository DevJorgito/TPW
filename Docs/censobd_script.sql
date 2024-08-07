Create database censobd;
USE censobd;

-- Create Encuestador table
CREATE TABLE Encuestador (
    DNI INT PRIMARY KEY,
    Clave VARCHAR(50),
    Nombres VARCHAR(50),
    Apellidos VARCHAR(50),
    Edad INT,
    Sexo VARCHAR(10),
    Experiencia VARCHAR(100)
);

-- Create Vivienda table
CREATE TABLE Vivienda (
    ID_Vivienda INT AUTO_INCREMENT PRIMARY KEY,
    Tipo_Vivienda VARCHAR(50),
    Condicion VARCHAR(50),
    Origen_Agua VARCHAR(50),
    Tipo_Baño VARCHAR(50),
    Total_Habitaciones INT
);

-- Create Direccion table
CREATE TABLE Direccion (
    ID_Vivienda INT PRIMARY KEY,
    Departamento VARCHAR(50),
    Provincia VARCHAR(50),
    Distrito VARCHAR(50),
    Calle VARCHAR(50),
    FOREIGN KEY (ID_Vivienda) REFERENCES Vivienda(ID_Vivienda)
);

-- Create Infraestructura table
CREATE TABLE Infraestructura (
    ID_Vivienda INT PRIMARY KEY,
    Material_Paredes VARCHAR(50),
    Material_Techos VARCHAR(50),
    Material_Pisos VARCHAR(50),
    FOREIGN KEY (ID_Vivienda) REFERENCES Vivienda(ID_Vivienda)
);

-- Create Persona table
CREATE TABLE Persona (
    Dni INT PRIMARY KEY,
    Hogar_ID INT,
    Num_Persona INT,
    Nombres VARCHAR(50),
    Apellidos VARCHAR(50),
    Sexo VARCHAR(10),
    Fecha_Nacimiento DATE,
    Estado_Civil VARCHAR(10),
    Religion VARCHAR(50),
    Nivel_Educativo VARCHAR(50),
    Total_Hijos INT,
    FOREIGN KEY (Hogar_ID) REFERENCES Hogar(Hogar_ID)
);

-- Create HojaCenso table
CREATE TABLE HojaCenso (
    Num_Cedula INT PRIMARY KEY,
    DNI INT,
    ID_Vivienda INT,
    Fecha DATE,
    FOREIGN KEY (DNI) REFERENCES Encuestador(DNI),
    FOREIGN KEY (ID_Vivienda) REFERENCES Vivienda(ID_Vivienda)
);

-- Create Hogar table
CREATE TABLE Hogar (
    Hogar_ID INT AUTO_INCREMENT PRIMARY KEY,
    ID_Vivienda INT,
    Tipo_Combustible VARCHAR(50),
    Num_Miembros INT,
    FOREIGN KEY (ID_Vivienda) REFERENCES Vivienda(ID_Vivienda)
);


INSERT INTO Encuestador (DNI, Clave, Nombres, Apellidos, Edad, Sexo, Experiencia) 
VALUES (74137908, MD5('010502'), 'Jorge', 'Contreras', 22, 'Masculino', '3 años de experiencia en encuestas de vivienda');


