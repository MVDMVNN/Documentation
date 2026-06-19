# Adding new land

Баер предоставляет обычно архив с кодом, если речь не про верстку с нуля или переделку старого ленда

* Проверяем файл на сторонние трекеры и скрипты. Если есть - удаляем
*  Выносим стили и скрипт в отдельные файлы в папку ассеты
* Добавляем в конец тега `<head>` перед макросом `{{aio:head}}` макрос с пикселями
```js
{{aio:macros:pixels}}
```
*  Добавляем id к кнопке перехода с ленда на оффер:

```jsx
id = "p_modal_button3";
```

*  Добавляем Hidden elements для конкретного ленда

```jsx
<!-- Hidden elements -->
    <span id="brandName" style="display: none">KIKO Milano</span>
    <span id="productName" style="display: none">Kiko Milano</span>
    <img id="productItemImage" src="./assets/1.png" style="display: none" />
<!-- Hidden elements end -->
```

*  Добавляем в конец тега `<body>` перед макросом `{{aio}}` макрос для отправки данных

```js
  {{aio:macros:passing_parameters}}
```

Ленд готов, можно загружать по этой [инcтрукции](create.md)
