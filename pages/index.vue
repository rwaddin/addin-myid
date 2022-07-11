<template>
  <Theme :title="title">
    <template #content>
      <div class="card">
        <!-- <div class="card-header">
          Akhu
        </div> -->
        <div class="card-body">
          <div class="row">
            <div class="col col-sm-8">
              <h1>Akhul Syaifudin</h1>
              <h6>Full-stack Developer</h6>
              <p>
                I'm a Full-stack Web Developer specialised in frontend and backend development for complex scalable web apps.</p>
              <p>I write my development experience on my blog.</p>
              <p>Want to know how I may help your project? Check out my <a href="">project portfolio</a> and <a href="">online resume</a>.
              </p>

              <button class="btn btn-warning"><fa :icon="['fas','chalkboard-user']"/>  View Portofolio</button>
              <button class="btn btn-success"><fa :icon="['fas','id-card-clip']"/>  View Resume</button>
            </div>
            <div class="col col-sm-4">
              <img src="~/assets/avatar.png" alt="" class="img-fluid img-thumbnail">
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h4>What I Do</h4>
        </div>
        <div class="card-body">
          <p>I have working as web developer since 2014. Experience building application for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my <a href="">online resume</a> and <a href="">project portfolio</a>.</p>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-3">
          <div class="card card-primary">
            <div class="card-header">
              <h4 >PHP</h4>
              <div class="card-header-action">
                <i class="fab fa-php fa-2x"></i>
              </div>
            </div>
            <div class="card-body">
              <p class="card-text">PHP is powerful server-side scripting language for backend or Full-stack web developer. I am experience creating website or backend API using PHP. Familiar Codeigniter and laravel framework.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-3">

          <div class="card card-primary">
            <div class="card-header">
              <h4>HTML</h4>

              <div class="card-header-action">
                <i class="fab fa-html5 fa-2x"></i>
              </div>
            </div>
            <div class="card-body">
              <div class="card-text">
                HTML is the basic structure of website creation, currently HTML is in version 5. In this version there are many new features such as responsive websites, support for vector graphics and many others.
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3">

          <div class="card card-primary">
            <div class="card-header">
              <h4>CSS</h4>

              <div class="card-header-action">
                <i class="fab fa-css3 fa-2x"></i>
              </div>
            </div>
            <div class="card-body">
              <p class="card-text">
                CSS is a website style, now it has reached version 3. You can create animations, 2D/3D Transformations, Color Gradients and other interesting features.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-3">

          <div class="card card-primary">
            <div class="card-header">
              <h4>JavaScript</h4>

              <div class="card-header-action">
                <i class="fab fa-js-square fa-2x"></i>
              </div>
            </div>
            <div class="card-body">
              <p class="card-text">JavaScript is Cliend-side scripting. Useful for Front-end website development. It running on browser. Using jquery AJAX library for interactive client-server communication and DOM manipulation.</p>
            </div>
          </div>
        </div>
        <!-- <div class="col-sm-3">

          <div class="card card-primary">
            <div class="card-header">
              <h4>RestAPI</h4>

              <div class="card-header-action">
                <i class="fab fa-css3 fa-2x"></i>
              </div>
            </div>
            <div class="card-body">
            </div>
          </div>
        </div> -->
        <div class="col-sm-3">
          <div class="card card-primary">
            <div class="card-header">
              <h4>Vue Js</h4>

              <div class="card-header-action">
                <i class="fab fa-vuejs fa-2x"></i>
              </div>
            </div>
            <div class="card-body">
              <p class="card-text">
                vuejs is a framework of javascript that is currently popular. Released in 2014 by evan you. Currently there is version 3.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card card-primary">
            <div class="card-header">
              <h4>Database</h4>

              <div class="card-header-action">
                <i class="fa fa-database fa-2x"></i>
              </div>
            </div>
            <div class="card-body">
              <p class="card-text">Experienced with Database Programming. Optimization database, SQL Language programming. familiar with MySQL/MariaDB and MsSQL.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card card-primary">
            <div class="card-header">
              <h4>Custom CMS </h4>

              <div class="card-header-action">
                <i class="fab fa-wordpress fa-2x"></i>
              </div>
            </div>
            <div class="card-body">
              <p class="card-text">
                Wordpress is the most famous cms and has the largest community today. No doubt big company websites use it.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card card-primary">
            <div class="card-header">
              <h4>Others</h4>

              <div class="card-header-action">
                <i class="fas fa-ellipsis-v fa-2x"></i>
              </div>
            </div>
            <div class="card-body">
              <div id="accordion">
                <div class="accordion">
                  <div class="accordion-header" role="button" data-toggle="collapse" data-target="#panel-body-1" aria-expanded="true">
                    <h4>Lumen </h4>
                  </div>
                  <div class="accordion-body collapse" id="panel-body-1" data-parent="#accordion">
                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
                <div class="accordion">
                  <div class="accordion-header" role="button" data-toggle="collapse" data-target="#panel-body-2">
                    <h4>Firebase</h4>
                  </div>
                  <div class="accordion-body collapse" id="panel-body-2" data-parent="#accordion">
                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
                <div class="accordion">
                  <div class="accordion-header" role="button" data-toggle="collapse" data-target="#panel-body-3">
                    <h4>Panel 3</h4>
                  </div>
                  <div class="accordion-body collapse" id="panel-body-3" data-parent="#accordion">
                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Theme>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return {
      title: "About Me"
    }
  },
  head() {
    return{
      titleTemplate: `${this.title} - `+'%s'
    }
  }
}
</script>
