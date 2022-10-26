function MyMap() {
  let map1 = new ymaps.Map('map', {
    center: [60, 30.4],
    zoom: 9
  })
  return <div></div>
}

ymaps.ready(MyMap)

export default MyMap;