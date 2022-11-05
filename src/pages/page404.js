import "../index.css";
import Logo404 from "../Logo404";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

export default function Page404 () {
  const navigate = useNavigate();
  function Return () {
    navigate("/")
  }
  return(
    <div className="background">
        <div className="textPostamatus col-auto p-3">Постаматус</div>
          <div>
            <div >
              <Logo404 />
            </div>
          </div>
          <div>
            <div class="textUps">
              Упс, мы не можем найти страницу <br></br>Но мы пытались!
            </div>
          </div>
          <div>
            <div class="textZapr">
              Запрашиваемая страница удалена, имеет другое имя или её не существует.
            </div>
          </div>
          <div>
            <div>
              <a class="buttNaz" href="/"><div onClick={Return}>← Вернуться назад</div></a>
            </div>
          </div>
          <div className="text-white bg-white">
            <Footer />
          </div>
          </div>
  )
};
