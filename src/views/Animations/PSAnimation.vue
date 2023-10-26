<template>
    <div id="ps-lottie-container"></div>
</template>

<script>
import lottie from 'lottie-web'

export default {
 mounted() {
    var container = document.getElementById('ps-lottie-container');
    var state = 'play';

      var animation = lottie.loadAnimation({
      container: document.getElementById('ps-lottie-container'),
      path: 'https://lottie.host/c6ba1d2e-b1f9-4013-9cd1-19a9830e5fa6/QxKzHnfg9i.json',
      renderer: 'svg',
      loop: false,
      autoplay: false,
      name: "PS Animation",
      });

      // animation.addEventListener('data_ready', ()=>{
    setTimeout(()=> {
      animation.playSegments([0, 26], true);
      

      container.addEventListener('mouseenter', () => {
        animation.setDirection(1);
        animation.playSegments([26,65], true);
        state = 'pause';
      });

      container.addEventListener('mouseleave', () => {
        animation.setDirection(-1);
        animation.play();
        state = 'pause';
      });
    }, 1400);

  }
}
</script>

<style>
#ps-lottie-container {
  width: 120px;
}
</style>