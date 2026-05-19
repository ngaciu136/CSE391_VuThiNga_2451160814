# Phần A:

## Câu A1:

1. `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

- `name="viewport"`: Báo cho trình duyệt đây là cấu hình viewport cho thiết bị di động
- `width=device-width`: Chiều rộng viewport = đúng chiều rộng màn hình thiết bị
- `initial-scale=1.0`: Mức zoom ban đầu là 100%

2. Thiếu dòng này: iPhone giả định trang rộng 980px (như desktop) → thu nhỏ lại → chữ bé xíu → UX tệ.

3.

- Mobile-First:
  - Viết css cho mobile trước
  - Dùng `min-width`
  - Layout nhỏ → mở rộng dần
  - Ví dụ:
  ```css
  @media (min-width: 768px) {
    .container {
      background: lightblue;
      padding: 40px;
    }
  }
  ```
- Desktop-First:
  - Viết css cho desktop trước
  - Dùng `max-width`
  - Layout lớn → thu nhỏ dần
  - Ví dụ:

  ```css
  @media (max-width: 768px) {
    .container {
      background: pink;
      padding: 20px;
    }
  }
  ```

- Mobile-First được khuyên dùng vì:
  - Đa số người dùng dùng điện thoại
  - Google ưu tiên mobile indexing
  - Mobile constraints khó hơn desktop

## Câu A2:

Breakpoints chuẩn:  
| Tên | Min-width | Thiết bị điển hình | Ví dụ |
|---|---|---|---|
| **Mobile** | < 576px | iPhone SE, các điện thoại nhỏ | 1 cột
| **Mobile L** | ≥ 576px | iPhone Plus, điện thoại ngang | 2 cột
| **Tablet** | ≥ 768px | iPad dọc, tablet | 2-3 cột
| **Desktop** | ≥ 992px | Laptop nhỏ | 3-4 cột
| **Desktop L** | ≥ 1200px | Desktop, laptop lớn | 4 cột
| **Desktop XL** | ≥ 1400px | Màn hình 4K, ultrawide | 5-6 cột

## Câu A3:

| Chiều rộng màn hình | `.container` width |
| ------------------- | ------------------ |
| 375px (iPhone SE)   | 100%               |
| 600px               | 540px              |
| 800px               | 720                |
| 1000px              | 960                |
| 1400px              | 1140               |

## Câu A4:

- 4 tính năng chính của SCSS:
  - Variables: SCSS cho phép lưu giá trị vào biến bằng `$`

  ```css
  $primary-color: #ff69b4;
  $text-color: #333;

  button {
    background: $primary-color;
    color: $text-color;
  }
  ```

  - Nesting: Viết CSS lồng nhau

  ```css
  .navbar {
    background: pink;
    ul {
      display: flex;
    }
    li {
      list-style: none;
    }
    a {
      text-decoration: none;
      color: black;
    }
  }
  ```

  - Mixins: Tái sử dụng block CSS

  ```css
  @mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero {
    @include flex-center;
    height: 100vh;
  }
  ```

  - `@extend `/ Inheritance: Cho phép class kế thừa CSS từ class khác

  ```css
  .button {
    padding: 10px 20px;
    border-radius: 8px;
  }

  .btn-primary {
    @extend .button;

    background: blue;
  }

  .btn-danger {
    @extend .button;

    background: red;
  }
  ```

- Trình duyệt KHÔNG đọc được `.scss` vì:
  - Nó không phải là css chuẩn
  - Nó là preprocessor syntax
  - Trình duyệt chỉ hiểu html, css, js
- Dùng `SCSS Compiler` để SCSS → CSS
