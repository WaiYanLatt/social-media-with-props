<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="lg:my-5 lg:ml-3">
    <!-- card -->
    <div
      class="w-full shadow-xl rounded-lg overflow-hidden p-5 border mb-5"
    >
     <div class="flex items-center justify-center relative">
        <img
        :src="user.avatar"
        class="w-32 h-32 object-cover rounded-full border-4 border-blue-500"
        alt="..."
      />
      <div class="w-7 h-7 bg-blue-500 rounded-full absolute bottom-2 lg:bottom-0 right-28 lg:right-24 flex items-center justify-center">
         <i class="fa-solid fa-check text-white"></i>
      </div>
     </div>
      <!-- card body -->
      <div class="p-3">
        <h5 class="text-sky-500 font-semibold text-xl mb-2 text-center">
          {{ user.name }}
        </h5>
        <p class="font-semibold text-center text-gray-400">{{ user.bio }}</p>
        <p class="font-semibold text-center text-blue-500">{{ user.follower }} <span class="text-gray-400">follower</span></p>
        <p class="font-semibold text-center text-blue-500">{{ user.email }}</p>
        <router-link :to="`/users/${user.id}`">
          <button
            class="w-full bg-sky-500 text-white mt-10 p-3 rounded-lg font-semibold hover:bg-slate-500 duration-500"
          >
            View Profile
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
