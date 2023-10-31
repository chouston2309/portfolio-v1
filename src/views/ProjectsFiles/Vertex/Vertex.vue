<template>
    <section class="vertex">
            <div class="vertex-title">
                <h1>Vertex</h1>
                <p>
                    Client wanted this store to embrace and express the positive social and environmental impacts with which its products were associated. We came up with three impact categories: Small, Local, and Diverse Businesses, Sourced Responsibly, and Give Back and Pay It Forward. These categories shaped the identity of the store.
                </p>
            </div>

            <div class="even-columns">
                <div class="column-one">
                    <div class="about">
                        <p>
                            <strong>HOMEPAGE</strong><br>
                            Collaborated with the client to emphasize the three impact categories with a matching aesthetic.
                        </p>
                    </div>

                </div>
                <div class="column-two">
                    <div class="homepage">
                        <img src="./Photos/vertex-homepage.png" alt="">
                    </div>
                </div>
            </div>

            <div class="even-columns">
                <div class="column-one">
                    <div class="about">
                        <p>
                            <strong>ICONS</strong><br>
                            Dynamically loaded and animated SVG icons, which designate impact categories to their respective products.<br>
                            
                        </p>
                    </div>
                </div>
                <div class="column-two">
                    <div class="icons-video">
                        <video src="./Videos/vertex-icons-recording-MP4.mp4" loop autoplay muted onloadedmetadata="this.muted = true"></video>
                    </div>
                </div>
            </div>

            <div class="four-columns">
                <div class="mobile-title">
                    <h2>Mobile</h2>
                </div>
                <div class="column-three mobile">
                    <img src="./Photos/vertex-mobile-1.jpg" alt="">
                </div>
                <div class="column-four mobile">
                    <img src="./Photos/vertex-mobile-2.jpg" alt="">
                </div>
                <div class="column-five mobile">
                    <img src="./Photos/vertex-mobile-3.jpg" alt="">
                </div>
                <div class="column-six mobile">
                    <img src="./Photos/vertex-mobile-4.jpg" alt="">
                </div>
            </div>

        
    </section>

</template>

<script>

</script>

<style scoped>
.vertex {
    margin-bottom: 5em;
    padding: 0 1em;
}

.vertex-title h1{
    text-align: left;
    font-size: 2rem;
}

.vertex-title p{
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
    justify-content: space-around;
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
}

.mobile img {
    width: 100%;
}
</style>