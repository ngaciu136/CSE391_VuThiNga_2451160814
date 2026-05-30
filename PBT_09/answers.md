# Phần A

## Câu A1:

1. DOM Tree

```
div#app
│
├── header
│   │
│   ├── h1
│   │   └── "Todo App"
│   │
│   └── nav
│       │
│       ├── a.active
│       │   └── "All"
│       │
│       ├── a
│       │   └── "Active"
│       │
│       └── a
│           └── "Completed"
│
└── main
    │
    ├── form#todoForm
    │   │
    │   ├── input#todoInput
    │   │
    │   └── button
    │       └── "Add"
    │
    └── ul#todoList
        │
        ├── li.todo-item
        │   └── "Learn HTML"
        │
        └── li.todo-item.completed
            └── "Learn CSS"
```

2. Viết querySelector

- Chọn thẻ `<h1>`:
  - ```javascript
    const heading = document.querySelector("h1");
    ```

- Chọn input trong form
  - ```javascript
    const input = document.querySelector("#todoInput");
    ```
- Chọn tất cả `.todo-item`
  - ```javascript
    const todos = document.querySelectorAll(".todo-item");
    ```

- Chọn link đang active
  - ```javascript
    const activeLink = document.querySelector("a.active");
    ```
- Chọn `<li> `đầu tiên trong `#todoList`
  - ```javascript
    const firstTodo = document.querySelector("#todoList li:first-child");
    ```
- Chọn tất cả `<a> `bên trong `<nav>`
  - ```javascript
    const links = document.querySelectorAll("nav a");
    ```

## Câu A2:

- innerHTML:
  - Đọc/ghi nội dung dưới dạng HTML
  - HTML được trình duyệt phân tích và render
  - Chậm hơn
  - Có nguy cơ XSS
- textContent
  - Đọc/ghi nội dung dưới dạng text
  - HTML được hiển thị như văn bản bình thường
  - Nhanh hơn
  - An toàn hơn

Ví dụ:

- innerHTML: dùng khi muốn thêm HTML động
  ```javascript
  const div = document.querySelector("#demo");
  div.innerHTML = "<h2>Hello</h2>";
  ```
- textContent: khi hiển thị dữ liệu do người dùng nhập
  ```javascript
  const div = document.querySelector("#demo");
  div.textContent = "<h2>Hello</h2>";
  ```
- innerHTML có thể gây lỗ hổng XSS vì nó coi chuỗi được gán vào là mã HTML và sẽ phân tích (parse) nó thay vì hiển thị như văn bản thông thường. Nếu dữ liệu đến từ người dùng mà không được kiểm tra, kẻ tấn công có thể chèn các thẻ HTML hoặc JavaScript độc hại vào trang web

## Câu A3:

- Thứ tự console.log: BUTTON - INNER - OUTER
- Khi click vào button: BUTTON - INNER - OUTER
- Khi có stopPropagation(): BUTTON
