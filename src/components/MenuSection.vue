<template>
  <!-- /コンテンツ03 -->
  <div class="py-4">
    <section id="menu">
      <div class="container border">
        <h3 class="mb-3 border">Menu</h3>
        <p class="border">カフェ Mr. M COFFEEのメニューです。掲載していない季節限定メニューは
          Mr.M COFFEEの<a href="#">ブログ</a>にて紹介します。
        </p>

        <!-- タブ型ナビゲーション -->
        <div class="nav nav-tabs border" id="tab-menus" role="tablist">
          <div v-for="(item, index) in menuData">
            <!-- タブ01 -->
            <a href="#panel-menu01" class="nav-item nav-link"
              :class="{active: selectedIndex==index}" :id="'#' + menuData[index].id"
              data-toggle="tab" role="tab" aria-controls="panel-menu01"
              aria-selected="true" @click.prevent="onSelectTab(index)">
              {{ menuData[index].title }}
            </a>
          </div>
        </div><!-- /タブ型ナビゲーション -->

        <!-- タブパネル　コンテンツ -->
        <div class="tab-content" id="panel-menus" v-for="(item, index) in menuData" >
          <menu-detail :detailData="menuData[index]" :isActive="index==selectedIndex"/>
        </div><!-- /タブパネル　コンテンツ -->
      </div>
    </section>
  </div><!-- /コンテンツ03 -->
</template>

<script>
import MenuDetail from './MenuDetail.vue'
export default {
  components: {
    MenuDetail
  },
  data () {
    return {
      menuData: [],
      selectedIndex: 0
    }
  },
  created () {
    this.menuData = this.readyMenuData()
  },
  methods: {
    onSelectTab: function(index) {
      this.selectedIndex = index
    },
    readyMenuData: function () {
      return [
        {
          title: "COFFEE",
          id: "tab-menu01",
          imageFile: "coffee.jpg",
          tableContents: [
            {
              "itemName" :  "M ブレンド",
              "itemPrice" : "390円（税別）"
            },
            {
              "itemName" :  "M ブレンド",
              "itemPrice" : "390円（税別）"
            },
            {
              "itemName" :  "M ブレンド",
              "itemPrice" : "390円（税別）"
            },
            {
              "itemName" :  "M ブレンド",
              "itemPrice" : "390円（税別）"
            }
          ]
        },
        {
          title: "モーニング",
          id:    "tab-menu02",
          imageFile: "coffee.jpg",
          tableContents: [
            {
              "itemName" :  "M ブレンド",
              "itemPrice" : "390円（税別）"
            },
            {
              "itemName" :  "M ブレンド",
              "itemPrice" : "390円（税別）"
            },
            {
              "itemName" :  "M ブレンド",
              "itemPrice" : "390円（税別）"
            },
            {
              "itemName" :  "M ブレンド",
              "itemPrice" : "390円（税別）"
            }
          ]
        },
        {
          title: "ランチ",
          id:    "tab-menu03",
          imageFile: "coffee.jpg",
          tableContents: [
            {
              "itemName" :  "M ブレンド",
              "itemPrice" : "390円（税別）"
            },
            {
              "itemName" :  "M ブレンド",
              "itemPrice" : "390円（税別）"
            },
            {
              "itemName" :  "M ブレンド",
              "itemPrice" : "390円（税別）"
            },
            {
              "itemName" :  "M ブレンド",
              "itemPrice" : "390円（税別）"
            }
          ]
        },
        {
          title: "ケーキ",
          id   : "tab-menu04",
          imageFile: "coffee.jpg",
          tableContents: [
            {
              "itemName" :  "M ブレンド",
              "itemPrice" : "390円（税別）"
            },
            {
              "itemName" :  "M ブレンド",
              "itemPrice" : "390円（税別）"
            },
            {
              "itemName" :  "M ブレンド",
              "itemPrice" : "390円（税別）"
            },
            {
              "itemName" :  "M ブレンド",
              "itemPrice" : "390円（税別）"
            }
          ]
        }
      ]
    }
  }
}
</script>
