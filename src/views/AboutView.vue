<template>
  <section id="aboutMe" class="container">
    <div class="title">
      <h1>About Me</h1>
    </div>

    <div class="profile">
      <div class="columns">

        <div class="col-1">
          <div class="personal">
            <h1 class="me">Christian Houston</h1>
            <ul class="personal-info">
              <li>chouton2309@gmail.com</li>
              <li><a href="https://www.linkedin.com/in/christian-houston-17b8b0167">linkedin</a></li>
              <li>Raleigh, NC</li>
            </ul>
          </div>
        </div>

        <div class="col-2">
          <div class="info">
            <div class="info-line summary">
              <h3>Summary</h3>
              <p>Web developer that has created company storefront websites, global landing pages, and added new functionality to sites. Developed experience working with brand guidelines and ensuring sites achieve the desired performance of clients. Aspiring to advance my skillset in web development and pursue new possibilities in this industry.<br><br>My previous work experience in consulting and public policy enabled me to grow my skills working with clients, understanding their needs, and communicating that information to my team.</p>
            </div>
            <div class="info-line education">
              <h3>Education</h3>
              <p>B.A. Government - Harvard University</p>
            </div>
            <div class="info-line">
              <h3>Experience</h3>
              <div class="work">
                <div class="work-line">
                  <h4>Brand Fuel / Online Services Coordinator / 2022-Present</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestias quis distinctio maiores debitis! Hic, porro quibusdam vel quidem doloremque natus cumque consectetur. Esse beatae placeat hic! Quidem dolore, maxime error est possimus aspernatur obcaecati facilis. Harum et odit consectetur.</p>
                </div>
                <div class="work-line">
                  <h4>Amazon / Flex Driver / Fairfax, VA - Raleigh, NC / 2020-2022</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi neque porro similique odio quibusdam molestiae exercitationem eos, eveniet voluptas recusandae animi aut quod aspernatur enim nesciunt magni repellat. Delectus, et.</p>
                </div>
                <div class="work-line">
                  <h4>Logistics Management Institute (LMI) / Government Management Consultant / McLean, VA / 2019-2020</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi neque porro similique odio quibusdam molestiae exercitationem eos, eveniet voluptas recusandae animi aut quod aspernatur enim nesciunt magni repellat. Delectus, et.</p>
                </div>
                <div class="work-line">
                  <h4>VMWare / Washington, D.C. / Global Government and Public Policy Intern / 2018</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi neque porro similique odio quibusdam molestiae exercitationem eos, eveniet voluptas recusandae animi aut quod aspernatur enim nesciunt magni repellat. Delectus, et.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
    
  </section>
</template>

<script>

</script>

<style scoped>

.container {
  padding: 4em 0;
}

h1 {
  font-size: 3rem;
}

.me {
  margin: 0;
  font-size: 2.5rem;
}

.personal-info {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1.5em; 
  font-weight: bold;
  color: #202020;
}

.personal-info a {
  text-decoration: none;
  color: #202020;
}

.columns {
  display: flex;
  flex-direction: column;
}

.education, .summary {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.info p {
  text-align: left;
}
.work-line h4 {
  text-align: left;
}

</style>
