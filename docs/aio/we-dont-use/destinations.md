# Destinations(Offers)

## Находятся в Tracker —> Destinations

![Screenshot 2025-11-28 at 11.17.14.png](Destinations(Offers)/Screenshot_2025-11-28_at_11.17.14.png)

## Добавление нового оффера

### 1. Нажимаем на + Destination

![Screenshot 2025-11-28 at 11.19.50.png](Destinations(Offers)/Screenshot_2025-11-28_at_11.19.50.png)

### 2.  Выбираем метод By Advertiser

![Screenshot 2025-11-28 at 11.21.23.png](Destinations(Offers)/Screenshot_2025-11-28_at_11.21.23.png)

### 3. Выбираем нужную нам партнёрскую сеть

![Screenshot 2025-11-28 at 11.26.41.png](Destinations(Offers)/Screenshot_2025-11-28_at_11.26.41.png)

### 4. Создаём оффер

Заполняем поля:
Name - полное название оффера 

redirectURL - ссылка на оффер(без Sub)

![Screenshot 2025-11-28 at 11.28.06.png](Destinations(Offers)/Screenshot_2025-11-28_at_11.28.06.png)

### 5. После добавление нового оффера обязательно даём досту на просмотр всем командам баеров, чтобы они могли видеть их в кампаниях. В противном случае они будут видеть вместо названия оффера - надпись Unkhown( на работоспособность оффера не влияет)

# Advertiser

Это наша основа под разных реклов. 
Каждый рекл имеет свою аббревиатуру, под которую пишется хвост сабок чтобы корректно передавались данные с преленда на рекла

![Screenshot 2025-11-30 at 23.19.50.png](Destinations(Offers)/Screenshot_2025-11-30_at_23.19.50.png)

### Добавление и редактирование шаблона через данное меню

![Screenshot 2025-11-30 at 23.22.29.png](Destinations(Offers)/Screenshot_2025-11-30_at_23.22.29.png)

## URL параметры разных шаблонов

### PP

```jsx
sub1={{aio.visit.uuid}}&sub2={{aio.visit.fields.buyer_utm}}&sub3={{pixel}}&sub4={{aio.visit.fields.first_name}}&sub5={{aio.visit.fields.last_name}}&sub7={{aio.visit.fields.zip_code}}&sub8={{aio.visit.fields.city}}&sub9={{aio.visit.fields.address}}&sub10={{aio.visit.fields.email}}&sub11={{aio.visit.fields.phone}}&sub12={{aio.visit.fields.product_name}}&sub14={{aio.visit.fields.price}}
```

### FAA

```jsx
sub1={{aio.visit.uuid}}&sub4={{pixel}}&sub6={{aio.visit.fields.brand_name}}&sub7={{aio.visit.fields.product_image_url}}&sub9={{aio.visit.fields.first_name}}&sub10={{aio.visit.fields.last_name}}&sub13={{aio.visit.fields.address}}&sub15={{aio.visit.fields.city}}&sub12={{aio.visit.fields.phone}}&sub11={{aio.visit.fields.email}}&sub14={{aio.visit.fields.zip_code}}
```

### GR

```jsx
source_id=560DB014&sub1=FB&sub2={{aio.visit.fields.buyer_utm}}&sub3={{aio.visit.uuid}}&sub4={{pixel}}&sub5=first_name~{{aio.visit.fields.first_name}}_sep_last_name~{{aio.visit.fields.last_name}}_sep_phone~{{aio.visit.fields.phone}}_sep_email~{{aio.visit.fields.email}}&sub19={{aio.visit.fields.zip_code}}&sub20={{aio.visit.fields.brand_name}}
```

### CD

```jsx
s2={{aio.visit.uuid}}&s3={{pixel}}&s4={{aio.visit.fields.brand_name}}&s5={{aio.visit.fields.product_image_url}}&t1={{aio.visit.fields.first_name}}&t2={{aio.visit.fields.last_name}}&t3={{aio.visit.fields.phone}}&t3={{aio.visit.fields.phone}}&t4={{aio.visit.fields.email}}&t5={{aio.visit.fields.address}}&t6={{aio.visit.fields.city}}&t8={{aio.visit.fields.zip_code}}
```

### AT

```jsx
sub1={{aio.visit.uuid}}&clickid={{aio.visit.uuid}}&sub2={{aio.visit.fields.buyer_utm}}&sub3={{pixel}}&sub4={{aio.visit.fields.first_name}}&sub5={{aio.visit.fields.last_name}}&sub7={{aio.visit.fields.zip_code}}&sub8={{aio.visit.fields.city}}&sub9={{aio.visit.fields.address}}&sub10={{aio.visit.fields.email}}&sub11={{aio.visit.fields.phone}}&sub12={{aio.visit.fields.brand_name}}
```

### YE

```jsx
s2={{aio.visit.uuid}}&s6={{aio.visit.fields.fb_pixel}}&s7={{aio.visit.fields.brand_name}}&s14={{aio.visit.fields.product_image_url}}&s8={{aio.visit.fields.first_name}}&s9={{aio.visit.fields.last_name}}&s10={{aio.visit.fields.address}}&s5={{aio.visit.fields.city}}&s11={state}&s12={{aio.visit.fields.zip_code}}&s15={{aio.visit.fields.phone}}&s13={{aio.visit.fields.email}}
```

### IS(EF)

```jsx
source_id=2629&sub1={{aio.visit.uuid}}&sub10={{aio.visit.fields.first_name}}&adv3={{aio.visit.fields.last_name}}&sub3={{aio.visit.fields.zip_code}}& sub4={{aio.visit.fields.email}}& sub5={{pxl}}&sub6={{aio.visit.fields.city}}& sub7={{aio.visit.fields.address}}&sub8={{aio.visit.fields.phone}}&adv1={{aio.visit.fields.product_name}}&adv2={{aio.visit.fields.product_image_url}}
```

### IS(HO)

```jsx
aff_sub={source}& aff_sub2={{aio.visit.uuid}}&aff_sub5=FBpixelID&aff_unique1={{aio.visit.fields.first_name}}&aff_unique2={{aio.visit.fields.last_name}}&aff_unique3=Country&aff_unique4={{aio.visit.fields.zip_code}}& ff_unique5={{aio.visit.fields.city}}&aff_sub3={{aio.visit.fields.address}}&aff_sub4={{aio.visit.fields.email}}&adv_sub={{aio.visit.fields.phone}}&source={{aio.visit.fields.product_name}}___{{aio.visit.fields.product_image_url}}
```

## Так же у нас есть шаблон для переноса офферов из Keitario в AIO

```jsx
{subid} == {{aio.visit.uuid}}
{buyer} == {{aio.visit.fields.buyer_utm}}
{idpxl} == {{aio.visit.fields.fb_pixel}} -- автоматически передается через айо
{sub_id_12} == {{aio.visit.fields.fb_capi_token}} -- автоматически передается через айо
{sub_id_13} == {{aio.visit.fields.first_name}}
{sub_id_14} == {{aio.visit.fields.last_name}}
{sub_id_15} == {{aio.visit.fields.address}}
{sub_id_16} == {{aio.visit.fields.city}}
{sub_id_17} == {{aio.visit.fields.phone}}
{sub_id_18} == {{aio.visit.fields.email}}
{sub_id_19} == {{aio.visit.fields.zip_code}}
{sub_id_20} == {{aio.visit.fields.brand_name}}
{sub_id_21} == {{aio.visit.fields.product_name}}
{sub_id_22} == {{aio.visit.fields.product_image_url}}
{sub_id_23} == {{aio.visit.fields.price}}
```

Просто заменяем все sub кейтаровские на параметры AIO 

Как пример, изменил Кейтаровские параметры оффера PP на параметры AIO: 

```jsx
sub1={subid}&sub2={buyer}&sub3={idpxl}&sub4={sub_id_13}&sub5={sub_id_14}&sub7={sub_id_19}&sub8={sub_id_16}&sub9={sub_id_15}&sub10={sub_id_18}&sub11={sub_id_17}&sub12={sub_id_21}&sub14={sub_id_22}
```

И в AIO они будут выглядеть так:

```jsx
sub1={{aio.visit.uuid}}&sub2={{aio.visit.fields.buyer_utm}}&sub3={{pixel}}&sub4={{aio.visit.fields.first_name}}&sub5={{aio.visit.fields.last_name}}&sub7={{aio.visit.fields.zip_code}}&sub8={{aio.visit.fields.city}}&sub9={{aio.visit.fields.address}}&sub10={{aio.visit.fields.email}}&sub11={{aio.visit.fields.phone}}&sub12={{aio.visit.fields.product_name}}&sub14={{aio.visit.fields.price}}
```