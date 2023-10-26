<template>
    <div id="pr-lottie-container"></div>
</template>

<script>
import lottie from 'lottie-web'

export default {
 mounted() {
    var container = document.getElementById('pr-lottie-container');
    var state = 'play';

      var animation = lottie.loadAnimation({
      container: document.getElementById('pr-lottie-container'),
      path: 'https://lottie.host/65ef3e8a-cb74-44b0-904e-8f29b8b499ae/AgBmZQqCj5.json',
      renderer: 'svg',
      loop: false,
      autoplay: false,
      name: "pr Animation",
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
    }, 2000);

  }
}
</script>

<style>
#pr-lottie-container {
  width: 120px;
}
</style>