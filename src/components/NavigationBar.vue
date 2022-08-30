<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Qashier</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#"><router-link :to="{name: 'category.index'}" class="text-decoration-none text-reset">Categories</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><router-link :to="{name: 'menu.index'}" class="text-decoration-none text-reset">Menus</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><router-link :to="{name: 'profile.index'}" class="text-decoration-none text-reset">Profile Restaurants</router-link></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'NavigationBar'
    }
</script>