# Завести новый ленд

Баер предоставляет обычно архив с кодом, если речь не про верстку с нуля или переделку старого ленда

1. Проверяем файл на сторонние трекеры и скрипты. Если есть - удаляем
2. Выносим стили и скрипт в отдельные файлы в папку ассеты
3. Добавляем id к кнопке перехода с ленда на оффер:

```jsx
id="p_modal_button3"
```

1. Добавляем Hidden elements для конкретного ленда. Пример:

```jsx
<!-- Hidden elements -->
    <span id="brandName" style="display: none">KIKO Milano</span>
    <span id="productName" style="display: none">Kiko Milano</span>
    <img id="productItemImage" src="./assets/1.png" style="display: none" />
<!-- Hidden elements end -->
```

1. Добавляем в конце файла макрос со скриптом:

```jsx
{{aio:macros:passing_parameters}}
```

1. Ленд готов, можно загружать по этой **инструкции**