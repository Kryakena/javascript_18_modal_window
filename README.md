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

3. в файле modal.css без шаблона

```css

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

15. в modal.css заполняем стандарт стилей для модального окна

```css
.modal-overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
}

.modal-window {
    width: 600px;
    border-radius: 5px;
    background: #fff;
    margin: 100px auto;
}

.modal-header {
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
}

.modal-title {
    font-size: 1.5rem;
}

.modal-close {
    cursor: pointer;
}

.modal-body {

}
```

17. в modal.js в return добавляем классы open при открытии (open) и закрытии (close) модального окна

для open
```js
$modal.classList.remove('open') // Добавляем класс open
```
для close
```js
$modal.classList.remove('open') // Добавляем класс open
```

18. в index.js меняем название класса с MyModal на modal и убираем $ перед названием переменной modal
и проверяем работу через консоль в браузере проекта

```js
const modal = $.modal()
```

![2025-01-14_17-44-59](https://github.com/user-attachments/assets/033a8275-9987-410e-8034-b54a0e2a40e2)

19. в modal.css заполняем стили для модального окна

```css
.vmodal {}

.vmodal.open .modal-overlay,
.vmodal.open .modal-window{
    opacity: 1;
    z-index: 1000; /* Позволит модальному окну появляться поверх всех элементов */
}
```

20. в modal.css заполняем анимацию открытия для модального окна

- создаем класс .vmodal.open .modal-window
- в .modal-window меняем значение margin на 0
- в .modal-window добавляем transform и transition
- в .modal-overlay делаем background прозрачным - ставим нули
- в .modal-overlay добавляем transition
- добавляем класс .vmodal.open .modal-overlay
```css
/* Делаем разные типы анимации: overlay - менять прозрачность, window - будет выпрыгивать сверху */
.vmodal.open .modal-window {
    transform: translateY(100px); /* Модальное окно перемещается на 100 пикселей вниз. А чтобы сделать процесс плавным, то в .modal-window добавляем свойство transition */
}
.vmodal.open .modal-overlay {
    background: rgba(0, 0, 0, 0.5);
}

.modal-overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0); /* Контур модального окна - мменяем значения все с 0.5 на 0 - чтобы изначально overlay был невидим */
    transition: background 200ms ease-in; /* При желании можно вставить сюда img или указать цвет. Указываем скорость появления окна 200 милисекунд */
}

.modal-window {
    width: 600px;
    border-radius: 5px;
    background: #fff;
    margin: 0 auto; /* Ставим 0, т.к. оступы у нас будут через transform */
    transform: translateY(-200px); /* По умолчанию здесь находится модальное окно */
    transition: transform 200ms ease-in;
}
```
*Есть способ сделать все это через animation, а не transition

21. в modal.js заполняем анимацию закрытия для модального окна. 
При закрытии окна будет появляться класс, а когда процесс будет завершен, класс удалится

- в close() в $.modal = function(options) в файле modal.js добавляем строку - 
появление и удаление класса при закрытии окна
- чтобы работала анимация закрытия модельного окна и удаление класса добавляем const
  в $.modal = function(options) в файле modal.js
```js
$.modal = function(options) { // Работа с замыканием
    const ANIMATION_SPEED = 200
    const $modal = createModal(options)

    return {  // Пример замыкания
        open() {
            $modal.classList.add('open') // Добавляем класс open
        }, // Визуализацию лучше делать через css, это наиболее быстрый путь
        close() { // Вызываем метод close, который вызывает метод hide, который при завершении анимации закрытии модального окна, сам удалится
            $modal.classList.remove('open') // Добавляем класс open
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
            }, ANIMATION_SPEED)
        }, // Визуализацию лучше делать через css, это наиболее быстрый путь
        destroy() {} // Не позволяет приложению работать медленно, очень важный метод
    }
}
```

22. в modal.css заполняем анимацию открытия для модального окна

- добавляем новые классы ".vmodal.hide .modal-overlay, .vmodal.hide .modal-window", ".vmodal.hide .modal-window", 
".vmodal.hide .modal-overlay"
```css
.vmodal.hide .modal-overlay,
.vmodal.hide .modal-window{
    opacity: 1;
    z-index: 1000;
}
/* Анимация закрытия модального окна */
.vmodal.hide .modal-window {
    transform: translateY(-200px); /* Модальное окно перемещается на 200 пикселей вверх. */
}
.vmodal.hide .modal-overlay {
    background: rgba(0, 0, 0, 0);
}
```

23. в modal.js в $.modal = function(options)

- добавляем let, т.к. без него будет конфликт open с close
```js
let closing = false // Через let, т.к. мы будет менять
```
- там же в close() добавляем строку closing
```js
closing = true
```
- там же в close() в setTimeout
```js
closing = false
```
- там же в open() добавляем в начало строки $modal.classList.add
```js
!closing && 
```

# Итог

1. index.html

```html
<!-- Сообщаем браузеру, как стоит обрабатывать эту страницу -->
<!DOCTYPE html>
<!-- Оболочка документа, указываем язык содержимого -->
<html lang="ru">
<!-- Заголовок страницы, контейнер для других важных данных (не отображается) -->
<head>
    <!-- Заголовок страницы в браузере -->
    <title>Модальное окно</title>
    <!-- Подключаем CSS фреймворка bootstrap 4-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
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
    <div class="container">
        <h1>JavaScript Практика</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum dolores ex excepturi obcaecati sequi, velit. Accusamus aspernatur consequuntur dignissimos, facere id illo, ipsam magnam minima nobis obcaecati recusandae repellat veniam vero? Alias asperiores assumenda beatae blanditiis corporis deleniti dolor dolore, eligendi error facere inventore magni minus molestias nobis non quia quos similique sint. Enim minus odio placeat qui, sint suscipit? Amet nam necessitatibus quos. Aperiam delectus expedita fugit in ipsa, ipsum laudantium magnam minus, modi pariatur quas, quasi quos sapiente tenetur unde? Aut consequuntur, doloribus eaque earum ex in iusto laudantium mollitia nesciunt officiis quisquam tempore vero voluptate voluptatibus?
    </div>
</div>
<!-- Подключаем файл JS скриптов -->
<script src="js/base.js"></script>
<script src="plugins/modal.js"></script>
<script src="js/index.js"></script>
</body>
</html>
```

2. modal.css

```css
.vmodal {}

.vmodal.open .modal-overlay,
.vmodal.open .modal-window{
    opacity: 1;
    z-index: 1000; /* Позволит модальному окну появляться поверх всех элементов */
}

.vmodal.hide .modal-overlay,
.vmodal.hide .modal-window{
    opacity: 1;
    z-index: 1000;
}

/* Делаем разные типы анимации: overlay - менять прозрачность, window - будет выпрыгивать сверху */
.vmodal.open .modal-window {
    transform: translateY(100px); /* Модальное окно перемещается на 100 пикселей вниз. А чтобы сделать процесс плавным, то в .modal-window добавляем свойство transition */
}
.vmodal.open .modal-overlay {
    background: rgba(0, 0, 0, 0.5);
}

/* Анимация закрытия модального окна */
.vmodal.hide .modal-window {
    transform: translateY(-200px); /* Модальное окно перемещается на 200 пикселей вверх. */
}
.vmodal.hide .modal-overlay {
    background: rgba(0, 0, 0, 0);
}

.modal-window, .modal-overlay { /* Обращаемся к селекторам */
    opacity: 0;
    z-index: -1; /* Чтобы эти селекторы отсутствовали у нас на экране */
}
.modal-overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0); /* Контур модального окна - мменяем значения все с 0.5 на 0 - чтобы изначально overlay был невидим */
    transition: background 200ms ease-in; /* При желании можно вставить сюда img или указать цвет. Указываем скорость появления окна 200 милисекунд */
}

.modal-window {
    width: 600px;
    border-radius: 5px;
    background: #fff;
    margin: 0 auto; /* Ставим 0, т.к. оступы у нас будут через transform */
    transform: translateY(-200px); /* По умолчанию здесь находится модальное окно */
    transition: transform 200ms ease-in;
}

.modal-header {
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
}

.modal-title {
    font-size: 1.5rem;
}

.modal-close {
    cursor: pointer;
}

.modal-body {

}
```

3. modal.js

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
    document.body.appendChild(modal)
    return modal
}

$.modal = function(options) { // Работа с замыканием
    const ANIMATION_SPEED = 200
    const $modal = createModal(options)
    let closing = false // Через let, т.к. мы будет менять

    return {  // Пример замыкания
        open() {
            !closing && $modal.classList.add('open') // Добавляем класс open
        }, // Визуализацию лучше делать через css, это наиболее быстрый путь
        close() { // Вызываем метод close, который вызывает метод hide, который при завершении анимации закрытии модального окна, сам удалится
            closing = true
            $modal.classList.remove('open') // Добавляем класс open
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SPEED)
        }, // Визуализацию лучше делать через css, это наиболее быстрый путь
        destroy() {} // Не позволяет приложению работать медленно, очень важный метод
    }
}
```

4. index.js

```js
const modal = $.modal()
```

5. base.js

```js
const $ = {

}

window.$ = $
```