import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

function MyMap() {
  // Документация по яндекс картам: https://pbe-react-yandex-maps.vercel.app/?path=/docs/getting-started--page
  return (
    <YMaps>
      <Map width={'550px'} height={'500px'} defaultState={{ 
        center: [55.755864, 37.617698], 
        zoom: 10,
        controls: ['zoomControl', 'fullscreenControl']
        }} modules={['control.ZoomControl', 'control.FullscreenControl']}>
        
        <Placemark geometry={[55.834472, 37.658059]} />
        <Placemark geometry={[55.835488, 37.658347]} />
        <Placemark geometry={[55.798485, 37.520680]} />
        <Placemark geometry={[55.723592, 37.527256]} />
        <Placemark geometry={[55.715180, 37.506612]} />
        <Placemark geometry={[55.806510, 37.449866]} />
        <Placemark geometry={[55.802462, 37.591934]} />
        <Placemark geometry={[55.661333, 37.509352]} />
        <Placemark geometry={[55.780851, 37.449156]} />
        <Placemark geometry={[55.803575, 37.591036]} />
        <Placemark geometry={[55.803003, 37.591503]} />
        <Placemark geometry={[55.579694, 37.671094]} />
        <Placemark geometry={[55.774598, 37.545950]} />
        <Placemark geometry={[55.774249, 37.546543]} />
        <Placemark geometry={[55.827671, 37.487568]} />
        <Placemark geometry={[55.876703, 37.484065]} />
        <Placemark geometry={[55.665477, 37.547674]} />
        <Placemark geometry={[55.744308, 37.419521]} />
        <Placemark geometry={[55.774031, 37.467221]} />
        <Placemark geometry={[55.637398, 37.600397]} />
        <Placemark geometry={[55.716042, 37.503998]} />

      </Map>
    </YMaps>
  );
}

export default MyMap;
