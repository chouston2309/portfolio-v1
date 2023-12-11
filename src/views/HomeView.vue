<template>
  <div id="home" class="container-home">
    <div class="hero flex">
      <img src="./Photos/portfolio-hero.jpg">
    </div>
    <div class="container">
      <div class="even-columns">

        <div class="column-one flex coding-column">
          <div class="coding">
            <div class="coding-title">
              <h1>Coding</h1>
            </div>
            <ul class="coding-icon-list flex">
              <li class="coding-icon">
                <JSAnimation></JSAnimation>
                <h3>Javascript</h3>
              </li>
              <li class="coding-icon">
                <CSSAnimation></CSSAnimation>
                <h3>CSS</h3>
              </li>
              <li class="coding-icon">
                <HTMLAnimation></HTMLAnimation>
                <h3>HTML</h3></li>
              <li class="coding-icon">
                <VueAnimation></VueAnimation>
                <h3>Vue.js</h3></li>
              <li class="coding-icon">
                <BSAnimation></BSAnimation>
                <h3>Bootstrap</h3></li>
            </ul>
          </div>
        </div>

        <div class="column-two flex design-column">
          <div class="design">
              <h1>Design</h1>
            <ul class="design-icon-list flex">
              <li class="design-icon">
                <PSAnimation></PSAnimation>
                <h3>PhotoShop</h3></li>
              <li class="design-icon">
                <AIAnimation></AIAnimation>
                <h3>Illustrator</h3></li>
              <li class="design-icon">
                <AEAnimation></AEAnimation>
                <h3>After Effects</h3></li>
              <li class="design-icon">
                <PRAnimation></PRAnimation>
                <h3>Premier Pro</h3></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Projects></Projects>
    <AboutMe></AboutMe>
    <Contact></Contact>
  </div>
</template>

<script>
import JSAnimation from './Animations/JSAnimation.vue'
import CSSAnimation from './Animations/CSSAnimation.vue'
import HTMLAnimation from './Animations/HTMLAnimation.vue'
import VueAnimation from './Animations/VueAnimation.vue'
import BSAnimation from './Animations/BSAnimation.vue'
import PSAnimation from './Animations/PSAnimation.vue'
import AIAnimation from './Animations/AIAnimation.vue'
import AEAnimation from './Animations/AEAnimation.vue'
import PRAnimation from './Animations/PRAnimation.vue'

import Projects from './Projects.vue'
import AboutMe from './AboutView.vue'
import Contact from './Contact.vue'

export default {
  name: 'HomeView',
  components: { JSAnimation, CSSAnimation, HTMLAnimation, VueAnimation, 
    BSAnimation, PSAnimation, AIAnimation, AEAnimation, PRAnimation, Contact, Projects, AboutMe }
}
  
</script>

<style scoped>
.hero {
  background: #ebe4cc;
  width: 100%;
  height: 500px;
  margin: auto;
  justify-content: center;
  align-items: center;
}

.hero h1 {
  margin: 0;
  font-size: 4rem;
}


h1 {
  font-size:3rem
}

.even-columns {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-bottom: 2em;
}

.column-one {
  /* background: red; */
  width: 100%;
  justify-content: center;
}

.column-two {
  width: 100%;
  justify-content: center;
}

.design-icon-list {
  list-style-type: none;
  text-align: left;
  padding: 0;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}


.coding-icon-list {
  list-style-type: none;
  text-align: left;
  padding: 0;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

@media (min-width: 120em){
  .coding-icon-list, .design-icon-list {
    flex-wrap: nowrap;
  }
}

/* @media (max-width: 50em){
  .coding-icon-list, .design-icon-list {
    justify-content: flex-start;
  }
} */

.coding-icon {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.design-icon {
  display: flex;
  align-items: center;
  flex-direction: column;
}


</style>