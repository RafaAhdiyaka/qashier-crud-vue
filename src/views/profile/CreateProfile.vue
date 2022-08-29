<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>TAMBAH PROFILE</h4>
                        <hr>

                        <form @submit.prevent="store">
                            <div class="form-group">
                                <label for="profile" class="font-weight-bold">Nama Restoran</label>
                                <input type="text" class="form-control" v-model="profile.nama_resto" placeholder="Masukkan Nama Resto">
                                <!-- <input type="text" class="form-control" v-model="profile.alamat_resto" placeholder="Masukkan Alamat Resto">
                                <input type="number" class="form-control" v-model="profile.nomor_telepon" placeholder="Masukkan Nomor Telepon">
                                <input type="email" class="form-control" v-model="profile.email_resto" placeholder="Masukkan Email Resto"> -->
                                <!-- validation -->
                                <div v-if="validation.nama_resto" class="mt-2 alert alert-danger">
                                    {{ validation.nama_resto[0] }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="profile" class="font-weight-bold">Alamat Restoran</label>
                                <!-- <input type="text" class="form-control" v-model="profile.nama_resto" placeholder="Masukkan Nama Resto"> -->
                                 <input type="text" class="form-control" v-model="profile.alamat_resto" placeholder="Masukkan Alamat Resto">
                                <!-- <input type="number" class="form-control" v-model="profile.nomor_telepon" placeholder="Masukkan Nomor Telepon">
                                <input type="email" class="form-control" v-model="profile.email_resto" placeholder="Masukkan Email Resto"> --> 
                                <!-- validation -->
                                <div v-if="validation.alamat_resto" class="mt-2 alert alert-danger">
                                    {{ validation.alamat_resto[0] }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="profile" class="font-weight-bold">Nomor Telepon</label>
                                <!-- <input type="text" class="form-control" v-model="profile.nama_resto" placeholder="Masukkan Nama Resto"> -->
                                <!-- <input type="text" class="form-control" v-model="profile.alamat_resto" placeholder="Masukkan Alamat Resto">
                                 -->
                                 <input type="number" class="form-control" v-model="profile.nomor_telepon" placeholder="Masukkan Nomor Telepon">
                                <!-- validation -->
                                <div v-if="validation.nomor_telepon" class="mt-2 alert alert-danger">
                                    {{ validation.nomor_telepon[0] }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="profile" class="font-weight-bold">Email Restoran</label>
                                <!-- <input type="text" class="form-control" v-model="profile.nama_resto" placeholder="Masukkan Nama Resto"> -->
                                <!-- <input type="text" class="form-control" v-model="profile.alamat_resto" placeholder="Masukkan Alamat Resto">
                                <input type="number" class="form-control" v-model="profile.nomor_telepon" placeholder="Masukkan Nomor Telepon"> -->
                                <input type="email" class="form-control" v-model="profile.email_resto" placeholder="Masukkan Email Resto"> 
                                <!-- validation -->
                                <div v-if="validation.email_resto" class="mt-2 alert alert-danger">
                                    {{ validation.email_resto[0] }}
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
        const profile = reactive({
            nama_resto: '',
            alamat_resto: '',
            nomor_telepon: '',
            email_resto: '',
        })

        //state validation
        const validation = ref([])

        //vue router
        const router = useRouter()

        //method store
        function store() {

            let nama_resto = profile.nama_resto
            let alamat_resto = profile.alamat_resto
            let nomor_telepon = profile.nomor_telepon
            let email_resto = profile.email_resto

            axios.post('http://127.0.0.1:8000/api/profile-restaurants', {
                nama_resto: nama_resto,
                alamat_resto: alamat_resto,
                nomor_telepon: nomor_telepon,
                email_resto: email_resto,
            }).then(() => {

                //redirect ke post index
                router.push({
                    name: 'profile.index'
                })

            }).catch(error => {
                //assign state validation with error 
                validation.value = error.response.data
            })

        }

        //return
        return {
            profile,
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