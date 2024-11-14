// khai báo mảng
let numbers = [1, 3, 10 , 5 ,2];
// khai báo biến max, khai báo mặc định là phần tử đầu tiên
let max = numbers[0]
// tạo vòng lặp duyệt mảng và so sánh với biến max
// khởi tạo i bắt đầu từ 1 - tức vị trí thứ 2 của mảng, điều kiện thoát khỏi vòng lặp khi i = chiều dài của mảng
for (let i = 1; i <= numbers.length; i++) {
    // sử dụng câu điều kiện if so sánh max với từng phần tử của mảng
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
document.write(max);
