<template>
  <section>
    <!-- First example -->
    <div class="example-wrapper">
      <h2 class="example-title">Standart Mode</h2>
      <p class="example-description">Allows multiple sections to be open at once</p>
      <First-Example :list="list"/>
    </div>

    <!-- Second example -->
    <div class="example-wrapper">
      <h2 class="example-title">Single Mode</h2>
      <p class="example-description">Only one element can be active at a time</p>
      <Second-Example :list="list"/>
    </div>

    <!-- Third example -->
    <div class="example-wrapper">
      <h2 class="example-title">Open by default</h2>
      <p class="example-description">The specified number of items will be opened by default</p>
      <Third-Example :list="list"/>
    </div>
  </section>
</template>

<script>
import FirstExample from "./components/FirstExample.vue";
import SecondExample from "./components/SecondExample.vue";
import ThirdExample from "./components/ThirdExample.vue";

export default {
  name: "PureAccordion",
  components: {
    FirstExample, SecondExample, ThirdExample,
  },

  data() {
    return {
      list: [
        {
          id: 1,
          title: "List",
          list: [
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            "Laborum dolorum possimus accusamus incidunt.",
            "Animi, quod. Modi omnis iusto, quisquam ipsa deleniti",
            "esse dolor iste deserunt quis, possimus explicabo?",
          ],
        },
        {
          id: 2,
          title: "Text",
          parph: "Lorem ipsum dolor. possimus accusamus incidunt. Animi, quod. Modi omnis iusto, quisquam ipsa deleniti esse dolor iste deserunt quis, possimus explicabo?",
        },
        {
          id: 3,
          title: "Image",
          src: "https://picsum.photos/300/200",
          subtitle: "Lorem ipsum dolor. possimus accusamus incidunt.",
        },
      ],
    };
  },
};
</script>

<style>
.example-wrapper {
  width: 80%;
  max-width: 1000px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
}

.example-wrapper:not(:last-of-type) {
  margin-bottom: 60px;
}

.example-title {
  margin: 0;
}

.example-description {
  margin-top: 10px;
  margin-bottom: 20px;
  color: gray;
}

@media (min-width: 769px) {
  .example-title {
    font: bold 26px "Roboto";
  }
  .example-description {
    font: normal 22px "Roboto";
  }
}

@media (max-width: 768px) {
  .example-title {
    font: bold 22px "Roboto";
  }
  .example-description {
    font: normal 16px "Roboto";
  }
}
</style>
