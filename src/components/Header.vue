<template>
  <header class="filds_hdr">
    <nav class="navbar navbar-default">
      <div class="container">
      <!-- logo start -->
        <div class="navbar-header">
        <span class="togle_icon" id="menu" onclick="toggleMenu()"><img src="../assets/img/toggle_icon.png"> </span>
          <a class="navbar-brand brnd_logo" href="#"><img src="../assets/img/logo.png" /></a>
        </div>
        <!-- logo end -->
        <!-- page title start -->
        <h3 class="pag_title">Town of Flower Mound - Fields Manager</h3>
        <!-- page title end -->
        <!-- profile dropdown start -->
        <div class="dropdown prf_drp">
          <button class="btn btn-default dropdown-toggle prf_drp_btn" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <i>J</i>
        <!-- <span class="caret"></span> -->
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><a href="#">Option One</a></li>
            <li><a href="#">Option Two</a></li>
            <li><a href="#">Option Three</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </div>
    <!-- profile dropdown end -->
      </div>
    </nav>
  </header>
</template>

<script>

export default {
  name: 'Header',
  // props: ['titlename'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
