<template>
  <accordion class="example" name="example">

    <accordion-item
      class="example__item"
      v-for="item in list" :key="item.id"
    >
      <template #accordion-title>
        <h4 class="example__title"> {{ item.title }} </h4>
      </template>
      <template #accordion-icon>
        <span class="example__icon"></span>
      </template>
      <template #accordion-content>
        <ul class="example__list" v-if="item.list">
          <li
            class="example__list-item"
            v-for="text in item.list" :key="text"
          >
            {{ text }}
          </li>
        </ul>

        <p
          class="example__text"
          v-else-if="item.parph"
        >
          {{ item.parph }}
        </p>

        <div
          class="example__image"
          v-else-if="item.src"
        >
          <img :src="item.src" :alt="item.subtitle">
          <span class="example__subtitle">{{ item.subtitle }}</span>
        </div>
      </template>
    </accordion-item>

  </accordion>
</template>

<script>
import Accordion from "./components/Accordion.vue";
import AccordionItem from "./components/AccordionItem.vue";

export default {
  name: "App",
  components: {
    Accordion, AccordionItem,
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
.example {
  list-style: none;
  padding: 0;
  margin: 0;
}

.example__item {
  padding: 15px 10px 15px 0;
  border-bottom: 1px solid #D2D8D6;
  transition: border-bottom .2s;
}
.example__item.active {
  border-bottom: 2px solid green
}
.example__item.active .example__title {
  color: green
}
.example__item.active .example__icon {
  opacity: 1;
}
.example__item.active .example__icon::after,
.example__item.active .example__icon::before {
  transform: rotate(90deg);
  transition: all 0.35s ease-in-out;
}
.example__item.active .example__icon::after {
  opacity: 0
}

.example__header {
  padding: 0;
  background-color: transparent;
  border: none;
}

.example__title {
  margin: 0;
  font: bold 20px/29px "sans-serif";
  color: black;
  letter-spacing: .03em;
}
.example__title:focus-visible .example__icon::before,
.example__title:focus-visible .example__icon::after {
  background-color: green;
}

.example__body {
  position: relative;
  margin: 20px 0 30px 0;
}
.example__body::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 2px;
  background-color: green;
}

.example__list {
  padding: 0;
  list-style: none;
}
.example__list-item,
.example__text {
  font: normal 16px/23px "sans-serif";
  letter-spacing: .03em;
  color: gray;
  padding-left: 20px;
  max-width: 87%;
}

.example__image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 250px;
  padding-left: 20px;
  border-radius: 10px;
  box-sizing: border-box;
}
.example__image img {
  border-radius: inherit;
}
.example__subtitle {
  margin-top: 5px;
  text-align: center;
  color: gray
}

.example__icon {
  position: relative;
  display: block;
  height: 16px;
  width: 16px;
  margin-right: 10px;
  pointer-events: none;
}
.example__icon::before,
.example__icon::after {
  content: "";
  position: absolute;
  background-color: black;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  transform: rotate(-90deg);
  transition: all 0.35s;
}
.example__icon::before {
  width: 2px;
  height: 16px;
}
.example__icon::after {
  width: 16px;
  height: 2px;
}
</style>
