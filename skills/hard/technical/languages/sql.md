# 📝 Conceptos de SQL y Bases de Datos

Objetivo: organizar el contenido por niveles de abstracción y complejidad, desde definiciones básicas hasta prácticas y excepciones por motor.

---

## Índice

- [📝 Conceptos de SQL y Bases de Datos](#-conceptos-de-sql-y-bases-de-datos)
  - [Índice](#índice)
  - [1. ¿Qué es un RDBMS?](#1-qué-es-un-rdbms)
  - [2. Modelo relacional y tipos básicos](#2-modelo-relacional-y-tipos-básicos)
  - [3. SQL ANSI: base portable](#3-sql-ansi-base-portable)
  - [4. DDL / DML / Transacciones](#4-ddl--dml--transacciones)
  - [5. Joins (combinación de tablas)](#5-joins-combinación-de-tablas)
    - [Complemento: UNION vs JOIN](#complemento-union-vs-join)
  - [6. Expresiones de Tabla Común (CTE)](#6-expresiones-de-tabla-común-cte)
  - [7. Índices y EXPLAIN (optimización)](#7-índices-y-explain-optimización)
  - [8. Transacciones y ACID (concurrency)](#8-transacciones-y-acid-concurrency)
  - [9. Gestión de fechas y horas](#9-gestión-de-fechas-y-horas)
  - [10. Gestión de datos por temperatura](#10-gestión-de-datos-por-temperatura)
  - [11. Portabilidad y buenas prácticas](#11-portabilidad-y-buenas-prácticas)

---

## 1. ¿Qué es un RDBMS?

Un [RDBMS](../software/dbs/README.md) (Relational Database Management System) es software para crear, gestionar y consultar bases de datos relacionales (tablas con filas y columnas). Soporta SQL, integridad referencial (PK/FK), constraints, transacciones [ACID](#8-transacciones-y-acid-concurrency) y mecanismos de rendimiento/escala. Ejemplos: [PostgreSQL](../software/dbs/postgresql.md), [MySQL](../software/dbs/mysql.md), [SQL Server](../software/dbs/sql-server.md), [Oracle](../software/dbs/oracle.md).

[📇](#índice)

---

## 2. Modelo relacional y tipos básicos

- Entidades → tablas; atributos → columnas.  
- Tipos comunes: `INTEGER`, `VARCHAR`, `TEXT`, `DATE`, `TIME`, `TIMESTAMP`, `BOOLEAN`.  
- Constraints: `PRIMARY KEY`, `FOREIGN KEY`, `UNIQUE`, `NOT NULL`, `CHECK`.

Ejemplo:

```sql
CREATE TABLE clientes (
  id INTEGER PRIMARY KEY,
  nombre VARCHAR(150) NOT NULL,
  email VARCHAR(200) UNIQUE,
  creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

[📇](#índice)

---

## 3. SQL ANSI: base portable

Construcciones y comandos estándar (ANSI) que funcionan de forma similar en la mayoría de RDBMS.

- Consultas: `SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY ... FETCH FIRST N ROWS ONLY`.
- Manipulación de datos: `INSERT INTO ... VALUES (...); UPDATE ... SET ... WHERE ...; DELETE FROM ... WHERE ....`
- Definición de esquema: `CREATE TABLE ..., ALTER TABLE ..., DROP TABLE ....`
- Transacciones: `START TRANSACTION` / `BEGIN` (varía ligeramente) — `COMMIT` — `ROLLBACK`.
- Filtrado y clasificación: `WHERE`, `ORDER BY`, `DISTINCT`.
- Agregación: `COUNT()`, `SUM()`, `AVG()`, `MIN()`, `MAX()` y `GROUP BY`.
- Joins: `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, `FULL JOIN` (la semántica ANSI es la misma).
- Limitar filas: `FETCH FIRST N ROWS ONLY` (forma ANSI estándar; algunos motores usan `LIMIT` o `TOP`).

Ejemplo ANSI SQL:

```sql
-- Selección con agregación y límite ANSI
SELECT categoria, COUNT(*) AS total
FROM productos
WHERE activo = TRUE
GROUP BY categoria
HAVING COUNT(*) > 10
ORDER BY total DESC
FETCH FIRST 10 ROWS ONLY;
```

[📇](#índice)

---

## 4. DDL / DML / Transacciones

- **DDL (Data Definition Language)**: Define estructura, ej. `CREATE TABLE`, `ALTER TABLE`.
- **DML (Data Manipulation Language)**: Manipula datos, ej. `SELECT`, `INSERT`, `UPDATE`, `DELETE`.
- **Transacciones**: Conjuntos de operaciones DML que se ejecutan como una unidad. Inician con `BEGIN` y finalizan con `COMMIT` o `ROLLBACK`.

Ejemplo:

```sql
-- Crear tabla (sintaxis ANSI básica)
CREATE TABLE clientes (
  id INTEGER PRIMARY KEY,
  nombre VARCHAR(150) NOT NULL,
  email VARCHAR(200) UNIQUE,
  creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar datos
INSERT INTO clientes (nombre, email) VALUES ('Juan', 'juan@example.com');

-- Actualizar datos
UPDATE clientes SET email = 'juanp@example.com' WHERE id = 1;

-- Eliminar datos
DELETE FROM clientes WHERE id = 1;

-- Usar transacciones
BEGIN;
  UPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;
  UPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;
COMMIT;
```

[📇](#índice)

---

## 5. Joins (combinación de tablas)

Los Joins combinan datos de múltiples tablas basándose en una columna relacionada.

| Tipo de JOIN                    | Función                                                                              | Resultado Típico                                           |
| :------------------------------ | :----------------------------------------------------------------------------------- | :--------------------------------------------------------- |
| **INNER JOIN**                  | Retorna filas con **coincidencia** en ambas tablas.                                  | Solo los registros compartidos.                            |
| **LEFT JOIN**                   | Retorna **todas** las filas de la tabla izquierda, y las coincidentes de la derecha. | NULL en los campos de la derecha si no hay coincidencia.   |
| **RIGHT JOIN**                  | Retorna **todas** las filas de la tabla derecha, y las coincidentes de la izquierda. | NULL en los campos de la izquierda si no hay coincidencia. |
| **FULL JOIN / FULL OUTER JOIN** | Retorna todas las filas de ambas tablas, combinándolas si hay coincidencia.          | NULL donde no haya coincidencia en el lado opuesto.        |

**Nota sobre OUTER:** La palabra clave `OUTER` es explícita pero opcional. `LEFT JOIN` = `LEFT OUTER JOIN` (idéntico); `FULL JOIN` = `FULL OUTER JOIN` (idéntico). El término "OUTER" enfatiza que se incluyen filas sin coincidencia.

**Nota sobre MySQL:** MySQL no soporta `FULL JOIN` / `FULL OUTER JOIN`. Para simular un FULL JOIN, use `UNION`:

```sql
-- Simular FULL JOIN en MySQL
SELECT a.id, a.nombre, b.pedido
FROM clientes a
LEFT JOIN pedidos b ON a.id = b.cliente_id
UNION
SELECT a.id, a.nombre, b.pedido
FROM clientes a
RIGHT JOIN pedidos b ON a.id = b.cliente_id;
```

Ejemplo básico:

```sql
SELECT a.nombre, b.pedido
FROM clientes a
INNER JOIN pedidos b ON a.id = b.cliente_id
WHERE a.activo = TRUE;
```

---

### Complemento: UNION vs JOIN

Aunque ambos combinan resultados, son operaciones fundamentalmente diferentes:

| Operación | Propósito                                                                                    | Entrada                                              | Salida                           |
| :-------- | :------------------------------------------------------------------------------------------- | :--------------------------------------------------- | :------------------------------- |
| **JOIN**  | Combina columnas de múltiples tablas basándose en una condición (ON).                        | 2+ tablas (horizontalmente).                         | Filas más anchas (más columnas). |
| **UNION** | Apila resultados de múltiples consultas. Elimina duplicados (UNION ALL mantiene duplicados). | 2+ SELECT queries con igual número/tipo de columnas. | Filas más largas (más filas).    |

Ejemplo JOIN (combina horizontalmente):

```sql
SELECT a.nombre, b.pedido
FROM clientes a
LEFT JOIN pedidos b ON a.id = b.cliente_id;
-- Resultado: nombre cliente | pedido (columnas de ambas tablas)
```

Ejemplo UNION (apila verticalmente):

```sql
SELECT nombre FROM clientes WHERE activo = TRUE
UNION
SELECT nombre FROM proveedores WHERE activo = TRUE;
-- Resultado: lista única de nombres (clientes + proveedores, sin duplicados)
```

Ejemplo UNION ALL (mantiene duplicados):

```sql
SELECT nombre FROM clientes
UNION ALL
SELECT nombre FROM proveedores;
-- Resultado: lista de nombres con duplicados si existen
```

[📇](#índice)

---

## 6. Expresiones de Tabla Común (CTE)

Las CTEs mejoran la legibilidad y estructuran consultas complejas, especialmente las recursivas.

- **Sintaxis Clave:** Comienzan con la cláusula `WITH`.  
- **Propósito:** Crear un conjunto de resultados temporal y nombrado, válido solo para la consulta que le sigue.

Ejemplo:

```sql
WITH Clientes_Grandes AS (  
    SELECT id, nombre  
    FROM clientes  
    WHERE gasto_anual > 10000  
)  
SELECT *  
FROM Clientes_Grandes;
```

[📇](#índice)

---

## 7. Índices y EXPLAIN (optimización)

Los índices mejoran el rendimiento de las consultas. `EXPLAIN` muestra cómo el motor de la base de datos ejecuta una consulta.

- **Type/Operation**: Index Scan, Index Only Scan. Indica el uso de índices.
- **Cost**: Un número bajo es bueno; alto indica problemas.
- **Sort**: Ausente o pequeño es bueno; sort costoso indica posible mejora.
- **Filas**: Estimaciones cercanas a las reales son deseables.

Ejemplo de uso de `EXPLAIN`:

```sql
EXPLAIN SELECT * FROM clientes WHERE nombre = 'Juan';
```

[📇](#índice)

---

## 8. Transacciones y ACID (concurrency)

Las transacciones garantizan la integridad de la base de datos. Propiedades ACID:

| Propiedad       | Definición                                                                     | Relevancia                                                                               |
| :-------------- | :----------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- |
| **Atomicity**   | Todo o nada. Si falla una parte, se revierte todo (ROLLBACK).                  | Asegura que las operaciones críticas (ej. transferencia de dinero) se completen enteras. |
| **Consistency** | La BD siempre pasa de un estado válido a otro.                                 | Las transacciones deben respetar todas las reglas y *constraints*.                       |
| **Isolation**   | Las transacciones concurrentes no deben interferir entre sí.                   | Se gestiona con niveles de aislamiento (ej. READ COMMITTED, SERIALIZABLE).               |
| **Durability**  | Los cambios confirmados (COMMIT) son permanentes, incluso después de un fallo. | Garantizado por el registro de transacciones (*write-ahead logging*).                    |

[📇](#índice)

---

## 9. Gestión de fechas y horas

Conceptos clave

- Tipos comunes: `DATE` (solo fecha), `TIME` (solo hora), `TIMESTAMP` (fecha+hora, sin zona), `TIMESTAMPTZ` / `DATETIMEOFFSET` (con zona), `INTERVAL` (duración).
- Literales: 'YYYY-MM-DD' para DATE; 'YYYY-MM-DD HH:MM:SS' para TIMESTAMP.
- Buenas prácticas: almacenar en UTC cuando hay múltiples zonas; usar tipos fecha/hora, no strings; indexar columnas de fecha usadas en filtros.

Funciones y operaciones frecuentes (PostgreSQL)

```sql
-- Obtener fecha/hora actual
SELECT CURRENT_DATE, NOW(), CURRENT_TIMESTAMP;

-- Parsear strings
SELECT to_date('25-11-2025','DD-MM-YYYY');
SELECT to_timestamp('25/11/2025 09:30','DD/MM/YYYY HH24:MI');

-- Aritmética con intervalos
SELECT inicio + INTERVAL '1 hour' AS inicio_mas_1h;

-- Truncar / extraer
SELECT date_trunc('day', NOW()) AS inicio_dia;
SELECT EXTRACT(YEAR FROM NOW()) AS anio;

-- Diferencia legible
SELECT AGE('2025-11-26'::timestamp, '2025-11-25'::timestamp) AS diff;

-- Conversión de zona
SELECT NOW() AT TIME ZONE 'UTC' AS now_utc;
SELECT (NOW() AT TIME ZONE 'UTC') AT TIME ZONE 'America/Mexico_City' AS now_mex;
```

Notas rápidas para MySQL y SQL Server

- MySQL: `NOW()`, `CURDATE()`, `STR_TO_DATE('25/11/2025','%d/%m/%Y')`, `DATE_ADD`/`DATE_SUB` para sumar/restar; tipos: `DATE`, `DATETIME`, `TIMESTAMP` (sin zona).  
- SQL Server: `GETDATE()`, `SYSDATETIMEOFFSET()`, `CONVERT(datetime,'2025-11-25',23)`, `DATEADD` / `DATEDIFF`; uso de `DATETIMEOFFSET` para zona.

Consideraciones sobre rangos y filtros

- Para consultas por rango de días prefiera semántica [start, end) (ej. `WHERE ts >= '2025-11-01' AND ts < '2025-12-01'`) para evitar problemas con fracciones de segundo.  
- Evite aplicar funciones directamente sobre la columna de fecha en WHERE (ej. `WHERE DATE(ts) = ...`), ya que impide el uso de índices; use rangos en su lugar.  
- Almacene timestamps en UTC y convierta a la zona del usuario al mostrar.

Ejemplo de tabla de eventos (Postgres)

```sql
CREATE TABLE eventos (
  id serial PRIMARY KEY,
  titulo text,
  inicio timestamptz NOT NULL,
  fin timestamptz NOT NULL
);

-- Insertar y consulta por rango (UTC almacenado)
INSERT INTO eventos (titulo, inicio, fin)
VALUES ('Reunión', '2025-11-25 09:00:00+00', '2025-11-25 10:00:00+00');

SELECT * FROM eventos
WHERE inicio >= '2025-11-25'::date
  AND inicio < ('2025-11-25'::date + INTERVAL '1 day');
```

[📇](#índice)

---

## 10. Gestión de datos por temperatura

Estrategia para optimizar costos y rendimiento basada en la frecuencia de acceso a los datos.

| Tipo de Dato              | Frecuencia de Acceso                                    | Estrategia de Almacenamiento                                                |
| :------------------------ | :------------------------------------------------------ | :-------------------------------------------------------------------------- |
| **Datos Calientes (Hot)** | Muy frecuente (ej. últimos días/semanas).               | BD principal (SSD rápido), optimizado con índices y *caching*.              |
| **Datos Fríos (Cold)**    | Muy rara o nula (ej. archivos históricos de hace años). | Almacenamiento de bajo costo y archivo (AWS Glacier, S3 Infrequent Access). |

[📇](#índice)

---

## 11. Portabilidad y buenas prácticas

- Usar nombres claros y consistentes para tablas/columnas.
- Definir constraints para mantener integridad (PK, FK, UNIQUE, NOT NULL).
- Evitar funciones sobre columnas en WHERE si se quiere usar índices; prefiera rangos o columnas computadas indexadas.
- Usar transacciones para operaciones que afectan consistencia (COMMIT/ROLLBACK).
- Aplicar semántica de rango [start, end) para filtros por tiempo cuando corresponda.

Notas: pequeñas diferencias de sintaxis existen entre motores (p. ej. LIMIT vs FETCH, tipos concretos, detalles en ALTER), pero las construcciones anteriores son las más portables entre sistemas.

[📇](#índice)

---

[regresar](./README.md)
