
export default function Experience() {
    return (
        <section id="experience" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '4rem', top: '8rem', bottom: '2rem', width: 1, background: 'var(--border)' }} />
            <div className="reveal" style={{ paddingLeft: 0 }}>
                <h2 className="section-title">Kinh nghiệm làm việc</h2>
            </div>
            <div className="experience-list">
                <div className="exp-item reveal">
                    <div className="exp-date">12/2022 — 4/2026</div>
                    <div>
                        <div className="exp-role">Full Stack Developer</div>
                        <div className="exp-company">CTY PM GOFIBER</div>
                        <div className="exp-company">Hệ thống Cho Thuê VPS</div>
                        <div className="exp-desc">- Xây dựng hệ thống cho thuê VPS full-stack sử dụng ReactJS (Frontend) và NodeJS (Backend), hỗ trợ toàn bộ quy trình quản lý khách hàng từ đăng ký đến sử dụng dịch vụ.</div>
                        <div className="exp-desc">- Tích hợp cổng thanh toán và hệ thống theo dõi đơn hàng theo thời gian thực, giúp giảm đáng kể các yêu cầu hỗ trợ thủ công.</div>
                        <div className="exp-desc">- Đề xuất và triển khai các cải tiến trong quy trình triển khai và vận hành hệ thống, nâng cao độ ổn định của các phiên bản phát hành.</div>

                        <div style={{ marginTop: '20px' }} className="exp-company">Hệ thống Chatbot & AI</div>
                        <div className="exp-desc">- Thiết kế kiến trúc và phát triển chatbot hỗ trợ khách hàng ứng dụng AI bằng ReactJS (Frontend) và NestJS (Backend).</div>
                        <div className="exp-desc">- Tích hợp công nghệ xử lý ngôn ngữ tự nhiên (NLP) và triển khai giao tiếp hai chiều theo thời gian thực thông qua WebSocket/Socket.IO.</div>
                        <div className="exp-desc">- Tự động hóa quy trình hỗ trợ khách hàng, giúp giảm số lượng câu hỏi lặp lại mà đội ngũ hỗ trợ phải xử lý.</div>

                        <div style={{ marginTop: '20px' }} className="exp-company">Hệ Thống Quản Lý Nhân Sự (HRM)</div>
                        <div className="exp-desc">- Thiết kế và phát triển từ đầu hệ thống quản lý nhân sự (HRM) full-stack sử dụng ReactJS, NestJS và cơ sở dữ liệu SQL.</div>
                        <div className="exp-desc">- Xây dựng các phân hệ quản lý hồ sơ nhân viên, tính lương, chấm công và đánh giá hiệu suất cho hơn 500 nhân sự.</div>
                        <div className="exp-desc">- Đóng gói toàn bộ ứng dụng bằng Docker và triển khai quy trình CI/CD, giúp giảm khoảng 60% thời gian triển khai hệ thống.</div>

                        <div style={{ marginTop: '20px' }} className="exp-company">Hệ thống quản lý phòng khám</div>
                        <div className="exp-desc">- Xây dựng nền tảng quản lý phòng khám đa vai trò, bao gồm quản lý hồ sơ bệnh nhân, đặt lịch khám và thanh toán viện phí.</div>
                        <div className="exp-desc">- Triển khai cơ chế phân quyền theo vai trò cho bác sĩ, y tá và nhân viên quản trị.</div>
                        <div className="exp-desc">- Tối ưu hóa truy vấn SQL và tích hợp WebSocket cho hệ thống thông báo thời gian thực, cải thiện tốc độ phản hồi của hệ thống.</div>
                    </div>
                </div>
                <div className="exp-item reveal" style={{ transitionDelay: '0.1s' }}>
                    <div className="exp-date">7/2021 – 11/2022</div>
                    <div>
                        <div className="exp-role">Frontend Developer</div>
                        <div className="exp-company">CTY CỔ PHẦN MINERVA</div>
                        <div className="exp-desc">- Xây dựng và bảo trì các ứng dụng web cho hệ thống quản lý bộ phận tín dụng của ngân hàng bằng ReactJS và Material UI.</div>
                        <div className="exp-desc">- Phát triển hệ thống theo dõi trạng thái hồ sơ tín dụng với tính năng lọc nâng cao, tìm kiếm và quy trình phê duyệt nhiều bước kèm nhật ký kiểm toán.</div>
                        <div className="exp-desc">- Triển khai tính năng tải lên và xem trước tài liệu với xác thực phía máy khách.</div>
                        <div className="exp-desc">- Tích hợp thông báo thời gian thực cho các nhân viên và quản lý tín dụng thông qua hệ thống xác thực và ghi nhật ký nội bộ.</div>
                        <div className="exp-desc">- Hợp tác với nhóm phát triển backend về tích hợp API; đảm bảo trải nghiệm người dùng mượt mà trên các vai trò người dùng khác nhau
                            (quản trị viên, nhân viên, quản lý).</div>
                    </div>
                </div>

            </div>
        </section>
    )
}