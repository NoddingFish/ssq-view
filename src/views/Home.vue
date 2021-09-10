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

.copyright {
  text-rendering: optimizeLegibility;
  letter-spacing: .2px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  word-wrap: break-word;
  line-height: 1.7;
  color: #808080;
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: none;
  -webkit-font-smoothing: antialiased;
  -webkit-box-sizing: border-box;
  font-size: inherit;
  padding-top: 20px;
}

.text-left {
  text-align: left;
}

.el-button.is-circle {
  border-radius: 50%;
  padding: 10px;
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
                <el-tabs v-model="tabValue" style="margin-bottom: 20px;">
                  <el-tab-pane label="历史开奖" name="nextForecast">
                    <el-row v-for="number in ssqNumbers" :key="number.ssq_id">
                      <el-col class="ssq-date-text" :span="6">
                        第 {{ number.ssq_id }} 期开奖结果
                      </el-col>
                      <el-col :span="12">
                        <el-button type="danger" v-html="number.red1 < 10 ? '0' + number.red1 : number.red1" circle></el-button>
                        <el-button type="danger" v-html="number.red2 < 10 ? '0' + number.red2 : number.red2" circle></el-button>
                        <el-button type="danger" v-html="number.red3 < 10 ? '0' + number.red3 : number.red3" circle></el-button>
                        <el-button type="danger" v-html="number.red4 < 10 ? '0' + number.red4 : number.red4" circle></el-button>
                        <el-button type="danger" v-html="number.red5 < 10 ? '0' + number.red5 : number.red5" circle></el-button>
                        <el-button type="danger" v-html="number.red6 < 10 ? '0' + number.red6 : number.red6" circle></el-button>
                        <el-button type="primary" v-html="number.blue < 10 ? '0' + number.blue : number.blue" circle></el-button>
                      </el-col>
                      <el-col class="ssq-date-text color-1" :span="6">
                        开奖日期：{{ number.date }}
                      </el-col>
                    </el-row>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </el-col>
            <el-col :span="6">
              <el-row>
                <div class="grid-content order-view scan-radius shadow">
                  <el-tabs v-model="tabValue" style="margin-bottom: 20px;">
                    <el-tab-pane label="下期预测" name="nextForecast">
                      <el-row class="text-left">
                        <span>开奖日期：2021年9月7日</span>
                      </el-row>
                      <el-row>
                        <el-col :span="24">
                          <el-button type="danger" v-html="'01'" circle></el-button>
                          <el-button type="danger" v-html="'08'" circle></el-button>
                          <el-button type="danger" v-html="'18'" circle></el-button>
                          <el-button type="danger" v-html="'19'" circle></el-button>
                          <el-button type="danger" v-html="'27'" circle></el-button>
                          <el-button type="danger" v-html="'30'" circle></el-button>
                          <el-button type="primary" v-html="'02'" circle></el-button>
                        </el-col>
                      </el-row>
                    </el-tab-pane>
                  </el-tabs>

                  <el-tabs v-model="tabValue" style="margin-bottom: 20px;">
                    <el-tab-pane label="开奖详情（2021003期）" name="nextForecast">
                      <el-table
                        :data="ssqDetail"
                        style="width: 100%">
                        <el-table-column
                          prop="option"
                          label="奖项">
                        </el-table-column>
                        <el-table-column
                          prop="num"
                          label="中奖注数">
                        </el-table-column>
                        <el-table-column
                          prop="amount"
                          label="单注奖金（元）">
                        </el-table-column>
                      </el-table>
                    </el-tab-pane>
                  </el-tabs>

                  <el-tabs v-model="tabValue" style="margin-bottom: 20px;">
                    <el-tab-pane label="小游戏" name="nextForecast">
                      <el-row class="text-left">
                        <span style="font-size: 12px;">说明：选择投注的号码，看看在往期的中奖号码中是否有你</span>
                      </el-row>
                      <el-row>
                        <el-col :span="24">
                          <el-button type="danger" v-html="'01'" circle></el-button>
                          <el-button type="danger" v-html="'08'" circle></el-button>
                          <el-button type="danger" v-html="'18'" circle></el-button>
                          <el-button type="danger" v-html="'19'" circle></el-button>
                          <el-button type="danger" v-html="'27'" circle></el-button>
                          <el-button type="danger" v-html="'30'" circle></el-button>
                          <el-button type="primary" v-html="'02'" circle></el-button>
                        </el-col>
                      </el-row>
                    </el-tab-pane>
                  </el-tabs>
                </div>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </el-row>
    </div>
    <el-footer>
        <div class="copyright">Copyright © learncu.cn 2021 all right reserved</div>
    </el-footer>
  </div>
</template>
<script>

import { list, info } from '@/api/ssq'
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      tabValue: 'nextForecast',
      queryLists: {
        page: 1,
        limit: 20
      },
      ssqNumbers: [],
      ssqDetail: [
        { option: '一等奖', num: 291921, amount: 5000000 },
        { option: '二等奖', num: 291921, amount: 5000000 },
        { option: '三等奖', num: 291921, amount: 5000000 },
        { option: '四等奖', num: 291921, amount: 5000000 },
        { option: '五等奖', num: 291921, amount: 5000000 },
        { option: '六等奖', num: 291921, amount: 5000000 }
      ]
    }
  },
  created () {
    this.getLists()
    this.getInfo()
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    getLists () {
      const queryData = this.queryLists
      list(queryData).then(res => {
        console.log('res', res)
        this.ssqNumbers = res.data.lists
      }).catch(() => {})
    },
    getInfo (ssq_id = 0) {
      info(ssq_id).then(res => {
        console.log('res', res)
        this.ssqDetail = res.data
      }).catch(() => {})
    }
  }
}
</script>
