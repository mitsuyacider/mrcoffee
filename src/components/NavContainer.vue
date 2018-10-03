<template>
  <div class="nav-container">
    <!-- ナビゲーション -->
    <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <!-- サブコンテナ -->
      <div class="container">
        <!-- ブランド名 -->
        <a href="index.html" class="navbar-brand">Mr.M COFFEE</a>
        <!-- 切り替えボタン -->
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target=
        "#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label=
        "Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      </div><!-- /サブコンテナ -->

      <!-- ナビゲーション -->
      <div class="collapse navbar-collapse" id="navbar-content">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a href="#">Top <span class="sr-only">(current)</span> </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Menu</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Coupon</a>
          </li>
          <!-- ドロップダウン -->
          <li class="nav-item dropdown">
            <a href="#" class="dropdown-toggle btn nav-link" id="navbarDropdown" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Information
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a href="#" class="dropdown-item">Shop</a>
              <a href="#" class="dropdown-item">Access</a>
            </div>
          </li>
        </ul>

        <!-- 右側メニュー : Contactページへのリンク -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="contact.html" class="nav-link btn btn-info">Contact</a>
          </li>
        </ul>
      </div>
    </nav><!-- /ナビゲーション -->
  </div>
</template>
