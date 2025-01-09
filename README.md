# Модальное окно

Источник: 
1. видео "Модальное окно на ЧИСТОМ JS + CSS. Урок 1"
https://vk.com/im/convo/19460369?entrypoint=list_all&z=video-101965347_456280389%2Fde64bf9eeff034ec99

1. создаем создаем файлы index.html, style.css (в папке css), script.js (в папке js) в папке проекта.
   Скачиваем готовые шаблоны изображений (в папку img) и файл js (положить в папку js) и вставляем в папку проекта:


2. в файле index.html готовим шаблон

```html
<!-- Сообщаем браузеру, как стоит обрабатывать эту страницу -->
<!DOCTYPE html>
<!-- Оболочка документа, указываем язык содержимого -->
<html lang="ru">
<!-- Заголовок страницы, контейнер для других важных данных (не отображается) -->
<head>
    <!-- Заголовок страницы в браузере -->
    <title></title>
    <!-- Подключаем CSS -->
    <link rel="stylesheet" href="css/style.css">
    <!-- Кодировка страницы -->
    <meta charset="utf-8">
    <!-- Адаптив -->
    <meta name="viewport" content="width=device-width">
</head>
<!-- Отображаемое тело страницы -->
<body>
<!-- Оболочка для демонстрации -->
<div class="wrapper">
    <!-- Контент -->

    <!-- Подключаем jQuery -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <!-- Подключаем файл JS скриптов -->
    <script src="js/script.js"></script>
</div>
</body>
</html>
```

3. в файле style.css вставляем шаблон

```css
/* Обнуление */
*,*:before,*:after{
   padding: 0;
   margin: 0;
   border: 0;
   box-sizing: border-box;
}
/* Стили для демонстрации */
html,body{
   height: 100%;
   background-color: #333;
   font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
   color: #fff;
   font-size: 25px;
}
.wrapper{
   height: 100%;
   padding: 50px;
}
/* Основные стили */
```

4. в файл script.js без шаблона

```js

```

5. в файле index.html вставляем название проекта

```html
<title>Модальное окно</title>
```

6. в файле index.html добавляем классы для модального окна

```html

```
