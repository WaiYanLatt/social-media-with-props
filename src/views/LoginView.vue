<script>
export default {
  emits: ["login", "clear"],
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      email: "",
      password: "",
      error: true,
      success: true,
    };
  },
  methods: {
    submit() {
      this.$emit("login", {
        email: this.email,
        password: this.password,
      });
      this.email = "";
      this.password = "";
    },
    clear() {
      this.$emit("clear");
    },
  },
};
</script>

<template>
  <div class="container-fulid mx-auto flex justify-center items-center h-screen bg-white">
    <div class="p-5 lg:p-10 rounded-xl flex flex-col lg:flex-row  bg lg:py-20 mx-5 lg:mx-0">
      <div>
        <img src="/img/login.gif" alt="" class="lg:w-96 w-full object-cover"/>
      </div>
      <form @submit.prevent="submit">
        <input @focus="clear" type="email" v-model="email" placeholder="E-mail"
          class="block lg:w-96  w-full mt-20 border-2 border-black font-semibold rounded-md p-3 focus:outline-none" />
        <input type="text" @focus="clear" v-model="password" autocomplete="false" placeholder="Password"
          class="block lg:w-96 w-full mt-6  border-2 border-black font-semibold rounded-md p-3 focus:outline-none" />
        <button
          class="mt-7 bg-black text-white font-semibold tracking-widest p-3 rounded-md active:bg-slate-600 w-full">LOGIN</button>
        <p class="text-red-500 font-semibold text-right mt-5">{{ message.error }}</p>
        <p class="text-green-500 font-semibold text-right mt-5">{{ message.success }}</p>
      </form>
    </div>
  </div>
</template>
