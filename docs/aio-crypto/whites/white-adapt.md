# White adaptation for AIO

Для адаптации вайта под `AIO` нужно сделать одно основное действие. В каждом вайте, на каждой странице, нужно найти строчку кода, которая отвечает за переход на главную страницу, а именно - `логотип` и кнопка `Главная`, к примеру:

```html
<a href="index.html">Главная</a>

или

<a href="index.html" class="keme3-nav__link">Главная</a>

или 

<a href="index.html" class="keme3-logo">Nova<span>Partners</span></a>
```

И заменить `index.html`на `/`

```html
<a href="/">Главная</a>

или

<a href="/" class="keme3-nav__link">Главная</a>

или 

<a href="/" class="keme3-logo">Nova<span>Partners</span></a>
```

После этого можно 