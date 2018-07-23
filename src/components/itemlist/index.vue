<template>
  <div>
    <ul>
      <Item v-for="(row, index) in list" :key="index" :value="row"/>
    </ul>
  </div>
</template>

<script>
// import Item from "@/components/itemlist/Item";
import Item from "./Item";

export default {
  name: "ItemList",
  components: {
    Item
  },
  props: {
    list: {
      type: Array,
      require: true
    }
  }
};
</script>
