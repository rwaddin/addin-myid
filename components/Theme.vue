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
          <a href=""><fa :icon="['fas','blog']"/></a>
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
  }
}
</script>

<style scoped>

</style>
