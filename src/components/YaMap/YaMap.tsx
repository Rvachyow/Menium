import style from "./YaMap.module.scss";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export const YaMap = () => {

  let latitude = 55.660760; 
  let longitude = 37.543560;
  
  return <div className={style.maps}>
    <YMaps >
      <Map width={"100%"} height={"100%"} className={style.map} defaultState={{
        center: [latitude , longitude],
        zoom: 9}}>
        <Placemark geometry={[latitude, longitude]} />
      </Map>
    </YMaps>
  </div>;
};