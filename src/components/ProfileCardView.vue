<script>
export default {
  emits: ["show-message"],
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showFollow() {
      this.show = !this.show;
    },
    showMessage() {
      this.$emit("show-message");
    },
    logout() {
       localStorage.clear();
       this.$router.push('/');
    },
  },
};
</script>

<template>
  <div class="lg:my-10 ">
    <!-- card -->
    <div
      class="w-full lg:shadow-xl shadow-xl md:shadow-none md:border-0  rounded-lg overflow-hidden bg-white min-h-96 p-5 lg:p-10 border"
    >
      <div class="flex flex-col lg:flex-row md:flex-row items-center md:items-start lg:mt-0 mt-10">
        <div class="relative lg:ml-20 md:mt-10 mt-0">
          <img
            :src="user.avatar"
            class="w-32 h-32 object-cover rounded-full border-4 border-blue-500"
            alt="..."
          />
          <div
            class="w-7 h-7 bg-blue-500 rounded-full absolute bottom-2 lg:bottom-0 left-24 flex items-center justify-center"
          >
            <i class="fa-solid fa-check text-white"></i>
          </div>
        </div>
        <div class="ml-0 lg:ml-32 md:ml-14 lg:mt-0 mt-10">
          <div class="flex items-center">
            <h1 class="text-xl font-semibold mr-5">{{ user.name }}</h1>
            <i class="fa-solid fa-location-dot text-slate-400"></i>
            <h1 class="font-semibold text-slate-400 ml-3">
              {{ user.country }}
            </h1>
          </div>
          <p class="text-blue-500 font-semibold text-md">{{ user.job }}</p>
          <p class="font-semibold text-slate-400 text-sm mt-10">RANKINGS</p>
          <h1 class="font-semibold text-xl">
            {{ user.rank }}
            <i class="fa-solid fa-star text-blue-500 ml-3"></i>
            <i class="fa-solid fa-star text-blue-500 ml-3"></i>
            <i class="fa-solid fa-star text-blue-500 ml-3"></i>
            <i class="fa-solid fa-star text-blue-500 ml-3"></i>
            <i class="fa-solid fa-star text-slate-300 ml-3"></i>
          </h1>
          <div class="lg:mt-10 mt-10">
            <button
              class="font-semibold w-full lg:w-auto md:w-auto text-slate-500 p-3 lg:p-2 bg-slate-300 rounded-lg"
              @click="showMessage"
            >
              <i class="fa-solid fa-message text-slate-500"></i>
              Send message
            </button>
            <button
              @click="showFollow"
              class="font-semibold text-sky-500 mt-5 md:w-auto lg:mt-0 p-3 lg:p-2 ml-0 lg:ml-3 md:ml-2  bg-blue-100 rounded-lg w-full lg:w-auto"
            >
              <i
                class="fa-solid fa-user-plus text-sky-500 mr-3"
                v-show="show === false"
              ></i>
              <span v-show="show === false">Follow</span>
              <i
                class="fa-solid fa-user-check text-sky-500 mr-3"
                v-show="show === true"
              ></i>
              <span v-show="show === true">Followed</span>
            </button>
            <button
              class="font-semibold md:w-auto text-red-500 mt-5 lg:mt-0 p-3 w-full lg:w-auto lg:p-2 ml-0 lg:ml-3 md:ml-2 bg-red-100 rounded-lg"
            >
              <i class="fa-solid fa-exclamation-triangle text-red-500"></i>
              Report User
            </button>
            <button
              @click="logout"
              class="font-semibold md:w-auto text-white mt-5 lg:mt-0 p-3 w-full lg:w-auto lg:p-2 ml-0 lg:ml-3 md:ml-2 bg-red-500 rounded-lg"
            >
            <i class="fa-solid fa-right-from-bracket"></i>
              Logout
            </button>
          </div>
        </div>
      </div>
      <div class="flex lg:flex-row flex-col md:flex-row">
        <div class="lg:w-[500px] w-full min-h-96">
          <div class="mt-12">
            <h1 class="font-semibold text-gray-400">INTRO</h1>
            <p class="font-semibold text-gray-500 mt-3">
              {{ user.bio }}
            </p>
            <h1 class="font-semibold text-gray-400 mt-5">RELATION-SHIP</h1>
            <p class="font-semibold text-gray-500 mt-3">
              <i class="fa-solid fa-heart mr-3"></i>
              {{ user.relationShip }}
            </p>
            <h1 class="font-semibold text-gray-400 mt-5">COLLAGE</h1>
            <p class="font-semibold text-gray-500 mt-3">
              <i class="fa-solid fa-graduation-cap mr-3"></i>
              {{ user.collage }}
            </p>
            <h1 class="font-semibold text-gray-400 mt-5">FOLLOWER</h1>
            <p class="font-semibold text-gray-500 mt-3">
              <i class="fa-solid fa-user-check mr-3"></i>
              {{ user.follower }} people
            </p>
            <h1 class="font-semibold text-gray-400 mt-5">FOLLOWING</h1>
            <p class="font-semibold text-gray-500 mt-3">
              <i class="fa-solid fa-user-check mr-3"></i>
              {{ user.following }} people
            </p>
          </div>
        </div>
        <div class="w-full min-h-96">
          <h1
            class="mt-10 font-semibold text-lg text-slate-500 border-b-2 border-blue-500 w-32"
          >
            <i class="fa-solid fa-user text-blue-500 ml-5"></i>
            About
          </h1>
          <hr class="border border-slate-100" />
          <div class="mt-10">
            <h1 class="font-semibold text-slate-400">CONTACT INFORMATION</h1>
            <p class="font-semibold mt-5 text-blue-500">
              <i class="fa-solid fa-phone text-black"></i>
              - {{ user.phone }}
            </p>
            <p class="font-semibold mt-5 text-blue-500">
              <i class="fa-solid fa-envelope text-black"></i>
              -
              {{ user.email }}
            </p>
            <p class="font-semibold mt-5">
              <i class="fa-solid fa-map text-black"></i>
              - {{ user.address }}
            </p>
            <p class="font-semibold mt-5 text-blue-500">
              <i class="fa-solid fa-link text-black"></i>
              - {{ user.site }}
            </p>
          </div>
          <div class="mt-10">
            <h1 class="font-semibold text-slate-400">BASIC INFORMATION</h1>
            <p class="font-semibold mt-5 text-black">
              Birthday - <span class="text-blue-500">{{ user.birthday }}</span>
            </p>
            <p class="font-semibold mt-5 text-black">
              Gender - <span class="text-blue-500">{{ user.gender }}</span>
            </p>
          </div>
        </div>
      </div>
      <router-link :to="`/users`">
        <button
          class="p-3 lg:p-2 bg-slate-500 mt-5 md:w-[48%]  rounded-lg font-semibold text-white w-full lg:w-auto"
        >
          Back All Users
        </button>
      </router-link>
      <router-link :to="`/users/${user.id}/posts`">
        <button
          class="p-3 lg:p-2 bg-slate-500 mt-5 md:w-[48%] rounded-lg font-semibold text-white ml-0 lg:ml-3 md:ml-3  w-full lg:w-auto"
        >
          View Posts
        </button>
      </router-link>
    </div>
  </div>
</template>
