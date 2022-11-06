import "../index.css";
import Logo404 from "../Logo404";
import { useNavigate } from "react-router-dom";

export default function Page404() {
  const navigate = useNavigate();

  function Return() {
    navigate("/");
  }

  return (
    <div className="page-background">
      <div>
        <div>
          <Logo404 />
        </div>
      </div>
      <div>
        <div class="text-404-header">
          Упс, мы не можем найти страницу <br></br>Но мы пытались!
        </div>
      </div>
      <div>
        <div class="text-404-header-2">
          Запрашиваемая страница удалена, имеет другое имя или её не существует.
        </div>
      </div>
      <div>
        <div>
          <a class="button-back" onClick={Return} href="/">
            <div>← Вернуться назад</div>
          </a>
        </div>
      </div>
    </div>
  );
}
