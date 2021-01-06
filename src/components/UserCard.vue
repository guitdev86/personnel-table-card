<template>
    <div class="card">
        <div class="background"></div>
        <div class="slider">
            <div class="title">
                <h2>{{getCurrentUser.name}}</h2>
                <h2><i class="fas fa-arrow-up"></i></h2>
            </div>
            <div class="details">
                <table>
                    <tr>
                        <td><i class="fas fa-phone-alt"></i></td>
                        <td>{{getCurrentUser.phone}}</td>
                    </tr>
                    <tr>
                        <td><i class="fas fa-envelope"></i></td>
                        <td id="email">{{getCurrentUser.email}}</td>
                    </tr>
                    <tr>
                        <td><i class="fas fa-map-pin"></i></td>
                        <td>{{getCurrentUser.address.street}} {{getCurrentUser.address.suite}} {{getCurrentUser.address.city}} {{getCurrentUser.address.zipcode}}</td>
                    </tr>
                    <tr>
                        <td><i class="fab fa-chrome"></i></td>
                        <td>{{getCurrentUser.website}}</td>
                    </tr>
                    <tr>
                        <td><i class="fas fa-building"></i></td>
                        <td>{{getCurrentUser.company.name}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "UserCard",
    computed: mapGetters(["getCurrentUser"])
}
</script>

<style scoped>

.card {
    background-image: url('../assets/work.jpg');
    position: relative;
    overflow: hidden;
    margin: 20px;
    border-radius: 20px;
    width: 300px;
    height: 450px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
}

.background {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.1;
    transition-duration: 0.8s;
    transition-timing-function: ease;
}

.card:hover .background {
    opacity: 0.6;
}

.slider {
    background-color: white;
    width: 100%;
    z-index: 2;
    position: absolute;
    bottom: 0;
    display: flex;
    transform: translateY(210px);
    flex-direction: column;
    align-items: flex-start;
    transition-duration: 0.8s;
    transition-timing-function: ease-in-out;
    padding-bottom: 20px;
    border-radius: 20px;
}

.card:hover .slider {
    transform: translateY(0px);
}

.details, h2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 20px;
    cursor: default;
}

h2 {
    font-family: 'Fjalla One', sans-serif;
    padding-bottom: 30px;
}

.details {
    font-family: 'Archivo', sans-serif;
}

td {
    text-align: left;
    padding: 0px 30px 10px 0px; 
}

.title {
    width: 90%;
    display: flex;
    justify-content: space-between;
}

#email {
    text-transform: lowercase;
}


</style>