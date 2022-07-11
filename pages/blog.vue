<template>
  <Theme :title="title">
    <template #content>
      <div class="row">
        <div class="col-sm-3">
          <div class="card">
            <img src="~/assets/images/blog/1.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title text-truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, deleniti ducimus nisi praesentium minima voluptas nesciunt quo aliquam, consequatur velit.</h5>
              <!-- <img src="~/assets/images/blog/1.png" class="img-fluid" alt=""> -->
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a class="float-right badge badge-info text-white">Read more <i class="fas fa-arrow-circle-right"></i> </a>
            </div>
            <div class="card-footer bg-whitesmoke">
              <div class="d-flex justify-content-between">
                <span><i class="fa fa-user-circle"></i> addin</span>
                <span><i class="far fa-calendar"></i> 20 Februari 2022</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <img src="~/assets/images/blog/2.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title text-truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, deleniti ducimus nisi praesentium minima voluptas nesciunt quo aliquam, consequatur velit.</h5>
              <!-- <img src="~/assets/images/blog/1.png" class="img-fluid" alt=""> -->
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a class="float-right badge badge-info text-white">Read more <i class="fas fa-arrow-circle-right"></i> </a>
            </div>
            <div class="card-footer bg-whitesmoke">
              <div class="d-flex justify-content-between">
                <span><i class="fa fa-user-circle"></i> addin</span>
                <span><i class="far fa-calendar"></i> 20 Februari 2022</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <img src="~/assets/images/blog/3.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title text-truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, deleniti ducimus nisi praesentium minima voluptas nesciunt quo aliquam, consequatur velit.</h5>
              <!-- <img src="~/assets/images/blog/1.png" class="img-fluid" alt=""> -->
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a class="float-right badge badge-info text-white">Read more <i class="fas fa-arrow-circle-right"></i> </a>
            </div>
            <div class="card-footer bg-whitesmoke">
              <div class="d-flex justify-content-between">
                <span><i class="fa fa-user-circle"></i> addin</span>
                <span><i class="far fa-calendar"></i> 20 Februari 2022</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <img src="~/assets/images/blog/4.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title text-truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, deleniti ducimus nisi praesentium minima voluptas nesciunt quo aliquam, consequatur velit.</h5>
              <!-- <img src="~/assets/images/blog/1.png" class="img-fluid" alt=""> -->
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a class="float-right badge badge-info text-white">Read more <i class="fas fa-arrow-circle-right"></i> </a>
            </div>
            <div class="card-footer bg-whitesmoke">
              <div class="d-flex justify-content-between">
                <span><i class="fa fa-user-circle"></i> addin</span>
                <span><i class="far fa-calendar"></i> 20 Februari 2022</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <img src="~/assets/images/blog/5.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title text-truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, deleniti ducimus nisi praesentium minima voluptas nesciunt quo aliquam, consequatur velit.</h5>
              <!-- <img src="~/assets/images/blog/1.png" class="img-fluid" alt=""> -->
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a class="float-right badge badge-info text-white">Read more <i class="fas fa-arrow-circle-right"></i> </a>
            </div>
            <div class="card-footer bg-whitesmoke">
              <div class="d-flex justify-content-between">
                <span><i class="fa fa-user-circle"></i> addin</span>
                <span><i class="far fa-calendar"></i> 20 Februari 2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link">Previous</a>
          </li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </template>
  </Theme>
</template>

<script>
export default {
  name: "blog",
  data(){
    return {
      title: "Blog"
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
