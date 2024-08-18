# API de Usuários

Esta é uma API para gerenciamento de usuários. Ela permite que você se registre, faça login e recupere informações sobre o perfil do usuário. A API foi desenvolvida utilizando Node.js e JavaScript, e utiliza criptografia com bcrypt para senhas, JWK para tokens, ESLint para padronização, Docker como container para MySQL e foi implantada no Heroku.

## Endpoints

### 1. **Login**
- **Endpoint:** `POST /signin`
- **Descrição:** Permite que um usuário faça login na conta.
- **Requisição:**
  - **URL:** `https://rest-api-users-2979d271e883.herokuapp.com/signin`
  - **Corpo da Requisição:**
    ```json
    {
      "email": "user@example.com",
      "senha": "yourpassword"
    }
    ```
- **Resposta:**
  - **Status Code:** `200 OK`
  - **Corpo da Resposta:**
    ```json
    {
      "id": ID,
      "dataCriacao": "",
      "dataAtualizacao": "",
      "token": "JWT"
    }
    ```

### 2. **Registro**
- **Endpoint:** `POST /signup`
- **Descrição:** Permite que um novo usuário se registre.
- **Requisição:**
  - **URL:** `https://rest-api-users-2979d271e883.herokuapp.com/signup`
  - **Corpo da Requisição:**
    ```json
    {
      "nome": "",
      "email": "",
      "senha": "",
      "telefones": [
        {
          "numero": "123456789",
          "ddd": "11"
        }
      ]
    }
    ```
- **Resposta:**
  - **Status Code:** `201 Created`
  - **Corpo da Resposta:**
    ```json
    {
      "id": ID,
      "dataCriacao": "",
      "dataAtualizacao": "",
      "ultimoLogin": null,
      "token": "JWT"
    }
    ```

### 3. **Perfil do Usuário**
- **Endpoint:** `GET /profile`
- **Descrição:** Retorna os dados do usuário cadastrado com base no token de autenticação.
- **Requisição:**
  - **URL:** `https://rest-api-users-2979d271e883.herokuapp.com/buscarusuario`
  - **Cabeçalho:**
    ```
    Authorization: Bearer <token>
    ```
- **Resposta:**
  - **Status Code:** `200 OK`
  - **Corpo da Resposta:** Retorna os dados do perfil do usuário.

## Tecnologias Utilizadas

- **Node.js** e **JavaScript** para o desenvolvimento da API.
- **Criptografia** com **bcrypt** para segurança das senhas.
- **Tokens JWK** para autenticação.
- **ESLint** para padronização de código.
- **Docker** para a imagem do MySQL.
- **Heroku** para o deploy da aplicação.
