Мессенджер для тестового задания:

tools used:

NextAuth.js
Next.js
Apollo Client
Grafbase
Server-Sent Events
GraphQL Live Queries
GraphQL
Tailwind CSS
OAuth2 - https://github.com/

- скачайте репозиторий себе на компьютер

$ npm install

Создайте GitHub OAuth приложение и укажите детали которые вам понадобятся. Обязательно установите Authorization callback URL to http://localhost:3000/api/auth/callback/github . Инструкция тут: https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps

Создайте переменные окружения в файле .env - GITHUB_CLIENT_ID и GITHUB_CLIENT_SECRET еще NEXTAUTH_SECRET с произвольным значением. Первые два вы получите в процессе создания "OAuth2 приложения".

## Не забудьте добавить NEXTAUTH_SECRET в grafbase/.env

$ npx grafbase dev

$ npm run dev
![Снимок экрана 2023-05-31 в 08 28 12](https://github.com/ivanIStereotekk/chat/assets/18102432/7aacb5d8-44c0-4e61-adca-b0181d7d4241)
![Снимок экрана 2023-05-31 в 08 27 43](https://github.com/ivanIStereotekk/chat/assets/18102432/fd05dbeb-19fd-4847-9144-a3b7c0a4c3ca)

# chat
