console.time là gì

console.time() là một hàm tiện ích trong JavaScript được sử dụng để đo thời gian chạy (hiệu năng) của một đoạn mã code nhất định.

Nó cực kỳ hữu ích khi bạn muốn tối ưu hóa ứng dụng hoặc kiểm tra xem một vòng lặp, một hàm xử lý dữ liệu, hay một yêu cầu API mất bao lâu để hoàn thành.

Cách hoạt động
Để đo thời gian, console.time() luôn đi kèm với console.timeEnd(). Cách hoạt động của chúng như sau:

console.time("tên_nhãn"): Bắt đầu tính giờ và gắn cho nó một cái "nhãn" (label).

console.timeEnd("tên_nhãn"): Dừng bộ tính giờ của nhãn đó và in ngay kết quả (thời gian chạy tính bằng mili-giây) ra tab Console của trình duyệt hoặc Terminal của Node.js.
Tóm tắt các hàm liên quanHàmChức năngconsole.time(label)Bắt đầu bộ đếm thời gian với nhãn label.console.timeLog(label)In ra thời gian đã trôi qua kể từ khi bắt đầu mà không dừng bộ đếm.console.timeEnd(label)Dừng bộ đếm và in ra tổng thời gian chạy.
