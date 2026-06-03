
export default function Experience({ t }: { t: (key: string) => string }) {
    return (
        <section id="experience" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '4rem', top: '8rem', bottom: '2rem', width: 1, background: 'var(--border)' }} />
            <div className="reveal" style={{ paddingLeft: 0 }}>
                <h2 className="section-title">{t("experience.title")}</h2>
            </div>
            <div className="experience-list">
                <div className="exp-item reveal">
                    <div className="exp-date">12/2022 — 4/2026</div>
                    <div>
                        <div className="exp-role">Full Stack Developer</div>
                        <div className="exp-company">CTY PM GOFIBER</div>
                        <div className="exp-company">{t("experience.company")}</div>
                        <div className="exp-desc">- {t("experience.tag")}</div>
                        <div className="exp-desc">- {t("experience.tag_1")}</div>
                        <div className="exp-desc">- {t("experience.tag_2")}</div>

                        <div style={{ marginTop: '20px' }} className="exp-company">{t("experience.company_1")}</div>
                        <div className="exp-desc">- {t("experience.tag_3")}</div>
                        <div className="exp-desc">- {t("experience.tag_4")}</div>
                        <div className="exp-desc">- {t("experience.tag_5")}</div>

                        <div style={{ marginTop: '20px' }} className="exp-company">{t("experience.company_2")}</div>
                        <div className="exp-desc">- {t("experience.tag_6")}</div>
                        <div className="exp-desc">- {t("experience.tag_7")}</div>
                        <div className="exp-desc">- {t("experience.tag_8")}</div>

                        <div style={{ marginTop: '20px' }} className="exp-company">{t("experience.company_3")}</div>
                        <div className="exp-desc">- {t("experience.tag_9")}</div>
                        <div className="exp-desc">- {t("experience.tag_10")}</div>
                        <div className="exp-desc">- {t("experience.tag_11")}</div>
                    </div>
                </div>
                <div className="exp-item reveal" style={{ transitionDelay: '0.1s' }}>
                    <div className="exp-date">7/2021 – 11/2022</div>
                    <div>
                        <div className="exp-role">Frontend Developer</div>
                        <div className="exp-company">{t("experience.company_4")}</div>
                        <div className="exp-desc">- {t("experience.tag_12")}</div>
                        <div className="exp-desc">- {t("experience.tag_13")}</div>
                        <div className="exp-desc">- {t("experience.tag_14")}</div>
                        <div className="exp-desc">- {t("experience.tag_15")}</div>
                        <div className="exp-desc">- {t("experience.tag_16")}</div>
                    </div>
                </div>

            </div>
        </section>
    )
}