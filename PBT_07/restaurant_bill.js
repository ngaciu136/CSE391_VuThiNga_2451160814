function taoHoaDon(menu, thu = "", tip = false) {
  let total = 0;
  for (let mon of menu) {
    total += mon.gia * mon.soLuong;
  }

  let giamGia = 0;
  if (total > 500000) {
    giamGia = 10;
  } else if (total > 1000000) {
    giamGia = 15;
  }

  if (thu.toLowerCase === "wednesday") {
    giamGia += 5;
  }

  let tienGiam = (total * giamGia) / 100;
  let sauGiam = total - tienGiam;
  let vat = sauGiam * 0.08;
  let tienTip = 0;
  if (tip) {
    tienTip = sauGiam * 0.05;
  }

  let thanhToan = sauGiam + vat + tienTip;
  for (let mon of menu) {
    let thanhTien = mon.gia * mon.soLuong;
    console.log(mon.ten + " x" + mon.soLuong + " = " + thanhTien + "đ");
  }

  console.log("-------------------");
  console.log("Tổng: " + total + "đ");
  console.log("Giảm: " + tienGiam + "đ");
  console.log("VAT: " + vat + "đ");
  console.log("Tip: " + tip + "đ");
  console.log("Thanh toán: " + thanhToan + "đ");
}
const danhSachMon = [
  {
    ten: "Phở bò",
    gia: 65000,
    soLuong: 2,
  },

  {
    ten: "Trà đá",
    gia: 5000,
    soLuong: 3,
  },

  {
    ten: "Bún chả",
    gia: 55000,
    soLuong: 1,
  },
];

taoHoaDon(danhSachMon, "Wednesday", true);
