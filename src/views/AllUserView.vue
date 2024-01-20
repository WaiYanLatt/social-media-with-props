<script>
import UserCardView from '@/components/UserCardView.vue'
export default {
    props: {
        users: {
            type: Array,
            required: true,
        }
    },
    components: {
        UserCardView,
    },
}
</script>

<template>
    <div class="container mx-auto lg:px-28">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <UserCardView v-for="user in users" :key="user.id" :user="user"></UserCardView>
        </div>
    </div>
</template>