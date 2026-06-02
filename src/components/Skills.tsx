

export default function Skills() {
    return (
        <section className="skills-section" id="skills">
            <div className="reveal">
                <h2 className="section-title">Tech Stack</h2>
            </div>
            <div className="skills-grid">
                <div className="skill-card reveal" style={{ transitionDelay: '0.1s' }}>
                    <span className="skill-icon">⚛️</span>
                    <div className="skill-name">Frontend</div>
                    <div className="skill-desc">Xây dựng UI hiện đại, responsive và tối ưu performance với React ecosystem.
                    </div>
                    <div className="skill-tags">
                        <span className="tag">React</span>
                        <span className="tag">Next.js</span>
                        <span className="tag">TypeScript</span>
                        <span className="tag">Redux</span>
                        <span className="tag">Tailwind</span>
                        <span className="tag">Vite</span>
                    </div>
                </div>
                <div className="skill-card reveal" style={{ transitionDelay: '0.2s' }}>
                    <span className="skill-icon">🟢</span>
                    <div className="skill-name">Backend · Node.js</div>
                    <div className="skill-desc">REST API và microservices hiệu suất cao với Node.js, Express, và Fastify.</div>
                    <div className="skill-tags">
                        <span className="tag">Node.js</span>
                        <span className="tag">Express</span>
                        <span className="tag">Fastify</span>
                        <span className="tag">GraphQL</span>
                        <span className="tag">Socket.io</span>
                        <span className="tag">JWT</span>
                    </div>
                </div>
                <div className="skill-card reveal" style={{ transitionDelay: '0.3s' }}>
                    <span className="skill-icon">🐘</span>
                    <div className="skill-name">Backend · PHP</div>
                    <div className="skill-desc">Phát triển ứng dụng web enterprise với Laravel và hệ sinh thái PHP hiện đại.
                    </div>
                    <div className="skill-tags">
                        <span className="tag">PHP 8</span>
                        <span className="tag">Laravel</span>
                        <span className="tag">Livewire</span>
                        <span className="tag">Composer</span>
                        <span className="tag">Eloquent</span>
                    </div>
                </div>
                <div className="skill-card reveal" style={{ transitionDelay: '0.4s' }}>
                    <span className="skill-icon">🗄️</span>
                    <div className="skill-name">Database &amp; DevOps</div>
                    <div className="skill-desc">Thiết kế cơ sở dữ liệu và triển khai hệ thống với cloud infrastructure.</div>
                    <div className="skill-tags">
                        <span className="tag">MySQL</span>
                        <span className="tag">PostgreSQL</span>
                        <span className="tag">MongoDB</span>
                        <span className="tag">Redis</span>
                        <span className="tag">Docker</span>
                        <span className="tag">AWS</span>
                    </div>
                </div>
            </div>
        </section>
    )
}