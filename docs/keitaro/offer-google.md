# Адаптация оффера под Google

## Процесс

1. Скачиваем нужный оффер под Facebook

!!! warning "Важно"
    Скачивать нужно обычный `[fb]` оффер, **не** `[conversion]`

2. Открываем код и меняем страницу спасибо **thanks/index.php**

В теге `<head>` вместо подключения `pixelInitLead.js` вставляем этот скрипт:

```php
<?php
  $gglPixelValue = isset($_GET['idpxl']) ? urldecode($_GET['idpxl']) : '';
  $gglPixelParts = explode('/', $gglPixelValue);
  $fullPixel = $gglPixelValue;
  $basePixel = $gglPixelParts[0];
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Название оффера</title>
<link rel="stylesheet" href="../offer-assets/css/ion.rangeSlider.min.css">
<link rel="stylesheet" href="css/style.css">
<link rel="shortcut icon" href="../offer-assets/img/logo.png" type="image/png">
<meta name="robots" content="noindex, nofollow">
  <script>
  const script1 = document.createElement("script");
  script1.src = "https://www.googletagmanager.com/gtag/js?id=<?= htmlspecialchars($basePixel, ENT_QUOTES) ?>";
  script1.async = true;
  document.head.appendChild(script1);
  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag("js", new Date());
    gtag("config", "<?= htmlspecialchars($basePixel, ENT_QUOTES) ?>");
    gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted'
    });
    gtag("event", "conversion", { "send_to": "<?= htmlspecialchars($fullPixel, ENT_QUOTES) ?>" });
  `;
  document.head.appendChild(script2);
  </script>
</head>
```

3. В файле **js/script.js** меняем в двух местах:

**а) Константы оффера** (почти в начале скрипта):

```js
const offerCountry = "kz";
const offerName = "название__оффера";
const trafficSource = "google";
const ad = getUrlParameter("ad");
const offerLang = "ru";
```

**б) Логику редиректа при успешной отправке:**

```js
// Было:
if (response.saved === 'true') {
  const redirectUrl = response.redirect_url || 'none';
  window.location.href = `thanks/?redirectUrl=${redirectUrl}`;
  return;
}

// Стало:
if (response.saved === "true") {
  const redirectUrl = response.redirect_url || "none";
  if (ad) {
    window.location.href = `https://${ad}/thanks?idpxl=${data.idpxl}&clickId=${data.clickId}`;
  } else {
    window.location.href = `thanks?idpxl=${data.idpxl}&clickId=${data.clickId}`;
  }
  return;
}
```
