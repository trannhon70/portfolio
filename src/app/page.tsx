"use client";
//@ts-nocheck
import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

export default function HomePage() {
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
  return (
    <>
      <div>
        <div ref={cursorRef} className="cursor" id="cursor" />
        <div ref={ringRef} className="cursor-ring" id="cursorRing" />
        <Navbar />
        {/* HERO */}
        <Hero />
        {/* ABOUT */}
        <section id="about">
          <div className="about-grid">
            <div className="about-text reveal">

              <h2 className="section-title">Tôi build những thứ<br /><span className="accent-text">thực sự hoạt động</span></h2>
              <p>Là một <strong>Full Stack Developer</strong> với hơn 4 năm kinh nghiệm, tôi đam mê tạo ra những sản
                phẩm web chất lượng cao — từ giao diện đẹp mắt đến hệ thống backend ổn định, có khả năng mở rộng.
              </p>
              <p>Tôi làm việc thoải mái ở cả frontend lẫn backend, thành thạo <strong>React / Next.js</strong>,
                <strong>Node.js / Express</strong>, <strong>PHP / Laravel</strong>, và cơ sở dữ liệu SQL &amp; NoSQL.
              </p>
              <p>Khi không code, tôi thích tìm hiểu công nghệ mới, đóng góp open-source và uống cà phê quá nhiều.</p>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
                <div>
                  <div style={{ fontFamily: '"DM Mono",monospace', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em', marginBottom: 4 }}>
                    LOCATION</div>
                  <div style={{ fontSize: '0.9rem' }}>Ho Chi Minh City, VN</div>
                </div>
                <div>
                  <div style={{ fontFamily: '"DM Mono",monospace', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em', marginBottom: 4 }}>
                    STATUS</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--accent)' }}>● Open to work</div>
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
                <span className="project-num">01 / E-Commerce Platform</span>
                <div className="project-title">ShopVN — Nền tảng thương mại điện tử</div>
                <div className="project-desc">Multi-vendor marketplace với real-time inventory, thanh toán đa cổng,
                  dashboard analytics, và PWA mobile experience.</div>
                <div className="project-stack">
                  <span className="tag">Next.js</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">MongoDB</span>
                  <span className="tag">Redis</span>
                </div>
              </div>
            </div>
            <div className="project-card p2 reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="project-thumb">
                <div className="project-thumb-accent" />
                <div className="project-thumb-inner">
                  lorem ipsum dolor sit amet,<br />
                  consectetur adipiscing elit,<br />
                  sed do eiusmod tempor incididunt
                </div>
              </div>
              <div className="project-body">
                <span className="project-num">02 / SaaS Application</span>
                <div className="project-title">TaskFlow — Quản lý dự án SaaS</div>
                <div className="project-desc">Ứng dụng SaaS quản lý công việc nhóm với real-time collaboration, Kanban
                  board, Gantt chart và báo cáo tiến độ chi tiết.</div>
                <div className="project-stack">
                  <span className="tag">React</span>
                  <span className="tag">Laravel</span>
                  <span className="tag">PostgreSQL</span>
                  <span className="tag">Socket.io</span>
                </div>
              </div>
            </div>
            <div className="project-card p3 reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="project-thumb">
                <div className="project-thumb-accent" />
                <div className="project-thumb-inner">
                  SELECT * FROM orders<br />
                  WHERE status = delivered<br />
                  ORDER BY created_at DESC
                </div>
              </div>
              <div className="project-body">
                <span className="project-num">03 / Dashboard</span>
                <div className="project-title">AdminPro — Dashboard analytics</div>
                <div className="project-desc">Dashboard quản trị với data visualization theo real-time, hỗ trợ
                  multi-tenant, phân quyền chi tiết và export báo cáo đa định dạng.</div>
                <div className="project-stack">
                  <span className="tag">React</span>
                  <span className="tag">Express</span>
                  <span className="tag">MySQL</span>
                  <span className="tag">Chart.js</span>
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
            <a href="mailto:hello@dev.vn" className="contact-email">hello@dev.vn</a>
            <br />
            <div className="social-links">
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Facebook</a>
            </div>
          </div>
        </section>
        <footer>
          <span>© 2025 · Built with ❤️ in Ho Chi Minh City</span>
          <span style={{ fontFamily: '"DM Mono",monospace' }}>React · Node.js · PHP</span>
        </footer>
      </div>

    </>
  );
}