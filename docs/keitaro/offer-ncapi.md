# Создание оффера NCAPI

1. Берём оффер `[fb]` из кейтаро
2. Вставляем в файл **send.php** весь код:

```php
<?php

$data = json_decode(file_get_contents("php://input"), true);

$formData = [
    "firstName" => $data['firstName'],
    "lastName"  => $data['lastName'],
    "email"     => $data['email'],
    "phone"     => $data['phone'],
    "offer"     => $data['offer'],
    "buyer"     => $data['buyer'],
    "target"    => $data['target'],
    "creo"      => $data['creo'],
    "ip"        => $data['ip'],
    "country"   => $data['country'],
    "source"    => $data['source'],
    "lang"      => $data['lang'],
    "quiz"      => $data['quiz'],
    "clickId"   => $data['clickId'],
    "idpxl"     => $data['idpxl'],
    "fbclid"    => $data['fbclid'],
    "token"     => $data['token'],
    "eventID"   => $data['eventID'],
    "city"      => $data['city'],
    "userAgent" => $_SERVER['HTTP_USER_AGENT'],
];

$url = 'https://sultingsolution.com/api/v1/leads';

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 2);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl, CURLOPT_USERAGENT, 'LANDING');
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($formData));
curl_setopt($curl, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Accept: application/json",
]);

$result = curl_exec($curl);
curl_close($curl);

$response = json_decode($result, true);
if (isset($response['errors'])) {
    $response['saved'] = 'false';
    foreach ($response['errors'] as $key => $errorCodes) {
        $response['errors'] = array_merge($response['errors'], $errorCodes);
        unset($response['errors'][$key]);
    }
}

echo json_encode($response);
```

3. Подключаем на страницу **thanks/index.php** код отправки лида в кейтаро и в фб

### а) Начало файла thanks/index.php

```php
<?php
    file_get_contents('https://nanometer.work/0a62660/postback?subid=' . $_COOKIE['subid'] . '&status=lead');
    $pixel = $_GET['idpxl'] ?? 1;
?>
```

### б) В теге `<head>` — отправка лида в фб

```html
<!-- Meta Pixel Code -->
<script>
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    const results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  if (!getUrlParameter("token")) {
    var eventID = new Date().getTime();
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    fbq("init", "<?php echo $pixel; ?>");
    fbq("track", "Lead", {}, { eventID: eventID });
  }
</script>
<!-- End Meta Pixel Code -->
```

## 4. js/script.js — добавление и редактирование функций

!!! warning "Если в проекте есть quiz.js"
Нужно брать отдельный скрипт с `window.userAnswers.toString()` вместо `generateQuizString(form)`

Заменяем функции `getCountryCode()`, `submitForm()` и добавляем `createEventID()`:

```js
async function getCountryCode() {
  try {
    const { ip, country, city } = await (await fetch("https://ipinfo.io/json")).json();
    localStorage.setItem("ip", ip);
    localStorage.setItem("countryCode", country.toLowerCase());
    localStorage.setItem("city", city);
  } catch (error) {
    console.log("Ошибка при получении кода страны:", error);
  }
}

const createEventID = () => {
  const eID = new Date().getTime();
  document.cookie = `eventID=${eID}; path=/`;
  return eID;
};
```

В объекте `data` внутри `submitForm` добавляем поля:

```js
eventID: createEventID(),
city: city,
```

В файле `index.html` нужно добавить скрытый `input` для получения метки баера. Вставлять код нужно сразу после открывающегося тэга `form`. Keitaro сам добавляет метку баера в макрос `{buyer}`.

```html
<input type="hidden" name="buyerhrd" value="{buyer}" />
```

В объекте `data` нужно изменить поле `buyer` и добавить ему обработку скрытого инпута.

```js
buyer: getUrlParameter("buyer") || form.elements.buyerhrd?.value || "",
```

5. В папке `thanks` нужно добавить файл `js/trackerConversion.js` и подключить его в файл `thanks.html`. Добавлять в самый конец файла перед закрывающим тэгом `</body>`

```html
<script src="js/trackerConversion.js"></script>
```

Код для файла `trackerConversion.js`:

```js
(function () {
  var matches = document.cookie.match(new RegExp("(?:^|; )" + "subid" + "=([^;]*)"));
  var subId = matches ? decodeURIComponent(matches[1]) : undefined;
  var pb = new Image();
  pb.src = "https://nanometer.work/0a62660/postback?subid=" + subId + "&status=lead";
  pb.style.display = "none";
  document.body.appendChild(pb);
})();
```
