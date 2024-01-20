<script>
import ProfileCardView from "@/components/ProfileCardView.vue";
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      show: false,
      messages : [],
      message : '',
    };
  },
  components: {
    ProfileCardView,
  },
  computed: {
    currentUser() {
      const userID = Number(this.$route.params.id);
      const user = this.users.find((user) => user.id === userID);
      return user;
    },
  },
  methods: {
    showMessage() {
      this.show = true;
    },
    UnshowMessage() {
      this.show = false;
    },
    addMessage(){
      const newMessage = {
        id: this.messages.length + 1,
        title: this.message.value,
      };
      this.messages.push(newMessage);
    },
  },
};
</script>

<template>
  <div class="container-fluid">
    <div
      class="fixed top-0 min-h-screen bg-white shadow-xl w-full z-20 lg:w-96 right-[-100%] transition-all duration-1000"
      :class="{ 'right-[0%]': show === true }"
    >
      <div
        class="w-full bg-slate-50 h-16 p-7 flex items-center justify-between"
      >
        <div class="flex items-center">
          <div class="relative">
            <img
              :src="currentUser.avatar"
              alt=""
              class="w-12 h-12 object-cover rounded-full"
            />
            <i
              class="fa-solid fa-circle text-green-500 absolute bottom-0 right-0"
            ></i>
          </div>
          <p class="font-semibold text-lg ml-4">
            {{ currentUser.name }}
          </p>
        </div>
        <button @click="UnshowMessage">
          <i class="text-sky-400 fa-solid fa-xmark text-2xl ml-3"></i>
        </button>
      </div>
        <h1 class="flex justify-center items-center h-96 text-lg text-gray-400 font-semibold p-4 break-all">Just UI, Sorry for this feacture because i have a final project may be i will add that feacture next month.</h1>
      <div class="w-full bg-white h-20 p-3 bottom-0 absolute flex items-center border-t-2 border-t-gray-200">
        <input
          type="text"
          v-model="message"
          placeholder="Send Message"
          class="p-3 font-semibold rounded-lg w-full bg-white focus:outline-none border-2 border-gray-400"
        />
        <i class="fa-solid fa-paper-plane ml-5 text-2xl active:text-sky-500 cursor-pointer" @click="addMessage"></i>
      </div>
    </div>
    <div class="container mx-auto lg:px-32">
      <ProfileCardView
        :user="currentUser"
        @showMessage="showMessage"
      ></ProfileCardView>
    </div>
  </div>
</template>
