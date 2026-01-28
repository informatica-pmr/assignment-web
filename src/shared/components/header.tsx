import { Link } from 'react-router';
import { useAuth } from '../../auth/contexts/auth.context';

export const Header = () => {
  const { username, userId, yearId, role, logout } = useAuth();
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className=' container container-fluid'>
        <Link className='navbar-brand' to='/'>
          Atribui
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        {username !== '' && (
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to='/'>
                  Início
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'>
                  Cadastro
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <Link className='dropdown-item' to='/years'>
                      Anos
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/units'>
                      Unidades
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/disciplines'>
                      Disciplinas
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/situations'>
                      Situações
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/preferences'>
                      Preferências
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/civil-statuses'>
                      Estados civis
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/positions'>
                      Cargos
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/teachers'>
                      Professores(as)
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/titles'>
                      Títulos
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/subscriptions'>
                  Inscrições
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'>
                  Relatórios
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <Link className='dropdown-item' to='/teachers/report'>
                      Professores(as)
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/classifications'>
                      Classificação
                    </Link>
                  </li>
                </ul>
              </li>
              {role !== '3' && (
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'>
                    Segurança
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <Link className='dropdown-item' to='/users'>
                        Usuários
                      </Link>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
            <ul className='navbar-nav ml-auto mb-2 mb-lg-0'>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'>
                  {username} | {yearId}
                </a>
                <ul className='dropdown-menu'>
                  {userId !== 'admin' && (
                    <li>
                      <Link className='dropdown-item' to='/auth/reset'>
                        Mudar senha
                      </Link>
                    </li>
                  )}
                  <li>
                    <Link className='dropdown-item' onClick={() => logout()} to='/auth/login'>
                      Sair
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
