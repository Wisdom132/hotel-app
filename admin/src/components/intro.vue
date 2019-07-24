<template>
  <div>
    <section id="intro_header">
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <div class="container">
          <a class="navbar-brand" href="#">Navbar</a>
          <button
            class="navbar-toggler btn btn-transparent"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#rooms">Our Rooms</a>
              </li>
              <li>
                <a class="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container">
        <div class="row">
          <div class="col-md-6" id="header">
            <h2>Welcome To Sparta Hotels</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis necessitatibus laborum adipisci!</p>
            <button
              type="button"
              class="btn btn-primary bg-primary text-light"
              data-toggle="modal"
              data-target="#exampleModal"
            >Book a room</button>
            <book-room />
          </div>
        </div>
      </div>
    </section>
    <section id="about">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center mb-5">
            <h3 style="font-weight:500">About Us</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <img src="../assets/images/header.jpg" class="img-fluid" alt />
          </div>
          <div class="col-md-6 mt-5">
            <p class="abt text-justify">
              We provide Cutting-edge luxury accommodations to assure you a have a magnificent stay, A five star Inn located in the vicinity of Afe Babalola University wants to make your experience feel like you're home.
              Alias delectus aliquid tenetur cum accusamus tempore id. Odit placeat voluptatum consequuntur explicabo optio unde facere at, obcaecati eius tenetur aliquid nemo labore!
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="rooms">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center mb-5">
            <h3 style="font-weight:500">Our Rooms</h3>
          </div>
        </div>
        <div class="row mx-auto">
          <div class="col-md-4">
            <div class="card shadow-lg" style="width: 18rem;">
              <img src="../assets/images/our-1.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title mb-4" style="font-weight:700">Couple</h5>
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                <a
                  href="#"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >Reserve</a>

                <p class="float-right">#15,000 per night</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-lg" style="width: 18rem;">
              <img src="../assets/images/our-2.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title mb-4" style="font-weight:700">Family</h5>
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a
                  href="#"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >Reserve</a>
                <p class="float-right">#25,000 per night</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-lg" style="width: 18rem;">
              <img src="../assets/images/our-3.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title mb-4" style="font-weight:700">Suite</h5>
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a
                  href="#"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >Reserve</a>
                <p class="float-right">#10,000 per night</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mx-auto">
          <div class="col-md-4">
            <div class="card shadow-lg" style="width: 18rem;">
              <img src="../assets/images/our-4.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title mb-4" style="font-weight:700">Vip</h5>
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a
                  href="#"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >Reserve</a>
                <p class="float-right">#65,000 per night</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-lg" style="width: 18rem;">
              <img src="../assets/images/our-5.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title mb-4" style="font-weight:700">VVip</h5>

                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a
                  href="#"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >Reserve</a>
                <p class="float-right">#90,000 per night</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-lg" style="width: 18rem;">
              <img src="../assets/images/our-6.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title mb-4">Card title</h5>
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a
                  href="#"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >Reserve</a>
                <p class="float-right">#15,000 per night</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center" style="font-weight:500">
            <h5>Our Services</h5>
          </div>
        </div>
        <div class="row mx-auto mt-5 mb-4">
          <div class="col-md-3">
            <div class="shadow text-center mx-auto p-3" style="width:180px;">
              <img src="../assets/images/service1.png" class="img-fluid service mb-2" alt />
              <h5>Master bedrooms</h5>
            </div>
          </div>
          <div class="col-md-3">
            <div class="shadow text-center mx-auto p-3" style="width:180px;">
              <img src="../assets/images/service2.png" class="img-fluid service mb-2" alt />
              <h5>Sea View Belcony</h5>
            </div>
          </div>
          <div class="col-md-3">
            <div class="shadow text-center mx-auto p-3" style="width:180px;">
              <img src="../assets/images/service3.png" class="img-fluid service mb-2" alt />
              <h5>Pools And Spa</h5>
            </div>
          </div>
          <div class="col-md-3">
            <div class="shadow text-center mx-auto p-3" style="width:180px;">
              <img src="../assets/images/service4.png" class="img-fluid service mb-2" alt />
              <h5>Wifi Coverage</h5>
            </div>
          </div>
        </div>
        <div class="row mx-auto mt-5 mb-4">
          <div class="col-md-3">
            <div class="shadow text-center mx-auto p-3" style="width:180px;">
              <img src="../assets/images/service5.png" class="img-fluid service mb-2" alt />
              <h5>Packages</h5>
            </div>
          </div>
          <div class="col-md-3">
            <div class="shadow text-center mx-auto p-3" style="width:180px;">
              <img src="../assets/images/service6.png" class="img-fluid service mb-2" alt />
              <h5>Daily Clean Up</h5>
            </div>
          </div>
          <div class="col-md-3">
            <div class="shadow text-center mx-auto p-3" style="width:180px;">
              <img src="../assets/images/service7.png" class="img-fluid service mb-2" alt />
              <h5>Buffet Breakfast</h5>
            </div>
          </div>
          <div class="col-md-3">
            <div class="shadow text-center mx-auto p-3" style="width:180px;">
              <img src="../assets/images/service8.png" class="img-fluid service mb-2" alt />
              <h5>AirPort Taxi</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="testimonial">
      <div class="container">
        <div class="row pt-5">
          <div class="col-md-12 text-center text-light">
            <img src="../assets/images/user.png" class="img-fluid pb-1" alt />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cumque atque incidunt sapiente praesentium facere! Labore
              explicabo inventore corporis animi, ipsam sapiente dolorem ad consequuntur quam minus excepturi ullam alias quae incidunt ipsum quibusdam.
            </p>
            <h4 class="mt-3">Samuel Blessing</h4>
          </div>
        </div>
      </div>
    </section>
    <section class="p-5 bg-dark">
      <div class>
        <div class="col-md-12 text-center text-light">
          <h3 class="mb-4" style="font-weight:500">Our Gallary</h3>
        </div>
      </div>
      <div class="flex-container">
        <div class="flex-item">
          <img src="../assets/images/our-1.jpg" class="img-fluid" alt id="photo" />
        </div>
        <div class="flex-item">
          <img src="../assets/images/our-2.jpg" class="img-fluid" alt />
        </div>
        <div class="flex-item">
          <img src="../assets/images/our-3.jpg" class="img-fluid" alt />
        </div>
        <div class="flex-item">
          <img src="../assets/images/our-4.jpg" class="img-fluid" alt />
        </div>
      </div>
      <div class="flex-container">
        <div class="flex-item">
          <img src="../assets/images/our-5.jpg" class="img-fluid" alt />
        </div>
        <div class="flex-item">
          <img src="../assets/images/our-6.jpg" class="img-fluid" alt />
        </div>
        <div class="flex-item">
          <img src="../assets/images/our-1.jpg" class="img-fluid" alt />
        </div>
        <div class="flex-item">
          <img src="../assets/images/our-4.jpg" class="img-fluid" alt />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import book from "@/components/book.vue";
// import paystack from "vue-paystack";
// import Card from "src/components/Cards/Card.vue"

export default {
  components: {
    "book-room": book
  }
};
</script>

<style scoped>
.btn {
  padding: 5px;
}
#intro_header {
  background: linear-gradient(rgba(0, 0, 34, 0.55), rgba(0, 0, 34, 0.55)),
    url("../assets/images/header.jpg");
  height: 690px;
  background-size: cover;
  background-attachment: fixed;
}
.nav-link {
  color: white !important;
}
#header {
  padding-top: 150px;
  color: white;
}
.abt {
  line-height: 30px;
}
h5 {
  font-weight: 700;
}
#photo:hover {
  transform: ease 1s;
}
#testimonial {
  background: linear-gradient(rgba(0, 0, 34, 0.55), rgba(0, 0, 34, 0.55)),
    url("../assets/images/Slider-v1.jpg");
  height: 420px;
  background-size: cover;
  background-attachment: fixed;
}
.flex-container {
  display: flex;
}
</style>
