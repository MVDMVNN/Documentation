# Postback — отправка лида

Так как домен micromettr был забанен в КЗ регионе, пришлось менять способ отправки постбека в кейтаро.

## Изменения

### 1. Переименование файла

`thanks/thanks.html` → `thanks/index.php`

### 2. PHP код в начале index.php

Добавляем в самый верх файла:

```php
<?php
    file_get_contents('https://nanometer.work/0a62660/postback?subid=' . $_COOKIE['subid'] . '&status=lead');
?>
```

### 3. Редирект в js/script.js

Меняем путь для редиректа на страницу "спасибо":

```js
if (response.saved === "true") {
  console.log(response);
  console.log("saved");
  const redirectUrl = response.redirect_url || "none";
  window.location.href = `thanks?idpxl=${data.idpxl}&token=${data.token}`;
  return;
}
```

!!! note "Суть изменения"
    В `window.location.href` поменялся путь — теперь переход идёт просто в папку `thanks/`, а там автоматически вызывается `index.php`
