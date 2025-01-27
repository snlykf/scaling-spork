# Project API

The REST services for Project.

## Requirements

- [Node.js](https://nodejs.org/download/release/latest-v16.x/) 18.x LTS
- [yarn](https://classic.yarnpkg.com/) **1.x**

### Optional

For generating [PDFs](#pdf) you need a LaTeX distribution and `lualatex` in your PATH variable.

- Windows: [MiKTeX](https://miktex.org/)

## Run

```
yarn install
```
```
yarn start
```

# PDF

The API generates PDF documents with LaTeX (`lualatex`) using [templates](src/templates/).