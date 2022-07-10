/*
-đầu vào
+khai báo số có 2 chữ số
-xử lý
+lấy ra số hàng chục
+lấy ra số hàng đơn vị
+tính tổng số hàng chục và hàng đơn vị
-đầu ra
+xuất ra tổng
*/

var a = 12;

var hang_chuc = Math.floor(a/10);
console.log("số hàng chục: "+hang_chuc);
var hang_don_vi =Math.floor(a%10);
console.log("số hàng đơn vị: "+hang_don_vi);

var tong = hang_chuc+hang_don_vi;
console.log("tổng: "+tong);
