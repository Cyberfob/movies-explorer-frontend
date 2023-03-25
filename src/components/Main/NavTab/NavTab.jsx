import './NavTab.css'


export default function NavTab() {
    return (
        <section className="navTab__conteiner">
            <div className="navTab__links">
                <a href='#aboutProject' className="navTab__link">О проекте</a>
                <a href='#techs' className="navTab__link">Технологии</a>
                <a href='#about' className="navTab__link">Студент</a>
            </div>
        </section>
    );
}