<template>
  <li
    class="accordion__item"
    :class="{ active: active || single_active }"
  >
    <button
      class="accordion__header"
      :class="name ? `${name}__header` : undefined"
      type="button"
      @click="open"
    >
      <slot name="accordion-title"></slot>
      <slot name="accordion-icon"></slot>
    </button>
    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div
        class="accordion__content"
        :class="name ? `${name}__content` : undefined"
        v-show="active || single_active"
      >
        <div
          class="accordion__body"
          :class="name ? `${name}__body` : undefined"
        >
          <slot name="accordion-content"></slot>
        </div>
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  inject: ["accordion"],

  data() {
    return {
      index: null,
      active: false,
      name: this.accordion.name
    }
  },

  computed: {
    single_active() {
      if (!this.accordion.single) return undefined
      return this.index === this.accordion.active
    }
  },

  created() {
    //---- Присваивание номеров пунктам аккордеона
    this.accordion.count += 1
    this.index = this.accordion.count

    //---- Установка нужного количества активных элементов по умолчанию
    if (this.accordion.activeCount && !this.accordion.single) {
      for (let i = 0; i < this.accordion.activeCount + 1; i += 1) {
        if (this.index === i) this.active = true
      }
    }
  },

  methods: {
    open() {
      if (this.single_active !== undefined) {
        //---- Если может быть активен только один элемент аккордеона
        this.single_active ? (this.accordion.active = null) : (this.accordion.active = this.index)
      } else {
        //---- Если активных элементов может быть много
        this.active ? (this.active = false) : (this.active = true)
      }
    },

    start(el) {
      el.style.height = `${el.scrollHeight}px`
    },
    end(el) {
      el.style.height = ""
    }
  }
}
</script>

<style>
@import "../assets/default.css";
</style>
