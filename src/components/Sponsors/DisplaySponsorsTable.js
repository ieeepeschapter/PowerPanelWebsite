import React from "react";
import TwoLabelHeader from "../Utils/TwoLabelHeader";

const DisplaySponsorsTable = ({ sponsorshipLevel }) => {
  return (
    <>
      <h2 className=" mt-3  text-center">
        <TwoLabelHeader first={"Sponsorship"} second={"Levels"} />
      </h2>
      <div className="table-responsive">
        <table className="table table-success table-striped-columns mb-2 mt-4">
          <colgroup>
            <col style={{ width: "15%" }}></col>
            <col style={{ width: "75%" }}></col>
            <col style={{ width: "10%" }}></col>
          </colgroup>
          <thead>
            <tr>
              <th scope="col">Sponsorship</th>
              <th scope="col">Perks</th>
              <th scope="col">Prize (INR)</th>
            </tr>
          </thead>
          <tbody>
            {sponsorshipLevel.map((level) => (
              <tr key={level}>
                <td>{level.title}</td>
                <td>
                  <ul className="my-0">
                    {level.perks.map((perk) => (
                      <li>{perk}</li>
                    ))}
                  </ul>
                </td>
                <td> {level.price} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DisplaySponsorsTable;
