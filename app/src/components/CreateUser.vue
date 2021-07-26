<template>
<div class="container">
  <div class="row">
    <div class="col-md-7 mrgnbtm">
      <h2>Create User</h2>
      <form>
        <div class="row">
          <div class="form-group col-md-6">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input type="text" class="form-control" v-model="name" name="name" id="name" placeholder="Name" />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-12">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input type="text" class="form-control" v-model="email" name="email" id="email" placeholder="Email" />
          </div>
        </div>
        <button type="button" @click='createUser()' class="btn btn-danger">Create</button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CreateUser',
  data() {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    createUser() {
      const payload = {
        name: this.name,
        email: this.email
      }
      this.$emit('createUser', payload)
      this.clearForm();
    },
    clearForm() {
      this.name = "";
      this.email = "";
    }
  }
}
</script>
