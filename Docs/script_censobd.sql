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
    ID_Vivienda INT PRIMARY KEY,
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
    Num_Hogar INT,
    Num_Persona INT,
    Nombres VARCHAR(50),
    Apellidos VARCHAR(50),
    Sexo VARCHAR(10),
    Fecha_Nacimiento DATE,
    Estado_Civil VARCHAR(10),
    Religion VARCHAR(50),
    Nivel_Educativo VARCHAR(50),
    Total_Hijos INT,
    FOREIGN KEY (Num_Hogar) REFERENCES Hogar(Num_Hogar)
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
    Num_Hogar INT PRIMARY KEY,
    ID_Vivienda INT,
    Tipo_Combustible VARCHAR(50),
    Num_Miembros INT,
    FOREIGN KEY (ID_Vivienda) REFERENCES Vivienda(ID_Vivienda)
);

-- Insert initial data

-- Encuestador
INSERT INTO Encuestador (DNI, Clave, Nombres, Apellidos, Edad, Sexo, Experiencia) VALUES
(12345678, 'encuesta123', 'Juan', 'Perez', 30, 'Masculino', '3 años de experiencia en encuestas'),
(23456789, 'clave456', 'Maria', 'Gonzalez', 25, 'Femenino', 'Experiencia en encuestas de viviendas urbanas'),
(34567890, 'contraseña789', 'Pedro', 'Martinez', 35, 'Masculino', 'Experiencia en encuestas rurales y urbanas');

-- Vivienda
INSERT INTO Vivienda (ID_Vivienda, Tipo_Vivienda, Condicion, Origen_Agua, Tipo_Baño, Total_Habitaciones) VALUES
(1, 'Casa', 'Buena', 'Pozo', 'Compartido', 5),
(2, 'Departamento', 'Regular', 'Red Pública', 'Privado', 3),
(3, 'Casa', 'Mala', 'Camión Cisterna', 'No tiene', 4);

-- Direccion
INSERT INTO Direccion (ID_Vivienda, Departamento, Provincia, Distrito, Calle) VALUES
(1, 'Lima', 'Lima', 'Miraflores', 'Av. Larco'),
(2, 'Lima', 'Lima', 'San Isidro', 'Av. Salaverry'),
(3, 'Lima', 'Lima', 'Barranco', 'Calle El Sol');

-- Infraestructura
INSERT INTO Infraestructura (ID_Vivienda, Material_Paredes, Material_Techos, Material_Pisos) VALUES
(1, 'Ladrillo', 'Teja', 'Madera'),
(2, 'Concreto', 'Teja', 'Cerámica'),
(3, 'Adobe', 'Paja', 'Tierra');

-- Persona
INSERT INTO Persona (Dni, Num_Hogar, Num_Persona, Nombres, Apellidos, Sexo, Fecha_Nacimiento, Estado_Civil, Religion, Nivel_Educativo, Total_Hijos) VALUES
(11111111, 1, 1, 'Carlos', 'Lopez', 'Masculino', '1990-05-15', 'Soltero', 'Católico', 'Universitario', 0),
(22222222, 1, 2, 'Ana', 'Garcia', 'Femenino', '1995-10-20', 'Soltera', 'Ateo', 'Secundaria', 2),
(33333333, 2, 1, 'Roberto', 'Diaz', 'Masculino', '1985-02-10', 'Casado', 'Cristiano', 'Universitario', 3);

-- HojaCenso
INSERT INTO HojaCenso (Num_Cedula, DNI, ID_Vivienda, Fecha) VALUES
(1, 12345678, 1, '2024-06-01'),
(2, 23456789, 2, '2024-06-02'),
(3, 34567890, 3, '2024-06-03');

-- Hogar
INSERT INTO Hogar (Num_Hogar, ID_Vivienda, Tipo_Combustible, Num_Miembros) VALUES
(1, 1, 'Gas Natural', 2),
(2, 2, 'Electricidad', 3),
(3, 3, 'Leña', 4);
