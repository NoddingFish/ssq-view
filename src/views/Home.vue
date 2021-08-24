<template>
  <div class="home">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2" style="position: absolute;right: 10px">
        <template slot="title">打盹会儿</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
    <el-row>
      <el-button type="danger" v-html="'01'" circle></el-button>
      <el-button type="danger" v-html="'12'" circle></el-button>
      <el-button type="danger" v-html="'18'" circle></el-button>
      <el-button type="danger" v-html="'19'" circle></el-button>
      <el-button type="danger" v-html="'27'" circle></el-button>
      <el-button type="danger" v-html="'30'" circle></el-button>
      <el-button type="primary" v-html="'02'" circle></el-button>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
