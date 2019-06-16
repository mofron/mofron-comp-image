# mofron-comp-image
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

image component for [mofron](https://mofron.github.io/mofron/).

# Install
```bash
npm install mofron mofron-comp-image
```

# Sample
```html
<require>
    <tag module="mofron-comp-image">Image</tag>
</require>
<Image size="1.5rem","1.5rem">./img/logo.png</Image>
```

# Parameter

| Simple<br>Param | Parameter Name     | Type                  |    Description                         |
|:---------------:|:-------------------|:----------------------|:---------------------------------------|
|        ◯        | path               | string                | path to image                          |
|                 | base64             | number                | base64 image value                     |
|                 | src                | string/number         | src value of dom attribute             |
