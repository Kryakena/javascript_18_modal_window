# Игра "Морской бой" (консоль) на Windows 10

Источник:
1. Видео "#1 Морской бой на Java (Консольный вариант)."
   https://vk.com/im/convo/19460369?entrypoint=list_all&z=video-101965347_456282311%2Fde0d9cf7b25c2c223c

1. скачать JDK Development Kit 23.0.1 и установить согласно инструкции с официального сайта 
https://www.oracle.com/java/technologies/downloads/#jdk21-windows

2. скачать и установить IntelliJ IDEA Community Edition 
https://www.jetbrains.com/idea/download/?section=windows

3. создаем файл java - Main.java с шаблоном

```java
public class Main {
    public static void Main( String [] args ) {
        System.out.println();
    }
}
```

4. в Windows нажать комбинацию клавиш "Windows+R", в поисковой строке набрать "cmd", нажать Enter

5. вводим в консоли путь к файлу Main.java и переходим в нем в данную папку

```
cd /d D:\IT\Kryakena\GitHub\2025\java\java_6_sea-battle-game
```

6. смотрим через консоль, есть ли компилятор, если нет, то возвращаемся к пункту 1 (настройка переменной среды)

```
javac
```

7. добавляем в файле java название пакета

```java
package com.evhenii.seabattle;
```

8. создаем в папке проекта txt файл и называем build.bat (txt переименовываем в bat)

9. устанавливаем плагин для работы с файлом bat (Batch Scripts Support)

