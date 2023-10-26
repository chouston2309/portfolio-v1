<template>
    <div id="html-lottie-container"></div>
</template>

<script>
import lottie from 'lottie-web'

export default {
 mounted() {
    var container = document.getElementById('html-lottie-container');
    var state = 'play';

      var animation = lottie.loadAnimation({
      container: document.getElementById('html-lottie-container'),
      path: 'https://lottie.host/3efbb848-77a7-44f1-9548-a4584ff4cd13/YUXXPvLH2k.json',
      renderer: 'svg',
      loop: false,
      autoplay: false,
      name: "HTML Animation",
      });

    setTimeout(()=> {
    // animation.addEventListener('data_ready', ()=>{
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
    }, 400);

  }
}
</script>

<style>
#html-lottie-container {
  width: 120px;
}
</style>