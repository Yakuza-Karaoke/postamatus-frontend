import {
  Map,
  Placemark,
  ObjectManager,
  ZoomControl,
} from "@pbe/react-yandex-maps";
import React from "react";
import { doCalcScore } from "../common/points";

class MyMap extends React.Component {
  state = {
    marker: [],
    features: {
      type: "FeatureCollection",
      features: [],
    },
  };

  dataConvert = (coords, c_type) => {
    // c_type == house || postamat
    let features = [];
    coords &&
      coords.forEach((obj) => {
        let tmpObj = {
          type: "Feature",
          id: c_type === "house" ? obj.address : obj.title,
          geometry: {
            type: "Point",
            coordinates: [
              obj.location.coordinates[1],
              obj.location.coordinates[0],
            ],
          },
          properties: {
            balloonContent:
              c_type === "house"
                ? "Адрес: " + obj.address + ". Население: " + obj.population
                : "Постамат с оценкой: " + obj.score,
            hintContent:
              c_type === "house" ? obj.address : "Постамат-" + obj.title,
          },
          options: {
            preset:
              c_type === "house"
                ? "islands#greenDotIcon"
                : "islands#redDotIcon",
          },
        };
        features.push(tmpObj);
      });
    return features;
  };

  render() {
    return (
      <Map
        defaultState={{ center: [55.75, 37.57], zoom: 9 }}
        width={"550px"}
        height={"500px"}
        onClick={(e) => {
          // устанавливаем маркер и записываем координаты в стейт
          this.setState({ marker: e.get("coords") });
          doCalcScore(e.get("coords")[0], e.get("coords")[1]).then((data) => {
            console.log(e.get("coords")[0], e.get("coords")[1]);
            this.setState({
              features: this.dataConvert(data.data.near_houses, "house").concat(
                this.dataConvert(data.data.near_postamats, "postamat")
              ),
            });
            this.props.onCalculate(data.data);
          });
        }}
      >
        {this.state.marker && <Placemark geometry={this.state.marker} />}
        <ObjectManager
          options={{
            clusterize: false,
            gridSize: 150,
          }}
          features={this.state.features}
          objects={{
            openBalloonOnClick: true,
            preset: "islands#greenDotIcon",
          }}
          modules={[
            "objectManager.addon.objectsBalloon",
            "objectManager.addon.objectsHint",
          ]}
        />
        <ZoomControl options={{ float: "right" }} />
      </Map>
    );
  }
}

export default MyMap;
