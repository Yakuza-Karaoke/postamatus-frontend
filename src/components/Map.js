// import { Map, Placemark } from "@pbe/react-yandex-maps";

// function MyMap() {
//   // Документация по яндекс картам: https://pbe-react-yandex-maps.vercel.app/?path=/docs/getting-started--page

//   let picked_point = null;

//   const clickOnMap = (e) => {
//     console.log(e.get("coords"));
//     picked_point = e.get("coords");
//   };

//   return (
//     <Map
//       width={"550px"}
//       height={"500px"}
//       defaultState={{
//         center: [55.755864, 37.617698],
//         zoom: 10,
//         controls: ["zoomControl", "fullscreenControl"],
//       }}
//       modules={["control.ZoomControl", "control.FullscreenControl"]}
//       onClick={clickOnMap}
//     >
//       {picked_point ? <Placemark geometry={picked_point} /> : null}
//     </Map>
//   );
// }

// export default MyMap;


import React, { Component } from 'react'
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default class MyMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coords: [],
            mapState: {
                center: [41.2825125, 69.1392826],
                zoom: 9
            },
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.oldCoords !== this.props.oldCoords) {
            this.setState({ coords: this.props.oldCoords })
        }
    }

    onMapClick = (e) => {
        const coords = e.get("coords");
        this.setState({ coords: coords })
    };

    render() {
        return (
            <div>
                <YMaps query={{ apikey: "6054728e-f3f0-4a09-b10c-8e6d17c49bf2" }}>
                    <Map
                        modules={["Placemark", "geoObject.addon.balloon"]}
                        onClick={this.onMapClick}
                        state={this.state.mapState}
                        width='100%'
                        height='500px'
                    >
                        {this.state.coords ? <Placemark geometry={this.state.coords} /> : null}
                    </Map>
                </YMaps>
            </div>
        )
    }
}