---
datum: 14.10.2026.
---

[REST API endpoints for repositories](https://developer.github.com/v3/repos/)
Za dohvaćanje detalja korisnika s korisničkim imenom facebook, potrebno je
napraviti GET poziv na URL [api.github.com](https://api.github.com/users/facebook)

- Za dohvaćanje detalja korisnika s korisničkim imenom reduxjs, potrebno je
napraviti GET poziv na URL [api.github.com](https://api.github.com/users/reduxjs)
Dohvaćanje GitHub usera moguće je napraviti GET pozivom na sljedeći URL:
`https://api.github.com/users/<korisničko-ime>`.
Dohvaćanje repozitorija GitHub usera moguće je napraviti GET pozivom na sljedeći
URL: `https://api.github.com/users/<korisničko-ime>/repos`.
Npr:
- Za dohvaćanje repozitorija korisnika s korisničkim imenom facebook, potrebno
je napraviti GET poziv na URL [api.github.com/users/facebook/repos](https://api.github.com/users/facebook/repos)
- Za dohvaćanje repozitorija korisnika s korisničkim imenom reduxjs, potrebno
je napraviti GET poziv na URL [api.github.com/users/reduxjs/repos](https://api.github.com/users/reduxjs/repos)
