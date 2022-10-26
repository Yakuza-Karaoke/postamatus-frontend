import './index.css';
import MyMap from './components/Map';

function Content () {
    return (
        <div className='container border'>
            <div className='row justify-content-center'>
                <h1 className='col-auto'>Установка постамата в <strong><u>г. Санкт-петербурге</u></strong></h1>
                <div id='map' className='col-auto me-auto'><MyMap /></div>
            </div>
            
        </div>
    )
}


export default Content;