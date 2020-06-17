<template>
  <footer class="bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-3 col-sm-6">
          <ul class="list-unstyled list">
            <li>
              <a href="#" class="text-light">Privacy & Policy</a>
            </li>
            <li>
              <a href="#" class="text-light">Help</a>
            </li>
            <li>
              <a href="#" class="text-light">FAQs</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3"></div>
        <div class="col-lg-3 col-sm-6">
          <ul class="list-unstyled list">
            <li>
              <a href="#" class="text-light">Help</a>
            </li>
            <li>
              <a href="#" class="text-light">FAQs</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="container">
          <p class="text-center text-white">copywrite &copy; create by Horllymobile {{ getYear() }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data: function() {
    return {
      date: null
    };
  },
  methods: {
    getYear() {
      let now = new Date();

      this.date = now.getFullYear();

      return this.date;
    }
  }
};
</script>
