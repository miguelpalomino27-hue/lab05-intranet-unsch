# Lab05 - Intranet UNSCH

## Descripción

Proyecto desarrollado para el curso de Pruebas y Aseguramiento de Calidad de Software.

Se implementaron pruebas unitarias utilizando Jest para validar distintos módulos de la Intranet UNSCH mediante la metodología TDD (Test Driven Development).

## Tecnologías utilizadas

* JavaScript
* Node.js
* Jest
* Git
* GitHub
* Visual Studio Code

## Estructura del proyecto

```text
src
├── matricula
├── notas
├── pagos
└── historial

tests
├── TC-MAT-001.test.js
├── TC-MAT-002.test.js
├── TC-MAT-011.test.js
├── TC-NOT-003.test.js
├── TC-NOT-004.test.js
├── TC-PAG-005.test.js
├── TC-PAG-006.test.js
├── TC-PAG-012.test.js
├── TC-HIS-007.test.js
└── TC-HIS-008.test.js
```

## Casos de prueba implementados

### Matrícula

* TC-MAT-001: Matrícula con 22 créditos (válido)
* TC-MAT-002: Matrícula con 23 créditos (inválido)
* TC-MAT-011: Cruce de horarios (inválido)

### Notas

* TC-NOT-003: Consulta de notas 2026-I
* TC-NOT-004: Consulta de notas sin registros

### Pagos

* TC-PAG-005: Estado solvente
* TC-PAG-006: Estado con deuda
* TC-PAG-012: Moroso no puede generar documentos

### Historial Académico

* TC-HIS-007: Historial académico disponible
* TC-HIS-008: Historial académico sin registros

## Ejecución del proyecto

Instalar dependencias:

```bash
npm install
```

Ejecutar pruebas:

```bash
npm test
```

## Resultado esperado

```text
Test Suites: 10 passed, 10 total
Tests:       10 passed, 10 total
```

## Evidencias

![TC-MAT-001](imagenes/image-11.png)

![TC-MAT-002](imagenes/image-1.png)

![TC-MAT-002 FAIL](imagenes/image-2.png)

![TC-MAT-011](imagenes/image-3.png)

![TC-NOT-003](imagenes/image-4.png)

![TC-NOT-004](imagenes/image-5.png)

![TC-PAG-005](imagenes/image-6.png)

![TC-PAG-006](imagenes/image-7.png)

![TC-PAG-012](imagenes/image-8.png)

![TC-HIS-007](imagenes/image-9.png)

![TC-HIS-008](imagenes/image-10.png)

## Autor

Miguel Palomino Cardenas
Ingeniería de Sistemas - UNSCH