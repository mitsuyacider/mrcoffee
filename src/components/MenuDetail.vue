<template>
  <div class="tab-pane fade show border border-top-0"  :class="{active: isActive}" id="panel-menu01"
        role="tabpanel" aria-labelledby="tab-menu01">
        <div class="row p-3 text-left">
          <div class="col-md-7 order-md-2 border">
            <h4>COFFEE</h4>
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th>M ブレンド</th>
                  <td>390円（税別）</td>
                </tr>
                <tr>
                  <th>アイスコーヒー</th>
                  <td>390円（税別）</td>
                </tr>
                <tr>
                  <th>ブラジルシングル</th>
                  <td>390円（税別）</td>
                </tr>
                <tr>
                  <th>エスプレッソ</th>
                  <td>390円（税別）</td>
                </tr>
                <tr>
                  <th>カプチーノ</th>
                  <td>390円（税別）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-5 border">
            <img src="../assets/coffee.jpg" alt="コーヒー" class="img-fluid">
          </div>
        </div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  }
}
</script>
