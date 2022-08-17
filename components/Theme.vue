<template>
  <div class="main-wrapper main-wrapper-1">
    <TheHeader/>
    <div class="main-content pt-0">
      <section class="section">
        <div class="section-header text-white-all d-flex justify-content-between">
          <h1 v-html="title"></h1>
<!--           <div class="section-header-breadcrumb">
            <div class="breadcrumb-item active"><a href="#">Dashboard</a></div>
            <div class="breadcrumb-item"><a href="#">Bootstrap Components</a></div>
            <div class="breadcrumb-item">Breadcrumb</div>
          </div>-->
          <span @click="toggle" class="d-sm-none d-block">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </span>
        </div>
        <div class="section-body">
          <slot name="content"></slot>
        </div>
      </section>
    </div>
    <TheFooter/>
  </div>
</template>

<script>
export default {
  name: "Theme",
  props: {
    title: {
      default: "Page"
    }
  },
  methods:{
    toggle(){
      this.$store.commit("utils/toggle", true);
    }
  },
  computed:{
    isOpen(){
      return this.$store.state.utils.sidebarIsOpen;
    }
  }
}
</script>

<style scoped>

</style>
