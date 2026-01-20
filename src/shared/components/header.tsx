import { Link, useNavigate } from 'react-router';
import { useAuth } from '../../auth/contexts/auth.context';

export const Header = () => {
  const navigate = useNavigate();
  const { username, yearId, role, logout } = useAuth();
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
                <Link
                  className='nav-link active'
                  aria-current='page'
                  to='/'
                  onClick={() => navigate('/')}>
                  início
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'>
                  cadastro
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <Link className='dropdown-item' to='/years'>
                      anos
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/units'>
                      unidades
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/disciplines'>
                      disciplinas
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/situations'>
                      situações
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/preferences'>
                      preferências
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/civil-statuses'>
                      estados civis
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/positions'>
                      cargos
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/teachers'>
                      professores(as)
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/titles'>
                      títulos
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/subscriptions'>
                  inscricões
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'>
                  relatórios
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <Link className='dropdown-item' to='/teachers/report'>
                      professores
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/classifications'>
                      classificação
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
                    segurança
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <Link className='dropdown-item' to='/users'>
                        usuários
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
                  <li>
                    <Link className='dropdown-item' to='/auth/reset'>
                      mudar senha
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' onClick={() => logout()} to='/auth/login'>
                      sair
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
