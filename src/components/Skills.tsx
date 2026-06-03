

export default function Skills({ t }: { t: any }) {
    return (
        <section className="skills-section" id="skills">
            <div className="reveal">
                <h2 className="section-title">{t("skills.title")}</h2>
            </div>
            <div className="skills-grid">
                <div className="skill-card reveal" style={{ transitionDelay: '0.1s' }}>
                    <span className="skill-icon">⚛️</span>
                    <div className="skill-name">Frontend</div>
                    <div className="skill-desc">{t("skills.tag")}
                    </div>
                    <div className="skill-tags">
                        <span className="tag">React</span>
                        <span className="tag">Next.js</span>
                        <span className="tag">TypeScript</span>
                        <span className="tag">Redux</span>
                        <span className="tag">Tailwind</span>
                        <span className="tag">Vite</span>
                        <span className="tag">...</span>
                    </div>
                </div>
                <div className="skill-card reveal" style={{ transitionDelay: '0.2s' }}>
                    <span className="skill-icon">🟢</span>
                    <div className="skill-name">Backend · Node.js</div>
                    <div className="skill-desc">{t("skills.tag_1")}</div>
                    <div className="skill-tags">
                        <span className="tag">Node.js</span>
                        <span className="tag">Express</span>
                        <span className="tag">Kafka</span>
                        <span className="tag">GraphQL</span>
                        <span className="tag">Socket.io</span>
                        <span className="tag">JWT</span>
                        <span className="tag">...</span>
                    </div>
                </div>
                <div className="skill-card reveal" style={{ transitionDelay: '0.3s' }}>
                    <span className="skill-icon">🐘</span>
                    <div className="skill-name">Tools</div>
                    <div className="skill-desc">
                        {t("skills.tag_2")}
                    </div>
                    <div className="skill-tags">
                        <span className="tag">Postman</span>
                        <span className="tag">Figma</span>
                        <span className="tag">RESTful API</span>
                        <span className="tag">MVC/MVP</span>
                        <span className="tag">GitHub</span>
                        <span className="tag">Gitlab</span>
                    </div>
                </div>
                <div className="skill-card reveal" style={{ transitionDelay: '0.4s' }}>
                    <span className="skill-icon">🗄️</span>
                    <div className="skill-name">Database & DevOps</div>
                    <div className="skill-desc">{t("skills.tag_3")}</div>
                    <div className="skill-tags">
                        <span className="tag">MySQL</span>
                        <span className="tag">PostgreSQL</span>
                        <span className="tag">MongoDB</span>
                        <span className="tag">Redis</span>
                        <span className="tag">Docker</span>
                        <span className="tag">AWS</span>
                        <span className="tag">PM2</span>
                        <span className="tag">NGINX</span>
                        <span className="tag"> SERVER Linux</span>
                        <span className="tag">SERVER Windows</span>
                    </div>
                </div>
            </div>
        </section>
    )
}