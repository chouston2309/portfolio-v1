<template>
    <div id="vue-lottie-container"></div>
</template>

<script>
import lottie from 'lottie-web'

export default {
 mounted() {
    var container = document.getElementById('vue-lottie-container');
    var state = 'play';

      var animation = lottie.loadAnimation({
      container: document.getElementById('vue-lottie-container'),
      path: 'https://lottie.host/1db439ed-bcb2-4d6a-bf04-e53d3fd0794b/Ri2kZXXU7v.json',
      renderer: 'svg',
      loop: false,
      autoplay: false,
      name: "Vue Animation",
      });

    setTimeout(()=> {
      // animation.addEventListener('data_ready', ()=>{
        animation.playSegments([0, 39], true);
      // });
    

      container.addEventListener('mouseenter', () => {
        animation.setDirection(1);
        animation.playSegments([40,60], true);
        state = 'pause';
      });

      container.addEventListener('mouseleave', () => {
        animation.setDirection(-1);
        animation.play();
        state = 'pause';
      });
    }, 600);

  }
}
</script>

<style>
#vue-lottie-container {
  width: 120px;
}
</style>