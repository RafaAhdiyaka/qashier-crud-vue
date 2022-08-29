<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>TAMBAH KATEGORI</h4>
                        <hr>

                        <form @submit.prevent="store">
                            <div class="form-group">
                                <label for="category" class="font-weight-bold">NAMA KATEGORI</label>
                                <input type="text" class="form-control" v-model="category.kategori" placeholder="Masukkan Nama Kategori">
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
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
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

        //method store
        function store() {

            let kategori = category.kategori

            axios.post('http://127.0.0.1:8000/api/categories', {
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
            store
        }

    }

}
</script>

<style>
    body{
        background: lightgray;
    }
</style>