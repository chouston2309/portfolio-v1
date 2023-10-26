<template>
    <svg version="1.1" id="weaver-logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px" viewBox="0 0 200 200" enable-background="new 0 0 200 200" xml:space="preserve">
<path id="weaver-bottom" fill="#34715B" d="M0,180.5h52.4c0,0,54.1-66.9,147.6-81.3H80.1L0,180.5z"/>
<path id="weaver-top" fill="#73C167" d="M0,17.9h52.4
	c0,0,54.1,66.9,147.6,81.3H80.1L0,17.9z"/>
</svg>
</template>

<style>
#weaver-logo{
    width: 80%;
}
#weaver-top, #weaver-bottom {
    fill: white !important;
    transition: .25s;
}

#weaver-top{
    opacity: .65;
}

#weaver-logo.active #weaver-top {
    transform: translateY(-10px);
}

#weaver-logo.active #weaver-bottom{
    transform: translateY(10px);
}
</style>