# **README for HTTP Status Code API and Virtual Assistant API**

## **Introduction**

The **HTTP Status Code API** is a tool to help developers learn and understand HTTP status codes. It allows users to input a status code and returns a detailed message about what the code means. This API is particularly useful for students, new developers, and anyone trying to master HTTP communication.

---

## **API Details**

### **HTTP Status Code API**

#### **Endpoint:**
**GET** `/status-info?code=<status_code>`;

#### **Request Parameters:**
- **code (required):** The HTTP status code to query, sent as a query parameter.

#### **Response Format:**
A **JSON object** containing:
1. The **status code**.
2. A **message** explaining the meaning of the status code.

---

### **Virtual Assistant API**

#### **Endpoint:**
**GET** `/assistant/greet?name=<user_name>`

#### **Request Parameters:**
- **name (required):** The HTTP status code to query, sent as a query parameter.

#### **Response Format:**
A **JSON object** containing:
1. The status code.
2. A message explaining the meaning of the status code.

---

## **Supported Status Codes**

### **Successful Responses (200–299):**
- **200 OK:** Request was successful.
- **201 Created:** A resource has been successfully created.
- **204 No Content:** Request processed successfully, no content returned.

### **Client Error Responses (400–499):**
- **400 Bad Request:** The request is invalid due to client-side errors.
- **401 Unauthorized:** Authentication is required to access the resource.
- **403 Forbidden:** Server refuses to authorize the request.
- **404 Not Found:** The resource does not exist.
- **405 Method Not Allowed:** HTTP method not supported for this resource.
- **429 Too Many Requests:** User has exceeded rate limits.

### **Server Error Responses (500–599):**
- **500 Internal Server Error:** The server encountered an error.
- **502 Bad Gateway:** The server received an invalid response from the upstream server.
- **503 Service Unavailable:** Server temporarily overloaded or under maintenance.
- **504 Gateway Timeout:** The server did not receive a timely response from the upstream server.

---

## **Example Responses**

### **HTTP Status Code API**
#### **For 200 OK:**
```json
{
  "status": 200,
  "message": "OK: The request has succeeded. The meaning of this status depends on the HTTP method used."
}
```

#### **For 404 Not Found:**
```json
{
  "status": 404,
  "message": "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
}
```

#### **For 500 Internal Server Error:**
```json
{
  "status": 500,
  "message": "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
}
```


---

## **How to Fork and Set Up Your Repository**

### **1. Fork the Repository**
- Go to the repository on GitHub and click the **Fork** button at the top right of the page. This will create a copy of the repository in your own GitHub account.

### **2. Clone the Repository**
- Once the repository is forked, click the **Clone** button and copy the link (HTTPS or SSH).
- Open your terminal/command prompt and run:
  ```bash
  git clone <repository_url>
  ```
  Replace `<repository_url>` with the link you copied from your GitHub.

### **3. Install Dependencies**
- Navigate to the cloned directory:
  ```bash
  cd <repository_folder>
  ```
- Install all necessary dependencies mentioned in the `package.json` file:
  ```bash
  npm install
  ```

---

## **Task Instructions**


### **HTTP Status Code API**
1. Implement the API to respond with the correct status message based on the input status code.

### **Testing**
- Test the API locally to ensure everything works properly.
- You can use **Postman** or visit the URL in your browser to see the output.

---

## **How to Commit and Push Your Changes**

1. Add your changes to git:
   ```bash
   git add .
   ```
2. Commit your changes with a message:
   ```bash
   git commit -m "Completed solution for Virtual Assistant API and Status Code API"
   ```
3. Push your changes to your GitHub repository:
   ```bash
   git push origin main
   ```

---

## **Submission Instructions**

- Once you have committed and pushed your changes, submit the **GitHub repository link** to your instructor.
- The link should be in the format:  
  **`https://github.com/<your_username>/<repository_name>`**

### **Example Submission**
If your GitHub username is `johnDoe` and your repository is named `http-status-api`, the submission link would be:  
**`https://github.com/johnDoe/http-status-api`**

---
