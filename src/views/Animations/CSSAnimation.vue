<template>
    <div id="css-lottie-container"></div>
</template>

<script>
import lottie from 'lottie-web'

export default {
 mounted() {
    var container = document.getElementById('css-lottie-container');
    var state = 'play';

      var animation = lottie.loadAnimation({
      container: document.getElementById('css-lottie-container'),
      path: 'https://lottie.host/9267cdae-ec0f-4356-8123-04655af201fe/ngZcnORscM.json',
      renderer: 'svg',
      loop: false,
      autoplay: false,
      name: "CSS Animation",
      });

    setTimeout(()=> {
    // animation.addEventListener('data_ready', ()=>{
      animation.playSegments([0, 67], true);
    // });
      

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
    }, 200);

  }
}
</script>

<style>
#css-lottie-container {
  width: 120px;
}
</style>