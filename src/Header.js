import './index.css'

const hui = <div>Панель администратора</div>

function Header() {
  return (
      <header>
        <div className="container">
          <div className="row align-items-center justify-content-between head">
            <div className='col-auto pl-3'>Постаматус</div>
            <div className='col-auto pr-3'>{hui}</div>
          </div>
        </div>
      </header>
  );
}

export default Header;
