// 1. Cập nhật đồng hồ thời gian thực bằng setInterval (Chương 5 - Mục 5.1)
function updateClock() {
    let clockElem = document.getElementById("live-clock");
    if (clockElem !== null) {
        let now = new Date();
        clockElem.innerText = now.toLocaleTimeString();
    }
}
setInterval(updateClock, 1000);

// 2. Lớp đối tượng CatProfile (Chương 5 - Mục 5.3 OOP Class, Constructor, Getter)
class CatProfile {
    constructor(name, breed, gender, age, location, owner, desc) {
        this._name = name;
        this.breed = breed;
        this.gender = gender;
        this.age = age;
        this.location = location;
        this.owner = owner;
        this.desc = desc;
    }
    get catName() {
        return this._name;
    }
    introduce() {
        return `Bé ${this._name} (${this.breed}, ${this.age} tháng tuổi) tại ${this.location} - Chủ nuôi: ${this.owner}. Tính cách: ${this.desc}`;
    }
}

// Danh sách dữ liệu mèo Việt Nam để ghép đôi (Chương 5 - Mảng & Đối tượng)
const catDatabase = [
    new CatProfile("Mướp", "Mèo Ta Vàng", "Đực", 14, "Đống Đa, Hà Nội", "Minh Anh", "Ngoan, thích ăn cá hấp và nằm sưởi nắng"),
    new CatProfile("Bơ", "Anh Lông Ngắn (ALN)", "Cái", 12, "Cầu Giấy, Hà Nội", "Hoàng Nam", "Mũm mĩm, mắt tròn xoe, quấn chủ"),
    new CatProfile("Mochi", "Scottish Fold (Tai cụp)", "Cái", 10, "Quận 1, TP.HCM", "Thu Thảo", "Hiền lành, thích chơi cần câu lông vũ"),
    new CatProfile("Simba", "Mèo Ba Tư", "Đực", 18, "Hai Bà Trưng, Hà Nội", "Việt Hoàng", "Lông dày trắng muốt, điềm đạm, lịch lãm"),
    new CatProfile("Đậu Đậu", "Munchkin Chân Ngắn", "Đực", 15, "Đà Nẵng", "Ngọc Lan", "Chân lùn đáng yêu, chạy nhảy vui nhộn"),
    new CatProfile("Tuyết", "Mèo Ragdoll", "Cái", 16, "Tây Hồ, Hà Nội", "Đức Phúc", "Mắt xanh dương, tính cách tiểu thư dịu dàng")
];

// 2b. Dữ liệu chi tiết cho từng hồ sơ ghép đôi (Chương 5 - Mục Đối tượng Object)
//     Nút "Chi tiết" tại products.html truyền mã hồ sơ qua URL ?ma=CAT01...CAT06
//     để trang product-detail.html lấy đúng thông tin của bé đó và đổ vào trang.
const chiTietHoSo = {
    "CAT01": {
        ten: "Mướp",
        giong: "Mèo Ta Vàng",
        tuoi: 14,
        hinh: "images/cat-muop.jpg",
        hinhGoc2: "",
        gia: 250000,
        goiCart: "Gói Hẹn Hò Cùng Bé Mướp",
        tieuDe: "Bé Mướp - Tìm Bạn Cái Cùng Dòng Mèo Ta Vàng",
        mauLong: "Vàng Cam (Mèo Ta)",
        canNang: "3.6 kg",
        chuNuoi: "Chị Minh Anh",
        khuVuc: "Phường Khâm Thiên, Đống Đa, Hà Nội",
        tiemPhong: "Đã tiêm 3 bệnh cơ bản",
        xetNghiem: "Xét nghiệm FIV/FeLV: Âm tính",
        thanThien: 88,
        muiTiem: 3,
        tongMui: 3,
        motaChiTiet: "Bé Mướp hiện 14 tháng tuổi, sinh sống cùng chị Minh Anh tại Đống Đa, Hà Nội. Một chú Mèo Ta Vàng đực màu cam rực rỡ, mũi hồng, đôi mắt vàng đồng. Bé ngoan ngoãn, ngày nào cũng chờ chị chủ về để được ăn cá hấp và nằm sưởi nắng trên ban công. Cat Lounge khuyến nghị bạn đời trầm tính, cùng bé hóng nắng mỗi buổi chiều.",
        danhGia: "⭐⭐⭐⭐⭐ <b>Chị Mai Hoa (Long Biên):</b> \"Tháng trước mình cho bé Smokey nhà mình tham gia buổi cà phê cùng bé Mướp tại Cat Lounge. Hai bé ăn chung hạt và ngủ chung đệm suốt buổi, giờ còn rủ nhau đi dạo mỗi tuần!\""
    },
    "CAT02": {
        ten: "Bơ",
        giong: "Anh Lông Ngắn (ALN)",
        tuoi: 12,
        hinh: "images/cat-bo.jpg",
        hinhGoc2: "images/cat-bo-2.jpg",
        gia: 350000,
        goiCart: "Gói Hẹn Hò Cùng Bé Bơ",
        tieuDe: "Bé Bơ - Tìm Bạn Trai Cùng Dòng ALN hoặc Scottish",
        mauLong: "Xám Xanh (Blue)",
        canNang: "4.2 kg",
        chuNuoi: "Anh Trần Hoàng Nam",
        khuVuc: "Phường Dịch Vọng, Cầu Giấy, Hà Nội",
        tiemPhong: "Đã tiêm phòng 4 bệnh & Dại",
        xetNghiem: "Xét nghiệm FIV/FeLV: Âm tính",
        thanThien: 95,
        muiTiem: 3,
        tongMui: 3,
        motaChiTiet: "Bé Bơ hiện 12 tháng tuổi, sinh sống cùng anh Trần Hoàng Nam tại Quận Cầu Giấy, Hà Nội. Bé có bộ lông màu xám xanh dày mượt, má phúng phính, tính tình cực kỳ hiền lành và chưa từng cào cấu.",
        danhGia: "⭐⭐⭐⭐⭐ <b>Chị Thu Hà (Đống Đa):</b> \"Tháng trước mình cho bé Milo nhà mình qua giao lưu tại phòng chờ của Catcake. Không gian rất sạch sẽ, bé Bơ ở ngoài nhìn còn tròn và đáng yêu hơn trong ảnh!\""
    },
    "CAT03": {
        ten: "Mochi",
        giong: "Scottish Fold (Tai Cụp)",
        tuoi: 10,
        hinh: "images/cat-mochi.jpg",
        hinhGoc2: "",
        gia: 400000,
        goiCart: "Gói Hẹn Hò Cùng Bé Mochi",
        tieuDe: "Bé Mochi - Tìm Bạn Trai Cùng Dòng Scottish Hoặc ALN",
        mauLong: "Xám Vằn Tai Cụp",
        canNang: "3.2 kg",
        chuNuoi: "Chị Thu Thảo",
        khuVuc: "Phường Bến Nghé, Quận 1, TP.HCM",
        tiemPhong: "Đã tiêm 3 bệnh cơ bản",
        xetNghiem: "Xét nghiệm FIV/FeLV: Âm tính",
        thanThien: 92,
        muiTiem: 2,
        tongMui: 3,
        motaChiTiet: "Bé Mochi hiện 10 tháng tuổi, sinh sống cùng chị Thu Thảo tại Quận 1, TP.HCM. Tai cụp chuẩn phả hệ, bộ lông xám vằn ngắn mượt. Bé hiền lành nhất nhà, mê cần câu lông vũ và thích ngủ trên gối mềm của chị chủ. Cat Lounge khuyến khích buổi hẹn trong không gian yên tĩnh.",
        danhGia: "⭐⭐⭐⭐⭐ <b>Chị Bích Thủy (Long Biên):</b> \"Bé Mochi hiền như một cục bông, nhân viên còn gửi kèm cẩm nang chăm sóc tai cụp rất chi tiết. Bé nhà mình sau buổi hẹn về ngủ một giấc liền, dậy bụng vẫn cười vì quá vui!\""
    },
    "CAT04": {
        ten: "Simba",
        giong: "Mèo Ba Tư",
        tuoi: 18,
        hinh: "images/cat-simba.jpg",
        hinhGoc2: "",
        gia: 500000,
        goiCart: "Gói Hẹn Hò Cùng Bé Simba",
        tieuDe: "Bé Simba - Tìm Bạn Cái Cùng Dòng Ba Tư Hoặc Ragdoll",
        mauLong: "Trắng Muốt",
        canNang: "5.0 kg",
        chuNuoi: "Anh Việt Hoàng",
        khuVuc: "Phường Bạch Đằng, Hai Bà Trưng, Hà Nội",
        tiemPhong: "Đã tiêm phòng 4 bệnh & Dại",
        xetNghiem: "Xét nghiệm FIV/FeLV: Âm tính",
        thanThien: 85,
        muiTiem: 3,
        tongMui: 3,
        motaChiTiet: "Bé Simba hiện 18 tháng tuổi, sinh sống cùng anh Việt Hoàng tại Hai Bà Trưng, Hà Nội. Bộ lông Ba Tư trắng muốt hai lớp cần được chải mỗi ngày — bé điềm đạm, lịch lãm như một quý ông, thích sưởi điều hòa và nghe nhạc nhẹ. Cat Lounge khuyến nghị bạn đời dịu dàng, điềm tĩnh giống bé.",
        danhGia: "⭐⭐⭐⭐⭐ <b>Anh Thanh Tùng (Bắc Từ Liêm):</b> \"Simba sang chảnh đúng nghĩa quý tộc! Bé mèo cái nhà mình gặp bé là ngồi im luôn. Giờ hai bé còn được bế chụp ảnh khoe trên trang Instagram của Catcake.\""
    },
    "CAT05": {
        ten: "Đậu Đậu",
        giong: "Munchkin Chân Ngắn",
        tuoi: 15,
        hinh: "images/cat-dau.jpg",
        hinhGoc2: "",
        gia: 450000,
        goiCart: "Gói Hẹn Hò Cùng Bé Đậu",
        tieuDe: "Bé Đậu Đậu - Tìm Bạn Cái Munchkin Hoặc Mèo Ta",
        mauLong: "Tam Thể Vàng Trắng",
        canNang: "2.9 kg",
        chuNuoi: "Chị Ngọc Lan",
        khuVuc: "Quận Hải Châu, Đà Nẵng",
        tiemPhong: "Đã tiêm 3 bệnh cơ bản",
        xetNghiem: "Xét nghiệm FIV/FeLV: Âm tính",
        thanThien: 90,
        muiTiem: 2,
        tongMui: 3,
        motaChiTiet: "Bé Đậu Đậu hiện 15 tháng tuổi, sinh sống cùng chị Ngọc Lan tại Đà Nẵng. Cặp chân lùn đặc trưng của dòng Munchkin không cản bé chạy nhảy cả ngày. Bé mê chơi trống lộn, bắt bóng giấy và đã được xã hội hóa tốt nên chưa từng cãi nhau với bé nào.",
        danhGia: "⭐⭐⭐⭐⭐ <b>Chị Trâm Anh (Sơn Trà, Đà Nẵng):</b> \"Đậu Đậu chạy quanh phòng Cat Lounge khiến cả nhà cười suốt buổi. Bộ ảnh cưới mèo nhận về 30 tấm, độ nét thật sự bất ngờ!\""
    },
    "CAT06": {
        ten: "Tuyết",
        giong: "Mèo Ragdoll",
        tuoi: 16,
        hinh: "images/cat-tuyet.jpg",
        hinhGoc2: "",
        gia: 550000,
        goiCart: "Gói Hẹn Hò Cùng Bé Tuyết",
        tieuDe: "Bé Tuyết - Tìm Bạn Trai Cùng Dòng Ragdoll Hoặc Ba Tư",
        mauLong: "Trắng Kem Mắt Xanh",
        canNang: "4.5 kg",
        chuNuoi: "Anh Đức Phúc",
        khuVuc: "Quận Tây Hồ, Hà Nội",
        tiemPhong: "Đã tiêm phòng 4 bệnh & Dại",
        xetNghiem: "Xét nghiệm FIV/FeLV: Âm tính",
        thanThien: 93,
        muiTiem: 3,
        tongMui: 3,
        motaChiTiet: "Bé Tuyết hiện 16 tháng tuổi, sinh sống cùng anh Đức Phúc tại Tây Hồ, Hà Nội. Cặp mắt xanh dương quý tộc là điểm nhấn của bé Ragdoll — tính tình tiểu thư dịu dàng, ghét ồn ào, thích gối mềm và ánh đèn vàng. Cat Lounge khuyến nghị đặt phòng VIP riêng biệt để bé thoải mái nhất.",
        danhGia: "⭐⭐⭐⭐⭐ <b>Anh Thanh Tú (Tây Hồ):</b> \"Tuyết là tiểu thư đúng nghĩa — mắt xanh dương nhìn ai cũng mê. Sau gói tắm thảo mộc cho cả 2 bé, lông mềm như bông và làn da bé nhà mình cũng đỡ hẳn!\""
    }
};

// Hàm tìm bạn đời cho mèo trên Trang chủ & Trang sản phẩm
function findCatMate() {
    let genderInput = document.getElementById("mate-gender").value;
    let resultBox = document.getElementById("match-result");

    // Sử dụng hàm filter và arrow function (Chương 5 - Mục 5.2.2 & 5.2.9)
    let matches = catDatabase.filter(cat => cat.gender === genderInput);

    if (matches.length > 0) {
        let randomIndex = Math.floor(Math.random() * matches.length);
        let chosen = matches[randomIndex];
        resultBox.innerHTML = `<b>🎉 Tìm thấy nửa kia phù hợp:</b> <br> ${chosen.introduce()}`;
        resultBox.style.display = "block";
    }
}

// 3. Thao tác Giỏ hàng với localStorage & JSON (Chương 5 - Mục 5.4.2 & 5.5)
function getCart() {
    let rawData = localStorage.getItem("catcake_cart");
    if (rawData === null) {
        return [];
    }
    return JSON.parse(rawData);
}

function saveCart(cartArray) {
    localStorage.setItem("catcake_cart", JSON.stringify(cartArray));
    updateCartBadge();
}

function updateCartBadge() {
    let badge = document.getElementById("cart-count");
    if (badge !== null) {
        let cart = getCart();
        let totalQty = 0;
        for (let item of cart) {
            totalQty += item.qty;
        }
        badge.innerText = totalQty;
    }
}

function addToCart(id, name, price) {
    let cart = getCart();
    let found = false;

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            cart[i].qty += 1;
            found = true;
            break;
        }
    }

    if (!found) {
        cart.push({ id: id, name: name, price: price, qty: 1 });
    }

    saveCart(cart);
    alert(`Đã thêm "${name}" vào giỏ hàng thành công!`);
}

// Hàm bảo vệ chống chèn HTML độc (XSS) khi xây dựng chuỗi HTML động trong cart.html
function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

// Hiển thị bảng giỏ hàng tại trang cart.html
function renderCartTable() {
    let tbody = document.getElementById("cart-body");
    let totalSpan = document.getElementById("cart-total");
    if (tbody === null) return;

    let cart = getCart();
    let html = "";
    let grandTotal = 0;

    if (cart.length === 0) {
        html = `<tr><td colspan="5" style="text-align:center;">Giỏ hàng của bạn đang trống.</td></tr>`;
    } else {
        for (let i = 0; i < cart.length; i++) {
            let item = cart[i];
            let subTotal = item.price * item.qty;
            grandTotal += subTotal;
            html += `
                <tr>
                    <td>${escapeHtml(item.name)}</td>
                    <td>${item.price.toLocaleString()} đ</td>
                    <td>
                        <input type="number" min="1" max="20" value="${item.qty}" 
                               onchange="changeQty(${i}, this.value)" style="width:70px;">
                    </td>
                    <td>${subTotal.toLocaleString()} đ</td>
                    <td><button class="btn" onclick="removeCartItem(${i})">Xóa</button></td>
                </tr>
            `;
        }
    }

    tbody.innerHTML = html;
    totalSpan.innerText = grandTotal.toLocaleString() + " VNĐ";
}

function changeQty(index, newQty) {
    let cart = getCart();
    let parsed = parseInt(newQty);
    if (parsed > 0) {
        cart[index].qty = parsed;
        saveCart(cart);
        renderCartTable();
    }
}

function removeCartItem(index) {
    let confirmDel = confirm("Bạn có chắc muốn xóa dịch vụ/sản phẩm này khỏi giỏ hàng?");
    if (confirmDel) {
        let cart = getCart();
        cart.splice(index, 1); // Phương thức splice (Chương 5 - Mục 5.2.2)
        saveCart(cart);
        renderCartTable();
    }
}

function clearAllCart() {
    if (confirm("Xóa toàn bộ giỏ hàng?")) {
        localStorage.removeItem("catcake_cart");
        updateCartBadge();
        renderCartTable();
    }
}

function checkoutCart() {
    let cart = getCart();
    if (cart.length === 0) {
        alert("Giỏ hàng đang trống! Vui lòng chọn gói ghép đôi hoặc sản phẩm trước.");
        return;
    }
    alert("Cảm ơn bạn! Đơn đăng ký ghép đôi và mua sắm tại Catcake đã được ghi nhận.");
    localStorage.removeItem("catcake_cart");
    updateCartBadge();
    renderCartTable();
}

// Khởi chạy sự kiện khi DOM tải xong (Chương 5 - Mục 5.4.5.1)
document.addEventListener("DOMContentLoaded", function() {
    updateClock();
    updateCartBadge();
    renderCartTable();
});

// 4. Tự động đồng bộ logo SVG hình con mèo cho toàn bộ 10 trang web
//    (Khối code này trước đây bị dán nhầm vào cuối style.css nên trình duyệt bỏ qua,
//     khiến logo trên nhiều trang chỉ còn một vòng tròn - đã chuyển về đây để chạy đúng)
document.addEventListener("DOMContentLoaded", function() {
    let logoBoxes = document.querySelectorAll(".logo-box");
    let catSvgHTML = `
        <svg width="60" height="60">
            <polygon points="10,25 15,5 30,18" style="fill:#ffa502;stroke:#ffffff;stroke-width:2" />
            <polygon points="50,25 45,5 30,18" style="fill:#ffa502;stroke:#ffffff;stroke-width:2" />
            <circle cx="30" cy="35" r="20" stroke="white" stroke-width="3" fill="#ff4757" />
            <circle cx="23" cy="32" r="3" fill="white" />
            <circle cx="37" cy="32" r="3" fill="white" />
            <polygon points="27,38 33,38 30,42" style="fill:pink;" />
        </svg>
    `;

    for (let box of logoBoxes) {
        let oldSvg = box.getElementsByTagName("svg")[0];
        if (oldSvg !== undefined) {
            // Thay thế Node bằng: createElement -> innerHTML -> replaceChild (Chương 5 - Mục 5.4)
            let holder = document.createElement("div");
            holder.innerHTML = catSvgHTML;
            let newSvg = holder.getElementsByTagName("svg")[0];
            box.replaceChild(newSvg, oldSvg);
        }
    }
});