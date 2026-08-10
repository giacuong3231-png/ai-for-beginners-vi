# Học AI bằng tiếng Việt

Bản web đọc được trên điện thoại của khoá **[AI for Beginners](https://github.com/microsoft/AI-For-Beginners)** — giáo trình AI 12 tuần / 24 bài của Microsoft.

**→ [Vào học](https://ai-for-beginners-vi.netlify.app)**

<sub>Bản dự phòng: [giacuong3231-png.github.io/ai-for-beginners-vi](https://giacuong3231-png.github.io/ai-for-beginners-vi/)</sub>

## Có gì ở đây

- **35 mục học** tiếng Việt, gồm 24 bài chính: nhập môn AI, AI ký hiệu, mạng nơ-ron, thị giác máy tính, xử lý ngôn ngữ, học tăng cường, đạo đức AI.
- **53 notebook thực hành** — xem được code và kết quả ngay trên trang; bấm **Mở Colab** để chạy thật (miễn phí).
- **Đánh dấu tiến độ** — tick bài đã học, lưu ngay trên thiết bị đang dùng (không cần tài khoản, không gửi dữ liệu đi đâu).
- Không cần cài gì, không cần build. Trang tĩnh thuần HTML/JS.

## Nguồn và giấy phép

Toàn bộ nội dung bài học thuộc **[microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners)**, giấy phép **MIT** (xem `LICENSE`). Bản dịch tiếng Việt cũng do dự án gốc cung cấp (thư mục `translations/vi`, dịch tự động bằng co-op-translator).

Repo này chỉ thêm phần giao diện đọc: `index.html`, `bai.html`, `bai-hoc.js`.

## Cấu trúc

```
index.html              mục lục + thanh tiến độ
bai.html                trang đọc bài (.md và .ipynb)
bai-hoc.js              danh sách bài, sinh tự động từ thư mục nội dung
assets/marked.min.js    bộ render markdown (MIT)
translations/vi/        nội dung bài học tiếng Việt
translated_images/vi/   ảnh minh hoạ
data/mnist.pkl.gz       dữ liệu mẫu cho bài mạng nơ-ron
```

## Ghi chú kỹ thuật

Bản dịch của Microsoft nằm sâu hơn bản gốc 2 cấp thư mục nhưng **đường dẫn tương đối không được sửa theo**, nên một số ảnh và file phụ trợ bị lệch. Repo này đã xử lý ở phía trình duyệt: `bai.html` giải lại mọi đường dẫn tương đối theo vị trí thật của file đang đọc.

Riêng `data/mnist.pkl.gz` đã được dựng lại đúng cấu trúc mà notebook mong đợi (`MNIST['Train']['Features']`) — bản trong repo gốc là dạng tuple nên notebook Perceptron không chạy được, kể cả bản tiếng Anh.
