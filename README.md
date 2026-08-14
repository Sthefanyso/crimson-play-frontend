# 🎬 CrimsonPlay

Interface frontend do CrimsonPlay, uma aplicação web para consulta e exploração de filmes e séries, desenvolvida com React e TypeScript.

---

## 🚀 Tecnologias

* React
* TypeScript
* Vite
* React Router
* API REST

---

## 📁 Estrutura

O projeto utiliza uma organização baseada em componentes e páginas:

```text
src/
  components/
    Footer.tsx
    Navbar.tsx

  modules/
    movies/
      mediaTabs/
        Cast.tsx
        Media.tsx
        Seasons.tsx
        TechnicalSheet.tsx
      pages/
        Movies.tsx
        MoviesDetails.tsx

    series/
      pages/
        Series.tsx
        SeriesDetails.tsx

  routes/
    AppRoutes.tsx

  App.tsx
  main.tsx
```

### Components

A pasta `components` contém componentes reutilizáveis da interface:

* **Navbar**: barra de navegação da aplicação.
* **Footer**: rodapé da aplicação.

### Modules

A pasta `modules` contém os módulos principais da aplicação:

* **Movies**: listagem e exploração de filmes.
* **Series**: listagem e exploração de séries.

### Routes

A pasta `routes` concentra a configuração de rotas da aplicação utilizando React Router.

---

## 🔗 Rotas

### Movies

* `/movies` — listagem de filmes.

### Series

* `/series` — listagem de séries.

A rota `/` redireciona para `/movies`.

---

## 🔗 API

O frontend consome a API REST do CrimsonPlay, desenvolvida para atuar como uma camada intermediária entre a aplicação e a API do TMDB.

A API do CrimsonPlay é responsável por consumir os dados fornecidos pelo TMDB, processá-los e padronizá-los antes de disponibilizá-los para o frontend.

---

## 📌 Créditos e uso da TMDB

Este produto utiliza a API do TMDB, mas não é endossado ou certificado pela TMDB.

Os dados e imagens utilizados neste projeto são fornecidos pela The Movie Database (TMDB).

---

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo e portfólio.

---

## 👩‍💻 Autora

Sthefany Souza
