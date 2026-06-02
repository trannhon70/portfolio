export default function Hero() {


    return (
        <section className="hero" id="hero">
            <div className="hero-grid" />
            <div className="hero-glow" />
            <div className="hero-glow2" />
            <div className="hero-content">
                <div className="hero-tag">Sẵn sàng cho các cơ hội việc làm · TP. Hồ Chí Minh</div>
                <h1>
                    <span className="h1-line">Full Stack</span>
                    <span className="h1-line">Developer<span className="accent-text">.</span></span>
                    <span className="h1-line" style={{ color: 'var(--muted)', fontSize: '0.55em', fontWeight: 400, fontFamily: '"Inter", sans-serif', letterSpacing: '0.01em' }}>4+ năm xây dựng cho web app</span>
                </h1>
                <p className="hero-sub">
                    Chuyên xây dựng ứng dụng web hiệu suất cao với React, Next.js, Node.js, NestJS &amp; PHP.
                    Từ giao diện người dùng mượt mà đến hệ thống backend mạnh mẽ.
                </p>
                <div className="hero-cta">
                    <a href="#projects" className="btn btn-primary">Xem dự án →</a>
                    <a href="#contact" className="btn btn-ghost">Liên hệ tôi</a>
                </div>
            </div>
            <div className="hero-stats">
                <div className="stat-item">
                    <span className="stat-num">4+</span>
                    <span className="stat-label">Năm kinh nghiệm</span>
                </div>
                <div className="stat-item">
                    <span className="stat-num">30+</span>
                    <span className="stat-label">Dự án hoàn thành</span>
                </div>
                <div className="stat-item">
                    <span className="stat-num">15+</span>
                    <span className="stat-label">Khách hàng</span>
                </div>
            </div>
        </section>
    );
}