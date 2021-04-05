<template>
<div>
      <router-view></router-view>
        <v-nav></v-nav>
    </div>
</template>
<script>
import vNav from "../views/Nav";
export default {
  components: {
    vNav
  }
};
</script>

<style scoped>
.box{
    height: 5rem;
}
.top {
  width: 100%;
  height: 5.2rem;
  background: red;
  position: relative;
}
.main-top {
  width: 5.17rem;
  height: 0.6rem;
  background: #ffffff;
  position: absolute;
  border-radius: 5px 5px;
  margin-left: 0.62rem;
  margin-top: 0.63rem;
  opacity: 0.7;
}
input {
  position: absolute;
  float: left;
  border: none;
  outline: 0;
  margin-left: 0.3rem;
  margin-top: 0.14rem;
}
.tu1 {
  position: absolute;
  float: right;
  margin-left: 229px;
  width: 0.39rem;
  height: 0.39rem;
  margin-top: 0.1rem;
}
</style>
