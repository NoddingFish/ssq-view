<style lang="scss" scoped>
.scan-radius {
  border-radius: 10px;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}

.main-view {
  min-height: 650px;
  height: calc(100vh - 130px);
}

.shadow {
  box-shadow: 0 0 10px rgb(0 0 0 / 6%);
}

.order-view {
  //background-color: #b26d6d;
  height: calc(100vh - 200px);
  //padding: 10px 10px 10px 20px;
  min-height: 500px;
  overflow: auto;
  padding: 20px;
}

.ssq-date-text {
  font-size: 18px;
  line-height: 40px;
}

.color-1 {
  color: #909399;
}

.goods-view {
  min-height: 440px;
  height: calc(100vh - 400px);
  background-color: #fff;
  padding: 10px 10px 10px 20px;

  .view-table {
    height: calc(100vh - 500px);
    min-height: 340px;
    overflow: auto
  }
}

.log-view {
  min-height: 650px;
  height: calc(100vh - 190px);
  background-color: #fff;
  padding: 10px 10px 10px 20px;

  .view-table {
    height: calc(100vh - 290px);
    min-height: 550px;
    overflow: auto
  }
}

.scan-header {
  font-size: 16px;
  color: #333333;
  font-weight: 500;
}

.scan-text {
  color: #666666;
}

::v-deep {
  .scan-text-refund {
    color: #FF3D3D;
  }

  tr.scan-text-check {
    color: white;
    background-color: #94c694;

    &:hover > td {
      background-color: #94c694;
    }
  }
}

.scan-num {
  color: #F56C6C;
}

.scan-table {
  color: #697FA1;
}

.scan-page {
  position: absolute;
  bottom: 10px;
  right: 10px
}

.no-data-img {
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 120px;
  }
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  //background-color: #a1a3a9;
  background-color: #F56C6C;
  border-radius: 3px;
}
</style>
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
      <el-menu-item index="1">双色球</el-menu-item>
      <el-submenu index="2" style="position: absolute;right: 10px">
        <template slot="title">打盹会儿</template>
        <el-menu-item index="2-1">个人中心</el-menu-item>
        <el-menu-item index="2-2">退出</el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="main-view scan-radius">
      <el-row>
        <div>
          <el-row type="flex" justify="center" :gutter="10" style="margin: 0">
            <el-col :span="12">
              <div class="grid-content order-view scan-radius shadow">
                <el-row>
                  <el-col class="ssq-date-text" :span="6">
                    第 2021002 期开奖结果
                  </el-col>
                  <el-col :span="12">
                    <el-button type="danger" v-html="'01'" circle></el-button>
                    <el-button type="danger" v-html="'08'" circle></el-button>
                    <el-button type="danger" v-html="'18'" circle></el-button>
                    <el-button type="danger" v-html="'19'" circle></el-button>
                    <el-button type="danger" v-html="'27'" circle></el-button>
                    <el-button type="danger" v-html="'30'" circle></el-button>
                    <el-button type="primary" v-html="'02'" circle></el-button>
                  </el-col>
                  <el-col class="ssq-date-text color-1" :span="6">
                    开奖日期：2021-08-26
                  </el-col>
                </el-row>
                <el-row>
                  <el-col class="ssq-date-text" :span="6">
                    第 2021002 期开奖结果
                  </el-col>
                  <el-col :span="12">
                    <el-button type="danger" v-html="'01'" circle></el-button>
                    <el-button type="danger" v-html="'08'" circle></el-button>
                    <el-button type="danger" v-html="'18'" circle></el-button>
                    <el-button type="danger" v-html="'19'" circle></el-button>
                    <el-button type="danger" v-html="'27'" circle></el-button>
                    <el-button type="danger" v-html="'30'" circle></el-button>
                    <el-button type="primary" v-html="'02'" circle></el-button>
                  </el-col>
                  <el-col class="ssq-date-text color-1" :span="6">
                    开奖日期：2021-08-26
                  </el-col>
                </el-row>
                <el-row>
                  <el-col class="ssq-date-text" :span="6">
                    第 2021002 期开奖结果
                  </el-col>
                  <el-col :span="12">
                    <el-button type="danger" v-html="'01'" circle></el-button>
                    <el-button type="danger" v-html="'08'" circle></el-button>
                    <el-button type="danger" v-html="'18'" circle></el-button>
                    <el-button type="danger" v-html="'19'" circle></el-button>
                    <el-button type="danger" v-html="'27'" circle></el-button>
                    <el-button type="danger" v-html="'30'" circle></el-button>
                    <el-button type="primary" v-html="'02'" circle></el-button>
                  </el-col>
                  <el-col class="ssq-date-text color-1" :span="6">
                    开奖日期：2021-08-26
                  </el-col>
                </el-row>
                <el-row>
                  <el-col class="ssq-date-text" :span="6">
                    第 2021002 期开奖结果
                  </el-col>
                  <el-col :span="12">
                    <el-button type="danger" v-html="'01'" circle></el-button>
                    <el-button type="danger" v-html="'08'" circle></el-button>
                    <el-button type="danger" v-html="'18'" circle></el-button>
                    <el-button type="danger" v-html="'19'" circle></el-button>
                    <el-button type="danger" v-html="'27'" circle></el-button>
                    <el-button type="danger" v-html="'30'" circle></el-button>
                    <el-button type="primary" v-html="'02'" circle></el-button>
                  </el-col>
                  <el-col class="ssq-date-text color-1" :span="6">
                    开奖日期：2021-08-26
                  </el-col>
                </el-row>
                <el-row>
                  <el-col class="ssq-date-text" :span="6">
                    第 2021002 期开奖结果
                  </el-col>
                  <el-col :span="12">
                    <el-button type="danger" v-html="'01'" circle></el-button>
                    <el-button type="danger" v-html="'08'" circle></el-button>
                    <el-button type="danger" v-html="'18'" circle></el-button>
                    <el-button type="danger" v-html="'19'" circle></el-button>
                    <el-button type="danger" v-html="'27'" circle></el-button>
                    <el-button type="danger" v-html="'30'" circle></el-button>
                    <el-button type="primary" v-html="'02'" circle></el-button>
                  </el-col>
                  <el-col class="ssq-date-text color-1" :span="6">
                    开奖日期：2021-08-26
                  </el-col>
                </el-row>
                <el-row>
                  <el-col class="ssq-date-text" :span="6">
                    第 2021002 期开奖结果
                  </el-col>
                  <el-col :span="12">
                    <el-button type="danger" v-html="'01'" circle></el-button>
                    <el-button type="danger" v-html="'08'" circle></el-button>
                    <el-button type="danger" v-html="'18'" circle></el-button>
                    <el-button type="danger" v-html="'19'" circle></el-button>
                    <el-button type="danger" v-html="'27'" circle></el-button>
                    <el-button type="danger" v-html="'30'" circle></el-button>
                    <el-button type="primary" v-html="'02'" circle></el-button>
                  </el-col>
                  <el-col class="ssq-date-text color-1" :span="6">
                    开奖日期：2021-08-26
                  </el-col>
                </el-row>
                <el-row>
                  <el-col class="ssq-date-text" :span="6">
                    第 2021002 期开奖结果
                  </el-col>
                  <el-col :span="12">
                    <el-button type="danger" v-html="'01'" circle></el-button>
                    <el-button type="danger" v-html="'08'" circle></el-button>
                    <el-button type="danger" v-html="'18'" circle></el-button>
                    <el-button type="danger" v-html="'19'" circle></el-button>
                    <el-button type="danger" v-html="'27'" circle></el-button>
                    <el-button type="danger" v-html="'30'" circle></el-button>
                    <el-button type="primary" v-html="'02'" circle></el-button>
                  </el-col>
                  <el-col class="ssq-date-text color-1" :span="6">
                    开奖日期：2021-08-26
                  </el-col>
                </el-row>
                <el-row>
                  <el-col class="ssq-date-text" :span="6">
                    第 2021002 期开奖结果
                  </el-col>
                  <el-col :span="12">
                    <el-button type="danger" v-html="'01'" circle></el-button>
                    <el-button type="danger" v-html="'08'" circle></el-button>
                    <el-button type="danger" v-html="'18'" circle></el-button>
                    <el-button type="danger" v-html="'19'" circle></el-button>
                    <el-button type="danger" v-html="'27'" circle></el-button>
                    <el-button type="danger" v-html="'30'" circle></el-button>
                    <el-button type="primary" v-html="'02'" circle></el-button>
                  </el-col>
                  <el-col class="ssq-date-text color-1" :span="6">
                    开奖日期：2021-08-26
                  </el-col>
                </el-row>
                <el-row>
                  <el-col class="ssq-date-text" :span="6">
                    第 2021002 期开奖结果
                  </el-col>
                  <el-col :span="12">
                    <el-button type="danger" v-html="'01'" circle></el-button>
                    <el-button type="danger" v-html="'08'" circle></el-button>
                    <el-button type="danger" v-html="'18'" circle></el-button>
                    <el-button type="danger" v-html="'19'" circle></el-button>
                    <el-button type="danger" v-html="'27'" circle></el-button>
                    <el-button type="danger" v-html="'30'" circle></el-button>
                    <el-button type="primary" v-html="'02'" circle></el-button>
                  </el-col>
                  <el-col class="ssq-date-text color-1" :span="6">
                    开奖日期：2021-08-26
                  </el-col>
                </el-row>
                <el-row>
                  <el-col class="ssq-date-text" :span="6">
                    第 2021002 期开奖结果
                  </el-col>
                  <el-col :span="12">
                    <el-button type="danger" v-html="'01'" circle></el-button>
                    <el-button type="danger" v-html="'08'" circle></el-button>
                    <el-button type="danger" v-html="'18'" circle></el-button>
                    <el-button type="danger" v-html="'19'" circle></el-button>
                    <el-button type="danger" v-html="'27'" circle></el-button>
                    <el-button type="danger" v-html="'30'" circle></el-button>
                    <el-button type="primary" v-html="'02'" circle></el-button>
                  </el-col>
                  <el-col class="ssq-date-text color-1" :span="6">
                    开奖日期：2021-08-26
                  </el-col>
                </el-row>
                <el-row>
                  <el-col class="ssq-date-text" :span="6">
                    第 2021002 期开奖结果
                  </el-col>
                  <el-col :span="12">
                    <el-button type="danger" v-html="'01'" circle></el-button>
                    <el-button type="danger" v-html="'08'" circle></el-button>
                    <el-button type="danger" v-html="'18'" circle></el-button>
                    <el-button type="danger" v-html="'19'" circle></el-button>
                    <el-button type="danger" v-html="'27'" circle></el-button>
                    <el-button type="danger" v-html="'30'" circle></el-button>
                    <el-button type="primary" v-html="'02'" circle></el-button>
                  </el-col>
                  <el-col class="ssq-date-text color-1" :span="6">
                    开奖日期：2021-08-26
                  </el-col>
                </el-row>
                <el-row>
                  <el-col class="ssq-date-text" :span="6">
                    第 2021002 期开奖结果
                  </el-col>
                  <el-col :span="12">
                    <el-button type="danger" v-html="'01'" circle></el-button>
                    <el-button type="danger" v-html="'08'" circle></el-button>
                    <el-button type="danger" v-html="'18'" circle></el-button>
                    <el-button type="danger" v-html="'19'" circle></el-button>
                    <el-button type="danger" v-html="'27'" circle></el-button>
                    <el-button type="danger" v-html="'30'" circle></el-button>
                    <el-button type="primary" v-html="'02'" circle></el-button>
                  </el-col>
                  <el-col class="ssq-date-text color-1" :span="6">
                    开奖日期：2021-08-26
                  </el-col>
                </el-row>
                <el-row>
                  <el-col class="ssq-date-text" :span="6">
                    第 2021002 期开奖结果
                  </el-col>
                  <el-col :span="12">
                    <el-button type="danger" v-html="'01'" circle></el-button>
                    <el-button type="danger" v-html="'08'" circle></el-button>
                    <el-button type="danger" v-html="'18'" circle></el-button>
                    <el-button type="danger" v-html="'19'" circle></el-button>
                    <el-button type="danger" v-html="'27'" circle></el-button>
                    <el-button type="danger" v-html="'30'" circle></el-button>
                    <el-button type="primary" v-html="'02'" circle></el-button>
                  </el-col>
                  <el-col class="ssq-date-text color-1" :span="6">
                    开奖日期：2021-08-26
                  </el-col>
                </el-row>
                <el-row>
                  <el-col class="ssq-date-text" :span="6">
                    第 2021002 期开奖结果
                  </el-col>
                  <el-col :span="12">
                    <el-button type="danger" v-html="'01'" circle></el-button>
                    <el-button type="danger" v-html="'08'" circle></el-button>
                    <el-button type="danger" v-html="'18'" circle></el-button>
                    <el-button type="danger" v-html="'19'" circle></el-button>
                    <el-button type="danger" v-html="'27'" circle></el-button>
                    <el-button type="danger" v-html="'30'" circle></el-button>
                    <el-button type="primary" v-html="'02'" circle></el-button>
                  </el-col>
                  <el-col class="ssq-date-text color-1" :span="6">
                    开奖日期：2021-08-26
                  </el-col>
                </el-row>
                <el-row>
                  <el-col class="ssq-date-text" :span="6">
                    第 2021002 期开奖结果
                  </el-col>
                  <el-col :span="12">
                    <el-button type="danger" v-html="'01'" circle></el-button>
                    <el-button type="danger" v-html="'08'" circle></el-button>
                    <el-button type="danger" v-html="'18'" circle></el-button>
                    <el-button type="danger" v-html="'19'" circle></el-button>
                    <el-button type="danger" v-html="'27'" circle></el-button>
                    <el-button type="danger" v-html="'30'" circle></el-button>
                    <el-button type="primary" v-html="'02'" circle></el-button>
                  </el-col>
                  <el-col class="ssq-date-text color-1" :span="6">
                    开奖日期：2021-08-26
                  </el-col>
                </el-row>
                <el-row>
                  <el-col class="ssq-date-text" :span="6">
                    第 2021002 期开奖结果
                  </el-col>
                  <el-col :span="12">
                    <el-button type="danger" v-html="'01'" circle></el-button>
                    <el-button type="danger" v-html="'08'" circle></el-button>
                    <el-button type="danger" v-html="'18'" circle></el-button>
                    <el-button type="danger" v-html="'19'" circle></el-button>
                    <el-button type="danger" v-html="'27'" circle></el-button>
                    <el-button type="danger" v-html="'30'" circle></el-button>
                    <el-button type="primary" v-html="'02'" circle></el-button>
                  </el-col>
                  <el-col class="ssq-date-text color-1" :span="6">
                    开奖日期：2021-08-26
                  </el-col>
                </el-row>
                <el-row>
                  <el-col class="ssq-date-text" :span="6">
                    第 2021002 期开奖结果
                  </el-col>
                  <el-col :span="12">
                    <el-button type="danger" v-html="'01'" circle></el-button>
                    <el-button type="danger" v-html="'08'" circle></el-button>
                    <el-button type="danger" v-html="'18'" circle></el-button>
                    <el-button type="danger" v-html="'19'" circle></el-button>
                    <el-button type="danger" v-html="'27'" circle></el-button>
                    <el-button type="danger" v-html="'30'" circle></el-button>
                    <el-button type="primary" v-html="'02'" circle></el-button>
                  </el-col>
                  <el-col class="ssq-date-text color-1" :span="6">
                    开奖日期：2021-08-26
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content order-view scan-radius shadow">

              </div>
            </el-col>
          </el-row>
        </div>
      </el-row>
    </div>
    <el-footer>
        <div>Copyright © 2021.All rights reserved.</div>
    </el-footer>
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
