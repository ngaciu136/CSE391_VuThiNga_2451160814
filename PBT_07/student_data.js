// Tính điểm trung bình (math×0.4 + physics×0.3 + cs×0.3) cho mỗi sinh viên
// Xếp loại: ≥8.0 Giỏi, ≥6.5 Khá, ≥5.0 Trung bình, <5.0 Yếu
// In bảng kết quả:
// | STT | Tên    | TB   | Xếp loại    |
// |-----|--------|------|-------------|
// | 1   | An     | 8.0  | Giỏi        |
// | 2   | Bình   | 7.2  | Khá         |
// ...
// Đếm số SV mỗi xếp loại
// Tìm SV có điểm TB cao nhất và thấp nhất
// Tính điểm TB toàn lớp cho từng môn
// Bonus: Tính điểm TB theo giới tính
const students = [
  { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
  { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
  { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
  { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
  { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
  { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
  { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
  { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

let countGioi = 0;
let countKha = 0;
let countTB = 0;
let countYeu = 0;

let maxStudent = students[0];
let minStudent = students[0];

let totalMath = 0;
let totalPhysics = 0;
let totalCS = 0;

let totalMale = 0;
let totalFemale = 0;
let countMale = 0;
let countFemale = 0;

console.log("| STT | Tên | TB | Xếp loại |");
console.log("--------------------------------");
for (let i = 0; i < students.length; i++) {
  let avg =
    students[i].math * 0.4 + students[i].physics * 0.3 + students[i].cs * 0.3;
  avg = avg.toFixed(2);
  let rank = "";
  if (avg >= 8.0) {
    rank = "Giỏi";
    countGioi++;
  } else if (avg >= 6.5) {
    rank = "Khá";
    countKha++;
  } else if (avg >= 5.0) {
    rank = "Trung bình";
    countTB++;
  } else {
    rank = "Yếu";
    countYeu++;
  }
  console.log(`| ${i + 1} | ${students[i].name} | ${avg} | ${rank} |`);
  if (
    avg >
    maxStudent.math * 0.4 + maxStudent.physics * 0.3 + maxStudent.cs * 0.3
  ) {
    maxStudent = students[i];
  }
  if (
    avg <
    minStudent.math * 0.4 + minStudent.physics * 0.3 + minStudent.cs * 0.3
  ) {
    minStudent = students[i];
  }
  totalMath += students[i].math;
  totalPhysics += students[i].physics;
  totalCS += students[i].cs;

  if (students[i].gender === "M") {
    totalMale += Number(avg);
    countMale++;
  }
  if (students[i].gender === "F") {
    totalFemale += Number(avg);
    countFemale++;
  }
}
console.log("\nSố lượng xếp loại:");
console.log(`Giỏi: ${countGioi}`);
console.log(`Khá: ${countKha}`);
console.log(`Trung bình: ${countTB}`);
console.log(`Yếu: ${countYeu}`);

let maxAvg =
  maxStudent.math * 0.4 + maxStudent.physics * 0.3 + maxStudent.cs * 0.3;
let minAvg =
  minStudent.math * 0.4 + minStudent.physics * 0.3 + minStudent.cs * 0.3;

console.log(
  `\nSinh viên có điểm TB cao nhất: ${maxStudent.name} với điểm TB ${maxAvg.toFixed(2)}`,
);
console.log(
  `Sinh viên có điểm TB thấp nhất: ${minStudent.name} với điểm TB ${minAvg.toFixed(2)}`,
);

console.log(`/nĐiểm trung bình từng môn của lớp:`);
console.log(`Toán: ${(totalMath / students.length).toFixed(2)}`);
console.log(`Lý: ${(totalPhysics / students.length).toFixed(2)}`);
console.log(`Tin: ${(totalCS / students.length).toFixed(2)}`);

console.log(`\nĐiểm trung bình theo giới tính:`);
console.log(`Nam: ${(totalMale / countMale).toFixed(2)}`);
console.log(`Nữ: ${(totalFemale / countFemale).toFixed(2)}`);
