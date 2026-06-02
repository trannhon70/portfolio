
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
                        <div className="exp-desc">Phát triển và duy trì các ứng dụng React/Node.js phục vụ hàng chục nghìn người
                            dùng. Dẫn dắt team 5 người, review code, thiết kế kiến trúc hệ thống và tối ưu performance tổng
                            thể lên 40%.</div>
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