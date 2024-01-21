<script>
export default {
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
    post: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    const posts = JSON.parse(localStorage.getItem("posts"));
    if (posts) {
      this.currentUser.posts = posts;
    }
  },
  watch: {
    "currentUser.posts": {
      handler() {
        localStorage.setItem("posts", JSON.stringify(this.currentUser.posts));
      },
      deep: true,
    },
  },
};
</script>

<template>
  <div class="mt-10 lg:ml-5 lg:px-56 md:px-10 px-0 border lg:border-0 md:border-0">
    <div class="w-full shadow-lg rounded-lg">
      <!-- card-body -->
      <div class="lg:p-7 p-5">
        <div class="flex items-center">
          <img
            :src="currentUser.avatar"
            alt=""
            class="w-12 object-cover h-12 rounded-full"
          />
          <div class="ml-5">
            <h1 class="font-semibold text-xl">{{ currentUser.name }}</h1>
             <span class="font-semibold text-blue-400 mr-3">Public</span>
            <i class="fa-solid fa-earth-oceania text-blue-400"></i>
          </div>
        </div>
        <h5 class="font-semibold text-lg mb-2 mt-5">{{ post.title }}</h5>
        <p class="text-slate-500 font-semibold break-all">{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>
