# Pure Accordion

It has two modes of operation:

- Multiple partitions can be opened at the same time
- Only one partition can be opened at a time

## Examples

- [GitHub](https://github.com/davidaganov/pure-accordion)
- [Demo](https://aganov.dev/pure-accordion)

## Install

#### NPM / Yarn

```
git clone https://github.com/davidaganov21/pure-accordion
cd pure-accordion
npm install
```

## Usage

Simply use it like so:

```html
<accordion name="your-class" :single="false" :activeCount="2"></accordion>
```

## Structure

Put the following markup in your template:

```html
<accordion>

  <accordion-item>
    <template #accordion-title>
      <h4>Title</h4>
    </template>

    <template #accordion-icon>
      <span class="icon"></span>
    </template>

    <template #accordion-content>
      <p>Content</p>
    </template>
  </accordion-item>

</accordion>
```

## Style

By passing your class to the name parameter, you will set custom classes for the accordion structure, you can refer to them like this:

````css
.custom-class {
  ...
}
.custom-class__item {
  ...
}
.custom-class__header {
  ...
}
.custom-class__content {
  ...
}
````

## Props

- `name: String` - set custom classes
- `single: Boolean` - open multiple/one item at a time
- `activeCount: Number` - the number of open items

## Credits

Author: [David Aganov](https://github.com/davidaganov21)
