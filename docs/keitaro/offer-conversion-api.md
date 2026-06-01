# Изменение оффера под conversionApi

## Процесс

1. В кейтаро переходим во вкладку **"Офферы"**
2. Находим нужный оффер с припиской `[fb]` и скачиваем его
3. Открываем в редакторе и вносим правки

### js/script.js

Добавляем в вызов функции `getCountryCode()` в объект `data` два параметра:

```js
fbclid: getUrlParameter('fbclid') || '',
token: getUrlParameter('token') || '',
```

### send.php

Добавляем 3 новых элемента в массив `$formData`:

```php
"idpxl" => $data['idpxl'],
"fbclid" => $data['fbclid'],
"token" => $data['token'],
```

### thanks/thanks.html

В теге `<head>` удаляем или комментируем подключение файла пикселя:

```html
<!--<script src="js/pixelInitLead.js"></script>-->
```

4. Закидываем изменённый оффер в кейтаро и добавляем к названию приписку `[conversion]`
