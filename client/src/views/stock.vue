<template>
  <div class="container">
    <button type="button" class="btn btn-success tombol" v-on:click="addProduct(true)">add Product</button>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>NO.</th>
          <th>Nomor Induk</th>
          <th>Tahun Produksi</th>
          <th>Jenis</th>
          <th>Lot</th>
          <th>Produsen</th>
          <th>alamat</th>
          <th>Tujuan</th>
          <th>alamat</th>
          <th>Volume</th>
          <th>Nomer Sertifikat/Label</th>
          <th>Tanggal Sertifikat Benih</th>
          <th>Tanggal Kedaluarsa</th>
          <th>Instansi yang Mengeluarkan</th>
        </tr>
      </thead>
      <tbody v-for=" (item,index) in dataList " v-bind:key="item._id">
        <tr>
          <td>{{index+1}}</td>
          <td>{{item.noInduk}}</td>
          <td>{{ item.tahunProduksi}}</td>
          <td>{{ item.jenis}}</td>
          <td>{{ item.lot}}</td>
          <td>{{ item.produsen}}</td>
          <td>{{ item.alamatProdusen}}</td>
          <td>{{ item.tujuan}}</td>
          <td>{{ item.alamatTujuan}}</td>
          <td>{{ item.volume}}</td>

          <td>{{ item.label}}</td>

          <td>{{ item.tanggalProduksi}}</td>

          <td>{{ item.tanggalExp}}</td>

          <td>{{ item.instansi}}</td>
          <td>
            <button type="button" class="btn btn-info" v-on:click="edit(item._id,index)">edit</button>
          </td>
          <td>
            <button type="button" class="btn btn-info" v-on:click="remove(item._id,index)">delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        tahunProduksi: "",
        jenis: "",
        lot: "",
        produsen: "",
        provinsi: "",
        kabupaten: "",
        kecamatan: "",
        tujuan: "",
        volume: "",

        label: "",
        tanggalProduksi: "",
        tanggalExp: "",
        instansi: ""
      },
      dataList: []
    };
  },

  methods: {
    loadData() {
      this.$api
        .get("http://localhost:3000" + "/product/all")
        .then(({ data }) => {
          this.dataList = data;
        })
        .catch(({ response }) => {
          // console.log(response.data);
          this.$swal({
            title: `Opps!`,
            text: `cant load data`,
            type: "error",
            timer: 2500
          });
        });
    },
    addProduct() {
      this.$router.push("addProduct");
    },
    remove(ID, index) {
      // console.log(ID);
      var result = [];
      var cek = true;
      this.$api
        .delete("http://localhost:3000" + `/product/remove/${ID}`)
        .then(({ data }) => {
          for (var i = 0; i < this.dataList.length; i++) {
            if (i == index) {
              cek = false;
            }
            if (cek == true) {
              result.push(this.dataList[i]);
            }
          }
          this.dataList = result;
        })
        .catch(({ response }) => {
          // console.log(response.data);
          this.$swal({
            title: `Opps!`,
            text: `cant load data`,
            type: "error",
            timer: 2500
          });
        });
    },
    edit(ID, index) {
      this.$router.push({ name: "edit", params: { id: ID } });
    }
  },
  mounted() {
    this.loadData();
  },
  watch: {
    dataList: function(val) {
      this.dataList = val;
    }
  }
};
</script>
<style scoped>
.tombol {
  margin: 10px;
  /* padding: 50px; */
}
</style>
