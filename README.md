# Portfolio Personal - Leandro Barrios

Portfolio personal como Diseñador Gráfico, desarrollado con Astro y Tailwind CSS para presentar trabajo de diseño de manera visual y profesional.

## Tecnologias

| Tecnologia | Version | Proposito |
|------------|---------|-----------|
| [Astro](https://astro.build) | ^5.17.2 | Framework web |
| [TypeScript](https://www.typescriptlang.org) | - | Lenguaje tipado |
| [Tailwind CSS](https://tailwindcss.com) | ^4.1.12 | Framework CSS |
| [@astrojs/sitemap](https://www.npmjs.com/package/@astrojs/sitemap) | ^3.7.0 | Generacion de sitemap |
| [Vite](https://vitejs.dev) | - | Build tool |

## Features

- **Dark/Light Mode** - Toggle con persistencia en localStorage
- **SEO Optimizado** - Open Graph, Twitter Cards y sitemap
- **100% Responsive** - Mobile-first design
- **Typewriter Effect** - Animacion de texto en hero
- **Scroll Animations** - Efectos de entrada con IntersectionObserver
- **44 Proyectos** - Galeria con grid Bento y modal
- **Fuentes Autoalojadas** - Lato (5 pesos)
- **TypeScript Strict** - Tipado completo

## Estructura del proyecto

```
src/
├── components/       # Componentes Astro
│   ├── ui/          # Componentes reutilizables (Button, Card, Modal)
│   ├── Header.astro
│   ├── Hero.astro
│   ├── Proyectos.astro
│   ├── SobreMi.astro
│   ├── Experiencia.astro
│   ├── Contacto.astro
│   └── Footer.astro
├── data/
│   └── proyectos.ts  # 44 proyectos (TypeScript)
├── dark/
│   └── DarkModeToggle.astro
├── funciones/
│   ├── Menu.astro
│   └── TextTyped.astro
├── iconos/
│   └── Redes.astro
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
```

## Scripts

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para produccion
npm run preview  # Preview del build
```

## Instalacion

```bash
npm install
npm run dev
```

## License

MIT
