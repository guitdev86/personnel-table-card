<template>
    <table>
        <thead>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Company Name</td>
        </thead>
        <tbody>
            <tr v-for="user in this.getUsers" :key=user.id @click="commitUser(user)">
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td>{{user.phone}}</td>
                <td>{{user.company.name}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "UsersTable",
    computed: mapGetters(["getUsers"]),
    methods: {
        ...mapActions(["fetchUsers"]),
        commitUser(user) {
            this.$store.commit('setCurrentUser', user);
            this.$router.push('user');
        }
    },
    created() {
        this.fetchUsers();
    }
}
</script>

<style scoped>

    table {
        overflow: hidden;
        border-radius: 25px;
        border-collapse: collapse;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    thead {
        cursor: default;
        box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
    }

    tbody td:nth-child(1) {
        font-weight: 600;
    }

    tbody td:nth-child(2) {
        text-transform: lowercase;
    }

    thead td {
        font-family: 'Archivo', sans-serif;
        padding: 25px;
        font-weight: bold;
        background-color: #1d485e;
        color: white;
    }

    tr:hover {
        cursor: pointer;
        background-color: #cdd8dd; 
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    tr, td {
        text-align: left;
        padding: 25px;
        transition-duration: 0.3s;
        transition-timing-function: ease;
    }
</style>