# Fix_Template: передача media-параметров

# US - us - Boneless Sofa quiz v1

![image.png](fix-template/image.png)

1. Выбираем пункт “manage landing”

![image.png](fix-template/image 1.png)

1. Режим “**Split**” для одновременного просмотра кода и визуальной части 

В дальнейшем можно продолжать работу в режиме **Visual**, но сейчас рассмотрим этот вариант, чтоб увидеть как отображается на коде замена элемента

![image.png](fix-template/image 2.png)

1. На визуальной части выбираем элемент, который нужно заменить и прожимаем его  - автоматически в коде подсвечивается путь к выбранному элементу

![image.png](fix-template/image 3.png)

1. Прожимаем элемент еще раз и выбираем “Edit image”

![telegram-cloud-photo-size-2-5314729872699625236-x.jpg](fix-template/telegram-cloud-photo-size-2-5314729872699625236-x.jpg)

1. Выбираем подгрузку с ПК 

![telegram-cloud-photo-size-2-5314729872699625238-w.jpg](fix-template/telegram-cloud-photo-size-2-5314729872699625238-w.jpg)

1. Выбираем нужный media-элемент и подгружаем его

![telegram-cloud-photo-size-2-5314729872699625249-w.jpg](fix-template/telegram-cloud-photo-size-2-5314729872699625249-w.jpg)

![telegram-cloud-photo-size-2-5314729872699625259-w.jpg](fix-template/telegram-cloud-photo-size-2-5314729872699625259-w.jpg)

1. Готово, новый элемент отображается, “хвост” в пути к картинке изменился (обращаем на это внимание для самопроверки) - фото подгружено успешно ✅

![telegram-cloud-photo-size-2-5314729872699625264-w.jpg](fix-template/telegram-cloud-photo-size-2-5314729872699625264-w.jpg)

По такому же принципу продолжаем работу ( можно в режиме Visual, как удобнее)

Заменим фотографию на ледне (алгоритм действий повторяется)

![image.png](fix-template/image 4.png)

![image.png](fix-template/image 5.png)

![image.png](fix-template/image 6.png)

![image.png](fix-template/image 7.png)

![image.png](fix-template/image 8.png)

# Замена скрытых media-элементов, передающихся на оффер

1. Вводим в поисковик по коду сommand+F - “Hidden element”, для того чтоб быстрее добраться до фрагмента, который хранит в себе нужные нам фото

![image.png](fix-template/image 9.png)

Общий вид фргамента:

![image.png](fix-template/image 10.png)

1. Обращаемся в конец пути нужного фото, в данном случае, productName и заменяем  в style = “display: none” на style = “display: block”

![telegram-cloud-photo-size-2-5314729872699625989-x.jpg](fix-template/telegram-cloud-photo-size-2-5314729872699625989-x.jpg)

![telegram-cloud-photo-size-2-5314729872699625990-y.jpg](fix-template/14376b8d-d943-443d-b52f-cd4dee68d89a.png)

1. В режиме Split начнет отображаться фото, которое подтягивается на оффер - prize.jpg, по такому же принципу заменяем его на нужное

![telegram-cloud-photo-size-2-5314729872699625994-w.jpg](fix-template/telegram-cloud-photo-size-2-5314729872699625994-w.jpg)

![image.png](fix-template/image 11.png)

![image.png](fix-template/image 12.png)

![telegram-cloud-photo-size-2-5314729872699626002-w.jpg](fix-template/telegram-cloud-photo-size-2-5314729872699626002-w.jpg)

![telegram-cloud-photo-size-2-5314729872699626003-w.jpg](fix-template/telegram-cloud-photo-size-2-5314729872699626003-w.jpg)

![image.png](fix-template/image 13.png)

1. После смены картинки снова обращаемся в конец пути и заменяем style = “display: block” на style = “display: none” и сохранить изменения

![image.png](fix-template/image 14.png)