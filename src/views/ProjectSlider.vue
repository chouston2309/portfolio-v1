<template>
    <section class="project-slider">
        <div class="title">
            <h1>
                Projects
            </h1>
        </div>
        <div class="carousel container">
            <div class="slider">
                <div>
                    <router-link to="/projects">
                        <h2>Vertex</h2>
                        <img src="./ProjectsFiles/Vertex/Photos/vertex-homepage.png" alt="">
                </router-link>
                </div>
                <div>
                    <router-link to="/projects">
                        <h2>Aligned Data Centers</h2>
                        <img src="./ProjectsFiles/AlignedDataCenters/adc-homepage.png" alt="">
                    </router-link>
                </div>
                <div>
                    <router-link to="/projects">
                        <h2>Gameday Men's Health</h2>
                        <img src="./ProjectsFiles/Gameday/gameday-homepage.png" alt="">
                    </router-link>
                </div>
                <div>
                    <router-link to="/projects">
                        <h2>Wolfspeed</h2>
                        <img src="./ProjectsFiles/Wolfspeed/ws-homepage.png" alt="">
                    </router-link>
                </div>
                <div>
                    <router-link to="/projects">
                        <h2>Weaver</h2>
                        <img src="./ProjectsFiles/Weaver/weaver-homepage.png" alt="">
                    </router-link>
                </div>
                <div>
                    <router-link to="/projects"><h3>more projects</h3></router-link>
                </div>
            </div>
            <div class="controls">
                <span class="arrow left"><img src="./Photos/left-arrow.png" alt=""></span>
                <span class="arrow right"><img src="./Photos/right-arrow.png" alt=""></span>
                <ul>
                    <li class="selected"></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    mounted() {
            const slider = document.querySelector('.slider');
            const leftArrow = document.querySelector('.left');
            const rightArrow = document.querySelector('.right');
            const indicatorParent = document.querySelector('.controls ul');

            var sectionIndex = 0;

            document.querySelectorAll('.controls li').forEach((indicator, ind)=>{
                indicator.addEventListener('click', ()=>{
                    sectionIndex = ind;
                    document.querySelector('.controls .selected').classList.remove('selected');
                    indicator.classList.add('selected');
                    slider.style.transform = 'translate(' + (sectionIndex) * -16.67 + '%)';
                })
            })

            rightArrow.addEventListener('click', ()=>{
                if(sectionIndex < 5){
                    sectionIndex = sectionIndex + 1;
                } else {
                    sectionIndex = sectionIndex = 5;
                }
                document.querySelector('.controls .selected').classList.remove('selected');
                indicatorParent.children[sectionIndex].classList.add('selected');
                slider.style.transform = 'translate(' + (sectionIndex) * -16.67 + '%)';
            })

            leftArrow.addEventListener('click', ()=>{
                if(sectionIndex > 0){
                sectionIndex = sectionIndex - 1;
            } else {
                sectionIndex = sectionIndex = 0;
            }
            document.querySelector('.controls .selected').classList.remove('selected');
            indicatorParent.children[sectionIndex].classList.add('selected');
                slider.style.transform = 'translate(' + (sectionIndex) * -16.67 + '%)';
            })
        }
}
</script>

<style>
.project-slider {
    background: #ebe4cc;
    padding: 3em 0;
}

.carousel {
    height: 45em;
    overflow: hidden;
    position: relative;
    border-radius: 10px;
    box-sizing: border-box;
}

.slider {
    height: 100%;
    display: flex;
    width: 600%;
    transition: .25s;
    
}

.slider div {
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: white;
}

.slider div:nth-child(6) {
    background: transparent;
}

.controls {
    width: 100%;
}

.controls .arrow {
    position: absolute;
    top: 50%;
    opacity: .25;
    transition: .25s;
}

.controls .arrow:hover {
    opacity: .75;
}

.arrow img {
    width: 10em;
    cursor: pointer;
    /* filter: invert(36%) sepia(30%) saturate(832%) hue-rotate(155deg) brightness(92%) contrast(91%); */
    filter: invert(80%) sepia(23%) saturate(4337%) hue-rotate(356deg) brightness(107%) contrast(98%);
}

.left {
    left: 10px;
    transform: translateY(-50%);

}

.right {
    right: 10px;
    transform: translateY(-50%);
}

.slider h2 {
    position: absolute;
    bottom: 0;
    right: 2%;
    color: white;
    background: linear-gradient(135deg, var(--yellow), var(--red));
    padding: 1em 2em;
    border-radius: 10px;
    box-shadow: var(--soft);
}

.slider div h3 {
    font-size: 2rem;
    background: linear-gradient(135deg, var(--yellow), var(--red));
    padding: 1em 2em;
    border-radius: 10px;
    cursor: pointer;
    transition: .25s;
    box-shadow: var(--soft);
}

.slider a {
    color: white;
    text-decoration: none;
}

.slider div img {
    width: 100%;
}

.controls ul {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%);
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
}

.controls ul li {
    width: 20px;
    height: 20px;
    border: 2px solid #fe4e51;
    border-radius: 50px;
    margin: 10px;
    background: transparent;
    cursor: pointer;
    opacity: .5;
    transition: .25s;
}

.controls ul:hover li {
    opacity: 1;
}   

.controls ul li.selected {
    background: #fe4e51;
}
</style>