
export default function Experience() {
    return (
        <section id="experience" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '4rem', top: '8rem', bottom: '2rem', width: 1, background: 'var(--border)' }} />
            <div className="reveal" style={{ paddingLeft: 0 }}>
                <span className="section-tag">// 03 · Experience</span>
                <h2 className="section-title">Kinh nghiệm làm việc</h2>
            </div>
            <div className="experience-list">
                <div className="exp-item reveal">
                    <div className="exp-date">2022 — Nay</div>
                    <div>
                        <div className="exp-role">Senior Full Stack Developer</div>
                        <div className="exp-company">Tech Company · HCM City</div>
                        <div className="exp-desc">Phát triển và duy trì các ứng dụng React/Node.js phục vụ hàng chục nghìn người
                            dùng. Dẫn dắt team 5 người, review code, thiết kế kiến trúc hệ thống và tối ưu performance tổng
                            thể lên 40%.</div>
                    </div>
                </div>
                <div className="exp-item reveal" style={{ transitionDelay: '0.1s' }}>
                    <div className="exp-date">2021 — 2022</div>
                    <div>
                        <div className="exp-role">Full Stack Developer</div>
                        <div className="exp-company">Digital Agency · HCM City</div>
                        <div className="exp-desc">Xây dựng hơn 15 dự án website và web app cho khách hàng trong và ngoài nước.
                            Stack chính: Laravel + Vue.js, REST API, tích hợp thanh toán VNPay, Momo, Stripe.</div>
                    </div>
                </div>
                <div className="exp-item reveal" style={{ transitionDelay: '0.2s' }}>
                    <div className="exp-date">2020 — 2021</div>
                    <div>
                        <div className="exp-role">PHP / WordPress Developer</div>
                        <div className="exp-company">Startup · HCM City</div>
                        <div className="exp-desc">Phát triển theme và plugin WordPress custom, tối ưu SEO kỹ thuật, và bắt đầu
                            học React để transition sang full-stack developer.</div>
                    </div>
                </div>
            </div>
        </section>
    )
}