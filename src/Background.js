import './index.css';
import Footer from './Footer';

function Background () {
    return (
        <div className="background">
            <Footer />
            <div className='textPostamatus col-auto p-3'>
                Постаматус
            </div>
                <div class="row justify-content-around">
                  <div class="textUps col-3"> 
                        Упс, мы не можем найти страницу <br></br>Но мы пытались!
                  </div>
                </div>
                <div class="row justify-content-evenly">
                    <div class="textZapr col-3">
                        Запрашиваемая страница удалена, имеет другое имя или её не существует.
                    </div>
                </div>   
        </div>
    )
}


export default Background;