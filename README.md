# React + Vite

# Todo List Frontend

Este es un frontend para una aplicación de lista de tareas (todo list) construido con React. Permite crear, editar, eliminar y visualizar tareas.

## Estructura del Proyecto
frontend/
 │ ├── src/ 
 │ │ ├── components/ 
 │ │ │  ├── api.js # Funciones para interactuar con la API 
 │ │ │  ├── TodoForm.jsx # Componente para crear/editar tareas 
 │ │ │  └── TodoList.jsx # Componente para listar y manejar tareas 
 │ │ ├── css/ 
 │ │ │  ├── TodoForm.css # Estilos para el formulario de tareas 
 │ │ │  └── TodoList.css # Estilos para la lista de tareas 
 │ │ ├── App.css # Estilos globales para la aplicación 
 │ │ ├── App.jsx # Componente principal de la aplicación 
 │ │ ├── index.css # Estilos globales de la aplicación 
 │ │ └── main.jsx # Punto de entrada de la aplicación 
 │ ├── .env # Variables de entorno 
 │ ├── .env.example # Ejemplo de archivo .env 
 │ ├── .gitignore # Archivos y carpetas ignorados por Git 
 └─└── package.json # Información del proyecto y dependencias

## Instalación

1. Clona este repositorio:

   ```bash
   git clone <URL del repositorio>

2. Navega al directorio del proyecto:

    cd frontend

3. Instala las dependencias:

    npm install

4. Configura las variables de entorno:

   . Copia .env.example a .env y ajusta las variables según sea necesario.

## Uso

Para iniciar el servidor de desarrollo, usa:

    npm run dev

Para construir el proyecto para producción, usa:

    npm run build

Para previsualizar la construcción de producción, usa:

    npm run preview

## Estructura del Código

    . api.js: Contiene funciones para interactuar con la API del backend.
    . TodoForm.jsx: Componente para crear o editar tareas.
    . TodoList.jsx: Componente para listar, editar y eliminar tareas.
    . App.jsx: Componente principal que renderiza TodoList.
    . main.jsx: Punto de entrada de la aplicación.

## Variables de Entorno

Asegúrate de configurar las siguientes variables en el archivo .env:

    VITE_API_URL=http://localhost:8000

## Dependencias

    . axios: Para hacer solicitudes HTTP.
    . react: Biblioteca principal para la construcción de la interfaz de usuario.
    . react-dom: Para renderizar la aplicación en el DOM.
    . react-router-dom: Para el enrutamiento en la aplicación.

## Contribuciones

Si quieres contribuir al proyecto, por favor abre un issue o un pull request en el repositorio.

## Licencia

Este proyecto está bajo la licencia MIT.



