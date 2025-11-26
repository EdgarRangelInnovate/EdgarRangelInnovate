# Bases de datos

Este documento resume los principales tipos de bases de datos, cuándo usarlas y referencias a implementaciones concretas.

## Índice

- [Bases de datos](#bases-de-datos)
  - [Índice](#índice)
  - [Visión general](#visión-general)
  - [Relacionales](#relacionales)
  - [No relacionales (NoSQL)](#no-relacionales-nosql)
  - [Columnar / Analítica (OLAP)](#columnar--analítica-olap)
  - [Infraestructura y conceptos operativos comunes](#infraestructura-y-conceptos-operativos-comunes)
  - [Key-Value, Caches y Almacenamiento Local (client-side)](#key-value-caches-y-almacenamiento-local-client-side)
  - [Cuándo elegir uno u otro](#cuándo-elegir-uno-u-otro)
  - [Consideraciones operativas](#consideraciones-operativas)
  - [Buenas prácticas resumidas](#buenas-prácticas-resumidas)
  - [Recursos y lecturas recomendadas](#recursos-y-lecturas-recomendadas)

---

## Visión general

- Bases de datos relacionales (RDBMS): modelo tabular, SQL, integridad referencial y transacciones [ACID][def_acid]. Buenas para datos estructurados y consultas complejas.
- Bases de datos no relacionales (NoSQL): modelos flexibles (clave-valor, documento, columna, grafos). Buenas para escalabilidad horizontal y esquemas dinámicos.

[📇](#índice)

---

## Relacionales

Bases de datos basadas en el modelo relacional (tablas, filas y columnas). Soportan SQL y suelen garantizar [ACID][def_acid].

Implementaciones en este repositorio:

- [MySQL](./mysql.md)
- [Oracle](./oracle.md)
- [PostgreSQL](./postgresql.md)
- [SQL Server](./sql-server.md)

Características comunes:

- Esquema definido y constraints (PK, FK, UNIQUE, CHECK).
- Transacciones y distintos niveles de aislamiento.
- Índices, vistas, stored procedures y optimización por planes de ejecución.

Casos de uso típicos:

- Sistemas financieros, ERPs, CRM, aplicaciones con integridad referencial fuerte.

[📇](#índice)

---

## No relacionales (NoSQL)

Implementaciones en este repositorio:

- [Redis](./redis.md)
- [MongoDB](./mongodb.md)
- [Cassandra](./cassandra.md)
- [Neo4j](./neo4j.md)
- [DynamoDB](./dynamodb.md)

Categorías principales y ejemplos:

- Clave-valor: Redis, DynamoDB — simple, latencia baja, caché y session store.
- Documento: MongoDB, Couchbase — JSON-like, flexible para esquemas cambiantes.
- Column-family: Cassandra, HBase — alta escritura y particionado por rango/clave, suitable para big data.
- Grafos: Neo4j, Amazon Neptune — relaciones complejas, recomendaciones y caminos.

Casos de uso:

- Aplicaciones con esquemas flexibles, grandes volúmenes de escritura, requisitos de baja latencia o relaciones altamente conectadas.

[📇](#índice)

---

## Columnar / Analítica (OLAP)

Bases de datos columnar optimizadas para consultas analíticas a gran escala (OLAP). No son RDBMS transaccionales tradicionales; están pensadas para lecturas rápidas, compresión y agregaciones sobre grandes volúmenes de datos.

Implementaciones en este repositorio:

- [ClickHouse](./clickhouse.md)
- [Amazon Redshift](./redshift.md)
- [Google BigQuery](./bigquery.md)
- [Apache Druid](./druid.md)

Características:

- Almacenamiento columnar → lecturas/aggregaciones muy rápidas.
- Diseñadas para ingesta masiva y consultas analíticas (eventos, series temporales, métricas).
- Normalmente no ofrecen ACID completa para escrituras concurrentes; no son adecuadas para workloads OLTP.
- Suelen soportar particionado por rango, compresión y motores de almacenamiento especializados (ej. MergeTree en ClickHouse).
- Buen candidato para métricas, logs y time-series; no reemplazan un RDBMS para transacciones.

[📇](#índice)

---

## Infraestructura y conceptos operativos comunes

Conceptos aplicables a casi todos los motores/arquitecturas de bases de datos (RDBMS, NoSQL, OLAP, KV, caches):

- Cluster: conjunto de nodos que actúan como una única base de datos lógica para escalado y/o alta disponibilidad.
- Replicación: copiar datos entre nodos (asíncrona o síncrona). Patrones: master/slave (primary/replica), leader/follower, multi-leader.
- Sharding / Partitioning: dividir datos horizontalmente entre nodos según una clave para escalar escritura/almacenamiento.
- Sincronización y lag de replicación: retraso entre escritura en el primario y visibilidad en réplicas; afecta consistencia eventual.
- Consistencia: modelos (strong, causal, eventual). Elegir según requisitos de negocio.
- Redundancia y alta disponibilidad (HA): réplicas, failover automático/manual, quorum y elecciones de líder.
- Durabilidad y respaldos: snapshots, backups incrementales, Point-in-Time Recovery (PITR) y pruebas regulares de restore.
- Failover y conmutación por error: estrategias y tiempos de recuperación (RTO/RPO).
- Balanceo de carga y enrutamiento de lecturas/escrituras: separación de lectura (replicas) y escrituras (primario).
- Monitorización y alertas: métricas de latencia, throughput, replication lag, uso de disco, errores de queries y planes (EXPLAIN).
- Seguridad y aislamiento: control de accesos, cifrado, redes privadas, y segregación de roles.
- Mantenimiento y operaciones: rolling upgrades, re-sincronización de réplicas, re-sharding, reindexado y compactación.

Buenas prácticas operativas rápidas:

- Diseñar para fallos (chaos engineering en staging).
- Documentar topología (replicas, shards, zonas).
- Automatizar backups y validación de restores.
- Medir RTO/RPO y validar SLAs con pruebas.

[📇](#índice)

---

## Key-Value, Caches y Almacenamiento Local (client-side)

- Key-Value (KV) stores: son un subtipo de NoSQL. Ejemplos: Redis, DynamoDB (modo KV). Almacenan pares clave/valor, muy rápidos y sencillos; usados para sesiones, counters, y caches. Pueden ser durables o en memoria según configuración.
- Caches: mecanismos de almacenamiento temporal para mejorar latencia (ej. Redis, Memcached, Varnish). No siempre son fuentes de verdad (pueden ser volátiles y con TTL). Se consideran componentes de infraestructura de datos, no sustitutos completos de una base de datos primaria.
- Almacenamiento en el navegador:
  - localStorage / sessionStorage: APIs por clave/valor simples en el navegador. Persistencia limitada (no transaccional, sin consulta compleja). Útiles para settings y datos no críticos en client-side.
  - IndexedDB: base de datos embebida en el navegador (NoSQL, transaccional, más potente que localStorage). Apta para almacenar objetos grandes y búsquedas más complejas en el cliente.
- ¿Se consideran "bases de datos"? Depende del contexto:
  - KV stores y caches sí son tipos de bases de datos/almacenamiento (subcategoria NoSQL), pero conceptualmente muchos caches no son fuente de verdad.
  - localStorage/sessionStorage no son bases de datos completas (son simples stores client-side). IndexedDB sí es una base de datos en el cliente.
- Recomendaciones:
  - Usar RDBMS/NoSQL durables para la fuente de verdad.
  - Usar KV/caches para rendimiento y patrones de exposición (cache-aside, write-through).
  - Para datos client-side complejos/offline, preferir IndexedDB sobre localStorage.

[📇](#índice)

---

## Cuándo elegir uno u otro

- Necesitas transacciones [ACID][def_acid] y SQL avanzado → RDBMS.
- Esquema flexible, alta escala horizontal o latencia ultra baja → NoSQL.
- Consultas analíticas sobre grandes volúmenes → Data warehouse / columnar OLAP.
- Relaciones profundas entre entidades (redes sociales, recomendaciones) → Base de grafos.

[📇](#índice)

---

## Consideraciones operativas

- Respaldo y recupero (backup/restore): probar procedimientos regularmente.
- Escalado: vertical (más recursos) vs horizontal (sharding/replicación).
- Monitoreo: latencia, tasas de errores, plan de consultas, uso de índices.
- Seguridad: control de accesos, cifrado en tránsito y en reposo, auditoría.
- Migración y compatibilidad: documentar diferencias SQL (LIMIT vs FETCH, tipos, funciones).

[📇](#índice)

---

## Buenas prácticas resumidas

- Versionar esquemas (migrations).
- Mantener estadísticas/ANALYZE actualizadas en RDBMS.
- Indexar columnas usadas en filtros/joins; evitar funciones sobre columnas en WHERE si quiere usar índices.
- Almacenar timestamps en UTC; usar tipos fecha/hora nativos.
- Diseñar particionado y políticas de retención para datos históricos.

[📇](#índice)

---

## Recursos y lecturas recomendadas

- Documentación oficial de cada motor (enlaces en las páginas individuales).
- Artículos sobre [ACID][def_acid] vs BASE, patrones de particionado, y pruebas de rendimiento en entornos similares a producción.

[📇](#índice)

---

[⏫ Subir un nivel](../README.md)

[def_acid]: ../../languages/sql.md#8-transacciones-y-acid-concurrency
