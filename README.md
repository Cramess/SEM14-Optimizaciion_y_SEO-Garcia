# Portafolio Personal - Cristian Rufino

Un portafolio profesional y moderno desarrollado con **Next.js**, **React**, **TypeScript** y **Tailwind CSS**. Este sitio web está diseñado para mostrar proyectos, habilidades técnicas y proporcionar una forma sencilla de contacto.

## Características

- ⚡ **Rendimiento Óptimo**: Desarrollado con Next.js (App Router) para tiempos de carga ultrarrápidos y Server-Side Rendering (SSR).
- 📱 **Diseño Responsivo**: Totalmente adaptable a dispositivos móviles, tablets y escritorios usando Tailwind CSS.
- 🔍 **SEO Optimizado**: 
  - Archivos automatizados `sitemap.xml` y `robots.txt`.
  - Configuración global de `viewport` para el índice "Mobile-First" de Google.
  - Metadatos dinámicos y compatibilidad con Open Graph.
- 💼 **Gestión de Proyectos**: Sección dedicada para exhibir proyectos de software con soporte de rutas dinámicas.
- ✉️ **Contacto Directo**: Formulario integrado y accesos directos a redes sociales (LinkedIn, GitHub) e email.

## Tecnologías Utilizadas

- **Framework**: Next.js (App Router)
- **Librería UI**: React
- **Estilos**: Tailwind CSS
- **Lenguaje**: TypeScript
- **Fuentes**: Google Fonts (Inter)

## Estructura del Proyecto

El código fuente principal se encuentra dentro de la carpeta `src/`:

```
src/
├── app/          # Rutas principales (Inicio, Sobre Mí, Proyectos, Contacto)
├── components/   # Componentes reutilizables (Header, Footer, ProjectCard)
├── lib/          # Configuración y datos mock (data.ts)
└── types/        # Definiciones de tipos de TypeScript
```

## Instalación y Uso Local

Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina local:

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Cramess78/my-portfolio.git
   cd my-portfolio
   ```

2. **Instalar las dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Ver la aplicación**
   Abre tu navegador y navega a [http://localhost:3000](http://localhost:3000) para ver el resultado.

## Despliegue

La forma más sencilla de desplegar esta aplicación es utilizando [Vercel](https://vercel.com/), la plataforma de los creadores de Next.js. Si tienes tu cuenta enlazada con GitHub, se puede configurar para hacer despliegues automáticos con cada `git push`.

---

Creado con ♥ por [Cristian Rufino](https://github.com/Cramess78).
