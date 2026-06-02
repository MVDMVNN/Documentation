# Campaigns

Campaigns classic

Создание кампании в трекере AIO начинается с добавления нового шаблона под кампанию, который всплывает благодаря нажатию кнопки Campaign

![telegram-cloud-photo-size-2-5285509625342004698-w.jpg](we-dont-use/campaigns/telegram-cloud-photo-size-2-5285509625342004698-w.jpg)

Далее выбираем нужный нам тип - Default 1step Flow 

![telegram-cloud-photo-size-2-5285509625342004699-w.jpg](we-dont-use/campaigns/telegram-cloud-photo-size-2-5285509625342004699-w.jpg)

И в созданный шаблон начинаем вносить данные, указанны в тз

1 - нейминг кампании (К примеру  - 

2 - страну целового гео 

3 -  соответсующий язык 

4 - нужный тег (Sweep/гео)

![telegram-cloud-photo-size-2-5285509625342004832-w.jpg](we-dont-use/campaigns/telegram-cloud-photo-size-2-5285509625342004832-w.jpg)

И получаем такой результат:

![image.png](we-dont-use/campaigns/image.png)

В инпуте Link Domain выбираем домен, приобретенный заранее, сверяя его с excel - таблицей доменов - Setups [AIO], точно ли он не был использован ранее

![telegram-cloud-photo-size-2-5285509625342004706-y.jpg](we-dont-use/campaigns/telegram-cloud-photo-size-2-5285509625342004706-y.jpg)

В поле “Link Source” выбираем из общего пула “FB w/ CAPI”

![image.png](we-dont-use/campaigns/image 1.png)

и указываем соответствующие параметры:

1 - пустой

2 - Lead

![image.png](we-dont-use/campaigns/image 2.png)

В поля “FB pixel” и “FB CAPI Token” вносим данные, указанные в тз, если таковые прописаны. Если один параметр или оба не указаны -  оставляем поля пустыми.

![telegram-cloud-photo-size-2-5285509625342004707-x.jpg](we-dont-use/campaigns/telegram-cloud-photo-size-2-5285509625342004707-x.jpg)

И получаем следующий вид:

![image.png](we-dont-use/campaigns/image 3.png)

Далее переходим к настройкам правой части шаблона кампании,

и первым делом указываем в кло - страну с целевым гео

![telegram-cloud-photo-size-2-5285509625342004708-w.jpg](we-dont-use/campaigns/telegram-cloud-photo-size-2-5285509625342004708-w.jpg)

затем, выбираем нужный нам ленд из общего пула (или же сплит лендов, в зависимости от поставленного тз), выбирая его по названию или ID ленда

![telegram-cloud-photo-size-2-5285509625342004709-w.jpg](we-dont-use/campaigns/telegram-cloud-photo-size-2-5285509625342004709-w.jpg)

К примеру, если ленд один - вес будет выставлен как 100, а если в сетапе используются два ленда  - то вес будет выставлен как 50/50 и так далее. Вес выставляется/редактируется после прожатия кнопки “Control”

![telegram-cloud-photo-size-2-5285509625342004712-w.jpg](we-dont-use/campaigns/telegram-cloud-photo-size-2-5285509625342004712-w.jpg)

Инпут под ссылку на вайт подставляется при нажатии кнопки “Control” и выбора “Redirect”

[https://app.notion.com](https://app.notion.com)

![telegram-cloud-photo-size-2-5285509625342004715-w.jpg](we-dont-use/campaigns/telegram-cloud-photo-size-2-5285509625342004715-w.jpg)

[https://app.notion.com](https://app.notion.com)

А верхний инпут удаляется, нажатием минуса, он не используется в сетапе.

![telegram-cloud-photo-size-2-5285509625342004718-w.jpg](we-dont-use/campaigns/telegram-cloud-photo-size-2-5285509625342004718-w.jpg)

И вставляем ссылку, указанную в тз под вайт:

![telegram-cloud-photo-size-2-5285509625342004719-w.jpg](we-dont-use/campaigns/telegram-cloud-photo-size-2-5285509625342004719-w.jpg)

Также выставляем нужный нам оффер/оффера, веса указываются в соотношении:

1 оффер - 100%, 2 - 50%/50%, 3 - 34%/33%/33%, 4 - по 25% на каждый.

Большее кол-во выставляется только при надобности и согласовании.

[https://app.notion.com](https://app.notion.com)

![telegram-cloud-photo-size-2-5285509625342004715-w.jpg](we-dont-use/campaigns/telegram-cloud-photo-size-2-5285509625342004715-w.jpg)

Кампания будет иметь следующий вид:

![image.png](we-dont-use/campaigns/image 4.png)

по окончанию настроек и повторной перепроверки данных - сохраняем, кликая по кнопке

![image.png](we-dont-use/campaigns/image 5.png)

И получаем ссылку типа “Encrypted Link” - для кампаний без кастомного превью

![telegram-cloud-photo-size-2-5285509625342004730-w.jpg](we-dont-use/campaigns/telegram-cloud-photo-size-2-5285509625342004730-w.jpg)

Данную ссылку мы проверяем:

- как отрабатывает (открывается ли) вайт
- прохождения самого ленда через впн/прокси
- проверка перехода на оффер
- передача параметров с ленда на оффер

Эту же ссылку следует продублировать в поле “Description”, внутри самой кампании, повторно сохранить , а также внести ее в ранее упомянутую таблицу Setups [AIO]. 

![telegram-cloud-photo-size-2-5285509625342004732-y.jpg](we-dont-use/campaigns/telegram-cloud-photo-size-2-5285509625342004732-y.jpg)

!!!!!!!!!!

Данную ссылку мы отдаем в виде: название кампании + ссылка,  ОБЯЗАТЕЛЬНО изменив  ownera кампании с себя на баера, который ставил тз

![image.png](we-dont-use/campaigns/image 6.png)

![image.png](we-dont-use/campaigns/image 7.png)