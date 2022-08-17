<template>
  <Theme :title="title">
    <template #content>
      <div class="row">
        <div class="col-sm-8 col-12">
          <div class="card profile-widget">
            <div class="profile-widget-header">
              <img alt="image" src="~/assets/avatar.png" class="rounded-circle profile-widget-picture">
              <div class="profile-widget-items">
                <div class="profile-widget-item">
                  <div class="profile-widget-item-label">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="11" r="3"></circle>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div class="profile-widget-item-value"> <small>Yogyakarta ID</small></div>
                </div>
                <div class="profile-widget-item">
                  <div class="profile-widget-item-label">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                      <polyline points="3 7 12 13 21 7"></polyline>
                    </svg>
                  </div>
                  <div class="profile-widget-item-value">
                    <a href="mailto:akhul.syaifudin@gmail.com"><small>akhul.syaifudin@gmail.com</small></a>
                  </div>
                </div>
                <div class="profile-widget-item">
                  <div class="profile-widget-item-label">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                      <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1"></path>
                    </svg>
                  </div>
                  <div class="profile-widget-item-value"><a href="https://wa.me/send?phone=6285353535631"><small>+62 853-5353-5631</small></a></div>
                </div>
              </div>
            </div>
            <div class="profile-widget-description">
<!--              <div class="profile-widget-name">Akhul Syaifudin
                <div class="text-muted d-inline font-weight-normal">
                  <div class="slash"></div>
                  Full-stack Web Developer
                </div>
              </div>-->
              <p><span class="ml-5"></span>Saya spesialis <b>Full-Stack Web Developer</b> di frontend dan backend untuk mengembangkan web apps mulai dari skala yang ringan, sedang hingga komplek atau enterprise.
              Mempunyai pengalaman selama 6 tahun lebih terjun didunia web, mulai dari tahun 2014 hingga saat ini, sudah puluhan bahkan ratusan web app sudah saya buat maupun dikembangkan</p>

              <p>
                <span class="ml-5"></span>Beberapa technology / bahasa pemrograman / library / framework yang saya gunakan untuk front end ada html, css, Javascript, Bootstrap, Materialize css, <b>vuejs</b>, jquery, nuxt dll.
                Sedangkan untuk backend seperti PHP, Wordpress, Codeigniter 3, Laravel, MySQL dan beberapa pengetahuan pendukung lainnya seperti Firebase, Docker, Elastic Search, Mongodb
              </p>
              <p>
                <span class="ml-5"></span>Web Apps yang pernah saya buat seperti Sistem Informasi, Realtime Chat, Custom module WHMCS, REST API, Sistem Informasi Geografis, Microsite Generator, Theme Wordpress, Sistem Pengambilan Keputusan, Company Profile
                dan masih banyak lain nya yang tidak bisa saya sebutkan semua.
              </p>

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
        <div class="col-sm-4 col-12">
          <div class="card ">
            <div class="card-header">
              <h4>Apa yang saya lakukan?</h4>
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
                      <p>Web Apps</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card shadow-sm">
                    <div class="card-body text-center pb-0 px-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tool" width="32" height="32" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5"></path>
                      </svg>
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

<style scoped>
.addin-social a svg{
  margin-left: 0 !important;
  vertical-align: middle !important;
}
</style>
