# API Documentation

## Base URL

https://localhost:4000/

---

## Task APIs

### Create Task

**URL:** `/api/task/create-task`  
**Method:** `POST`

**Request Body:**

```json
{
  "id": 2,
  "title": "My second task",
  "description": "This is a test second task",
  "status": {
    "pending": true,
    "in-progress": false,
    "done": false
  }
}
```

---

### Get All Tasks

**URL:** `/api/task/get-all-task`  
**Method:** `GET`

---

### Get single Tasks

**URL:** `/api/task/get-single-task`  
**Method:** `GET`

---

---
### Get single Task with filter

**URL:** `/api/task/get-single-task-filter?status=pending`
**Method:** `GET`

### Update single Tasks

**URL:** `/api/task/update-task/:id`  
**Method:** `PUT`

```json
{
  "id": 2,
  "title": "My second task",
  "description": "This is a test second task is updated",
  "status": {
    "pending": true,
    "in-progress": false,
    "done": false
  }
}
```

---

### Delete single Tasks

**URL:** `/api/task/delete-task/:id`  
**Method:** `DELETE`
