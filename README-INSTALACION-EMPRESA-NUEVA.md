# SeniorFlow - Empresa nueva

Esta copia esta preparada para usar el mismo sistema con otra empresa y una base de datos limpia.

## Que se mantiene

- Todas las funciones del sistema.
- Pantalla de ventas y display cliente.
- Inventario, compras, cuentas corrientes, presupuestos, flyers, remitos y configuraciones.
- Logos y archivos base del sistema.

## Que cambia

- `firebase-config.js` esta en modo plantilla.
- Tenes que crear un proyecto Firebase nuevo y pegar ahi la configuracion web.
- Al usar otro Firebase, no se mezclan datos con la empresa actual.

## Firebase requerido

Activar:

1. Authentication.
2. Firestore Database.
3. Storage.
4. Hosting, solo si queres publicarlo como web.

## Primer arranque

1. Crear proyecto nuevo en Firebase.
2. Crear una app Web dentro de ese proyecto.
3. Copiar la configuracion web y pegarla en `firebase-config.js`.
4. Activar Authentication, Firestore y Storage.
5. Abrir `index.html` o publicar por Hosting.
6. Entrar al sistema y cargar logo, datos de negocio, alias, direccion, telefono, correo y web desde configuracion.

## Importante

No pegues el `firebase-config.js` de la empresa actual si queres una base limpia.
