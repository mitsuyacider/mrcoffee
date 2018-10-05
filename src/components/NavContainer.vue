<template>
  <!-- ナビゲーション -->
  <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
    <!-- サブコンテナ -->
    <div class="container border">
      <!-- ブランド名 -->
      <!-- <a href="index.html" class="navbar-brand">Mr.M COFFEE</a> -->
      <router-link class="navbar-brand" to="/">Mr.M COFFEE<span class="sr-only">(current)</span></router-link>

      <!-- 切り替えボタン -->
      <button type="button" class="navbar-toggler" data-toggle="collapse" data-target=
      "#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label=
      "Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- ナビゲーション -->
      <div class="collapse navbar-collapse border" id="navbar-content">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/">Top<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/#about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/#menu">Menu</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/#coupon">Coupon</router-link>
          </li>
          <!-- ドロップダウン -->
          <li class="nav-item dropdown">
            <a href="#" class="dropdown-toggle btn nav-link" id="navbarDropdown" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Information
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/#shop">Shop</router-link>
              <router-link class="dropdown-item" to="/#access">Access</router-link>
            </div>
          </li>
        </ul>

        <!-- 右側メニュー : Contactページへのリンク -->
        <ul class="navbar-nav">
          <li class="nav-item nav-link btn btn-info">
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div><!-- /ナビゲーション -->

    </div><!-- /サブコンテナ -->
  </nav>
</template>
