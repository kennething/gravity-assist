<template>
    <div class="holder">
        <div class="description">
            <h3>by <a href="https://discord.com/invite/9mJ9b2Bbzx">DubNubz</a></h3>
            <h3>Did you know: <span>{{ fact }}</span></h3>
        </div>

        <div class="cardHolder">
            <div class="card">
                <h2 style="color: white;">Gravity Assist v2 Beta</h2>
                <p style="color: white;">Gravity Assist is changing soon! Stay ahead of the curve (and help me out with bug testing and feedback) by <a href="https://beta.gravityassist.xyz">checking out the beta build!</a></p>
                <p style="color: white;">If you encounter any bugs or have any suggestions, reach out to me!</p>
            </div>
            <LatestChange />
            <div class="card" id="contact">
                <h2>Contact Me!</h2>
                <h3 class="contact"><span>DubNubz</span> (ingame)</h3>
                <h3 class="contact"><span>@micromidget</span> (Discord)</h3>
                <p class="message">All module information is crowdsourced.</p>
                <p class="message">If you'd like to contribute, PM/DM me!</p>
                <p class="message">All contributions, suggestions, and feedback are appreciated!</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

useSeoMeta({
    title: "Gravity Assist"
});

const fact = ref("");

onMounted(() => {
    fact.value = facts[getRandomIntInclusive(0, facts.length - 1)];
});

</script>

<style lang="scss" scoped>

.holder {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    h3 {
        color: white;
        text-align: center;
        margin: 0.25em;
        width: 70%;

        a {
            color: var(--deepGreen);
            text-decoration: underline;
        }

        span {
            color: var(--gold);
            font-size: 0.9em;
        }
    }
}

.linkButton {
    margin-top: 3em;
    width: 35em;
    font-size: var(--p);
    height: 6em;
    border-radius: 1.5em;
    transition: all 0.25s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10%;
    filter: grayscale(0.33);
    background-color: var(--deepGreen);
  
    h3 {
      margin: 0;
      text-align: center;
      width: fit-content;
      height: fit-content;
      font-size: var(--h3);
    }
  
    img {
      width: 4.5em;
      height: 4.5em;
      background-color: transparent;
    }
}

.cardHolder {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 5em;
    gap: 1em;
    flex-wrap: wrap;
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: rgb(45, 45, 45);
    border-radius: 2.4em;
    padding: 2.4em;
    width: 45em;
    min-height: 35em;

    h2 {
        margin-bottom: 0;
        color: var(--gold);
    }

    .contact {
        margin-top: 0.25em;
        margin-bottom: 0;

        span {
            color: var(--cyan);
        }
    }

    .message {
        margin-bottom: 0;
    }
}

#contact {
    padding-bottom: 4em;
}

@media screen and (max-width: 1200px) {
    .cardHolder {
        flex-direction: column;

        .card {
            min-height: unset;
            margin-bottom: 2em;
        }
    }
}

@media screen and (max-width: 1000px) {
    .cardHolder {
        .card {
            padding: 1em;
            width: 35em;
        }
    }
}

@media screen and (max-width: 800px) {
    .description {
        width: 90svw;
    }

    .cardHolder {
        width: 95svw;

        .card {
            width: 85svw;
            padding: 2svw;
            border-radius: 2svh;
        }
    }
}

@media (hover: hover) and (pointer: fine) {
    .linkButton:hover {
        filter: grayscale(0);
    }
}

</style>
