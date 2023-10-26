<template>
    <div id="ai-lottie-container"></div>
</template>

<script>
import lottie from 'lottie-web'

export default {
 mounted() {
    var container = document.getElementById('ai-lottie-container');
    var state = 'play';

      var animation = lottie.loadAnimation({
      container: document.getElementById('ai-lottie-container'),
      path: 'https://lottie.host/3bb523c7-7b8b-4dc7-bf5f-99a39839e958/HyadmRtsn7.json',
      renderer: 'svg',
      loop: false,
      autoplay: false,
      name: "ai Animation",
      });

    setTimeout(()=> {
    // animation.addEventListener('data_ready', ()=>{
      animation.playSegments([0, 24], true);
    // });
      

      container.addEventListener('mouseenter', () => {
        animation.setDirection(1);
        animation.playSegments([25,49], true);
        state = 'pause';
      });

      container.addEventListener('mouseleave', () => {
        animation.setDirection(-1);
        animation.play();
        state = 'pause';
      });
    }, 1600);

  }
}
</script>

<style>
#ai-lottie-container {
  width: 120px;
}
</style>