<template>
  <div class="contact-page">
    <!-- ヘッダー -->
    <header class="py-4">
      <div class="container text-center border">
        <h1><a href="index.html"><img src="../assets/logo.png" alt="カフェ Mr.M COFFEE"></a></h1>
      </div>
    </header><!-- /ヘッダー -->

    <!-- ナビゲーションメニュー -->
    <nav-container />

    <!-- パンくずリスト -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb container">
        <li class="breadcrumb-item">
          <router-link to="/">Top</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Contact</li>
      </ol>
    </nav> <!-- /パンくずリスト -->

    <!-- メイン -->
    <main>
      <div class="container">
        <h2>Contact</h2>
        <p>カフェ Mr. M COFFEE(ミスターえむコーヒー)へのお問い合わせは、
          こちらのフォームをご利用ください
        </p>
      </div>
      <!-- お問い合わせフォーム -->
      <div class="py-3">
        <div class="container text-left">
          <h3 class="mb-3">お問い合わせフォーム</h3>
          <!-- フォーム -->
          <form class="" action="index.html" method="post">
            <!-- お名前 -->
            <div class="form-group row">
              <label for="name" class="col-md-3 col-form-label">
                お名前 <span class="badge badge-warning">必須</span>
              </label>
              <div class="col-md-9">
                <input type="text" class="form-control" id="name" required>
              </div>
            </div><!-- /お名前 -->

            <!-- メールアドレス -->
            <div class="form-group row">
              <label for="email" class="col-md-3 col-form-label">
                メールアドレス <span class="badge badge-warning">必須</span>
              </label>
              <div class="col-md-9">
                <input type="email" class="form-control" id="email" required>
              </div>
            </div>
          </form><!-- /フォーム -->

          <!-- きっかけ -->
          <fieldset class="form-group">
            <div class="row">
              <legend class="col-form-label col md-3">
                Mr. M COFFEEを知ったきっかけ
              </legend>
              <div class="col-md-9">
                <div class="form-check form-check-inline">
                  <input type="radio" class="form-check-input" name="questionnaire" id="radio1"
                    value="answer1">
                    <label for="radio1" class="form-check-labelledby">口コミ</label>
                </div>
                <div class="form-check form-check-inline">
                  <input type="radio" class="form-check-input" name="questionnaire" id="radio2"
                    value="answer2">
                    <label for="radio2" class="form-check-labelledby">検索エンジン</label>
                </div>
                <div class="form-check form-check-inline">
                  <input type="radio" class="form-check-input" name="questionnaire" id="radio3"
                    value="answer3">
                    <label for="radio3" class="form-check-labelledby">その他</label>
                </div>
              </div>
            </div>
          </fieldset><!-- /きっかけ -->

          <!-- 種類 -->
          <div class="form-group row">
            <label for="category" class="col-md-3 col-form-label">
              お問い合わせ種類 <span class="badge badge-warning">必須</span>
            </label>
            <div class="col-md-9">
              <select name="category" id="category" class="form-control">
                <option value="category1">ご予約について</option>
                <option value="category1">委託販売について</option>
                <option value="category1">その他について</option>
              </select>
            </div>
          </div><!-- /種類 -->

          <!-- 内容 -->
          <div class="form-group row">
            <label for="message" class="col-md-3 col-form-label">
              お問い合わせ内容 <span class="badge badge-warning">必須</span>
            </label>
            <div class="col-md-9">
              <textarea name="message" id="message" cols="30" rows="8"
               class="form-control">
               </textarea>
            </div>
          </div><!-- /内容 -->

          <!-- 確認ボタン -->
          <div class="form-group row justify-content-end">
            <div class="col-md-9">
              <button type="submit" class="btn btn-primary">
                確認する
              </button>
            </div>
          </div><!-- /確認ボタン -->

        </div>
      </div><!-- /お問い合わせフォーム -->
    </main>

  </div>
</template>

<script>
import NavContainer from '../components/NavContainer.vue'

export default {
  components: {
    NavContainer
  }
}
</script>

<style lang="css">
</style>
