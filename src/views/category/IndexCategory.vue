<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>DATA KATEGORI</h4>
                        <hr>
                        <router-link :to="{name: 'category.create'}" class="btn btn-md btn-success">TAMBAH KATEGORI
                        </router-link>

                        <table class="table table-striped table-bordered mt-4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">KATEGORI</th>
                                    <th scope="col">OPTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(category, index) in categories" :key="index">
                                    <td>{{ category.kategori }}</td>
                                    <td class="text-center">
                                        <router-link :to="{name: 'category.edit', params:{id: category.id }}"
                                            class="btn btn-sm btn-primary mr-1">EDIT</router-link>
                                        <button @click.prevent="categoryDelete(category.id)" class="btn btn-sm btn-danger ml-1">DELETE</button>
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
            let categories = ref([])

            //mounted
            onMounted(() => {

                //get API from Laravel Backend
                axios.get('http://127.0.0.1:8000/api/categories')
                    .then(response => {

                        //assign state posts with response data
                        categories.value = response.data.data

                    }).catch(error => {
                        console.log(error.response.data)
                    })

            })

            //method delete
            function categoryDelete(id) {

                //delete data post by ID
                axios.delete(`http://127.0.0.1:8000/api/categories/${id}`)
                    .then(() => {

                        //splice posts 
                        categories.value.splice(categories.value.indexOf(id), 1);

                    }).catch(error => {
                        console.log(error.response.data)
                    })

            }

            //return
            return {
                categories,
                categoryDelete
            }

        }

    }
</script>

<style>
    body {
        background: lightgray;
    }
</style>