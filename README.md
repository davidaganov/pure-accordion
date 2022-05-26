# Pure Accordion

It has two modes of operation:

- Multiple partitions can be opened at the same time
- Only one partition can be opened at a time

## Examples

- [GitHub](https://github.com/davidaganov21/pure-accordion)
- [CodeSandbox](https://codesandbox.io/s/pure-accordion-6x4zbf)

## Usage

- Put the following markup in your template:

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

## Configuration

- `name: String` - set custom classes
- `single: Boolean` - open multiple/one item at a time
- `activeCount: Number` - the number of open items