# Portfolio — Leandro Barrios

Portfolio de Diseñador Gráfico con estética blanco y negro. Desarrollado con Astro 6, Tailwind CSS v4 y GSAP para animaciones fluidas.

## Tecnologías

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| [Astro](https://astro.build) | ^6.3.1 | Framework web |
| [TypeScript](https://www.typescriptlang.org) | - | Tipado estricto |
| [Tailwind CSS](https://tailwindcss.com) | ^4.1.12 | Estilos utility-first (v4 via Vite) |
| [@tailwindcss/vite](https://www.npmjs.com/package/@tailwindcss/vite) | ^4.1.12 | Plugin Tailwind para Vite |
| [GSAP](https://gsap.com) | ^3.15.0 | Animaciones y ScrollTrigger |
| [@astrojs/sitemap](https://www.npmjs.com/package/@astrojs/sitemap) | ^3.7.2 | Sitemap XML |

## Features

- **Dark/Light Mode** — Toggle con persistencia en `localStorage`
- **GSAP + ScrollTrigger** — Animaciones scroll-driven en Hero, Proyectos, Sobre Mí y Experiencia
- **Modal con GSAP** — Transiciones animadas al abrir/cerrar proyectos
- **Typewriter Effect** — Texto animado en el hero
- **Estética B&W** — Paleta minimalista con tokens de tema (bg-light/dark, text-light/dark)
- **Degradado sutil** — Acentos en violeta, azul y celeste (OKLCH)
- **45 Proyectos** — Galería con grid masonry y modal detallado
- **Fuentes autoalojadas** — Lato (5 pesos: Light, Regular, Italic, Bold, Black)
- **SEO** — Open Graph, Twitter Cards, sitemap
- **100% Responsive** — Mobile-first

## Estructura

```
src/
├── components/           # Secciones y UI
│   ├── ui/              # Button, Card, Modal, ProjectCard
│   ├── Header.astro
│   ├── Hero.astro
│   ├── Proyectos.astro
│   ├── SobreMi.astro
│   ├── Experiencia.astro
│   ├── Contacto.astro
│   ├── ContactoPortfolio.astro
│   └── Footer.astro
├── data/
│   └── proyectos.ts     # 45 proyectos tipados
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
├── styles/
│   └── global.css       # Tailwind v4, @theme tokens, @font-face
└── assets/
```

## Scripts

```bash
npm run dev       # Servidor de desarrollo
npm run build     # Build de producción
npm run preview   # Preview del build
```

## Instalación

```bash
npm install
npm run dev
```

## Configuración

Astro 6 con Tailwind v4 como plugin de Vite (`astro.config.mjs`):

```js
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  vite: { plugins: [tailwindcss()] },
  site: 'https://leandrobarriosdesigner.site',
  integrations: [sitemap()],
});
```

## License

MIT
