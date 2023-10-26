<template>
    <section id="projects">
        <div class="title">
            <h1>Projects</h1>
        </div>

        <div class="project-icons">
            <ul class="project-icons-list">
                <li class="project-icon active" @click="changeIndex(1)"><a href="#projects"><VertexSVG ref="vertex"></VertexSVG></a></li>
                <li class="project-icon"  @click="changeIndex(2)"><a href="#projects"><GamedaySVG ref="gameday"></GamedaySVG></a></li>
                <li class="project-icon" @click="changeIndex(3)"><a href="#projects"><AdcSVG ref="adc"></AdcSVG></a></li>
                <li class="project-icon" @click="changeIndex(4)"><a id="ws-link" href="#projects"><WsSVG ref="Wolfspeed"></WsSVG></a></li>
                <li class="project-icon" @click="changeIndex(5)"><a id="weaver-link" href="#projects"><WeaverSVG ref="Weaver"></WeaverSVG></a></li>
                <li class="project-icon" @click="changeIndex(6)"><a href="#projects"><RsSVG ref="RapidScale"></RsSVG></a></li>
                <li class="project-icon" @click="changeIndex(7)"><a href="#projects"><AvSVG></AvSVG></a></li>
            </ul>
        </div>

        <div class="wrapper">
            <div class="container">
                <Vertex v-if="counter === 1 "></Vertex>
                <Gameday v-else-if="counter === 2 "></Gameday>
                <AlignedDataCenters v-else-if="counter === 3"></AlignedDataCenters>
                <Wolfspeed v-else-if="counter === 4"></Wolfspeed>
                <Weaver v-else-if="counter === 5"></Weaver>
                <Rapidscale v-else-if="counter === 6"></Rapidscale>
                <Avalara v-else-if="counter === 7"></Avalara>
            </div>
        </div>

    </section>
</template>

<script>
import Vertex from './ProjectsFiles/Vertex/Vertex.vue'
import VertexSVG from './ProjectsFiles/Vertex/SVG/VertexSVG.vue'
import Gameday from './ProjectsFiles/Gameday/Gameday.vue'
import GamedaySVG from './ProjectsFiles/Gameday/SVG/GamedaySVG.vue'
import AlignedDataCenters from './ProjectsFiles/AlignedDataCenters/AlignedDataCenters.vue'
import AdcSVG from './ProjectsFiles/AlignedDataCenters/SVG/AdcSVG.vue'
import Wolfspeed from './ProjectsFiles/Wolfspeed/Wolfspeed.vue'
import WsSVG from './ProjectsFiles/Wolfspeed/SVG/WsSVG.vue'
import Weaver from './ProjectsFiles/Weaver/Weaver.vue'
import WeaverSVG from './ProjectsFiles/Weaver/SVG/WeaverSVG.vue'
import Rapidscale from './ProjectsFiles/RapidScale/Rapidscale.vue'
import RsSVG from './ProjectsFiles/RapidScale/SVG/RsSVG.vue'
import Avalara from './ProjectsFiles/Avalara/Avalara.vue'
import AvSVG from './ProjectsFiles/Avalara/SVG/AvSVG.vue'

export default {
    name: 'Projects',
    components: {
        Vertex, Gameday, VertexSVG, GamedaySVG, AdcSVG, WsSVG, WeaverSVG, RsSVG, Avalara, AvSVG, 
        AlignedDataCenters, Wolfspeed, Weaver, Rapidscale
    },
    data(){
        return {
            counter: 1,
        }
    },
    methods: {
        changeIndex(ind) {
            const icons = document.querySelectorAll('.project-icon');
            const svgs = document.querySelectorAll('.project-icon svg');

            icons.forEach(icon => {
                icon.classList.remove('active');
            });

            svgs.forEach(svg => {
                svg.classList.remove('active');
            });

            this.counter = ind;

            icons[this.counter - 1].classList.add('active');
            svgs[this.counter -1].classList.add('active');
        }
    }
}
</script>

<style scoped>
/* #projects {
    background: var(--tan);
} */

.wrapper {
    background: var(--tan);
    padding: 1em 0;
    margin: 0;
}
    .title {
        padding-top: 2em;
    }

    .title h1 {
        font-size: 3rem;
    }

    .project-icons {
        position: sticky;
        top: 4em;
        overflow: visible;
        background: white;
        padding: 1em 0;
        z-index: 99;
        border-bottom: 1em var(--yellow) solid;
        /* box-shadow: var(--soft); */
    }

    .project-icons-list {     
        list-style: none;

        display: flex;
        justify-content: center;
        gap: 3em;
    }

    .project-icon {
        width: 4em;
        height: 4em;
        background: var(--blue);
        cursor: pointer;
        padding: .25em .5em;
        border-radius: 5px;
        transition: .25s;
        overflow: hidden;
    }

    .project-icon.active {
        background: var(--yellow);
        transform: scale(1.2);
        /* transform: rotate(-5deg); */
        box-shadow: var(--soft);
    }

    li.project-icon:nth-child(3){
        padding: 0;
        width: 5em;
        height: 4.5em;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    li.project-icon:nth-child(4) {
        padding: 0;
        width: 5em;
        height: 4.5em;
    }

    li.project-icon:nth-child(5){
        display: flex;
        justify-content: center;
    }

    #weaver-link {
    display: flex;
    justify-content: center;
}

    li.project-icon:nth-child(7){
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>