import { useNavigate } from '../contexts/navigate.context';
import { Row } from './row';

type FormFooterProps = {
  handleSubmit?: () => void;
};

export const FormFooter: React.FC<FormFooterProps> = ({ handleSubmit }) => {
  const navigate = useNavigate();
  return (
    <Row>
      <div className='col-sm-2'>
        <button
          type='button'
          className='btn btn-primary w-100'
          onClick={() => navigate(undefined, -1)}>
          Voltar
        </button>
      </div>
      {handleSubmit && (
        <div className='col-sm-2 ms-auto'>
          <button type='submit' className='btn btn-success w-100' onClick={() => handleSubmit()}>
            Salvar
          </button>
        </div>
      )}
    </Row>
  );
};
