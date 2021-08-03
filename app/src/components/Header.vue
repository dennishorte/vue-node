<template>
<div class="header">
  Vue.js With NodeJS
  <b-dropdown id="header-dropdown" text="menu">
    <b-dropdown-item>logout</b-dropdown-item>
  </b-dropdown>
</div>
</template>

<script>

export default {
  name: 'Header',
  data() {
    return {
      menuItems: [
        {
          text: 'test',
          link: '#',
        },
        {
          text: 'link 2',
          link: '#',
        },
      ],
    }
  }
}
</script>
