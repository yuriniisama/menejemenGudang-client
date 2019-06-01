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
    <button type="button" class="btn btn-warning" v-on:click="save( )">save</button>
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
    loadData() {
      // var id = localStorage.getItem("tg");
      var id = this.$route.params.id;

      // console.log(id);
      this.$api
        .get("http://localhost:3000" + `/product/edit/${id}`)
        .then(({ data }) => {
          console.log(data[0]);
          this.form.noInduk = data[0].noInduk;
          this.form.tahunProduksi = data[0].tahunProduksi;
          this.form.jenis = data[0].jenis;
          this.form.lot = data[0].lot;
          this.form.tujuan = data[0].tujuan;
          this.form.produsen = data[0].produsen;
          this.form.alamatTujuan = data[0].alamatTujuan;
          this.form.alamatProdusen = data[0].alamatProdusen;
          this.form.volume = data[0].volume;
          this.form.label = data[0].label;
          this.form.tanggalProduksi = data[0].tanggalProduksi;
          this.form.tanggalExp = data[0].tanggalExp;
          this.form.instansi = data[0].instansi;
        })
        .catch(({ response }) => {
          this.$swal({
            title: `Opps!`,
            text: `${response.data.message}`,
            type: "error",
            timer: 2500
          });
        });
    },
    clear() {
      this.form.noInduk = "";
      this.form.tahunProduksi = "";
      this.form.jenis = "";
      this.form.lot = "";
      this.form.tujuan = "";
      this.form.produsen = "";
      this.form.alamatTujuan = "";
      this.form.alamatProdusen = "";
      this.form.volume = "";
      this.form.label = "";
      this.form.tanggalProduksi = "";
      this.form.tanggalExp = "";
      this.form.instansi = "";
    },
    save() {
      var id = this.$route.params.id;
      console.log(id);
      this.$api
        .post("http://localhost:3000" + `/product/edit/${id}`, this.form)
        .then(({ data }) => {
          // console.log(data[0]);
          this.clear();
          this.$router.push("/stock");
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
  },
  mounted() {
    this.loadData();
  }
};
</script>

<style scoped>
.form {
  margin: 50px;
  /* padding: 50px; */
}
</style>
