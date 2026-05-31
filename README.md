# Portafolio — Denil José Parada Cabrera

Portafolio personal construido con React 18 + Vite. Diseño futurista sobrio con animaciones scroll-reveal usando Framer Motion, dockerizado y listo para deploy en Railway.

**URL en producción:** _[pendiente de deploy]_

## Stack

| Capa | Tecnología |
|---|---|
| Framework | React 18 |
| Build tool | Vite 8 |
| Animaciones | Framer Motion |
| Estilos | CSS Modules + CSS Variables |
| Infraestructura | Docker + nginx |
| Deploy | Railway |

## Correr en local

```bash
# Clonar el repositorio
git clone https://github.com/dparada2020225/portafolio
cd portafolio

# Instalar dependencias
npm install

# Modo desarrollo con hot-reload
npm run dev
```

Abrir http://localhost:5173

## Correr con Docker

```bash
# Build y levantar
docker compose up --build

# Acceder en
http://localhost:8080
```

No requiere Node.js instalado localmente, solo Docker Desktop.

## Build de producción

```bash
npm run build
# Los archivos estáticos quedan en /dist
```

## Estructura

```
portafolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navbar fija con scroll detection
│   │   ├── Hero.jsx         # Sección principal con animación de entrada
│   │   ├── About.jsx        # Sobre mí + card de datos
│   │   ├── Technologies.jsx # Stack con argumentación técnica
│   │   ├── Projects.jsx     # Proyectos destacados
│   │   ├── Contact.jsx      # Datos de contacto
│   │   ├── Footer.jsx
│   │   └── Reveal.jsx       # Wrapper reutilizable para scroll-reveal
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css            # Variables globales + reset
├── Dockerfile               # Multi-stage: build → nginx
├── docker-compose.yml
├── nginx.conf               # SPA fallback + cache headers
└── vite.config.js
```

## Decisiones técnicas

**¿Por qué React + Vite?** React es el framework que más domino y el que tiene más tracción en el mercado guatemalteco. Vite da un DX superior a CRA: arranque instantáneo, HMR rápido, build optimizado.

**¿Por qué Framer Motion?** Las animaciones scroll-reveal se pueden hacer con Intersection Observer puro, pero Framer Motion ofrece una API declarativa más mantenible. El bundle extra (~40KB gzip) vale la pena para el efecto visual que aporta.

**¿Por qué Docker + nginx?** El build de React genera estáticos puros. nginx sirve archivos estáticos mucho más eficientemente que Node. El multi-stage Dockerfile mantiene la imagen final pequeña (~25MB).

**¿Por qué CSS Modules?** Scoping automático sin clases globales que colisionen. Más explícito que Tailwind para componentes con lógica de estado visual compleja.

## Autor

**Denil José Parada Cabrera**
- GitHub: [@dparada2020225](https://github.com/dparada2020225)
- LinkedIn: [denil-josè-parada-cabrera](https://www.linkedin.com/in/denil-josè-parada-cabrera/)
- Email: paradadeniljose@gmail.com
