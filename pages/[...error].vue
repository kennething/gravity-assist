<template>
  <div class="flex w-full flex-col items-center justify-center">
    <div class="imgHolder">
      <img class="leftImg" :src="'/ships/cv3000.png'" aria-hidden="true" />
      <img class="rightImg" :src="'/ships/marshalCrux.png'" aria-hidden="true" />
    </div>
    <img style="z-index: 10" src="/ships/solarWhale.png" aria-hidden="true" />
    <h1 style="margin: 0">Uh oh!</h1>
    <h2 style="margin: 0">A whale is blocking your path!</h2>
    <p>You'll have to find your page somewhere else.</p>
    <h2 style="margin-bottom: 10em; color: var(--gold)">404: Page not found</h2>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

img {
  width: 30em;
  background: radial-gradient(rgba(255, 60, 0, 0.2), transparent 69%);
}

.imgHolder {
  position: relative;
  width: 40em;
}

.leftImg {
  z-index: 9;
  position: absolute;
  left: -10em;
}

.rightImg {
  z-index: 8;
  position: absolute;
  right: -10em;
}

@media screen and (max-width: 1100px) {
  img {
    width: 25em;
  }

  .imgHolder {
    width: 30em;
  }
}

@media screen and (max-width: 900px) {
  img {
    width: 20em;
  }

  .imgHolder {
    width: 25em;
  }

  .leftImg {
    left: -7.5em;
  }
  .rightImg {
    right: -7.5em;
  }
}

@media screen and (max-width: 800px) {
  img {
    width: 40vw;
  }
  .imgHolder {
    width: 45vw;
  }
  .leftImg {
    left: -20vw;
  }
  .rightImg {
    right: -20vw;
  }
}
</style>
