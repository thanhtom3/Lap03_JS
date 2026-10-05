function kiemTraRong(idInput, idError, tenTruong) {
    var inputVal = document.getElementById(idInput).value.trim();
    var errorElem = document.getElementById(idError);

    if (inputVal === "") {
        errorElem.innerText = "Vui lòng nhập " + tenTruong;
        return false;
    } else {
        errorElem.innerText = "";
        return true;
    }
}


function kiemTraSDT() {
    var sdt = document.getElementById("sdt").value.trim();
    var errSDT = document.getElementById("errSDT");
    var isNum = /^\d+$/.test(sdt); 

    if (sdt === "") {
        errSDT.innerText = "Vui lòng nhập số điện thoại";
        return false;
    } else if (!isNum || sdt.length < 10) {
        errSDT.innerText = "Số điện thoại phải chứa từ 10 ký số trở lên";
        return false;
    } else {
        errSDT.innerText = "";
        return true;
    }
}

function chonDiaChi(loaiDiaChi) {
    if (loaiDiaChi === 'vanphong') {
        alert("Bạn chọn giao hàng tại văn phòng");
    } else if (loaiDiaChi === 'nharieng') {
        alert("Bạn chọn giao hàng tại nhà riêng");
    }
}

function luuThongTin() {
    var validTen = kiemTraRong("ten", "errTen", "họ tên");
    var validDiaChi = kiemTraRong("diaChi", "errDiaChi", "địa chỉ nhận hàng");
    var validSDT = kiemTraSDT();
    var validTinh = kiemTraRong("tinh", "errTinh", "tỉnh / thành phố");
    var validQuan = kiemTraRong("quan", "errQuan", "quận / huyện");
    var validPhuong = kiemTraRong("phuong", "errPhuong", "phường / xã");

    if (validTen && validDiaChi && validSDT && validTinh && validQuan && validPhuong) {
        alert("Lưu thông tin thành công");
    } else {
        alert("Thông tin nhập không hợp lệ");
    }
}