<template>
<div>
<el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item><a href="/#/index/setting">分类管理</a></el-breadcrumb-item>
  <el-breadcrumb-item>轮播图{{tip}}</el-breadcrumb-item>
  
</el-breadcrumb>

  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="标题">
    <el-input v-model="form.title"></el-input>
  </el-form-item>
  <el-form-item label="商品图片" >
    <input type="file" ref="file">
</el-form-item>
  <el-form-item>
    <el-button type="primary" @click ="onSubmit">提交</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      // value:true,
      form: {
        title: "",
      },
      tip: "添加"
    };
  },
  methods: {
    onSubmit() {
      var url = "/api/banneradd";
    //   if (this.$route.params.userid) {
    //     url = "/api/bannerinfo";
    //     this.form.id = this.$route.params.userid;
    //   }
      var img = this.$refs.file.files[0];
      var d = new FormData();
      for (let i in this.form) {
        d.append(i, this.form[i]);
      }
      if (img) {
        d.append("img", img);
      }

      this.http({
        url,
        method: "post",
        data: this.form
      }).then(result => {
        this.swal(result.data.info).then(() => {
            console.log(result)
        //   this.$router.push("/index/lunbotu");
        });
      });
    }
  },

  mounted() {
    this.http({
      url: "api/catelist"
    }).then(result => {
      this.options = result.data.data;
    });
    if (this.$route.params.userid) {
      this.tip = "修改";
      this.http({
        method: "post",
        url: "/api/cateedit",
        params: {
          id: this.$route.params.userid
        }
      }).then(result => {
        this.form = result.data.data[0];
      });
    }
  }
};
</script>

<style scoped>
.el-breadcrumb {
  margin-bottom: 20px;
}
</style>
