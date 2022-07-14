<template>
  <Theme :title="title">
    <template #content>
      <div class="row">
        <div class="col-sm-6">
          <div class="card card-large-icons">
            <div class="card-icon bg-primary text-white">
              <fa :icon="['fas','graduation-cap']" size="4x"/>
            </div>
            <div class="card-body">
              <h4>Education</h4>
              <p>General settings such as, site title, site description, address and so on.</p>
              <a href="features-setting-detail.html" class="card-cta">Change Setting <i class="fas fa-chevron-right"></i></a>
            </div>
          </div>

        </div>
        <div class="col-sm-6">
          <div class="card card-large-icons">
            <div class="card-icon bg-primary text-white">
              <fa :icon="['fas','briefcase']" size="4x"/>
            </div>
            <div class="card-body">
              <h4>Employment</h4>
              <div class="media">
                <div class="media-body">
                  <div class="float-right text-primary">2018 - Present</div>
                  <div class="media-title">Rumahweb Indonesia</div>
                  <span class="text-small text-muted">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>
                </div>
              </div>
              <hr>
              <div class="media">
                <div class="media-body">
                  <div class="float-right text-primary">2018 - Present</div>
                  <div class="media-title">JITC</div>
                  <span class="text-small text-muted">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6">
          <div class="card card-large-icons">
            <div class="card-icon bg-primary text-white">
              <fa :icon="['fas','certificate']" size="4x"/>
            </div>
            <div class="card-body">
              <h4>Certificates</h4>
              <p>General settings such as, site title, site description, address and so on.</p>
              <li class="media">
                <img class="mr-3 rounded-circle" width="50" src="assets/img/avatar/avatar-1.png" alt="avatar">
                <div class="media-body">
                  <div class="float-right text-primary">Now</div>
                  <div class="media-title">Farhan A Mujib</div>
                  <span class="text-small text-muted">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>
                </div>
              </li>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card card-large-icons">
            <div class="card-icon bg-primary text-white">
              <fa :icon="['fas','code']" size="4x"/>
            </div>
            <div class="card-body">
              <h4>Programming Skills</h4>
              <p>General settings such as, site title, site description, address and so on.</p>

              <h6>Basic Language</h6>
              <div class="d-flex justify-content-around flex-wrap">
                <span class="badge badge-primary">HTML</span>
                <span class="badge badge-primary">CSS</span>
                <span class="badge badge-primary">PHP</span>
                <span class="badge badge-primary">Javascript</span>
                <span class="badge badge-primary">SQL</span>
              </div>
              <br>
              <h6>Framework</h6>
              <div class="d-flex justify-content-center flex-wrap ">
                <span class="m-1 badge badge-success">VueJS 2</span>
                <span class="m-1 badge badge-warning">SCSS</span>
                <span class="m-1 badge badge-danger">Codeigniter</span>
                <span class="m-1 badge badge-danger">Laravel</span>
                <span class="m-1 badge badge-warning">Lumen</span>
                <span class="m-1 badge badge-success">Nuxt</span>
                <span class="m-1 badge badge-primary">Bootstrap</span>
                <span class="m-1 badge badge-danger">Materialize</span>
              </div>
              <h6>Extra</h6>
              <div class="d-flex justify-content-center flex-wrap ">
                <span class="m-1 badge badge-warning">Firebase</span>
                <span class="m-1 badge badge-info">Docker</span>
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
  name: "resume",
  data(){
    return {
      title: "Resume"
    }
  },
  head() {
    return{
      titleTemplate: `${this.title} - `+'%s'
    }
  }
}
</script>

<style scoped>

</style>
