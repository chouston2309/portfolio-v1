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
              <p>Blending a robust foundation in public policy and government management consulting with a newfound passion for coding and design, I offer a distinctive skill set to web development. This fusion of analytical problem-solving, strategic project management, and a genuine enthusiasm for design ensures a comprehensive approach to crafting visually appealing and user-centric web solutions. I am poised to contribute a unique blend of technical expertise and creative flair, making me a valuable asset to any team seeking an innovative and well-rounded professional.</p>
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
                  <p>Collaborate with client companies to design and build customized online stores and global landing pages, employing a blend of technical expertise in JavaScript, HTML, and CSS, along with graphic design skills maintaining a unified and brand-consistent online presence. Manage end-to-end responsibilities, from configuring backend platforms, providing IT support, to automating tasks with JavaScript, ensuring a comprehensive and seamless online experience.</p>
                </div>
                <div class="work-line">
                  <h4>Amazon / Flex Driver / Fairfax, VA - Raleigh, NC / 2020-2022</h4>
                  <p>Executed efficient package pickups and deliveries as a driver, adhering to set routes and schedules.</p>
                </div>
                <div class="work-line">
                  <h4>Logistics Management Institute (LMI) / Government Management Consultant / McLean, VA / 2019-2020</h4>
                  <p>Engaged in the Department of State Office of Logistics Management's 10-year technology roadmap initiative, actively conducting in-depth analysis, researching technology trends, and participating in the strategic development of the DoS's modernization vision.</p>
                </div>
                <div class="work-line">
                  <h4>VMWare / Washington, D.C. / Global Government and Public Policy Intern / 2018</h4>
                  <p>Researched and assessed the impact of cloud computing legislation on VMWare, attending congressional hearings, collaborating with lobbyists to align legislative developments with business goals, and producing executive-level documentation and monthly newsletters for the Global Government and Public Policy branch.</p>
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
  padding: 4em 1em;
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
  padding: 0;
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
