/**
 * HỆ THỐNG KHO VẬN - TECHLOGISTICS (LEGACY CODE)
 */

    // NHIỆM VỤ 1: ĐỒNG BỘ DỮ LIỆU (Đang gây sập Server vì Infinite Loop)
    function syncOrders() {
        let attempts = 0;
        const maxAttempts = 5;

        console.log("Bắt đầu đồng bộ...");
        while (attempts < maxAttempts) {
            let networkError = true; // Giả lập luôn bị lỗi mạng
            attempts++; 
            
            if (networkError) {
                console.log(`Lỗi mạng lần ${attempts}, thử lại...`);
                continue; //LỖI HIỂM HÓC NẰM Ở ĐÂY!(đã sửa)
            }
            
            console.log("Đồng bộ thành công!");
            break;
        }
    }
// Cảnh báo: Nếu chạy hàm trên, trình duyệt/IDE của bạn sẽ bị treo!

// NHIỆM VỤ 2: QUÉT ĐƠN HÀNG TRÙNG LẶP (ĐÃ TỐI ƯU O(N))
function findDuplicateOrders(orders) {
    const seen = new Set();       // Lưu các đơn hàng duy nhất đã duyệt qua
    const duplicates = new Set(); // Dùng Set để tự động tránh trùng lặp trong mảng kết quả
    let iterations = 0;

    for (let i = 0; i < orders.length; i++) {
        iterations++;
        const currentOrder = orders[i];

        if (seen.has(currentOrder)) {
            // Nếu đã từng thấy đơn hàng này trước đó -> Nó là hàng trùng lặp!
            duplicates.add(currentOrder);
        } else {
            // Nếu chưa thấy -> Đánh dấu đã xem
            seen.add(currentOrder);
        }
    }

    console.log(`Tổng số bước lặp (Mới): ${iterations}`);
    return Array.from(duplicates); // Chuyển Set ngược lại thành Mảng để return
}

const dummyOrders = ["VN123", "VN456", "VN789", "VN123", "VN999", "VN456"];
console.log(findDuplicateOrders(dummyOrders));