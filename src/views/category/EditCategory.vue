<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>EDIT KATEGORI</h4>
                        <hr>

                        <form @submit.prevent="update">
                            <div class="form-group">
                                <label for="category" class="font-weight-bold">NAMA KATEGORI</label>
                                <input type="text" class="form-control" v-model="category.kategori" placeholder="Masukkan Judul Kategori">
                                <!-- validation -->
                                <div v-if="validation.kategori" class="mt-2 alert alert-danger">
                                    {{ validation.kategori[0] }}
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">SIMPAN</button>
                        </form>                        

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'

export default {

    setup() {

        //state posts
        const category = reactive({
            kategori: '',
        })

        //state validation
        const validation = ref([])

        //vue router
        const router = useRouter()

        //vue router
        const route = useRoute()

        //mounted
        onMounted(() => {

            //get API from Laravel Backend
            axios.get(`http://127.0.0.1:8000/api/categories/${route.params.id}`)
            .then(response => {
              
              //assign state posts with response data
              category.kategori    = response.data.data.kategori  

            }).catch(error => {
                console.log(error.response.data)
            })

        })

        //method update
        function update() {

            let kategori = category.kategori

            axios.put(`http://127.0.0.1:8000/api/categories/${route.params.id}`, {
                kategori: kategori,
            }).then(() => {

                //redirect ke post index
                router.push({
                    name: 'category.index'
                })

            }).catch(error => {
                //assign state validation with error 
                validation.value = error.response.data
            })

        }

        //return
        return {
            category,
            validation,
            router,
            update
        }

    }

}
</script>

<style>
    body{
        background: lightgray;
    }
</style>