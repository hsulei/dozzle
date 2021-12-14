<template>
  <div>
    <section class="section">
      <div class="has-underline">
        <h2 class="title is-4">关于</h2>
      </div>

      <div>
        欢迎使用容器日志查看工具
        <!--        You are using Dozzle <i>{{ currentVersion }}</i-->
        <!--        >-->
        <!--        <span v-if="hasUpdate">-->
        <!--          New version is available! Update to-->
        <!--          <a :href="nextRelease.html_url" class="next-release" target="_blank" rel="noreferrer noopener">-->
        <!--            {{ nextRelease.name }}</a-->
        <!--          >.-->
        <!--        </span>-->
      </div>
    </section>

    <section class="section">
      <div class="has-underline">
        <h2 class="title is-4">显示</h2>
      </div>
      <div class="item">
        <div class="columns is-vcentered">
          <div class="column is-narrow">
            <o-field>
              <o-dropdown v-model="hourStyle" aria-role="list">
                <template #trigger>
                  <o-button variant="primary" type="button">
                    <span class="is-capitalized">{{ hourStyle === "auto" ? "自动" : hourStyle }}</span>
                    <span class="icon">
                      <carbon-caret-down/>
                    </span>
                  </o-button>
                </template>

                <o-dropdown-item :value="value.value" aria-role="listitem"
                                 v-for="value in [{ key:'自动', value:'auto'}, {key:'12', value:'12'}, {key:'24',value: '24'}]"
                                 :key="value.key">
                  <span class="is-capitalized">{{ value.key }}</span>
                </o-dropdown-item>
              </o-dropdown>
            </o-field>
          </div>
          <div class="column">
            容器日志查看工具将默认使用你浏览器的区域设置来格式化时间，你可以强制使用12或者24小时制
          </div>
        </div>

        <div class="item">
          <o-switch v-model="smallerScrollbars"> 使用小滚动条</o-switch>
        </div>
        <div class="item">
          <o-switch v-model="showTimestamp"> 展示时间戳</o-switch>
        </div>
      </div>

      <div class="item">
        <div class="columns is-vcentered">
          <div class="column is-narrow">
            <o-field>
              <o-dropdown v-model="size" aria-role="list">
                <template #trigger>
                  <o-button variant="primary" type="button">
                    <span class="is-capitalized">{{ size === "small" ? "小" : size === "medium" ? "中" : "大" }}</span>
                    <span class="icon">
                      <carbon-caret-down/>
                    </span>
                  </o-button>
                </template>

                <o-dropdown-item
                  :value="value.value"
                  aria-role="listitem"
                  v-for="value in [{key:'小',value:'small'},{key:'中',value: 'medium'},{key: '大',value: 'large'}]"
                  :key="value.key"
                >
                  <span class="is-capitalized">{{ value.key }}</span>
                </o-dropdown-item>
              </o-dropdown>
            </o-field>
          </div>
          <div class="column">日志文字大小</div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="has-underline">
        <h2 class="title is-4">选项</h2>
      </div>

      <div class="item">
        <o-switch v-model="search">
          允许容器日志查看工具使用 <code>command+f</code> 或者 <code>ctrl+f</code>进行搜索
        </o-switch>
      </div>

      <div class="item">
        <o-switch v-model="showAllContainers"> 显示停止的容器</o-switch>
      </div>

      <div class="item">
        <o-switch v-model="lightTheme"> 使用亮色主题</o-switch>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import gt from "semver/functions/gt";
import config from "@/stores/config";
import {setTitle} from "@/composables/title";
import {
  search,
  lightTheme,
  smallerScrollbars,
  showTimestamp,
  hourStyle,
  showAllContainers,
  size,
} from "@/composables/settings";

setTitle("设置");

const currentVersion = config.version;
const nextRelease = ref({html_url: "", name: ""});
const hasUpdate = ref(false);


// async function fetchNextRelease() {
//   if (!["dev", "master"].includes(currentVersion)) {
//     const response = await fetch("https://api.github.com/repos/dozzle/dozzle/releases/latest");
//     if (response.ok) {
//       const releases = await response.json();
//       hasUpdate.value = gt(releases[0].tag_name, currentVersion);
//       nextRelease.value = releases[0];
//     }
//   } else {
//     hasUpdate.value = true;
//   }
// }

const chineseSize = ref("")

// fetchNextRelease();
</script>
<style lang="scss" scoped>
.title {
  color: var(--title-color);
}

a.next-release {
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
}

.section {
  padding: 1rem 1.5rem;
}

.has-underline {
  border-bottom: 1px solid var(--border-color);
  padding: 1em 0px;
  margin-bottom: 1em;
}

.item {
  padding: 1em 0;
}

code {
  border-radius: 4px;
  background-color: #444;
}
</style>
