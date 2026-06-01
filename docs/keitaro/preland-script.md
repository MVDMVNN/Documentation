# Preland — скрипт для выделения всех ссылок и перехода на оффер

Скрипт добавляет всем ссылкам на преленде ссылку на оффер + название преленда + все utm метки.

## 1. index.html преленда

Добавляем скрипт перед закрывающим тегом `</body>`:

```js
<script>
  function updateAllLinks(newHref) {
    const allLinks = document.querySelectorAll("a");
    const prelandName = "название_преленда"; // сюда пишем название преленда от баера
    allLinks.forEach((link) => {
      link.href = newHref + "&preland=" + prelandName + "&" + window.location.search.substring(1);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('[onclick]').forEach(el => {
      el.removeAttribute('onclick');
    });
    updateAllLinks("{offer}");
  });
</script>
```

## 2. Изменения в оффере

### js/script.js

В объекте `data` (где собираются utm-метки) добавляем строку:

```js
preland: getUrlParameter('preland') || '',
```

### send.php

В объекте `$formData` добавляем:

```php
"preland" => $data['preland'],
```
