<template>
  <div class="users-table">
    <users-table></users-table>
  </div>
</template>

<script>
// @ is an alias to /src

import UsersTable from "../components/UsersTable.vue";

export default {
  name: "Users",
  components: {
    UsersTable
  }
};
</script>
