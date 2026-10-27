# Catcake Magazine — Website Tạp Chí Mèo Cưng & Ghép Đôi

Website tĩnh thuần HTML/CSS/JavaScript. Mở trực tiếp `index.html` bằng trình duyệt để chạy (không cần server).

## Cấu trúc

```
Catcake/
├── index.html            Trang chủ (slideshow, máy ghép đôi, bảng tin cộng đồng)
├── about.html            Giới thiệu (sứ mệnh, audio/video, đội ngũ)
├── products.html         6 hồ sơ ghép đôi + 3 sản phẩm
├── product-detail.html   Hồ sơ chi tiết Bé Bơ (ALN)
├── news.html             Tạp chí/blog
├── faq.html              FAQ + máy tính chi phí
├── careers.html          Tuyển dụng
├── contact.html          Liên hệ + Google Maps
├── login.html            Đăng nhập / đăng ký hồ sơ
├── cart.html             Giỏ hàng (localStorage)
├── style.css             CSS dùng chung
├── script.js             JS dùng chung (đồng hồ, ghép đôi, giỏ hàng, đồng bộ logo)
├── images/               17 ảnh chân dung mèo (tải về local, chạy offline)
└── media/                Audio + Video local (Miễn phí bản quyền Mixkit)
```

## Sửa lỗi đã thực hiện

1. **Khối JS ở cuối `style.css`** — trình duyệt bỏ qua code JS trong file CSS, khiến logo các trang bị gãy thành 1 vòng tròn. Đã chuyển vào `script.js`, giờ mọi trang tự đồng bộ logo SVG con mèo đầy đủ (tai + mặt + mũi).
2. **Chữ nước ngoài lỗi** trong lời giới thiệu bé Mochi (trang chủ) — đã viết lại bằng tiếng Việt.
3. **"Phóng to ảnh" ở product-detail** — trước đây chỉ đổi opacity, giờ phóng to thật bằng `transform: scale(1.08)` kèm transition mượt.
4. **Dữ liệu lệch tên** — `catDatabase` trong script.js đổi "Tuyệt" → "Tuyết" cho khớp products.html (CAT06 Ragdoll).
5. **Chống XSS** — `shareMoment()` dùng `textContent` thay `innerHTML` với dữ liệu người dùng nhập.
6. **Ảnh không bị méo** — 17 ảnh Pixabay đã được crop đồng bộ tỉ lệ khung hiển thị (1.7021 ≈ 375×220) nên chỉ cần
   `width/height` cơ bản của Chương 3, không phải dùng thuộc tính ngoài giáo trình (`object-fit`).
7. **Chính sách & phúc lợi trang Tuyển Dụng bị căn lệch** — trước đây khối "Chính Sách Nhân Sự & Quy Trình" là
   card full-width chứa grid lồng nhau không thẳng hàng giữa trang; đã dựng lại thành **2 cột CSS Grid cân bằng
   (Chương 4 - Mục 4.3)**: cột trái là card Chính sách & Phúc lợi, cột phải là card Biểu mẫu ứng tuyển —
   2 cột cùng là `.card` nên chiều cao được kéo dài bằng nhau, hết tình trạng lệch.
8. **Chuẩn hóa theo đúng giáo trình Chương 1–5** (không dùng kiến thức ngoài phạm vi):
   - CSS: bỏ `object-fit` (ngoài Chương 3) — thay bằng crop ảnh về đúng tỉ lệ khung `375×220`.
   - JS DOM: logo đồng bộ bằng `createElement/appendChild/replaceChild/getElementsByTagName` (mục 5.4),
     không dùng `outerHTML`.
   - `shareMoment()` (trang chủ): dựng nội dung bằng `textContent` — vừa chống XSS vừa nằm trong mục 5.4
     "Thay đổi nội dung element", không dùng `createTextNode`.
   - `login.html`: kiểm tra tuổi bằng so sánh `if (age < 10) ... else if (age > 120)` (rẽ nhánh Chương 5)
     thay `validity.rangeUnderflow/rangeOverflow` ngoài phạm vi.
   - `contact.html`: bỏ thuộc tính `loading="lazy"` của iframe (không nằm trong Chương 2 - iframe).
9. **Trang chi tiết hồ sơ động cho từng bé** — trước đây `product-detail.html` cứng toàn bộ nội dung cho Bé Bơ,
   nên bấm "Chi tiết" ở bất kỳ bé nào cũng chỉ ra thông tin Bơ. Đã thêm đối tượng `chiTietHoSo` (Chương 5 - Object)
   chứa bộ hồ sơ riêng CAT01–CAT06 trong `script.js`: nút "Chi tiết" tại `products.html` truyền mã qua URL
   `product-detail.html?ma=CAT01` ... `?ma=CAT06`, trang chi tiết đọc tham số bằng `window.location` (BOM 5.5),
   đổ đúng tên bé, ảnh, giá, mô tả, mức thân thiện (meter), mũi tiêm (progress), bảng thông số thú y, đánh giá
   "thông gia" và luôn cập nhật nút giỏ hàng theo đúng bé đó. Mở trực tiếp khi không có tham số thì mặc định là Bơ.

## Ảnh: chân dung mèo từ Pixabay

Ảnh được **chọn lọc thủ công (xem trực tiếp từng bức)** từ kết quả tìm kiếm Pixabay
"Bức chân dung của mèo", rồi tải về thư mục `images/` — website chạy ổn định
không cần internet, tránh tình trạng hotlink CDN bị chặn/403.

Bản quyền Pixabay: miễn phí sử dụng, không bắt buộc ghi công (pixabay.com/content-license/).

| File trong `images/` | Vai trò trên web | Ảnh Pixabay (photo ID) |
|---|---|---|
| `cat-muop.jpg` | Bé Mướp — Mèo Ta Vàng | kitten-3442257 |
| `cat-bo.jpg` | Bé Bơ — ALN (màn chính detail + card) | british-shorthair-7965411 |
| `cat-bo-2.jpg` | Bơ — góc chụp "Ảnh Đang Chơi" | cat-3261420 |
| `cat-mochi.jpg` | Bé Mochi — Scottish Fold tai cụp | cat-2934720 |
| `cat-simba.jpg` | Bé Simba — Ba Tư trắng lịch lãm | pet-5728249 |
| `cat-dau.jpg` | Bé Đậu Đậu — Munchkin | kitten-4557097 |
| `cat-tuyet.jpg` | Bé Tuyết — Ragdoll mắt xanh | cat-5489185 |
| `slide-1.jpg` | Slideshow 1 (mắt xanh ngọc) | cat-1045782 |
| `slide-2.jpg` | Slideshow 2 (bé con leo cây) | cat-1647775 |
| `slide-3.jpg` | Slideshow 3 (chân dung trong cỏ) | cat-4081978 |
| `product-magazine.jpg` | Ấn phẩm Tạp chí (bìa minh họa) | cats-9317796 |
| `product-collar.jpg` | Cặp vòng cổ (mèo con tam thể) | cat-3081939 |
| `product-spa.jpg` | Combo Spa (bé relax nằm chăn) | cat-4189697 |
| `news-1.jpg` | Blog 1 — sẵn sàng kết đôi | european-shorthair-8136065 |
| `news-2.jpg` | Blog 2 — dinh dưỡng mèo mẹ | kitten-4611189 |
| `news-3.jpg` | Blog 3 — gen tai cụp (tông tối) | cat-3523992 |
| `about-studio.jpg` | Không gian Studio (3 bé họp mặt) | cute-3273789 |

## Media: audio & video (thư mục `media/`)

Phần Âm thanh/Video trong `about.html` (Chương 2 - Mục 2.3.4) dùng file **tải về local** —
nguồn **Mixkit** (Envato) với Mixkit Free License, miễn phí dùng trong dự án không cần attribution:

| File | Vai trò | Nguồn gốc |
|---|---|---|
| `cat-purr.mp3` | "Big wild cat long purr" — tiếng mèo gừ gừ (Purring) | SFX Mixkit ID 96 (`assets.mixkit.co/active_storage/sfx/96`) |
| `cat-relax.mp4` | "White cat lying among the grasses seen up close" — bé mèo đeo vòng cổ nằm thư giãn trong bãi cỏ xanh, 720p HD | Mixkit Free Stock Video ID 22732 (`assets.mixkit.co/videos/22732`) |

Lưu ý: 3 ảnh chân dung con người trong `about.html` (đội ngũ) vẫn dùng Unsplash — đó không phải ảnh mèo nên không thay.
