import { CivilStatusesIndexPage } from "../../civil-statuses/pages/civil-statuses-index.page";
import { DisciplinesIndexPage } from "../../disciplines/pages/disciplines-index.page";
import { HomePage } from "../../home/pages/home.page";
import { PositionsIndexPage } from "../../positions/pages/positions-index.page";
import { PreferencesIndexPage } from "../../preferences/pages/preferences-index.page";
import { SituationsIndexPage } from "../../situations/pages/situations-index.page";
import { SubscriptionsIndexPage } from "../../subscriptions/pages/subscriptions-index.page";
import { TeachersIndexPage } from "../../teachers/pages/teachers-index.page";
import { TitlesIndexPage } from "../../titles/pages/titles-index.page";
import { UnitsIndexPage } from "../../units/pages/units-index.page";
import { YearsIndexPage } from "../../years/pages/years-index.page";
import { usePages } from "../contexts/pages.context";

export const Header = () => {
  const {changePage} = usePages();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Atribui
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" onClick={() => changePage(<HomePage />)}>
                início
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                cadastro
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#" onClick={() => changePage(<YearsIndexPage />)}>
                    anos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={() => changePage(<UnitsIndexPage />)}>
                    unidades
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={() => changePage(<DisciplinesIndexPage />)}>
                    disciplinas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={() => changePage(<SituationsIndexPage />)}>
                    situações
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={() => changePage(<PreferencesIndexPage />)}>
                    preferências
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={() => changePage(<CivilStatusesIndexPage />)}>
                    estados civis
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={() => changePage(<PositionsIndexPage />)}>
                    cargos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={() => changePage(<TeachersIndexPage />)}>
                    professores(as)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={() => changePage(<TitlesIndexPage />)}>
                    títulos
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                classificação
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#" onClick={() => changePage(<SubscriptionsIndexPage />)}>
                    inscricões
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
