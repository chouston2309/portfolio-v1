<template>
    <svg version="1.1" id="adc-logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve">
<path id="adc-right" fill="#FF004F" d="M171.2,63.8h-45.3c-0.4,0-0.7,0.2-0.9,0.6l-75,167c-0.3,0.6,0.2,1.4,0.9,1.4h45.3
	c0.4,0,0.7-0.2,0.9-0.6l75-167C172.4,64.6,171.9,63.8,171.2,63.8z"/>
<path id="adc-left" fill="#FF004F" d="M154.5,120.9l21.3-45.5c0.2-0.5,0.9-0.5,1.2,0l73,156.5c0.2,0.4-0.1,0.9-0.6,0.9h-43
	c-0.3,0-0.5-0.1-0.6-0.4l-51.3-111C154.4,121.3,154.4,121.1,154.5,120.9z"/>
<polygon id="o-6" fill="none" stroke="#000000" stroke-width="5" stroke-miterlimit="10" points="-156.2,363.6 37.4,-67.9 
	262.4,-67.9 454.8,363.6 "/>
<polygon id="o-5" fill="none" stroke="#000000" stroke-width="5" stroke-miterlimit="10" points="-120.7,340.6 52.3,-44.9 
	247.5,-44.9 419.4,340.6 "/>
<polygon id="o-4" fill="none" stroke="#000000" stroke-width="5" stroke-miterlimit="10" points="-85.2,317.6 67.2,-21.9 
	232.5,-21.9 383.9,317.6 "/>
<polygon id="o-3" fill="none" stroke="#000000" stroke-width="5" stroke-miterlimit="10" points="160.9,294.6 152.1,275.3 
	143.9,294.6 -49.6,294.6 82.1,1.1 217.6,1.1 348.5,294.6 "/>
<polygon id="o-2" fill="none" stroke="#000000" stroke-width="5" stroke-miterlimit="10" points="175.7,271.6 151.5,218.1 
	128.7,271.6 -14.1,271.6 97,24.1 202.7,24.1 313.1,271.6 "/>
<path id="o-1" fill="none" stroke="#000000" stroke-width="5" stroke-miterlimit="10" d="M111.8,47.1h75.9l89.9,201.5h-87.1
	L150.9,161l-37.4,87.6H21.4L111.8,47.1z"/>
</svg>

</template>

<style>
#adc-logo {
    width: 100%;
}

#o-1, #o-2, #o-3, #o-4, #o-5, #o-6 {
    stroke-width: 0;
    stroke: white;
    transition: .75s;
}

#adc-logo.active #o-1, #adc-logo.active #o-2, #adc-logo.active #o-3, #adc-logo.active #o-4, #adc-logo.active #o-5, #adc-logo.active #o-6 {
   stroke-width: 5;
}

#adc-logo #adc-left, #adc-logo #adc-right {
    fill: white;
    transition: .5s;
    transform-origin: center;
}

#adc-logo.active #adc-left, #adc-logo.active #adc-right{
    opacity: 0;
}

@media (max-width: 35em){
    #adc-logo {
        width: 95%;
        transform: translateY(2.5px);
    }
}
</style>