import React from "react";
import TwoLabelHeader from "./Utils/TwoLabelHeader";

const Sponsors = () => {
  const ourSponsors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 19];
  return (
    <div
      className="container"
      style={{
        padding: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Sponsorship level Starts */}

      <h2 className=" mt-3  text-center">
        <TwoLabelHeader first={"Sponsorship"} second={"Levels"} />
      </h2>

      <div className="table-responsive">
        <table class="table table-success table-striped-columns mb-2 mt-4">
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
            <tr>
              <td>Silver</td>
              <td>
                <ul className="my-0">
                  <li>
                    Company/organization logo will be placed on website, online
                    and offline activities like invited talks and workshop.
                  </li>
                </ul>
              </td>
              <td>5,000/-</td>
            </tr>
            <tr>
              <td>Platinum</td>
              <td>
                <ul className="my-0">
                  <li>
                    Company/organization logo will be placed on website, online
                    and offline activities like invited talks and workshop.
                  </li>
                  <li>
                    Offer 5 min. presentation on company/organization services.
                  </li>
                  <li>Promote company profile on various platforms.</li>
                  <li>
                    Company/organization logo will be placed on website and
                    online and offline activities like invited talks and
                    workshop.
                  </li>
                </ul>
              </td>
              <td>10,000/-</td>
            </tr>
            <tr>
              <td>Diamond</td>
              <td>
                <ul className="my-0">
                  <li>
                    Company/organization logo will be placed on website, online
                    and offline activities like invited talks and workshop.
                  </li>
                  <li>
                    Offer 5 min. presentation on company/organization services.
                  </li>
                  <li>Promote company profile on various platforms.</li>
                  <li>
                    Company/organization logo will be placed on website and
                    online and offline activities like invited talks and
                    workshop.
                  </li>
                </ul>
              </td>
              <td>25,000/-</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Sponsorship level Ends */}

      {/* Our Sponsors Starts*/}

      <h2 className=" mb-3 mt-5 text-center">
        <TwoLabelHeader first={"Our"} second={"Sponsor"} />
      </h2>

      <div class="">
        <div class="" style={{ display: "flex", flexWrap: "wrap" }}>
          {ourSponsors.map((item) => (
            <>
              <a
                className=""
                key={item}
                href="https://github.com/sandeep03edu"
                target="blank"
              >
                <img
                  src="https://ieeentc.github.io/Sponsors/9de2707bb36c12a782b4dc459900ef4b.jpg"
                  alt="card__image"
                  className="m-2"
                  style={{ height: "60px", width: "auto" }}
                />
              </a>
              <a
                className=""
                key={item}
                href="https://github.com/sandeep03edu"
                target="blank"
              >
                <img
                  src="https://ieeentc.github.io/Sponsors/3ea8ef2dd725a82e808325b43ee515a4.jpg"
                  alt="card__image"
                  className="m-2"
                  style={{ height: "60px", width: "auto" }}
                />
              </a>
            </>
          ))}
        </div>
      </div>

      {/* Our Sponsors Ends*/}

      {/* Become a Sponsor Starts*/}

      <h2 className="mt-5 mb-3 text-center">
        <TwoLabelHeader first={"Become a"} second={"Sponsor"} />
      </h2>

      <p class="d-flex justify-content-center">
        Contact - &nbsp;<a href="mailto:test@iitp.ac.in"> test@iitp.ac.in</a>
      </p>
      {/* Become a Sponsor Ends*/}
    </div>
  );
};

export default Sponsors;
