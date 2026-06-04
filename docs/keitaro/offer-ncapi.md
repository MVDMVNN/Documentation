# Создание оффера NCAPI

1. Берём оффер `[fb]` из кейтаро
2. Добавляем скрытый `input` для гарантированного получения метки баера

В файле `index.html` нужно добавить скрытый `input` для получения метки баера. Вставлять код нужно сразу после открывающегося тэга `form`. Keitaro сам добавляет метку баера в макрос `{buyer}`.

```html
<input type="hidden" name="buyerhrd" value="{buyer}" />
```

В объекте `data` нужно изменить поле `buyer` и добавить ему обработку скрытого инпута.

```js
buyer: getUrlParameter("buyer") || form.elements.buyerhrd?.value || "",
```

3. Вставляем в файл `send.php` весь код:

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

## Подключение на страницу кода получения **idpxl** и отправки лида в фб

В самом начале файла thanks/index.php

```php
<?php
    $pixel = $_GET['idpxl'] ?? 1;
?>
```

В теге `<head>` — отправка лида в фб

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

## js/script.js — добавление и редактирование функций

!!! warning "Если в проекте есть quiz.js"
"В объекте `data` полю `quiz` нужно дать значение `window.userAnswers.toString()` вместо `generateQuizString(form)`"

Скрипт с получением кода страны, `createEventID` и `submitForm`

```js
async function getCountryCode() {
  try {
    const { ip, country, city, region } = await (await fetch("https://ipinfo.io/json")).json();
    localStorage.setItem("ip", ip);
    localStorage.setItem("countryCode", country.toLowerCase());
    localStorage.setItem("city", city);
    localStorage.setItem("region", region);
  } catch (error) {
    try {
      const { ip, country, city, region } = await (await fetch("https://ipinfo.io/json")).json();
      localStorage.setItem("ip", ip);
      localStorage.setItem("countryCode", country.toLowerCase());
      localStorage.setItem("city", city);
      localStorage.setItem("region", region);
    } catch (error) {
      console.log("Ошибка при получении кода страны:", error);
      return { ip: null, countryCode: "kz", city: "", region: "" };
    }
  }
}

const createEventID = () => {
  const eID = new Date().getTime();
  document.cookie = `eventID=${eID}; path=/`;
  return eID;
};

const submitForm = async (event) => {
  const form = event.target;

  // Удаляем все существующие <span> элементы перед созданием новых
  form.querySelectorAll(".error").forEach((errorElement) => {
    errorElement.remove();
  });

  // Создаем <span> элементы только для нужных полей
  ["email", "lastName", "phone", "firstName"].forEach((fieldName) => {
    const input = form.querySelector(`[name="${fieldName}"]`);
    if (input) {
      const errors = validateInput(input);
      if (errors) {
        const errorMessage = validationRules[fieldName].message || errors[0];
        const errorSpan = createErrorSpan(fieldName, errorMessage); // Используем функцию
        input.insertAdjacentElement("afterend", errorSpan);
      }
    }
  });

  if (validateForm(form)) {
    const loader = document.getElementById("loader");

    loader.style.display = "block";

    await getCountryCode();

    const ip = localStorage.getItem("ip");
    const city = localStorage.getItem("city");
    const countryCode = localStorage.getItem("countryCode") || offerCountry;

    const data = {
      firstName: form.elements.firstName.value.trim(),
      lastName: form.elements.lastName.value.trim(),
      // email: form.elements.email.value.trim(),
      email: transliterateAndAppendRandom(
        form.elements.firstName.value.trim() + form.elements.lastName.value.trim(),
      ).trim(),
      phone: form.elements.phone.value.replace(/\D/g, ""),
      country: offerCountry,
      offer: offerName,
      lang: offerLang,
      ip: ip || "111.111.111.111",
      source: trafficSource,
      buyer: getUrlParameter("buyer") || form.elements.buyerhrd?.value || "",
      target: getUrlParameter("target") || "",
      creo: getUrlParameter("creo") || "",
      idpxl: getUrlParameter("idpxl") || "",
      quiz: generateQuizString(form), // Генерируем строку для поля quiz
      clickId: getSubId() || "",
      fbclid: getUrlParameter("fbclid") || "",
      token: getUrlParameter("token") || "",
      eventID: createEventID(),
      city: city,
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "send.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function () {
      loader.style.display = "none";

      if (xhr.status === 200) {
        if (xhr.responseText) {
          const response = JSON.parse(xhr.responseText);
          const duplicateErrorEmail = "4207";
          const duplicateErrorPhone = "4206";
          const incorrectEmail = "4204";
          const phoneInput = form.elements.phone;
          const emailInput = form.elements.email;

          if (response.saved === "true") {
            console.log(response);
            console.log("saved");
            const redirectUrl = response.redirect_url || "none";
            window.location.href = `thanks?idpxl=${data.idpxl}&token=${data.token}`;
            return;
          }

          if (response.saved === "false" && response.errors) {
            if (response.errors.includes(duplicateErrorPhone) && response.errors.includes(duplicateErrorEmail)) {
              showModal(
                `Вы уже зарегистрированы <br> на номер ${phoneInput.value} <br> и почту ${emailInput.value}. Если вам нужен новый аккаунт, пройдите регистрацию на другую электронную почту и мобильный номер.`,
              );
              clearInputFields(phoneInput, emailInput);
              return;
            }

            if (response.errors.includes(duplicateErrorEmail)) {
              showModal(
                `Вы уже зарегистрированы <br> на почту ${emailInput.value}. Если вам нужен новый аккаунт, пройдите регистрацию на другую электронную почту.`,
              );
              clearInputFields(emailInput);
              return;
            }

            if (response.errors.includes(duplicateErrorPhone)) {
              showModal(
                `Вы уже зарегистрированы <br> на номер ${phoneInput.value}. Если вам нужен новый аккаунт, пройдите регистрацию на другой мобильный номер.`,
              );
              clearInputFields(phoneInput);
              return;
            }

            if (response.errors.includes(incorrectEmail)) {
              showModal(`Вы ввели некорректную почту <br> ${emailInput.value}`);
              clearInputFields(emailInput);
              return;
            }
          }
        }
      } else {
        showModal("Ошибка отправки формы. Попробуйте позже");
      }
    };
    xhr.onerror = function () {
      // Выводим в консоль объект с данными с формы
      console.log(data);

      loader.style.display = "none";

      showModal("Ошибка сервера. Попробуйте позже");
    };
    xhr.send(JSON.stringify(data));
  }
};
```

## Логика отправки лида в Keitaro

В папке `thanks` нужно добавить файл `js/trackerConversion.js` и подключить его в файл `index.php`. Добавлять в самый конец файла перед закрывающим тэгом `</body>`

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
