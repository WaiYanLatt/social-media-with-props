<script>
import PostCardView from "@/components/PostCardView.vue";
import Form from "@/components/Form.vue";
export default {
  props: {
    currentUserID: {
      type: null,
      required: true,
    },
    isAuthenicated: {
      type: Boolean,
      required: true,
    },
    users: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      show: false,
      show1: false,
      errorandsuccess : {
          error : false,
          success : false,
      },
    };
  },
  components: {
    PostCardView,
    Form,
  },
  computed: {
    currentUser() {
      const userID = Number(this.$route.params.id);
      const user = this.users.find((user) => user.id === userID);
      return user;
    },
  },
  // watch : {
  //   'currentUser.posts' : {
  //      handler() {
  //         localStorage.setItem('posts' , this.stringify(this.urrentUser.posts))
  //      },
  //   },
  // },
  methods: {
    showCard() {
      this.show = true;
    },
    unShow() {
      this.show = false;
    },
    create(data) {
      if (this.isAuthenicated === false) {
        alert("you must be login");
        return;
      }

      if (data.title === "") {
        this.errorandsuccess.error = true;
        return;
      }

      if (data.body === "") {
        this.errorandsuccess.error = true;
        return;
      }

      const currentUser = this.users.find(
        (user) => user.id === this.currentUserID
      );

      const newPost = {
        id: currentUser.posts.length + 1,
        title: data.title,
        body: data.body,
      };

      currentUser.posts.push(newPost);

      this.errorandsuccess.success = true;
    },
  },
};
</script>

<template>
    <div class="container-fluid mx-auto flex flex-col lg:flex-row justify-between items-center">
      <div class="lg:shadow-xl w-full lg:w-96 lg:min-h-screen lg:fixed lg:top-0 overflow-hidden lg:mt-0 mt-20">
        <div class="relative">
          <img :src="currentUser.coverphoto" alt="" class="w-full h-64 object-cover"/>
          <div class="absolute top-[75%] z-10 ml-2 flex items-center">
            <img :src="currentUser.avatar" alt="" class="w-32 h-32 rounded-full object-cover border-2 border-sky-500" />
            <h1 class="font-semibold text-xl mt-20 ml-5 text-blue-500">
              {{ currentUser.name }}
            </h1>
          </div>
        </div>
        <div class="mt-20 ml-5">
          <p class="font-semibold text-md text-center">
            {{ currentUser.bio }}
          </p>
          <h1 class="font-semibold text-xl mt-3">Info</h1>
          <p class="font-semibold text-lg mt-3 text-blue-500">
            <i class="fa-solid fa-envelope mr-5 text-slate-500"></i>
            {{ currentUser.email }}
          </p>
          <p class="font-semibold text-lg mt-3 text-blue-500">
            <i class="fa-solid fa-heart mr-5 text-slate-500"></i>
            {{ currentUser.relationShip }}
          </p>
        </div>
        <router-link :to="`/users/${currentUser.id}`">
          <button class="bg-slate-700 p-3 mt-10 text-white font-semibold active:bg-sky-500 w-[90%] ml-5 rounded-lg">
            More Info
          </button>
        </router-link>
      </div>
      <div class="lg:ml-96 z-20">
        <div class="w-full py-4 lg:py-3 fixed top-0 px-3 lg:px-0 lg:pl-44 bg rounded-none">
          <button @click="showCard"
            class="lg:w-[50%] w-full p-3 lg:ml-5 text-white font-semibold bg-sky-500 active:bg-slate-700 rounded-lg">
            CREATE POST
          </button>
        </div>
        <div class="grid grid-cols-1  mb-10 lg:mt-20">
          <PostCardView :currentUser="currentUser" v-for="post in currentUser.posts.slice().reverse()" :key="post.id" :post="post"></PostCardView>
        </div>
      </div>
      <div class="lg:w-[550px] lg:h-[370px] w-[370px] h-[350px] z-20 rounded-xl lg:p-10 p-5 bg-white shadow-2xl fixed top-32 lg:right-[30%]" v-show="show === true">
        <Form @create="create" @unShow="unShow" :errorandsuccess="errorandsuccess"></Form>
      </div>
    </div>
</template>
