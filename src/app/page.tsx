"use client";
//@ts-nocheck
import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
const email = "kevintran351996@gmail.com";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;

    const cursor = cursorRef.current;
    const ring = ringRef.current;

    if (!cursor || !ring) return;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;

      cursor.style.left = `${mx}px`;
      cursor.style.top = `${my}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    let animationId: number;

    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;

      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;

      animationId = requestAnimationFrame(animateRing);
    };

    animateRing();

    const hoverElements = document.querySelectorAll(
      "a, button, .skill-card, .project-card"
    );

    const handleEnter = () => {
      cursor.style.width = "20px";
      cursor.style.height = "20px";
      ring.style.width = "60px";
      ring.style.height = "60px";
    };

    const handleLeave = () => {
      cursor.style.width = "12px";
      cursor.style.height = "12px";
      ring.style.width = "40px";
      ring.style.height = "40px";
    };

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);

      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
    alert("Đã sao chép email!");
  };
  return (
    <>
      <div>
        <div ref={cursorRef} className="cursor" id="cursor" />
        <div ref={ringRef} className="cursor-ring" id="cursorRing" />

        <Navbar />
        {/* HERO */}
        <Hero t={t} />
        {/* ABOUT */}
        <section id="about">
          <div className="about-grid">
            <div className="about-text reveal">

              <h2 className="section-title">{t("about.title")}<br /><span className="accent-text">{t("about.title_1")}</span></h2>
              <p>Là một <strong>Full Stack Developer</strong> với hơn 4 năm kinh nghiệm, tôi đam mê tạo ra những sản
                phẩm web chất lượng cao — từ giao diện đẹp mắt đến hệ thống backend ổn định, có khả năng mở rộng.
              </p>
              <p>Tôi làm việc thoải mái ở cả frontend lẫn backend, thành thạo <strong>React / Next.js</strong>,
                <strong>Node.js / Express</strong>, <strong>PHP / Laravel</strong>, và cơ sở dữ liệu SQL & NoSQL.
              </p>
              <p>
                Bên cạnh đó, tôi có kinh nghiệm về <strong>DevOps</strong>,
                bao gồm triển khai ứng dụng trên Linux Server và VPS,
                sử dụng <strong>Docker</strong>, xây dựng quy trình
                <strong> CI/CD</strong>, quản lý hệ thống và tối ưu môi trường vận hành
                nhằm đảm bảo hiệu năng, tính ổn định và khả năng mở rộng của sản phẩm.
              </p>
              <p>Khi không code, tôi thích tìm hiểu công nghệ mới, đóng góp open-source và uống cà phê.</p>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
                <div>
                  <div style={{ fontFamily: '"DM Mono",monospace', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em', marginBottom: 4 }}>
                    ĐỊA ĐIỂM</div>
                  <div style={{ fontSize: '0.9rem' }}>TP. Hồ Chí Minh, Việt Nam</div>
                </div>
                <div>
                  <div style={{ fontFamily: '"DM Mono",monospace', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em', marginBottom: 4 }}>
                    TRẠNG THÁI</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--accent)' }}>●  Đang tìm kiếm cơ hội mới</div>
                </div>
              </div>
            </div>
            <div className="about-image reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="about-image-inner">
                <div className="avatar-initials">DEV</div>
              </div>
              <div className="about-decoration" />
            </div>
          </div>
        </section>
        {/* SKILLS */}
        <Skills />
        {/* EXPERIENCE */}
        <Experience />
        {/* PROJECTS */}
        <section id="projects" style={{ background: 'var(--surface)' }}>
          <div className="reveal">

            <h2 className="section-title">Dự án nổi bật</h2>
          </div>
          <div className="projects-grid">
            <div className="project-card p1 reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="project-thumb">
                <div className="project-thumb-accent" />
                <div className="project-thumb-inner">
                  const app = new NextApp()<br />
                  app.connect(database)<br />
                  app.listen(3000)
                </div>
              </div>
              <div className="project-body">
                <span className="project-num">01 / Hệ thống Cho Thuê VPS</span>
                <div className="project-title">Nền tảng Quản lý & Cho thuê VPS</div>
                <div className="project-desc">
                  Hệ thống cho thuê VPS full-stack cho phép quản lý khách hàng,
                  đơn hàng, thanh toán trực tuyến và theo dõi trạng thái dịch vụ
                  theo thời gian thực.
                </div>
                <div className="project-desc">Dashboard quản trị với data visualization theo real-time, hỗ trợ
                  multi-tenant, phân quyền chi tiết và export báo cáo đa định dạng.</div>
                <div className="project-stack">
                  <span className="tag">ReactJS</span>
                  <span className="tag">NodeJS</span>
                  <span className="tag">MongoDB</span>
                  <span className="tag">Socket.IO</span>
                </div>
              </div>
            </div>
            <div className="project-card p2 reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="project-thumb">
                <div className="project-thumb-accent" />
                <div className="project-thumb-inner">
                  SELECT * FROM orders<br />
                  WHERE status = 'delivered'<br />
                  ORDER BY created_at DESC
                </div>
              </div>
              <div className="project-body">
                <span className="project-num">02 / Hệ thống Chatbot & AI</span>
                <div className="project-title">Nền tảng Hỗ trợ Khách hàng bằng AI</div>
                <div className="project-desc">
                  Chatbot ứng dụng AI giúp tự động hóa quy trình chăm sóc khách hàng,
                  tích hợp  giao tiếp thời gian thực thông qua WebSocket.
                </div>
                <div className="project-desc">Dashboard quản trị với data visualization theo real-time, hỗ trợ
                  multi-tenant, phân quyền chi tiết và export báo cáo đa định dạng.</div>
                <div className="project-stack">
                  <span className="tag">ReactJS</span>
                  <span className="tag">NestJS</span>
                  <span className="tag">Socket.IO</span>
                  <span className="tag">AI/NLP</span>
                </div>
              </div>
            </div>
            <div className="project-card p3 reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="project-thumb">
                <div className="project-thumb-accent" />
                <div className="project-thumb-inner">
                  SELECT * FROM orders<br />
                  WHERE status = 'delivered'<br />
                  ORDER BY created_at DESC
                </div>
              </div>
              <div className="project-body">
                <span className="project-num">03 / Hệ thống Quản lý Phòng khám</span>
                <div className="project-title">Clinic Management System</div>
                <div className="project-desc">
                  Nền tảng quản lý phòng khám đa vai trò, hỗ trợ hồ sơ bệnh nhân,
                  đặt lịch khám, thanh toán và thông báo thời gian thực.
                </div>
                <div className="project-desc">Dashboard quản trị với data visualization theo real-time, hỗ trợ
                  multi-tenant, phân quyền chi tiết và export báo cáo đa định dạng.</div>
                <div className="project-stack">
                  <span className="tag">ReactJS</span>
                  <span className="tag">NestJS</span>
                  <span className="tag">SQL</span>
                  <span className="tag">WebSocket</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="reveal">

            <h2 className="section-title">Hãy cùng xây dựng<br />điều gì đó <span className="accent-text">tuyệt vời</span></h2>
            <p className="contact-sub">Tôi đang tìm kiếm cơ hội mới. Inbox của tôi luôn mở!</p>
            <a onClick={handleCopyEmail} href="mailto:kevintran351996@gmail.com" className="contact-email">kevintran351996@gmail.com</a>
            <br />
            <div className="social-links">
              <a href="https://github.com/trannhon70?tab=repositories" className="social-link">GitHub</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Facebook</a>
            </div>
          </div>
        </section>
        <footer>
          <span>© 2026 · Built with ❤️ in Ho Chi Minh City</span>
          <span style={{ fontFamily: '"DM Mono",monospace' }}>React · Node.js · PHP</span>
        </footer>
      </div>

    </>
  );
}