// This is the card structure from Bootstrap
<template>
  <div class="row g-3"></div>
  <div class="col-md-4">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">{{ employee.name }}</h5>
      </div>
      <div class="card-body">
        <img
          :src="employee.image"
          class="card-img-top"
          alt="Image of {{ employee.name }}"
        />
        <p class="card-text">{{ employee.position }}</p>
        <p class="card-text">
          <small class="text-muted">{{ employee.department }}</small>
        </p>
        <button
          @click="openModal"
          class="btn btn-primary"
        >
          Show More
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    employee: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openModal() {
      // Emit an event to open the modal with the employee's information
      this.$emit('showModal', this.employee);
    },
  },
};
</script>
<style >
/* Card Styling */
.card {
  width: 350px;
  height: 270px;
  text-align: center;
  box-shadow: 0p x4px 15px rgba(0, 0, 0, 0.1) ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  /* border: 1px solid blue; */
  font-family: 'Times New Roman', Times, serif;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: box-shadow 0.3s ease;

}
.col-md-4 {
 display: flex;
 margin-bottom: 20px;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
}
.card-img-top {
  height: px; 
  width: 100px;
  border-radius: 50%;
  margin-bottom: 0px;
  object-fit: cover;
  
}
/* Text Styling */
.card-title {
  font-size: 20px;
  font-weight: bold;
}
.card-text small {
  display: block;
  margin-top: 5px;
}
/* Button Styling */
.btn-primary {
  margin-top: 8px;
  position: relative;
  z-index: 0;
  color: white;
  background-color: blue;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.btn-primary:hover {
  background-color: black;
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
.btn-primary:active {
  transform: scale(0.95);
}
</style>