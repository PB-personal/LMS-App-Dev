<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Product</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Contact Us</a>
          </li>
        </ul>
        <ul class="d-flex navbar-nav">
          <li class="nav-link">Welcome</li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-laptop"></i>
            </a>
            <ul class="dropdown-menu">
              <li>
                <button class="dropdown-item"><i class="bi bi-sun"></i> &nbsp; Light</button>
              </li>
              <li>
                <button class="dropdown-item">
                  <i class="bi bi-moon-stars-fill"></i> &nbsp; Dark
                </button>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'login' }" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link">Sign Up</a>
          </li>
          <li class="nav-item">
            <button class="nav-link">Sign Out</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'AppHeader',
}
</script>
