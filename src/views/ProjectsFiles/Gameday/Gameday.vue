<template>
    <section class="Gameday">
            <div class="Gameday-title">
                <h1>Gameday</h1>
                <p>
                    Simple store for franchisees to purchase required employee scrubs, apparel, and marketing materials.
                </p>
            </div>

            <div class="even-columns">
                <div class="column-one">
                    <div class="about">
                        <p>
                            <strong>HOMEPAGE</strong><br>
                            Created custom icons to match style from client's company site. CSS hover effects to animate.
                        </p>
                    </div>

                </div>
                <div class="column-two">
                    <div class="homepage">
                        <video src="./gameday-callouts-recording-full-MP4.mp4" loop autoplay muted onloadedmetadata="this.muted = true"></video>
                    </div>
                </div>
            </div>

            <div class="even-columns">
                <div class="column-one">
                    <div class="about">
                        <p>
                            Added dynamic tag to show which products have more colors available, upon request by the client, to make up for platform limitations. Script appends the SVG + text when it finds a keyword associated with products with multiple colors.
                        </p>
                    </div>

                </div>
                <div class="column-two">
                    <div class="homepage">
                        <img src="./gameday-colorOptions.png" alt="">
                    </div>
                </div>
            </div>

            <div class="four-columns">
                <div class="mobile-title">
                    <h2>Mobile</h2>
                </div>
                <div class="column-three mobile">
                    <img src="./gameday-mobile-1.jpg" alt="">
                </div>
                <div class="column-four mobile">
                    <img src="./gameday-mobile-2.jpg" alt="">
                </div>
            </div>

        
    </section>

</template>

<script>

</script>

<style scoped>
.Gameday {
    margin-bottom: 5em;
    padding: 0 1em;
}

.Gameday-title h1{
    text-align: left;
    font-size: 2rem;
}

.Gameday-title p{
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
    margin: 0 3em;
}

.mobile img {
    width: 100%;
}
</style>