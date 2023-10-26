<template>
    <div id="ae-lottie-container"></div>
</template>

<script>
import lottie from 'lottie-web'

export default {
 mounted() {
    var container = document.getElementById('ae-lottie-container');
    var state = 'play';

      var animation = lottie.loadAnimation({
      container: document.getElementById('ae-lottie-container'),
      path: 'https://lottie.host/58ce2278-0aae-44c0-82fa-43d87029eaa2/CLLv8dVclg.json',
      renderer: 'svg',
      loop: false,
      autoplay: false,
      name: "ae Animation",
      });

    setTimeout(()=> {
    // animation.addEventListener('data_ready', ()=>{
      animation.playSegments([0, 27], true);
    

      container.addEventListener('mouseenter', () => {
        animation.setDirection(1);
        animation.playSegments([28,49], true);
        state = 'pause';
      });

      container.addEventListener('mouseleave', () => {
        animation.setDirection(-1);
        animation.play();
        state = 'pause';
      });
    }, 1800);

  }
}
</script>

<style>
#ae-lottie-container {
  width: 120px;
}
</style>