<h1 id="move-it">Move.it | challenges API</h1>
<p>
Move.it an app developed during the Next Level Week 4 event by Rocketseat. This app help people to exercise during their long period of work in front of a computer.
</p>

<p>
This API was created to serve the challenges to any instances of Move.it app.
</p>

# Table of contents

<!--ts-->

- [Move.it](#move-it)
- [Table of contents](#table-of-contents)
- [Project status](#project-status)
  - [Features](#features)
- [API](#API)
  - [Challenge object](#challenge-object)
- [Requirements and how to run this app](#requirements-and-how-to-run-this-app)
- [Technologies used in this project](#technologies-used-in-this-project)
- [Author](#author)

<!--te-->

# Project status

🚧 Under construction 🚧

### Features

- [x] Serving all challenges
- [ ] Add, remove, edit challenges
- [ ] Soon...

# API

At moment the API serves all challenges in the database on a single request.

To get all challenges access: api/all

## Challenge object

The API return an array of challenges objects.

An challenge object has the properties:

```json
{
  "type": "body" or "eye",
  "description": "(String) challenge description",
  "amount": "(Number) the quantity of challenge's experience"
}

```

# Requirements and how to run this app

You will need to have installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [Visual Studio Code](https://code.visualstudio.com/) (optional)
- [Yarn](https://yarnpkg.com/) (optional)

To run this app:

```
# Open your terminal and:

# Clone this repository to your machine

$ git clone https://github.com/HalexV/moveit-challenges-api.git

# Enter into the project directory

$ cd project-directory

# Run the command to install the dependencies of the project

$ yarn install or $ npm install

# Run the command to run the project in development (dev) mode

$ yarn dev or $ npm run dev

# Open your browser and access the app

Access http://localhost:3000 on your browser

```

# Technologies used in this project

- [Node.js](https://nodejs.org/en/)
- [Expressjs](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Jestjs](https://jestjs.io/)
- [Supertest](https://www.npmjs.com/package/supertest)
- [Dotenv](https://www.npmjs.com/package/dotenv)

# Author

<div>
  <img src="readme_assets/profile-photo.png" alt="Hálex Viotto Gomes" title="Hálex Viotto Gomes" />
  <p>Hálex Viotto Gomes</p>
</div>

<div>
  <a href="https://github.com/HalexV">
    <img src="https://img.shields.io/static/v1?label=GitHub&message=HalexV&color=181717&style=for-the-badge&logo=GitHub"/>
  </a>

  <a href="https://www.linkedin.com/in/h%C3%A1lex-viotto-gomes-5375771a0/">
    <img src="https://img.shields.io/static/v1?label=LinkedIn&message=Hálex Viotto Gomes&color=0A66C2&style=for-the-badge&logo=LinkedIn"/>
  </a>

  <a href="https://app.rocketseat.com.br/me/halex-viotto-gomes-1594515532">
    <img src="https://img.shields.io/static/v1?label=App&message=Rocketseat&color=7159c1&style=for-the-badge&logo="/>
  </a>
</div>
