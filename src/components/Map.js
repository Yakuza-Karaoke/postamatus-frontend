import { Map, GeoObject } from "@pbe/react-yandex-maps";

function MyMap() {
  // Документация по яндекс картам: https://pbe-react-yandex-maps.vercel.app/?path=/docs/getting-started--page
  return (
    <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
      <GeoObject
        geometry={{
          type: "LineString",
          coordinates: [
            [55.76, 37.64],
            [52.51, 13.38],
          ],
        }}
        options={{
          geodesic: true,
          strokeWidth: 5,
          strokeColor: "#F008",
        }}
      />
    </Map>
  );
}

export default MyMap;
