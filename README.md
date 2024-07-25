#  Task Management App

This project is a Task Management App built using Angular 15. It leverages a JSON server for data storage and adheres to the OpenAPI Specification to ensure a  API design.


## Author

- @ritu-s9


## Tech Stack

**Client:** Angular,PrimeNg

**Server:** Json Server

## API Reference

#### Get all tasks

```http
  GET /tasks
```

| Type     | Description                |
| :------- | :------------------------- |
| `string` |get all tasks |

#### Delete task

```http
  DELETE /tasks/${id}
```

| Type     | Description                |
| :------- | :------------------------- |
| `string` |to delete the particular id |



## Features

- ### All Tasks
    - listing the all tasks here.
- ### Delete Tasks
    - Delete a particular task by selected ID.
    - Show a confirmation message to confirm the delete operation.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
