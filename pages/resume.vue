<template>
  <Theme :title="title">
    <template #content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aperiam at consectetur deleniti dicta dolorem ducimus eos exercitationem fugit incidunt inventore ipsam iure magni nesciunt nostrum quas, quidem, voluptas voluptates.
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
