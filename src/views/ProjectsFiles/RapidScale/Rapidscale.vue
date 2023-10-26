<template>
    <section class="rs">
            <div class="rs-title">
                <h1>RapidScale</h1>
                <p>
                    Client wanted a clean and mordern look to the store front.
                </p>
            </div>

            <div class="even-columns">
                <div class="column-one">
                    <div class="about">
                        <p>
                            <strong>HOMEPAGE</strong><br>
                            Clean box layout. CSS hover to animate box titles.<br>
                            
                        </p>
                    </div>
                </div>
                <div class="column-two">
                    <div class="icons-video">
                        <video src="./rs-callouts-recording-MP4.mp4" loop autoplay muted onloadedmetadata="this.muted = true"></video>
                    </div>
                </div>
            </div>

            <div class="even-columns">
                <div class="column-one">
                    <div class="about">
                        <p>
                            <!-- <strong>HOMEPAGE</strong><br> -->
                            Animated search bar on click.<br>
                            
                        </p>
                    </div>
                </div>
                <div class="column-two">
                    <div class="icons-video">
                        <video src="./rs-searchbar-recording-MP4.mp4" loop autoplay muted onloadedmetadata="this.muted = true"></video>
                    </div>
                </div>
            </div>

            <div class="four-columns">
                <div class="mobile-title">
                    <h2>Mobile</h2>
                </div>
                <div class="column-three mobile">
                    <img src="./rs-mobile-1.jpg" alt="">
                </div>
                <!-- <div class="column-four mobile">
                    <img src="./rs-mobile-2.jpg" alt="">
                </div> -->
                <!-- <div class="column-five mobile">
                    <img src="./weaver-mobile-3.jpg" alt="">
                </div> -->
                <!-- <div class="column-six mobile">
                    <img src="./Photos/avalara-mobile-4.jpg" alt="">
                </div> -->
            </div>

        
    </section>

</template>

<script>

</script>

<style scoped>
.rs {
    margin-bottom: 5em;
    padding: 0 1em;
}

.rs-title h1{
    text-align: left;
    font-size: 2rem;
}

.rs-title p{
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
    background: var(--red);
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
    background: var(--red);
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