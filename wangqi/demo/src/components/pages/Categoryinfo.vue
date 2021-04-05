<template>
<div>
<el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item><a href="/#/index/category">商品管理</a></el-breadcrumb-item>
  <el-breadcrumb-item>商品{{tip}}</el-breadcrumb-item>
  
</el-breadcrumb>

  <el-form ref="form" :model="form.cate" label-width="80px">
  <el-form-item label="所属分类">
  <el-select v-model="form.cate" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item._id"
      :label="item.title"
      :value="item.title">
    </el-option>
  </el-select>
  </el-form-item>
  <el-form-item label="商品名称">
    <el-input  v-model="form.title"></el-input>
</el-form-item>
  <el-form-item label="商品价格">
    <el-input  v-model="form.price"></el-input>
</el-form-item>

  <el-form-item label="商品图片" >
    <input type="file" ref="file">
</el-form-item>
  <el-form-item label="商品描述">
      <div ref="editorElem" style="text-align:left;"></div>
</el-form-item>

<el-form-item label="状态">
    <el-switch  v-model="form.status"  active-color="#13ce66" inactive-color="#ff4949"></el-switch>
</el-form-item>

  <el-form-item>
    <el-button type="primary" @click="onSubmit">提交</el-button>
  </el-form-item>
</el-form>
</div>
</template>
<script>
// import qs from "qs";
import E from "wangeditor";
export default {
  data() {
    return {
      // value:true,
      form: {
        title: "",
        cate: "",
        price: "",
        desc: "",
        status: "true"
      },
      tip: "添加",
      options: [],
        editor: null,
    };
  },
  methods: {

    onSubmit() {
      //  验证密码:
      // if (this.form.title == "") {
      //   this.swal("请填写用户名和密码");
      //   return;
      // }
      // 添加
      var url = "/api/goodsadd";
      if (this.$route.params.userid) {
        // 删除
        url = "/api/goodsedit";
        this.form.id = this.$route.params.userid;
      }
     
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
        data: d
      }).then(result => {
        this.swal(result.data.info).then(() => {
          this.$router.push("/index/category");
        });
      });
    }
  },
 
  mounted(){
     this.editor = new E(this.$refs.editorElem);
       this.editor.customConfig.onchange = html => {
      this.form.desc = html;
      this.catchData(this.form.desc); // 把这个html通过catchData的方法传入父组件
    };
     this.editor.customConfig.menus = [
      // 菜单配置
      'head', // 标题
      'bold', // 粗体
      'fontSize', // 字号
      'fontName', // 字体
      'italic', // 斜体
      'underline', // 下划线
      'strikeThrough', // 删除线
      'foreColor', // 文字颜色
      'backColor', // 背景颜色
      'link', // 插入链接
      'list', // 列表
      'justify', // 对齐方式
      'quote', // 引用
      'emoticon', // 表情
      'image', // 插入图片
      'table', // 表格
      'code', // 插入代码
      'undo', // 撤销
      'redo' // 重复
    ];
    this.editor.create(); // 创建富文本实例
    this.http({
      url:'/api/catelist'
    }).then(result=>{
      this.options=result.data.data
    })
    if(this.$route.params.userid){
      // 修改就先要获取
     this.tip="修改"
     this.http({
       url:'/api/goodsinfo',
       params:{
         id:this.$route.params.userid
       }
     }).then(result=>{
       console.log(result)
  //  this.form.username= result.data.data.username
      this.form.cate = result.data.data.cate,
      this.form.title = result.data.data.title,
      this.form.price = result.data.data.price,
      this.form. desc = result.data.data. desc,
      this.form.status = result.data.data.status
      this.editor.text.html(this.form.desc)
     })
    }
  }
};
</script>

<style scoped>
.el-breadcrumb {
  margin-bottom: 20px;
}
</style>

