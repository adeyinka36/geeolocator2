<template>
    <div class="container">
      <h1>Please enter a Postcode below</h1>
      <input id="postcode" v-model="postcode"/>
      <button @click="geocoder">SEARCH</button>
    </div>
  <div class="map-div">
  <GoogleMap
      id="map"
      api-key="AIzaSyA2JSIHNlUQIS6lZYBZcyvz7sxegRHLr3s"
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 90%; height: 75vh"
>
    <Marker :options= "{position:center}"/>
  </GoogleMap>
  </div>
</template>

<script>
import axios from 'axios';
import { GoogleMap, Marker  } from 'vue3-google-map';

export default {
  data: () =>{
    return {
      postcode: null,
      center: {lat: 51.093048, lng: 6.842120},
      markers: [
        {
          position: {
            lat: 51.093048, lng: 6.842120
          },
        }
      ],
      mapId: null,
    }
  },
  created() {
      this.mapId = document.getElementById('map');
  },
  methods: {
    geocoder() {
      axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.postcode}&key=AIzaSyA8DwLkDo-ZqT5h7nsq2MaZPQAvJbv48vY`)
      .then(res=> this.center = res.data.results[0].geometry.location)
      window.scrollIntoView(this.mapId)
    }
  },
  components:{
      GoogleMap,
      Marker
  }
}
</script>

<style lang="scss" scoped>
  .container{
    padding-top: 1rem;
    font-family: Arial;
    background-color: #808080;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
      margin-bottom: 2.5rem;
      color: white;
    }
    input{
      margin-bottom: 1rem;
      width: 200px;
      font-size: 2rem;
      padding: .5rem;
      text-align: center;
    }
    button{
      width: 200px;
      font-size: 2rem;
      padding: 1rem;
      background-color: #808080;
      color: white;
      &:hover{
        cursor: pointer;
        background-color: darkgray;
      }
    }
  }
  .map-div {
    width : 100vw;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 100vh;
    background-color: #808080;
    padding-top: 1rem;
  }
</style>