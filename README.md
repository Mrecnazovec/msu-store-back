# ⚙️ MSU Store — Backend

Backend часть интернет-магазина **MSU Store**, реализованная на **NestJS** с использованием **Prisma ORM**, **Postgresql** и JWT-аутентификации.  
Сервис отвечает за авторизацию, управление пользователями, каталогом товаров, заказами и интеграции с внешними сервисами.  

---

## ✨ Основные возможности
- Авторизация и регистрация пользователей (JWT + OAuth: Google, Yandex)  
- Хэширование паролей (argon2 / bcrypt)  
- Управление товарами, категориями и заказами  
- Интеграция с базой данных через Prisma ORM  
- Валидация данных (`class-validator`, `class-transformer`)  
- Работа с cookie и сессиями  
- Работа с датами через `dayjs`  
- Гибкая конфигурация через `@nestjs/config`  
- Поддержка деплоя в продакшн  

---

## ⚡ Технологии

### Core
- [NestJS 11](https://nestjs.com/) — прогрессивный Node.js фреймворк  
- [Prisma ORM](https://www.prisma.io/) — работа с базой данных  
- [PostgreSQL] — основная БД
- [JWT + Passport](http://www.passportjs.org/) — аутентификация  

### Security
- [argon2](https://github.com/ranisalt/node-argon2) и [bcrypt](https://www.npmjs.com/package/bcrypt) — хэширование паролей  
- [passport-jwt](http://www.passportjs.org/packages/passport-jwt/) — стратегия для JWT  
- [passport-google-oauth20](http://www.passportjs.org/packages/passport-google-oauth20/) и [passport-yandex](https://www.npmjs.com/package/passport-yandex) — OAuth  

### Dev инструменты
- TypeScript  
- ESLint + Prettier  
- Jest + Supertest (e2e тесты)  
- SWC — быстрый билд  