<template>
  <div class="main-sidebar sidebar-style-2">
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
        <li class="text-center px-4 mt-3" style="line-height: normal;">
          <b><fa :icon="['fas','location-dot']"></fa> Yogyakarta, ID</b> <br>
          Full-Stack Web Developer
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
  name: "TheHeader"
}
</script>
