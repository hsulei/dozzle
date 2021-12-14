<template>
  <div class="hero is-halfheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          该容器没有找到
          <small class="subtitle">可能已被删除</small>
        </h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { setTitle } from "@/composables/title";

export default {
  name: "ContainerNotFound",
  setup() {
    setTitle("容器没有找到");
  },
};
</script>
