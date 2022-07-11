<template>
  <Theme :title="title">
    <template #content>
      <div class="card">
        <div class="card-body">
          <div class="container">
            <p class="card-title text-center">
              Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to <a href="mailto:akhul.syaifudin@gmail.com" class="font-weight-bold" target="_blank">akhul.syaifudin@gmail.com</a>
            </p>
          </div>
          <p class="card-title text-center">
            Want to get connected? Follow me on the social channels below.
          </p>
          <div class="text-center">
            <ul class="d-flex justify-content-center">
              <li class="list-inline-item mb-3">
                <a class="twitter" href="#"><fa :icon="['fab','facebook-f']"/></a>
              </li>
              <li class="list-inline-item mb-3">
                <a class="linkedin" href="#"><fa :icon="['fab','linkedin-in']"/></a>
              </li>
              <li class="list-inline-item mb-3">
                <a class="linkedin" href="#"><fa :icon="['fab','twitter']"/></a>
              </li>
              <li class="list-inline-item mb-3">
                <a class="github" href="#"><fa :icon="['fab','github']"/></a>
              </li>
              <li class="list-inline-item">
                <a class="instagram" href="#"><fa :icon="['fab','instagram']"/></a>
              </li>
            </ul>

          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-sm-8 offset-sm-2">
          <div class="card card-primary">
            <div class="card-header">
              <h4>Get In Touch</h4>
            </div>
            <div class="card-body">
              <form action="">
                <div class="row">
                  <div class="form-group col-6">
                    <label for="frist_name">Name</label>
                    <input id="frist_name" type="text" class="form-control" name="frist_name" autofocus>
                  </div>
                  <div class="form-group col-6">
                    <label for="last_name">Email</label>
                    <input id="last_name" type="text" class="form-control" name="last_name">
                  </div>


                  <div class="form-group col-12">
                    <label for="email">Message</label>
                    <textarea class="form-control form-control-lg" rows="5"></textarea>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary">Send Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Theme>
</template>

<script>
export default {
  name: "contact",
  data(){
    return {
      title: "Contact"
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
