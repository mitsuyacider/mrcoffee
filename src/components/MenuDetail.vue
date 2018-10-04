<template>
  <div class="tab-pane show fade border border-top-0" :class="{active:isActive}" :id="'#' + detailData.id"
        role="tabpanel" aria-labelledby=detailData.id>
        <div class="row p-3 text-left">
          <div class="col-md-7 order-md-2 border">
            <h4>{{detailData.title}}</h4>
            <table class="table table-striped">
              <tbody>
                <tr v-for="(item, index) in detailData.tableContents">
                  <th>{{ detailData.tableContents[index].itemName }}</th>
                  <td>{{ detailData.tableContents[index].itemPrice }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-5 border">
            <img :src="require('../assets/' + detailData.imageFile)" alt="コーヒー" class="img-fluid">
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
    },
    detailData: {
      type: Object
    }
  },
  data () {
    return {

    }
  }
}
</script>
