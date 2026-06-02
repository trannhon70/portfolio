interface HeroProps {
    t: (key: string) => string;
}
export default function Hero({ t }: HeroProps) {


    return (
        <section className="hero" id="hero">
            <div className="hero-grid" />
            <div className="hero-glow" />
            <div className="hero-glow2" />
            <div className="hero-content">
                <div className="hero-tag">{t("hero.title")}</div>
                <h1>
                    <span className="h1-line">Full Stack</span>
                    <span className="h1-line">Developer<span className="accent-text">.</span></span>
                    <span className="h1-line" style={{ color: 'var(--muted)', fontSize: '0.55em', fontWeight: 400, fontFamily: '"Inter", sans-serif', letterSpacing: '0.01em' }}>{t("hero.tag")}</span>
                </h1>
                <p className="hero-sub">
                    {t("hero.tag_1")}
                </p>
                <div className="hero-cta">
                    <a href="#projects" className="btn btn-primary"> {t("hero.button")} →</a>
                    <a href="#contact" className="btn btn-ghost">{t("hero.button_1")}</a>
                </div>
            </div>
            <div className="hero-stats">
                <div className="stat-item">
                    <span className="stat-num">4+</span>
                    <span className="stat-label">{t("hero.tag_2")}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-num">30+</span>
                    <span className="stat-label">{t("hero.tag_3")}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-num">15+</span>
                    <span className="stat-label">{t("hero.tag_4")}</span>
                </div>
            </div>
        </section>
    );
}