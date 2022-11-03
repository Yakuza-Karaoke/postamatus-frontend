import "../index.css";
import Logo404 from "../Logo404";
import Header from "../Header";

export const page404 = (
  <div className="background">
    <div class="row">
      <div class="col">
        <Logo404 />
      </div>
    </div>
    <div class="row">
      <div class="textUps col-3 pt-3">
        Упс, мы не можем найти страницу <br></br>Но мы пытались!
      </div>
    </div>
    <div class="row">
      <div class="textZapr col-3 pt-3">
        Запрашиваемая страница удалена, имеет другое имя или её не существует.
      </div>
    </div>
    <div class="row">
      <div class="textZapr col-3 pt-4">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a class="btn btn-light btn-lg">Вернуться назад</a>
      </div>
    </div>
  </div>
);
