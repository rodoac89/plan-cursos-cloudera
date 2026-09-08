# Plan de cursos Cloudera / CDP

Sitio público con la planificación de cursos (sep–dic 2026): plan semanal, learning paths, catálogo y cursos ILT.

## Ver en la web

Cuando GitHub Pages esté activo:

**https://rodoac89.github.io/plan-cursos-cloudera/**

Para activarlo (una sola vez):

1. Abre el repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / folder `/ (root)`
4. Save

O usa Actions: el workflow `.github/workflows/pages.yml` publica el sitio.

## Uso

- Filtra por learning path o fase.
- Marca cursos como hechos; el avance queda en tu navegador (localStorage), no se comparte.
- Los links abren Cloudera Education.

## Nota sobre Grok Build

Esta app es estática y se puede copiar tal cual a Grok Build Mode (`index.html`) si quieres un link `*.grok.me`.
