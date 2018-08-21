<template>
  <div class="side_nav" id="menu-box">
    <ul>
      <li :class="{active : slots_tab}"><a href="/">
        <img class="nav_normal" src="../assets/img/forma_icon.png" />
        <img class="nav_active" src="../assets/img/forma_active_icon.png" />
        <span>Slots</span>
      </a></li>
      <li :class="{active : gounds_tab}"><router-link to="/grounds">
        <img class="nav_normal" src="../assets/img/nav_two_icon.png" />
        <img class="nav_active" src="../assets/img/nav_two_active_icon.png" />
        <span>Grounds</span>
      </router-link></li>
      <li :class="{active : admin_tab}"><router-link to="/admin">
        <img class="nav_normal" src="../assets/img/user_icon.png" />
        <img class="nav_active" src="../assets/img/user_active_icon.png" />
        <span>Admin</span>
      </router-link></li>
      <li :class="{active : parks_tab}"><router-link to="/parks">
        <img class="nav_normal" src="../assets/img/park_icon.png" />
        <img class="nav_active" src="../assets/img/park_active_icon.png" />
        <span>Parks List</span>
      </router-link></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Sidebar',
  // props: ['titlename'],
  data () {
    return {
      gounds_tab: false,
      parks_tab: false,
      admin_tab: false,
      slots_tab: false
    }
  },
  methods: {
    activeNavs () {
      let pathname = window.location.hash
      if (pathname === '#/grounds') {
        this.gounds_tab = true
      }
      if (pathname === '#/parks') {
        this.parks_tab = true
      }
      if (pathname === '#/admin') {
        this.admin_tab = true
      }
      if (pathname === '#/') {
        this.slots_tab = true
      }
    }
  },
  components: {
  },
  mounted () {
    this.activeNavs()
  }
}
</script>

<style scoped>
</style>
