> \[!IMPORTANT\]
>
> This project is no longer being maintained.
>
> You can freely use my [data](https://github.com/kennething/gravity-assist?tab=readme-ov-file#ship-data) for your own projects if you wish, although the data is also outdated.
>
> The live site will continue to live on at a [new domain](https://gravityassist.kennethng.dev), but you can also host the site yourself with the [setup instructions](https://github.com/kennething/gravity-assist?tab=readme-ov-file#project-setup) below.

<p align="center">
  <a href="https://gravityassist.kennethng.dev">
    <img alt="Gravity Assist" src="./public/logo/logo.png" height="300" />
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
  <a href="https://gravityassist.kennethng.dev/home">
    Gravity Assist
  </a>
  <span> · </span>
  <a href="https://gravityassist.kennethng.dev/home?v=latest">
    Changelog
  </a><span> · </span>
  <a href="https://gravityassist.kennethng.dev/home?ct=true">
    Contributors
  </a>
</h2>

## Ship Data

Feel free to use my data, which can be found in [`/server/api/data/ships.ts`](./server/api/data/ships.ts).

To quickly convert the data to JSON, you can copy the array object and run `JSON.stringify(<data>)` in your browser console.

Each ship follows the data structures in their type declarations in [`/utils/ships.ts`](./utils/ships.ts).

## Project Setup

If you wish to run the site locally:

1. Ensure [Node.js](https://nodejs.org/) is installed.

2. Create a `.env` file in the root of the project: (optional maybe? idk try it out)

```sh
NUXT_BASE64_SERVICE_ACCOUNT= # wrap the value in ''
NUXT_BASE_URL=
```

3. Install dependencies and run locally:

```sh
npm install
npm run dev
```

4. The site should be running on http:\//localhost:3000.
