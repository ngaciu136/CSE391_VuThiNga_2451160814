function createCart() {
  // Private data
  let items = [];
  let discount = 0;
  let freeShip = 0;
  return {
    // Thêm sản phẩm (nếu đã có → tăng quantity)
    addItem(product, quantity = 1) {
      let found = items.find((item) => item.id === product.id);
      if (found) {
        found.quantity += quantity;
      } else {
        items.push({
          ...product,
          quantity: quantity,
        });
      }
    },

    // Xóa sản phẩm theo id
    removeItem(productId) {
      items = items.filter((item) => item.id !== productId);
    },

    // Cập nhật số lượng
    updateQuantity(productId, newQuantity) {
      let item = items.find((item) => item.id === productId);
      if (item) {
        if (newQuantity <= 0) {
          this.removeItem(productId);
        } else {
          item.quantity += newQuantity;
        }
      }
    },

    // Tính tổng tiền
    getTotal() {
      let total = 0;
      for (let item of items) {
        total += item.price * item.quantity;
      }
      total = total - (total * discount) / 100;
      total = total - freeShip;
      if (total < 0) {
        total = 0;
      }
      return total;
    },

    // Áp dụng mã giảm giá
    applyDiscount(code) {
      discount = 0;
      freeShip = 0;
      if (code === "SALE10") {
        discount = 10;
      } else if (code === "SALE20") {
        discount = 20;
      } else if (code === "FREESHIP") {
        freeShip = 3000;
      } else {
        console.log("Mã giảm giá không hợp lệ");
      }
    },
    // Codes: "SALE10" → -10%, "SALE20" → -20%, "FREESHIP" → -30000

    // In giỏ hàng dạng bảng
    printCart() {
      console.log("GIỎ HÀNG");
      if (items.length === 0) {
        console.log("Giỏ hàng trống");
        return;
      }
      let i = 1;
      for (item of items) {
        let total = item.price * item.quantity;
        console.log(
          i + ".",
          item.name,
          "| SL:",
          item.quantity,
          "| Đơn giá:",
          item.price,
          "| Tổng:",
          total,
        );
        i++;
      }
      console.log("-------------------");
      console.log("Tổng cộng:", this.getTotal());
    },

    // Lấy tổng số sản phẩm (tổng quantity)
    getItemCount() {
      let total = 0;
      for (let item of items) {
        total += item.quantity;
      }
      return total;
    },

    // Xóa toàn bộ giỏ
    clearCart() {
      items = [];
      discount = 0;
      freeShip = 0;
    },
  };
}

// === TEST ===
const cart = createCart();

cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1); // Tăng lên 2

cart.printCart();
// Kỳ vọng:
// ┌──────────────────────────────────────────────┐
// │ # │ Sản phẩm      │ SL │ Đơn giá     │ Tổng        │
// │ 1 │ iPhone 16      │  2 │ 25.990.000  │ 51.980.000  │
// │ 2 │ AirPods Pro    │  2 │  6.990.000  │ 13.980.000  │
// ├──────────────────────────────────────────────┤
// │ Tổng cộng:                       65.960.000đ │
// └──────────────────────────────────────────────┘

cart.applyDiscount("SALE10");
cart.printCart();
// → Tổng: 59.364.000đ (giảm 10%)

console.log("Số SP:", cart.getItemCount()); // → 4
cart.removeItem(3);
console.log("Sau xóa:", cart.getItemCount()); // → 2
