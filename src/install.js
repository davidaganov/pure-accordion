import Accordion from "./components/Accordion.vue";
import AccordionItem from "./components/AccordionItem.vue";

const PureAccordion = {
  install(Vue) {
    Vue.component("Accordion", Accordion);
    Vue.component("AccordionItem", AccordionItem);
  }
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(PureAccordion);
}

export default PureAccordion;
