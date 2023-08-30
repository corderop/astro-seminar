# 1. Astro presentation

- Ir a astro https://astro.build/
- Comparaciones de performance
- Casos de uso (https://astro.build/showcase/)

## 1.1 Astro como MPA

- https://docs.astro.build/es/concepts/mpa-vs-spa/
- Mencionar diferencia entre MPA y SPA
- Mencionar que Astro es un MPA
- Casos de estudio

## 1.2. Astro islands

- https://docs.astro.build/es/concepts/islands/

# 2. Empezar un proyecto en astro

- Instalar astro con
    ```
    pnpm create astro@latest
    ```

# 3. Inicio haciendo una página simple

## 3.1. Estructura de carpetas

- Explicar pages
- Explicar layouts
- Explicar components

## 3.2. Páginas

- Todo archivo dentro de la carpeta pages se considera una ruta
- Acepta tanto archivos astro como cualquier framework, incluso markdown como ahora veremos

## 3.3. Componentes

- No tiene ningún boilerplate
- Explicar partes de un componente de Astro
    - HTML
    - Código del servidor
    - Props
    - CSS
        - Scoped CSS
        - CSS global
        - CSS langs
    - JS
        - Propiedades y tipado
        - **No es reactivo**
        - Exportaciones dentro del javascript
    

## 3.4. Layouts

- Enseñar ejemplo
- Hacer ejemplo del body y Navbar

# 4. UI Components

- Tenemos la alternativa de utilizar UI Components
    - Podemos utilizar los frameworks más populares
    - Prueba con React
    - Prueba con Vue
- Hacer el componente reactivo
    - Mostrar diferencias entre diferentes valores de client

# 5. Integraciones
    1. Tailwind
        - Instalar https://docs.astro.build/en/guides/integrations-guide/tailwind/
        - Probar que funciona
    2. Servicios de hosting
        - https://docs.astro.build/en/guides/deploy/

# 6. Otros aspectos
    1. Markdown
        - Create markdown pages
        - Use layouts with markdown
        - Use styles
    2. API
        - Create a simple API to send a json

# 7. Deploy
    - Configure netlify
        ```
        pnpm create astro@latest
        ```


# 8. View transitions

    - Show examples

# 9. Novedades Astro v3
    - https://astro.build/blog/astro-3/