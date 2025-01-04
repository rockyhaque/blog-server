# Blog Server

A blogging platform API that allows users to perform authentication, manage users, and handle blog operations. Built with **Node.js**, **Express**, and **MongoDB**, this project implements user authentication, role-based access control, and CRUD operations.

- **Admin** has special permissions to manage users and their blogs.
- **Users** can perform CRUD operations on their own blogs. 

<br>

> Live Link ➡️ 

## Credentials

### 🥇Admin Login

Email:
```
auth.admin.rocky@gmail.com
```
password:
```
authAdmin123
```
<hr>

### 🥈User Login

Email:
```
auth.user.rocky@gmail.com
```
password:
```
authUser123
```

## Features & Roles


#### Admin:
- Created manually in the database with predefined credentials.
- Can delete any blog.
- Can block any user by updating the `isBlocked` property.
- **Cannot update any blog**.

#### User:
- Can register and log in.
- Can create blogs (only when logged in).
- Can update and delete their own blogs.
- **Cannot perform admin actions**.

### 2. Authentication & Authorization
- **Authentication**:
  - Users must log in to perform write, update, and delete operations.
- **Authorization**:
  - Admin and User roles must be differentiated and secured.



### Error Handling

- Comprehensive error handling for product unavailability and insufficient stock.
- Detailed, user-friendly error responses.
- Missing or invalid data.

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **JWT** for authentication
- **Zod** for validation
- **bcrypt** for password hashing

## Getting Started

### Project Structure

![Code Example](https://i.ibb.co.com/qYK7M9Y/carbon-6.png)



### Prerequisites

- Node.js (v14 or above)
- MongoDB (running instance locally or in the cloud)
- Git

## Installation

1. Clone the Repository

   ```
   https://github.com/rockyhaque/blog-server
   ```

   ```
   cd blog-server
   ```

2. Install Dependencies

   ```
   npm install
   ```

3. Set Up Environment Variables Create a `.env` file in the root directory and include the following:

   ```
   PORT=5000
   ```

   ```
   MONGO_URI=mongodb://localhost:27017
   ```

4. Run the Application Start the server in development mode:

   ```
   npm run dev
   ```

## API Endpoints

### 1. Authentication

📌  Register User - 

    - Endpoint: `POST /api/auth/register`
    - Request Body:

      ```
      {
         "name": "John Doe",
         "email": "john@example.com",
         "password": "securepassword"
      }
      ```

    - Response: User registered successfully

📌  Login User - 

    - Endpoint: `POST /api/auth/login`
    - Request Body:

      ```
      {
         "email": "john@example.com",
         "password": "securepassword"
      }
      ```

    - Response: Login successful




### 2. Blogs

1. Create a Blogs

   - Endpoint: `/api/blogs`
   - Request Body:

     ```
     {
        "title": "My First Blog",
        "content": "This is the content of my blog."
     }
     ```

   - Response: Success message with created blog details.

2. Get All Blogs

   #### Query Parameters:

   - `search:` Search blogs by title or content (e.g., `search=blogtitle`).
   - `sortBy:` Sort blogs by specific fields such as `createdAt` or `title` (e.g., `sortBy=title`).
   - `sortOrder:` Defines the sorting order. Accepts values `asc` (ascending) or `desc` (descending). (e.g., `sortOrder=desc`).
   - `filter:` Filter blogs by author ID (e.g., `filter=authorId`).

   #### Example Request URL:
      ```
      /api/blogs?search=technology&sortBy=createdAt&sortOrder=desc&filter=60b8f42f9c2a3c9b7cbd4f18
      ```

3. Get a Specific Blog

   - Endpoint: `GET /api/blogs/:id`
   - Response: Details of the specific Blog.

4. Update a Blog

   - Endpoint: `PATCH /api/blog/:id`
   - Request Body: Fields to update (e.g., `title`, `content`).
   - Response: Success message with updated Blog details.

5. Delete a Blog
   - Endpoint: `DELETE /api/blogs/:id`
   - Response: Success message confirming the deletion.


### 3. Admin Actions

### **1. Block User**

#### Endpoint
`PATCH /api/admin/users/:userId/block`

#### Description
Allows an admin to block a user by updating the `isBlocked` property to `true`.

#### Request Header

> Authorization: Bearer <admin_token>



### **2. Delete Blog**

#### Endpoint
`PATCH /api/admin/blogs/:id`

#### Description
Allows an admin to delete any blog by its ID.

#### Request Header

> Authorization: Bearer <admin_token>




## Error Response Example

### Validation Error

```
{
  "success": false,
  "message": "Error message describing the issue",
  "statusCode": 400, // or other relevant HTTP status code
  "error": {"details": "Additional error details, if applicable"},
  "stack": "error stack trace, if available"
}

```

### Resource Not Found

```
{
  "message": "Not found",
  "success": false,
  "error": "ResourceNotFound"
}
```

## Contributing

1. Fork the repository.
2. Create a new branch:

   ```
   git checkout -b feature-name
   ```

3. Commit and push changes:
   ```
   git commit -m "Add feature-name"
   ```
   ```
   git push origin feature-name
   ```
4. Open a pull request.

## Contact

For inquiries, reach out to rockyhaque71@gmail.com
