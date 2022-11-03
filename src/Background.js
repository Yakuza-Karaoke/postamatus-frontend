import "./index.css";
import Footer from "./Footer";
import Logo404 from "./Logo404";

function Background() {
  return (
    <div className="background">
      <Footer />
      <div className="textPostamatus col-auto p-3">Постаматус</div>
      <div>
        <Logo404 />
      </div>
      <div class="row">
        <div class=" textUps col-3">
          Упс, мы не можем найти страницу <br></br>Но мы пытались!
        </div>
      </div>
      <div class="row">
        <div class="textZapr col-3">
          Запрашиваемая страница удалена, имеет другое имя или её не существует.
        </div>
      </div>
    </div>
  );
}

export default Background;
