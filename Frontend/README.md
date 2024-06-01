
## Routes

### Authentication Routes

- **POST /register**: Register a new user.
- **POST /login**: Login an existing user.
- **POST /logout**: Logout the current user.
- **GET /profile**: Get the profile of the logged-in user. This route is protected by authentication middleware.

### Creator Routes

- **GET /getVideos**: Retrieve all videos uploaded by the logged-in creator. This route is protected by authentication middleware.
- **POST /uploadVideo**: Upload a new video and its thumbnail. This route is protected by authentication middleware.
- **DELETE /deleteVideo/:id**: Delete a video by its ID. This route is protected by authentication middleware.

### Student Routes

- **POST /addnewtask**: Add a new task for the logged-in student. This route is protected by authentication middleware.
- **GET /gettasks**: Retrieve all tasks for the logged-in student. This route is protected by authentication middleware.
- **DELETE /deletetask/:id**: Delete a task by its ID. This route is protected by authentication middleware.
- **GET /getVideos/:keywords**: Retrieve videos related to the provided keywords. This route is protected by authentication middleware.
- **GET /getVideo/:id**: Retrieve a video by its ID. This route is protected by authentication middleware.

## Middleware

- **auth.middleware.js**: Contains the `isAuthenticated` middleware function to protect routes that require user authentication.
- **video.middleware.js**: Contains middleware for handling video uploads using `multer`.

## Controllers

- **authControllers.controllers.js**: Handles user registration, login, logout, and profile retrieval.
- **creatorControllers.controllers.js**: Manages video content for creators, including getting videos, uploading videos, and deleting videos.
- **studentControllers.controllers.js**: Manages tasks for students, including adding new tasks, retrieving tasks, deleting tasks, and retrieving videos related to tasks.
