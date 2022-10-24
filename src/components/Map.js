let piterMap, moscowMap


ymaps.ready(function(){
    moscowMap = new ymaps.Map("first_map", {
        center: [55.76, 37.64],
        zoom: 10
    });
    piterMap = new ymaps.Map(document.getElementsByTagName('p')[2], {
        center: [59.94, 30.32],
        zoom: 9
    });
});

function Map () {
    return (
        <div>
            <div id='first_map'></div>
        </div>
    )
}

export default Map;