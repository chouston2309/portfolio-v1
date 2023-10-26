<template>
  <header class="primary-header">
    <button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
    </button>
  
    <nav>
      <ul id="primary-navigation" class="primary-navigation flex" data-visible="false">
        <li><a href="#home">Home</a></li>
        <li><a href="#aboutMe">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
  </header>

  <HomeView></HomeView>

  <footer class="footer">
    <ul class="social-links">
      <li><a href="https://www.linkedin.com/in/christian-houston-17b8b0167"><img src="./views/Photos/linkedin.png">LinkedIn</a></li>

    </ul>
  </footer>
</template>

<script>
import HomeView from './views/HomeView.vue'

export default {
  name: 'App',
  components: {
    HomeView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

/* Primary Nav */

#primary-navigation {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 4rem;
  list-style-type: none;

  align-items: center;
  justify-content: center;
}

.mobile-nav-toggle {
  display: none;
}

.primary-header {
  background: var(--yellow);
  position: sticky;
  top: 0;
  z-index: 100;
}

nav {
  position: relative;
}

nav li {
  text-decoration: none;
  color: #202020;
  font-weight: 700;
  margin-inline-end: 2rem;
}

nav a {
  text-decoration: none;
  color: #202020;
}

@media (max-width: 35em) {
  #primary-navigation {
    position: fixed;
    z-index: 1000;
    inset: 0 0 0 30%;
    background: #202020;
    flex-direction: column;
    padding: min(20vh, 8rem) 2rem;
    width: auto;
    height: auto;
    justify-content: start;

    --gap: 3rem;

    transform: translateX(100%);

    transition: transform .25s ease-out;
  }

  #primary-navigation[data-visible=true]{
    transform: translateX(0);
  }
  
  .mobile-nav-toggle {
    position: absolute;
    z-index: 9999;
    width: 2rem;
    aspect-ratio: 1;
    top: 2rem;
    right: 2rem;
    display: block;

    background: url('/assets/menu-button.svg');
    border: none;
    padding: 0;
    cursor: pointer;
    font-size: 0;
    overflow: hidden;
  
  }

  .mobile-nav-toggle[aria-expanded=true]{
    background: url('/assets/menu-close.svg');
    filter: invert(1);
  }
}

footer {
  background: var(--yellow);
  height: 5em;
  bottom: 0;
  display: flex;
  justify-content: center;
}

footer img {
  width: 1.5em;
  height: 1.5em;
}

footer li a {
  text-decoration: none;
  color: #202020;
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1em;
}

.social-links {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1em;
  list-style: none;
  font-size: 1rem;
}

/* utility classes */
.container {
  width: min(1440px, 100%);
  margin: auto;
}
.flex {
  display: flex;
  /* gap: var(--gap, 1rem); */
}

.bg-primary {
  background: #f4c845;
}

.bg-secondary {
  background: #e8ded1;
}

.text-primary {
  color: #000080;
}

.text-center{
  text-align: center;
}

:root {
  --red: #fe4351;
  --tan: #ebe4cc;
  --blue: #306782;
  --yellow: #fdc607;
  --turq: #11c6b4;
  --soft: 1.4px 1.4px 2.2px rgba(0, 0, 0, 0.02),
    3.3px 3.3px 5.3px rgba(0, 0, 0, 0.028),
    6.1px 6.1px 10px rgba(0, 0, 0, 0.035),
    10.9px 10.9px 17.9px rgba(0, 0, 0, 0.042),
    20.5px 20.5px 33.4px rgba(0, 0, 0, 0.05),
    49px 49px 80px rgba(0, 0, 0, 0.07);
    --neu: 20px 20px 60px #d9d9d9,
            -20px -20px 60px #ffffff;
}

</style>
