<template>
  <Theme :title="title">
    <template #content>
      <div class="row">
        <div class="col-sm-8">
          <div class="card profile-widget">
            <div class="profile-widget-header">
              <img alt="image" src="~/assets/avatar.png" class="rounded-circle profile-widget-picture">
              <div class="profile-widget-items">
                <div class="profile-widget-item">
                  <div class="profile-widget-item-label">
                    <fa :icon="['fas','location-dot']"/>
                  </div>
                  <div class="profile-widget-item-value"> Yogyakarta, ID</div>
                </div>
                <div class="profile-widget-item">
                  <div class="profile-widget-item-label">
                    <fa :icon="['fas','envelope']"/>
                  </div>
                  <div class="profile-widget-item-value"><a href="mailto:akhul.syaifudin@gmail.com">akhul.syaifudin@gmail.com</a>
                  </div>
                </div>
                <div class="profile-widget-item">
                  <div class="profile-widget-item-label">
                    <fa :icon="['fab','whatsapp']"/>
                  </div>
                  <div class="profile-widget-item-value"><a href="https://wa.me/send?phone=6285353535631">+62853 5353
                    5631</a></div>
                </div>
              </div>
            </div>
            <div class="profile-widget-description">
              <div class="profile-widget-name">Akhul Syaifudin
                <div class="text-muted d-inline font-weight-normal">
                  <div class="slash"></div>
                  Full-stack Web Developer
                </div>
              </div>
              Ujang maman is a superhero name in <b>Indonesia</b>, especially in my family. He is not a fictional
              character but an original hero in my family, a hero for his children and for his wife. So, I use the name
              as a user in this template. Not a tribute, I'm just bored with <b>'John Doe'</b>.
            </div>
            <div class="card-footer text-center">
              <div class="font-weight-bold mb-2">Follow Me On</div>
              <div class="addin-social my-3">
                <a href="https://www.fb.me/akhul.syaifudin" target="_blank"><fa class="mt-1" :icon="['fab','facebook-f']"/></a>
                <a href="https://twitter.com/akhulsyaifudin" target="_blank"><fa class="mt-1" :icon="['fab','twitter']"/></a>
                <a href="#"><fa class="mt-1" :icon="['fab','linkedin-in']"/></a>
                <a href="https://github.com/rwaddin" target="_blank"><fa class="mt-1" :icon="['fab','github']"/></a>
                <a href="https://www.instagram.com/akhul.syaifudin"><fa class="mt-1" :icon="['fab','instagram']"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="card">
        <!-- <div class="card-header">
          Akhu
        </div> -->
        <div class="card-body">
          <div class="row">
            <div class="col col-sm-9">
              <h1>Akhul Syaifudin</h1>
              <h6>Full-stack Developer</h6>
              <p>
                I'm a Full-stack Web Developer specialised in frontend and backend development for complex scalable web
                apps.</p>
              <p>I write my development experience on my blog.</p>
              <p>Want to know how I may help your project? Check out my <a href="">project portfolio</a> and <a href="">online
                resume</a>.
              </p>

              <button class="btn btn-warning">
                <fa :icon="['fas','chalkboard-user']"/>
                View Portofolio
              </button>
              <button class="btn btn-success">
                <fa :icon="['fas','id-card-clip']"/>
                View Resume
              </button>
            </div>
            <div class="col col-sm-3">
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
          <p>I have working as web developer since 2014. Experience building application for clients all over the world.
            Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more
            about my experience? Check out my <a href="">online resume</a> and <a href="">project portfolio</a>.</p>
          <div class="row">
            <div class="col-sm-3">a</div>
            <div class="col-sm-3">b</div>
            <div class="col-sm-3">c</div>
            <div class="col-sm-3">d</div>
          </div>
        </div>
      </div>
    </template>
  </Theme>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      title: "About Me"
    }
  },
  head() {
    return {
      titleTemplate: `${this.title} - ` + '%s'
    }
  }
}
</script>
