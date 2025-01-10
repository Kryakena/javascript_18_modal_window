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

6. в файле index.html подключаем bootstrap 4 
(открытый и бесплатный HTML-, CSS- и JS-фреймворк для создания сайтов и веб-приложений),
чтобы не тратить время на заполнение стилей


```html
<!-- Подключаем CSS фреймворка bootstrap 4-->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
```

7. в файле index.html подключаем класс container

```html
<div class="container">
   <h1>JavaScript Практика</h1>
</div>
```

8. в файле index.html добавляем в данный container текст (набираем с новой строки "Lorem100" и нажимаем кнопку на клавиатуре "Tab")

```html
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum dolores ex excepturi obcaecati sequi, velit. Accusamus aspernatur consequuntur dignissimos, facere id illo, ipsam magnam minima nobis obcaecati recusandae repellat veniam vero? Alias asperiores assumenda beatae blanditiis corporis deleniti dolor dolore, eligendi error facere inventore magni minus molestias nobis non quia quos similique sint. Enim minus odio placeat qui, sint suscipit? Amet nam necessitatibus quos. Aperiam delectus expedita fugit in ipsa, ipsum laudantium magnam minus, modi pariatur quas, quasi quos sapiente tenetur unde? Aut consequuntur, doloribus eaque earum ex in iusto laudantium mollitia nesciunt officiis quisquam tempore vero voluptate voluptatibus?</p>
```
