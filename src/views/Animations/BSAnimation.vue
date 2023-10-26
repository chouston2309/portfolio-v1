<template>
    <div id="bs-lottie-container"></div>
</template>

<script>
import lottie from 'lottie-web'

export default {
 mounted() {
    var container = document.getElementById('bs-lottie-container');
    var state = 'play';

      var animation = lottie.loadAnimation({
      container: document.getElementById('bs-lottie-container'),
      path: 'https://lottie.host/0163f454-18b5-4fde-9cee-e414f346947a/5FfAGex2Yb.json',
      renderer: 'svg',
      loop: false,
      autoplay: false,
      name: "Bootstrap Animation",
      });

    setTimeout(()=> {
        animation.playSegments([0, 34], true);
    

      container.addEventListener('mouseenter', () => {
        animation.setDirection(1);
        animation.playSegments([35,68], true);
        state = 'pause';
      });

      container.addEventListener('mouseleave', () => {
        animation.setDirection(-1);
        animation.play();
        state = 'pause';
      });
    }, 1100);

  }
}
</script>

<style>
#bs-lottie-container {
  width: 120px;
}
</style>