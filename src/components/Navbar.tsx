import { useTranslation } from "react-i18next";

export default function Navbar() {
    const { t, i18n } = useTranslation();

    return (
        <nav>
            <div className="nav-logo">{t("navbar.full_name")}</div>
            <ul className="nav-links">
                <li><a href="#about">{t("navbar.about_me")}</a></li>
                <li><a href="#skills">{t("navbar.skills")}</a></li>
                <li><a href="#experience">{t("navbar.experience")}</a></li>
                <li><a href="#projects">{t("navbar.projects")}</a></li>
                <li><a href="#contact">{t("navbar.contact")}</a></li>

                <div className="lang-switcher">
                    <button
                        className={`lang-btn ${i18n.language === "vi" ? "active" : ""}`}
                        onClick={() => i18n.changeLanguage("vi")}
                    >
                        VI
                    </button>

                    <button
                        className={`lang-btn ${i18n.language === "en" ? "active" : ""}`}
                        onClick={() => i18n.changeLanguage("en")}
                    >
                        EN
                    </button>
                </div>
            </ul>
        </nav>
    );
}