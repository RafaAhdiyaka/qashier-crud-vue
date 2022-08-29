<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>DATA PROFILE</h4>
                        <hr>
                        <router-link :to="{name: 'profile.create'}" class="btn btn-md btn-success">TAMBAH PROFILE
                        </router-link>

                        <table class="table table-striped table-bordered mt-4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">NAMA RESTO</th>
                                    <th scope="col">ALAMAT RESTO</th>
                                    <th scope="col">NOMOR TELEPON</th>
                                    <th scope="col">EMAIL RESTO</th>
                                    <th scope="col">OPTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(profile, index) in profiles" :key="index">
                                    <td>{{ profile.nama_resto }}</td>
                                    <td>{{ profile.alamat_resto }}</td>
                                    <td>{{ profile.nomor_telepon }}</td>
                                    <td>{{ profile.email_resto }}</td>
                                    <td class="text-center">
                                        <router-link :to="{name: 'profile.edit', params:{id: profile.id }}"
                                            class="btn btn-sm btn-primary mr-1">EDIT</router-link>
                                        <button @click.prevent="profileDelete(profile.id)" class="btn btn-sm btn-danger ml-1">DELETE</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import {
        onMounted,
        ref
    } from 'vue'

    export default {

        setup() {

            //reactive state
            let profiles = ref([])

            //mounted
            onMounted(() => {

                //get API from Laravel Backend
                axios.get('http://127.0.0.1:8000/api/profile-restaurants')
                    .then(response => {

                        //assign state posts with response data
                        profiles.value = response.data.data

                    }).catch(error => {
                        console.log(error.response.data)
                    })

            })

            //method delete
            function profileDelete(id) {

                //delete data post by ID
                axios.delete(`http://127.0.0.1:8000/api/profile-restaurants/${id}`)
                    .then(() => {

                        //splice posts 
                        profiles.value.splice(profiles.value.indexOf(id), 1);

                    }).catch(error => {
                        console.log(error.response.data)
                    })

            }

            //return
            return {
                profiles,
                profileDelete
            }

        }

    }
</script>

<style>
    body {
        background: lightgray;
    }
</style>