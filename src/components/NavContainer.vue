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
            <a href="#about" class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a href="#menu" class="nav-link">Menu</a>
          </li>
          <li class="nav-item">
            <a href="#coupon" class="nav-link">Coupon</a>
          </li>
          <!-- ドロップダウン -->
          <li class="nav-item dropdown">
            <a href="#" class="dropdown-toggle btn nav-link" id="navbarDropdown" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Information
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a href="#shop" class="dropdown-item">Shop</a>
              <a href="#access" class="dropdown-item">Access</a>
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
