<template>
  <div class="main-sidebar sidebar-style-2" :class="isOpen ? '' :'d-none'">
    <aside id="sidebar-wrapper">
      <div class="sidebar-brand">
        <a href="/">addin.my.id</a>
      </div>
      <div class="sidebar-brand sidebar-brand-sm">
        <a href="/">addin</a>
      </div>
      <ul class="sidebar-menu">
        <li class="text-center">
          <img src="~/assets/avatar.png" alt="" class="img-fluid rounded-circle w-50">
        </li>
        <li class="text-center px-4 mt-3 d-flex flex-column" style="line-height: normal;">
          <p class="mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="11" r="3"></circle>
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
            </svg> Klaten ID
          </p>
          <h6 class="mb-1">Akhul Syaifudin</h6>
          <p class="mb-1">Full-Stack Web Developer</p>
        </li>
        <li class="text-center addin-social my-3">
          <a href="https://www.fb.me/akhul.syaifudin" target="_blank"><fa :icon="['fab','facebook-f']"/></a>
          <a href="https://twitter.com/akhulsyaifudin" target="_blank"><fa :icon="['fab','twitter']"/></a>
          <a href="#"><fa :icon="['fab','linkedin-in']"/></a>
          <a href="https://github.com/rwaddin" target="_blank"><fa :icon="['fab','github']"/></a>
          <a href="https://www.instagram.com/akhul.syaifudin"><fa :icon="['fab','instagram']"/></a>
        </li>
        <!-- <li class="menu-header">Dashboard</li> -->
        <li>
          <NuxtLink class="nav-link" to="/"><fa :icon="['fas','user']"/> <span>About Me</span></NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link" to="/project"><fa :icon="['fas','chalkboard-user']"/> <span>Project</span></NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link" to="/resume"><fa :icon="['fas','id-card-clip']"/> <span>Resume</span></NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link" to="/blog"><fa :icon="['fas','blog']"/> <span>Blog</span></NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link" to="/contact"><fa :icon="['fas','envelope']"/> <span>Contact</span></NuxtLink>
        </li>
      </ul>

      <div class="mt-4 mb-4 p-3 hide-sidebar-mini">
        <NuxtLink to="/contact" class="btn btn-primary btn-lg btn-block btn-icon-split">
          <fa :icon="['fas','paper-plane']"/> Hire Me
        </NuxtLink>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  computed:{
    isOpen(){
      console.warn(window.innerWidth);
      if (window.innerWidth > 576){
        return true;
      }
      return this.$store.state.utils.sidebarIsOpen;
    }
  }
}
</script>
