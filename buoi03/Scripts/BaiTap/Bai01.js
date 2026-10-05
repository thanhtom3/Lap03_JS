
function thayDoiChuyenNganh() {
    var chuyenNganh = document.getElementById("chuyenNganh").value;
    var soTruongCell = document.getElementById("soTruong");

    if (chuyenNganh === "Hệ thống") {
        soTruongCell.innerText = "Phân tích & thiết kế";
    } else if (chuyenNganh === "Phần mềm") {
        soTruongCell.innerText = "Lập trình";
    } else if (chuyenNganh === "Mạng máy tính") {
        soTruongCell.innerText = "Quản lý mạng";
    } else {
        soTruongCell.innerText = "";
    }
}

function dangKy() {
    var maSV = document.getElementById("maSV").value.trim();
    var hoTen = document.getElementById("hoTen").value.trim();
    var tuoiInput = document.getElementById("tuoi").value.trim();
    var tuoi = parseInt(tuoiInput);

    var errMaSV = document.getElementById("errMaSV");
    var errHoTen = document.getElementById("errHoTen");
    var errTuoi = document.getElementById("errTuoi");
    var resNgoaiNgu = document.getElementById("resNgoaiNgu");
    var msgDangKy = document.getElementById("msgDangKy");

    var hopLe = true;

    if (maSV.length !== 10) {
        errMaSV.innerText = "Mã sinh viên gồm 10 ký tự";
        hopLe = false;
    } else {
        errMaSV.innerText = "";
    }

    if (hoTen === "" || hoTen.length > 30) {
        errHoTen.innerText = "Họ tên không rỗng và < 30 ký tự";
        hopLe = false;
    } else {
        errHoTen.innerText = "";
    }

    if (isNaN(tuoi) || tuoi < 18) {
        errTuoi.innerText = "Tuổi phải 18 trở lên";
        hopLe = false;
    } else {
        errTuoi.innerText = "";
    }

    var listNgoaiNgu = [];
    var chkAnh = document.getElementById("chkAnh");
    var chkPhap = document.getElementById("chkPhap");
    var chkNhat = document.getElementById("chkNhat");

    if (chkAnh.checked) listNgoaiNgu.push("Anh");
    if (chkPhap.checked) listNgoaiNgu.push("Pháp");
    if (chkNhat.checked) listNgoaiNgu.push("Nhật");

    if (listNgoaiNgu.length > 0) {
        resNgoaiNgu.innerText = listNgoaiNgu.join(" và ");
    } else {
        resNgoaiNgu.innerText = "Chưa chọn ngoại ngữ";
    }

    if (hopLe) {
        msgDangKy.style.color = "blue";
        msgDangKy.innerText = "Bạn đã đăng ký thành công";
    } else {
        msgDangKy.style.color = "blue";
        msgDangKy.innerText = "Bạn phải nhập lại cho đúng";
    }
}