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
              I am a Full-stack <b>Web Developer</b> specialised in frontend and backend development for complex scalable web apps. I have working as web developer since 2014.
                Experience building application for clients all over the world.

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
        <div class="col-sm-4">
          <div class="card ">
            <div class="card-header">
              <h4>What i do?</h4>
            </div>
            <div class="card-body ">
              <div class="row">
                <div class="col-sm-6">
                  <div class="card shadow-sm">
                    <div class="card-body text-center pb-0 px-0">
                      <fa :icon="['fab', 'wordpress']" size="2x"/>
                      <p>Wordpress theme</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card shadow-sm">
                    <div class="card-body text-center pb-0 px-0">
                      <fa :icon="['fas', 'laptop']" size="2x"/>
                      <p>Web apps</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card shadow-sm">
                    <div class="card-body text-center pb-0 px-0">
                      <fa :icon="['fab', 'vuejs']" size="2x"/>
                      <p>Maintenance System</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card shadow-sm">
                    <div class="card-body text-center pb-0 px-0">
                      <fa :icon="['fas', 'ellipsis']" size="2x"/>
                      <p>Other</p>
                    </div>
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
