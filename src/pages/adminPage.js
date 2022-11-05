import AdminTable from "../components/adminTable";
import Footer from "../Footer";
import { YMaps } from "@pbe/react-yandex-maps";
import MyMap from "../components/Map";
import Header from "../Header";

export default function AdminPage() {
  return (
    <YMaps>
      <Header title="Страница администратора" />
      <div className="container mt-5">
        <div className="row justify-content-between">
          <div className="col">
            <AdminTable />
          </div>
          <div className="col-auto">
            <MyMap />
          </div>
        </div>
      </div>
      <Footer />
    </YMaps>
  );
}
