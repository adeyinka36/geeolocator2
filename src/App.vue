<template>
    <div class="container">
      <h1>Please enter a Postcode</h1>
      <input id="postcode"/>
      <button @click="geocoder">Submit</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    console.log("started")
  },
  methods: {
    geocoder() {
      axios.post('https://maps.googleapis.com/maps/api/geocode/json?address=mk429jz&key=AIzaSyA8DwLkDo-ZqT5h7nsq2MaZPQAvJbv48vY')
      .then(res=>console.log(res))
    }
  }
}
</script>

<style lang="scss" scoped>
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
      margin-bottom: 2.5rem;
    }
    input{
      margin-bottom: 1rem;
    }
    button{
      &:hover{
        cursor: pointer;
        background-color: darkgray;
      }
    }
  }
</style>