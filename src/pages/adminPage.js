import Header from "../Header";
import AdminTable from "../components/adminTable";
import AdminHeader from "../components/adminHeader";
import Footer from "../Footer"
import { YMaps } from "@pbe/react-yandex-maps";
import MyMap from "../components/Map";

export const adminPage = (
  <YMaps>
    <AdminHeader />
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
