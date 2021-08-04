<template>
<div class="header">
  Vue Auth Skeleton
  <b-dropdown id="header-dropdown" text="menu">
    <b-dropdown-item>
      <router-link to="/logout">logout</router-link>
    </b-dropdown-item>
  </b-dropdown>
</div>
</template>

<script>

export default {
  name: 'Header',
}
</script>
