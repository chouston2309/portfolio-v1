<template>
    <div id="js-lottie-container"></div>
</template>

<script>
import lottie from 'lottie-web'

export default {
 mounted() {
    var container = document.getElementById('js-lottie-container');
    var state = 'play';

      var animation = lottie.loadAnimation({
      container: document.getElementById('js-lottie-container'),
      path: 'https://lottie.host/dc509a29-7629-4aaa-87b0-94fe7c033e4d/ka6AyKZbEP.json',
      renderer: 'svg',
      loop: false,
      autoplay: false,
      name: "JS Animation",
      });

    animation.addEventListener('data_ready', ()=>{
      animation.playSegments([0, 67], true);
    

      container.addEventListener('mouseenter', () => {
        animation.setDirection(1);
        animation.playSegments([68,101], true);
        state = 'pause';
      });

      container.addEventListener('mouseleave', () => {
        animation.setDirection(-1);
        animation.play();
        state = 'pause';
      });
    });

  }
}
</script>

<style>
#js-lottie-container {
  width: 120px;
}
</style>