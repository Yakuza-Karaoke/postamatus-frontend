import './index.css';
import MyMap from './components/Map';
import Button from './components/Button'
import Footer from './Footer';

function Content () {
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <h1 className='col-auto'>Установка постамата в <strong><u>г. Санкт-петербурге</u></strong></h1>
                
                <div className='row justify-content-around'>
                    <div className='col-auto'><MyMap /></div>
                
                    <div className='col-4'>
                            <Button name="Добавить постамат" class="button"/>
                            <Button name="Рассчитать оценку локации" class="button count"/>
                    </div>
                </div>
                <Footer />
            </div>
            
        </div>
    )
}


export default Content;