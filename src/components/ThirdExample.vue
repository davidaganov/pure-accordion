<template>
  <accordion class="example" name="example" :activeCount="1">

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
import Accordion from "./Accordion.vue";
import AccordionItem from "./AccordionItem.vue";

export default {
  components: {
    Accordion, AccordionItem,
  },

  props: {
    list: { type: Array, required: true, default: () => [] },
  },
};
</script>

<style>
@import "../assets/pure-accordion.css";
</style>
