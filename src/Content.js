import './index.css';
import Map from './components/Map';

function Content () {
    return (
        <div className='container border'>
            <div className='row justify-content-center'>
                <h1 className='col-auto'>Установка постамата в <strong><u>г. Санкт-петербурге</u></strong></h1>
                <Map />
            </div>
            
        </div>
    )
}


export default Content;