<template>
    <section class="ws">
            <div class="ws-title">
                <h1>Wolfspeed</h1>
                <p>
                    The client's brand emphasizes speed, so it was important this store had a matching feel, which is represented in the design choices. The client was excited about their partnership with a racing brand, so this was big for them.
                </p>
            </div>

            <div class="even-columns">
                <div class="column-one">
                    <div class="about">
                        <p>
                            <strong>HOMEPAGE</strong><br>
                            Slanted card layout with fast animations to emulate 'speed' and 'motion.'<br>
                            
                        </p>
                    </div>
                </div>
                <div class="column-two">
                    <div class="icons-video">
                        <video src="./ws-callout-recording-MP4.mp4" loop autoplay muted onloadedmetadata="this.muted = true"></video>
                    </div>
                </div>
            </div>

            <div class="even-columns">
                <div class="column-one">
                    <div class="about">
                        <p>
                            <strong>CUSTOM SECTION</strong><br>
                            Incorporated the company logo to create a custom section shape that gives the feeling of moving forward, as seen under the hero image and the footer throughout the site. This helps push brand equity throughout the user experience.<br>
                            
                        </p>
                    </div>
                </div>
                <div class="column-two">
                    <div>
                        <img src="./ws-homepage.png" alt="">
                    </div>
                </div>
            </div>

            <div class="even-columns">
                <div class="column-one">
                    <div class="about">
                        <p>
                            <!-- <strong>HOMEPAGE</strong><br> -->
                            Uses a custom SVG combined with the CSS background-image and image-mask properties.<br>
                            
                        </p>
                    </div>
                </div>
                <div class="column-two">
                    <div>
                        <img src="./ws-landingPage-footer.png" alt="">
                    </div>
                </div>
            </div>

            <div class="four-columns">
                <div class="mobile-title">
                    <h2>Mobile</h2>
                </div>
                <div class="column-three mobile">
                    <img src="./ws-mobile-1.jpg" alt="">
                </div>
                <div class="column-four mobile">
                    <img src="./ws-mobile-2.jpg" alt="">
                </div>
                <!-- <div class="column-five mobile">
                    <img src="./ws-mobile-3.jpg" alt="">
                </div> -->
                <!-- <div class="column-six mobile">
                    <img src="./Photos/ws-mobile-4.jpg" alt="">
                </div> -->
            </div>

        
    </section>

</template>

<script>

</script>

<style scoped>
.ws {
    margin-bottom: 5em;
    padding: 0 1em;
}

.ws-title h1{
    text-align: left;
    font-size: 2rem;
}

.ws-title p{
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
    background: linear-gradient(135deg, var(--yellow), var(--red));
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

.column-two img {
    width: 100%;
}

.column-two video {
    width: 100%;
}

.four-columns {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.mobile-title {
    width: 100%;
    margin-bottom: 2em;
}

.mobile-title h2 {
    width: fit-content;
    padding: 1em;
    margin: auto;
    font-size: 1.5rem;
    background: linear-gradient(135deg, var(--yellow), var(--red));
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
    margin: 0 3em;
}

.mobile img {
    width: 100%;
}
</style>