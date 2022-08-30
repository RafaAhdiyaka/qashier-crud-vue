<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>Tambah Menu</h4>
                        <hr>

                        <form @submit.prevent="store">
                            <div class="form-group">
                                <label for="category" class="font-weight-bold">Nama Menu</label>
                                <input type="text" class="form-control" v-model="menu.nama_menu" placeholder="Masukkan Nama Menu">
                                <!-- validation -->
                                <div v-if="validation.nama_menu" class="mt-2 alert alert-danger">
                                    {{ validation.nama_menu[0] }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="category" class="font-weight-bold">Deskripsi</label>
                                <input type="text" class="form-control" v-model="menu.deskripsi" placeholder="Masukkan Deskripsi">
                                <!-- validation -->
                                <div v-if="validation.deskripsi" class="mt-2 alert alert-danger">
                                    {{ validation.deskripsi[0] }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="category" class="font-weight-bold">Harga</label>
                                <input type="text" class="form-control" v-model="menu.harga" placeholder="Masukkan Harga">
                                <!-- validation -->
                                <div v-if="validation.harga" class="mt-2 alert alert-danger">
                                    {{ validation.harga[0] }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="category" class="font-weight-bold">Kategori</label>
                                <input type="text" class="form-control" v-model="menu.kategori_id" placeholder="Masukkan Kategori">
                                <!-- validation -->
                                <div v-if="validation.kategori_id" class="mt-2 alert alert-danger">
                                    {{ validation.kategori_id[0] }}
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
        const menu = reactive({
            nama_menu: '',
            deskripsi: '',
            harga: '',
            kategori_id: '',
        })

        //state validation
        const validation = ref([])

        //vue router
        const router = useRouter()

        //method store
        function store() {

            let nama_menu = menu.nama_menu
            let deskripsi = menu.deskripsi
            let harga = menu.harga
            let kategori_id = menu.kategori_id

            axios.post('http://127.0.0.1:8000/api/menus', {
                nama_menu: nama_menu,
                deskripsi: deskripsi,
                harga: harga,
                kategori_id: kategori_id,
            }).then(() => {

                //redirect ke post index
                router.push({
                    name: 'menu.index'
                })

            }).catch(error => {
                //assign state validation with error 
                validation.value = error.response.data
            })

        }
        //return
        return {
            menu,
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