<template>
    <section class="contact">
        <div class="title">
            <h1>Contact Me</h1>
        </div>

        <div class="container flex">
            <form action="" class="flex">
                <div class="input-group">
                    <label for="name">Name:</label>
                    <div class="span-group flex">
                        <span>
                            <img src="./Photos/name-icon.png" alt="">
                        </span>
                        <input type="text" id="name" placeholder="Example">
                    </div>
                </div>
                    
                <div class="input-group">
                    <label for="email">Email:</label>
                    <div class="span-group flex">
                        <span><img src='./Photos/email-icon.png' alt=""></span>
                        <input type="email" id="email" placeholder="example@email.com">
                    </div>
                    
                </div>

                <div class="input-group">
                    <textarea id="message" rows="10" placeholder="Your message..."></textarea>
                </div>

                <button type="submit">submit</button>

            </form>
        </div>
        
    </section>
    
</template>

<script>

</script>

<style scoped>
.contact {
    padding-top: 4em;
    padding-bottom: 4em;
    background: var(--tan);
}

div.title h1 {
    font-size: 3rem;
    margin: 0;
    padding-bottom: 1em;
}

.container {
    justify-content: center;
}

form {
    width: 90%;
    max-width: 50em;
    flex-direction: column;
    justify-content: center;
}

.input-group {
    margin-bottom: .5em;
    flex-direction: column;
    align-items: start;
}

.input-group label {
    display: flex;
    margin-bottom: 3px;
}

.span-group {
    background: #306782;
    border: 1px #306782 solid;
    border-radius: 3px;
}

.span-group span {
    color: white;
    padding: 5px;
    width: 2.5em;
    display: flex;
    justify-content: center;
    align-items: center;
}

.span-group img {
    width: 20px;
}

input {
    height: 3em;
    padding-inline: 1em;
}

textarea {
    border-radius: 3px;
    padding: 1em;
    color: black;
    border: 1px #306782 solid;
    /* padding-inline: 0; */
    margin: 1em 0 2em 0;
    max-width: 100%;
    box-sizing: border-box;
}

/* textarea::placeholder {
    padding-left: 1em;
} */

input, textarea {
    width: 100%;
    /* border-radius: 2px; */
    box-shadow: none;
    border-style: solid;
    border: none;
}

button {
    width: 100px;
    height: 50px;
    text-transform: lowercase;
    background: linear-gradient(135deg, var(--yellow), var(--red));
    color: white;
    cursor: pointer;
    border: none;
    border-radius: .5em;
    margin: auto;
    font-size: 1em;
    font-weight: bold;
}
</style>