# Модальное окно

Источник: 
1. видео "Модальное окно на ЧИСТОМ JS + CSS. Урок 1"
https://vk.com/im/convo/19460369?entrypoint=list_all&z=video-101965347_456280389%2Fde64bf9eeff034ec99

1. создаем создаем файлы index.html, modal.css (в папке css), base.js (для подключения плагинов в папке js) 
и index.js (ведется разработка, в папке js, подключается в самом конце после base.js) в папке проекта.

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
    <link rel="stylesheet" href="css/modal.css">
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

</div>
<!-- Подключаем файл JS скриптов -->
<script src="js/base.js"></script>
<script src="js/index.js"></script>
</body>
</html>
```

3. в файле modal.css вставляем шаблон

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

4. файл base.js без шаблона

```js

```

5. файл index.js без шаблона

```js

```

6. в файле index.html вставляем название проекта

```html
<title>Модальное окно</title>
```

7. в файле index.html в разделе head подключаем bootstrap 4 
(открытый и бесплатный HTML-, CSS- и JS-фреймворк для создания сайтов и веб-приложений),
чтобы не тратить время на заполнение стилей

```html
<!-- Подключаем CSS фреймворка bootstrap 4-->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
```

8. в файле index.html подключаем класс container

```html
<div class="container">
   <h1>JavaScript Практика</h1>
</div>
```

9. в файле index.html добавляем в данный container текст (набираем с новой строки "Lorem100" и нажимаем кнопку на клавиатуре "Tab")

```html
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum dolores ex excepturi obcaecati sequi, velit. Accusamus aspernatur consequuntur dignissimos, facere id illo, ipsam magnam minima nobis obcaecati recusandae repellat veniam vero? Alias asperiores assumenda beatae blanditiis corporis deleniti dolor dolore, eligendi error facere inventore magni minus molestias nobis non quia quos similique sint. Enim minus odio placeat qui, sint suscipit? Amet nam necessitatibus quos. Aperiam delectus expedita fugit in ipsa, ipsum laudantium magnam minus, modi pariatur quas, quasi quos sapiente tenetur unde? Aut consequuntur, doloribus eaque earum ex in iusto laudantium mollitia nesciunt officiis quisquam tempore vero voluptate voluptatibus?</p>
```

10. в проекте создаем папку plugins и создаем в нем файл modal.js. Подключаем его в файле index.html
Важно! После подключенного скрипта base.js, чтобы в modal.js был доступен глобальный объект $

```html
<script src="plugins/modal.js"></script>
```

11. в modal.js создаем функцию для вызова модального окна

```js
// Эта системная функция должна вызываться отдельно, приватно.
// Она по умолчанию подключится к window, но с webpack будет работать.
function createModal(options) {
    const modal = document.createElement('div');
    modal.classList.add('vmodal');
    modal.insertAdjacentHTML('afterbegin', ``)
}
```

12. в modal.js в функцию createModal вставляем шаблон модального окна (как в HTML)

```js
<div class="vmodal">
    <div class="modal-overlay">
        <div class="modal-window">
            <div class="modal-header">
                <span class="modal-title">Modal title</span>
                <span class="modal-close">&times;</span>
            </div>
            <div class="modal-body">
                <p>Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum dolor sit.</p>
            </div>
            <div class="modal-footer">
                <button>Ok</button>
                <button>Cancel</button>
            </div>
        </div>
    </div>
</div>
```

13. в modal.js в функции createModal из шаблона модального окна 
удаляем класс vmodal, т.к. мы уже создали его в данной функции "modal.classList.add('vmodal')".
И теперь функция будет выглядеть так:

```js
// Эта системная функция должна вызываться отдельно, приватно.
// Она по умолчанию подключится к window, но с webpack будет работать.
function createModal(options) {
    const modal = document.createElement('div');
    modal.classList.add('vmodal');
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay">
            <div class="modal-window">
                <div class="modal-header">
                    <span class="modal-title">Modal title</span>
                    <span class="modal-close">&times;</span>
                </div>
                <div class="modal-body">
                    <p>Lorem ipsum dolor sit.</p>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
                <div class="modal-footer">
                    <button>Ok</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    `)
}
```

14. в modal.js открытие и закрытие модального окна в консоли

в функции createModal
```js
return modal
```
в функции $.modal
```js
const $modal = createModal(options);
```

15. проверка: открываем в браузере проект, нажимаем F12, 
в консоли (Console) набираем "$.modal()", далее Enter на клавиатуре.
Получаем в консоли ответ: {open: ƒ, close: ƒ, destroy: ƒ}

![2025-01-12_14-01-40](https://github.com/user-attachments/assets/e2e238dd-629e-4146-9581-2b1dc82c7c8b)


16. в modal.js в функции createModal открытие и закрытие модального окна в браузере

```js
document.body.appendChild(modal)
```