<script>
export default {
  emits: ["create", "unShow"],
  props: {
    errorandsuccess: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      title: "",
      body: "",
    };
  },
  methods: {
    create() {
      this.$emit("create", {
        title: this.title,
        body: this.body,
      });
      this.title = "";
      this.body = "";
    },
    unShow() {
      this.$emit("unShow");
    },
    cleanForm() {
      this.errorandsuccess.error = "";
      this.errorandsuccess.success = "";
    },
  },
};
</script>

<template>
  <form @submit.prevent="create">
    <p
      @click="unShow"
      class="mb-3 text-4xl text-right text-sky-500 cursor-pointer"
    >
      &times
    </p>
    <input
      @focus="cleanForm"
      type="text"
      v-model="title"
      class="block border w-full font-semibold p-3 text-xl border-sky-500 focus:outline-sky-500 rounded-md"
      placeholder="Title"
    />
    <textarea
      @focus="cleanForm"
      type="text"
      v-model="body"
      placeholder="body"
      class="block border w-full font-semibold focus:outline-sky-500 mt-5 p-3 text-xl border-sky-500 rounded-md"
    />
    <button
      class="mt-5 font-semibold text-white bg-sky-500 p-3 w-full rounded-lg active:bg-slate-500"
    >
      Create Post
    </button>
    <p v-show="errorandsuccess.error === true" class="text-red-500  font-semibold mt-3 text-right">
      Please add text and title and body 
    </p>
    <p v-show="errorandsuccess.success === true" class="text-green-500 font-semibold mt-3 text-right">Post Created Successfully</p>
  </form>
</template>
