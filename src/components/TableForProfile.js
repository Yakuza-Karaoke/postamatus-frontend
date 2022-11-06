import React from "react";

export default function TableForProfile() {
  return (
    <div>
      <table className="table table-bordered border-secondary">
        <thead className="thead-dark">
          <tr>
            <th scope="col">№</th>
            <th scope="col">Статус</th>
            <th scope="col-3">Название</th>
            <th scope="col">Место</th>
            <th scope="col">Оценка</th>
            <th scope="text-center col">Удаление</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
