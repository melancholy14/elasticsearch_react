# elasticsearch_react

### Contexts
1. Goal
2. Features & To do
3. Tech Stack
4. Structure
5. Use Case
6. How to install
7. How to run on locally
8. Reference

## Goal
This repo is aiming to show how to build a very basic and simple frontend service and works by connecting to [elasticsearch_express](https://github.com/melancholy14/elasticsearch_express)

## Features & To do
- [x] User can log in: [PR#2](https://github.com/melancholy14/elasticsearch_react/pull/2)
- [x] User can take questions: [PR#3](https://github.com/melancholy14/elasticsearch_react/pull/3)
- [x] User can review the answer is correct after it's submitted: [PR#3](https://github.com/melancholy14/elasticsearch_react/pull/3)
- [ ] Testing
- [ ] User can sign up
- [x] User can see all questions and answers that s/he resolved: [PR#4](https://github.com/melancholy14/elasticsearch_react/pull/4)
- [ ] Admin can add/edit/delete a question

## Tech Stack
1. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Typescript](https://www.typescriptlang.org/)-templated.
2. [Material-UI](https://mui.com/getting-started/usage/): This ui library is one of the most famous ones, developed and maintained by Google. I haven't used this before so I decided to make a new experience with it.
3. [React-Query](https://react-query.tanstack.com/overview): This out-of-box data-fetching library helps developers not only communicating with the backend but also caching, synchronizing and updating server state
4. [Vercel](https://vercel.com/): Vercel is a platform that let you deploy your frontend app easily and quickly by connecting to the Github repository. It also provides the preview feature that you can see what you're developing via a temporary URL with the domain ending with `vercel.app`.

## My Choices
- No Routing
  1. The user flow of this app is quite simple, "log in -> take a quiz -> review -> log out", and one page would be enough to display all steps using `useState`.
  2. Personally, I wanted to avoid additional minor tasks since having routing would give me another task such as authenticating when users access through a different path, not login.
- No Redux: This simple app does not require saving much data in a single source of storage, which means it's enough to use the cookie. [`Redux`](https://react-redux.js.org/) would be added once the app's scale becomes enlarged.

## Structure
- `components`: This project doesn't have `components` folders because all UI components are imported from `MUI`.
- `containers`: All logics including calling API and manipulating data happen in each container.
- `utils`: Functions that are not related to specific features belong to `utils`.

### User Case
This application would be responsible for the client part in the below case:
![usercase](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgVXNlciBjYXNlCgphY3RvcgAMBQpVc2VyLT5DbGllbnQ6IExvZ2luCgAIBi0-U2VydmVyAA8HIFJlcXVlc3QKbm90ZSByaWdodCBvZiAAHAhjaGVjayBpZiB0aGUgdQBlBm4gbG9nIGluCgBDBgBYDyBSZXNwb25zZQpsb29wIHRha2luZyAAXwVpb25zCiAgICAAehBRABcHAIEECSAgICAAexZmaW5kIGEARwkgZnJvbSBlbGFzdGljc2VhcmNoIHJhbWRvbmx5AGYFAIEUEABgCwCBIAcAgQUMVXNlcjogU2hvdwCBbAUAXQlkYXRhAIE1BQCCSg5TZWxlY3QgYW4gYW5zd2VyIGFuZCBzdWJtaQCBPQYAgmIQQQAgBgCBRCIAgmoNAEsGdGVkAF4IaXMgY29ycmVjdCBvciBub3QAcgZhdmUAgSQFIGluAIIEDgCBdBUAgQMJAIFpHmlmIGl0JwBhEACDQQVhbHQAhA0Gd2FudHMgdG8gdGFrZSBhbm90aGVyAINqCQCDbQUAgioSQ2xpY2sgTmV4AINoBmVsAIMEBwASGERvbgCDJgZlbmQKZW5kCgo&s=qsd)

## How to install
Please, be referred to this page: https://vercel.com/guides/deploying-react-with-vercel-cra

## How to run on locally
This step is assuming you already installed `yarn` on your machine. If not, you can use `npm` instead.

> elasticsearch_react > yarn install

> elasticsearch_react > yarn start

## Reference
- Create React App: https://create-react-app.dev/
