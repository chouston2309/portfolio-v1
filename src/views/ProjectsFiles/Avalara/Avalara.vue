<template>
    <section class="avalara">
            <div class="avalara-title">
                <h1>Avalara Global Landing Page</h1>
                <p>
                    Client wanted a global landing page to serve as a starting point to direct their users to one of three stores: Americas, Europe, and India, which represent their three largest branches. An actual globe served as the inspiration both creatively and practically, as everyone would immediately recognize their country and with such unique borders, it prevents any confusion.<br><br>
                    There was also an important responsibility to not misrepresent any culture, place, or people. Country outlines provide a universal representation.
                </p>
            </div>

            <div class="even-columns">
                <div class="column-one">
                    <div class="about">
                        <p>
                            <strong>INTERACTIVITY</strong><br>
                            Each country is an SVG which use CSS to change color upon hover. They are wrapped in links to each respective store's URL.<br>
                            
                        </p>
                    </div>
                </div>
                <div class="column-two">
                    <div class="icons-video">
                        <video src="./av-callouts-recording-MP4.mp4" loop autoplay muted onloadedmetadata="this.muted = true"></video>
                    </div>
                </div>
            </div>

            <!-- <div class="four-columns">
                <div class="mobile-title">
                    <h2>Mobile</h2>
                </div>
                <div class="column-three mobile">
                    <img src="./Photos/avalara-mobile-1.jpg" alt="">
                </div>
                <div class="column-four mobile">
                    <img src="./Photos/avalara-mobile-2.jpg" alt="">
                </div>
                <div class="column-five mobile">
                    <img src="./Photos/avalara-mobile-3.jpg" alt="">
                </div>
                <div class="column-six mobile">
                    <img src="./Photos/avalara-mobile-4.jpg" alt="">
                </div>
            </div> -->

        
    </section>

</template>

<script>

</script>

<style scoped>
.avalara {
    margin-bottom: 5em;
    padding: 0 1em;
}

.avalara-title h1{
    text-align: left;
    font-size: 2rem;
}

.avalara-title p{
    text-align: left;
    font-size: 1.5rem;
}
.even-columns {
    display: flex;
    margin: 2em 0;
}
.column-one {
    flex: 1;
    position: relative;
}

.about {

    padding: 0 1em;
    text-align: left;
    font-size: 1.5rem;
    position: absolute;
    top: 32%;
    right: -50%;
    background: var(--blue);
    color: white;
    border-radius: 10px;
    box-shadow: var(--soft);
}

@media(max-width: 60em){
    .about {
        font-size: 1rem;
        top: 15%;
    }
}

.column-two {
    flex: 4;
}

/* .column-two img {
    width: 100%;
} */

.column-two video {
    width: 100%;
}

/* .four-columns {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
} */

.mobile-title {
    width: 100%;
    margin-bottom: 2em;
}

.mobile-title h2 {
    width: fit-content;
    padding: 1em;
    margin: auto;
    font-size: 1.5rem;
    background: var(--blue);
    color: white;
    border-radius: 10px;
    text-transform: uppercase;
}

@media(max-width: 60em){
    .mobile-title h2 {
        font-size: 1rem;
    }
}
.mobile {
    width: 20%;
}

.mobile img {
    width: 100%;
}
</style>