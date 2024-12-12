<template>
  <nav class="navbar">
    <div class="container-fluid">
      <!-- Logo and Title -->
      <div class="navbar-brand d-flex align-items-center">
        <img src="../assets/tech-solution-logo.jpg" alt="Logo" class="logo" />
        <h1 class="title">Modern Tech</h1>
      </div>

      <!-- Search and Logout -->
      <div class="d-flex align-items-center">
        <form class="d-flex search-form me-3">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-light search-btn" type="submit">
            Search
          </button>
        </form>
        <button class="btn btn-secondary logout-btn" @click="logout">
          Logout
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      if (confirm("Are you sure you want to log out?")) {
        alert("Logged out");
      }
    },
  },
};
</script>

<style scoped>
/* Navbar Styling */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: rgb(41, 152, 41);
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
}
/* Title Styling */
.title {
  font-size: 20px;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* 3D Effect */
  color: black;
  margin-left: 10px;
}

/* Logo Styling */
.logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

/* Search Form Styling */
.search-form {
  display: flex;
  align-items: center;
}

.search-btn {
  transition: background-color 0.3s ease;
  color: black;
}

.search-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* Logout Button */
.logout-btn {
  transition: transform 0.3s ease;
  color: black;
}
.logout-btn:hover {
  transform: scale(1.1);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
.navbar {
    flex-direction: column;
  }

.search-form {
    margin-bottom: 10px;
  }
}
</style>
