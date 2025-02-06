<template>
    <NavBar/>
    <br>
    <h2 Align="center">Update Attendances</h2>
    <AttendanceCalender/>



</template>
<script>
import AttendanceCalender from '@/components/AttendanceCalender.vue';
import NavBar from '@/components/NavBar.vue';

export default{
    components: {
        NavBar,
        AttendanceCalender
    }
}

</script>