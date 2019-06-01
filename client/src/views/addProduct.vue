 <template>
  <div class="form">
    <!-- =================================================== -->
    <!-- =================================================== -->
    <b-form-group label="No induk">
      <b-form-input v-model="form.noInduk" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <b-form-group label="tahun Produksi">
      <b-form-input v-model="form.tahunProduksi" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <!-- ================================================= -->

    <b-form-group label="jenis">
      <b-form-input v-model="form.jenis" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <!-- ================================================= -->
    <!-- =================================================== -->
    <b-form-group label="Lot">
      <b-form-input v-model="form.lot" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <!-- ================================================= -->

    <!-- =================================================== -->
    <b-form-group label="Produsen">
      <b-form-input v-model="form.produsen" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <!-- ================================================= -->
    <!-- =================================================== -->
    <b-form-group label="alamat">
      <b-form-input v-model="form.alamatProdusen" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <!-- ================================================= -->
    <!-- =================================================== -->

    <b-form-group label="Tujuan">
      <b-form-input v-model="form.tujuan" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <b-form-group label="alamat">
      <b-form-input v-model="form.alamatTujuan" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <!-- ================================================= -->
    <!-- =================================================== -->
    <b-form-group label="Volume">
      <b-form-input v-model="form.volume" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <!-- ================================================= -->
    <!-- =================================================== -->
    <b-form-group label="Label">
      <b-form-input v-model="form.label" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <!-- ================================================= -->
    <!-- =================================================== -->
    <b-form-group label="Tanggal Produksi/Label">
      <input
        class="form-control"
        type="date"
        id="example-date-input"
        v-model="form.tanggalProduksi"
        required
      >
    </b-form-group>
    <!-- ================================================= -->
    <!-- =================================================== -->
    <b-form-group label="Tanggal Kedaluarsa">
      <input
        class="form-control"
        type="date"
        id="example-date-input"
        v-model="form.tanggalExp"
        required
      >
    </b-form-group>
    <!-- ================================================= -->
    <!-- =================================================== -->
    <b-form-group label="Instansi yang mengeluarkan">
      <b-form-input v-model="form.instansi" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <button type="button" class="btn btn-warning" v-on:click="add( )">add Product</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        noInduk: "",
        tahunProduksi: "",
        jenis: "",
        lot: "",
        produsen: "",
        alamatTujuan: "",
        alamatProdusen: "",
        tujuan: "",
        volume: "",

        label: "",
        tanggalProduksi: "",
        tanggalExp: "",
        instansi: ""
      }
    };
  },
  methods: {
    add() {
      // console.log('okoko')

      this.$api
        .post("http://localhost:3000" + "/product/add", this.form)
        .then(({ data }) => {
          this.$swal({
            title: `Success!`,
            text: ` your product added `,
            type: "success",
            showConfirmButton: false,
            timer: 1500
          });
          this.$router.push("/stock");
          this.onReset();
        })
        .catch(({ response }) => {
          this.$swal({
            title: `Opps!`,
            text: `${response.data.message}`,
            type: "error",
            timer: 2500
          });
        });
    }
  }
};
</script>

<style scoped>
.form {
  margin: 50px;
  /* padding: 50px; */
}
</style>
