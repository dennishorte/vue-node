<template>
<div class="container">
  <h2>Users</h2>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>User Id</th>
        <th>Name</th>
        <th>Slack</th>
        <th>Token</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in users" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.slack }}</td>
        <td>{{ item.token }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: 'Users',
  props: ['users']
}
</script>
