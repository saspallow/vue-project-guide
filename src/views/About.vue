<template>
  <div class="about">
    Subtitle: <input @input="title.subtitle= $event.target.value"/>
    <br>
    Username: <input v-model="username" @keyup.enter="add()"/>
    <button @click="add()">ADD</button>
    <Title :value="title.title"/>
    <ItemList :list="userList"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import Title from "@/components/Title";
import ItemList from "@/components/itemlist";
// import store from "@/store/";

export default {
  components: {
    // Title,
    ItemList
  },
  // beforeRouteEnter (to, from, next) {
  //   store.dispatch("$_user/fetchUsers").catch(error => {
  //     console.error(error);
  //   });
  //   next(vm => vm.isError = false)
  // },
  data: () => ({
    title: {
      title: "This is an about page",
      subtitle: ""
    },
    isError: null,
    username: ""
  }),
  watch: {
    title(val) {
      console.log(val);
    }
    // title: {
    //   handler (val) {
    //     console.log(val)
    //   },
    //   deep: true
    // },
  },
  computed: {
    ...mapGetters({
      userList: "$_user/users"
    })
  },
  beforeCreate() {},
  async created() {
    // Data and events are active
    this.$store.dispatch("$_user/fetchUsers").catch(error => {
      console.error(error);
    });
  },
  beforeMount() {},
  mounted() {},
  methods: {
    add() {
      let arr = [];
      for (let i = 0; i < 100; i++) {
        arr.push(this.username);
      }
      this.$store.dispatch("$_user/addUser", arr);
      this.username = "";
    }
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>
