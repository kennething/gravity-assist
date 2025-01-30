<p align="center">
  <a href="https://gravityassist.xyz">
    <img alt="Gravity Assist" src="https://github.com/DubNubz/gravity-assist/blob/main/public/logo/logo.png" height="300" />
  </a>
</p>

<h1 align="center">
  Gravity Assist
</h1>

<p align="center">
  Gravity Assist is a tool for Infinite Lagrange, a game by NetEase.
</p>
<p align="center">
  Infinite Lagrange is a space-themed multiplayer RTS where players can build fleets and attack other players.
</p>

<h2 align="center">
  <a href="https://gravityassist.xyz/home">
    Gravity Assist
  </a>
  <span> · </span>
  <a href="https://gravityassist.xyz/home?v=latest">
    Changelog
  </a><span> · </span>
  <a href="https://gravityassist.xyz/home?ct=true">
    Contributors
  </a>
</h2>

## Ship Data

Feel free to use my data, which can be found in the `/server/api/data/ships.ts` [file](https://github.com/DubNubz/gravity-assist/blob/main/server/api/data/ships.ts).

Each ship follows the data structures in their [type declarations](https://github.com/DubNubz/gravity-assist/blob/main/utils/ships.ts) in `/utils/ships.ts`.

## Project Setup

1. Create a `.env` file in the root of the project

```sh
NUXT_BASE64_SERVICE_ACCOUNT = '...'
NUXT_BASE_URL = ...
```

2. Install dependencies and run locally

```sh
npm install
npm run dev
```
