import React, { useRef, useState } from "react";

import homeData from "../data/raw/home.json";
import eventData from "../data/raw/events.json";
import sponsorData from "../data/raw/sponsors.json";
import memberData from "../data/raw/members.json";

// EditableField component
const EditableField = ({ label, value, onChange }) => (
  <div className="mb-3">
    <label className="form-label">
      <h4> {label}</h4>
    </label>
    <textarea
      type="text"
      className="form-control"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

// JsonRenderer component
const JsonRenderer = ({ jsonData, setJsonData }) => {
  // Handler to update jsonData
  const handleInputChange = (path, value) => {
    const updateObject = (obj, pathArray, value) => {
      if (pathArray.length === 1) {
        obj[pathArray[0]] = value;
      } else {
        updateObject(obj[pathArray[0]], pathArray.slice(1), value);
      }
    };

    const newData = { ...jsonData };
    updateObject(newData, path.split("."), value);
    setJsonData(newData);
  };

  // Handler to add a new item to an array
  const handleAddItem = (path) => {
    const newData = { ...jsonData };
    const pathArray = path.split(".");
    const lastKey = pathArray.pop();
    let obj = newData;

    pathArray.forEach((key) => {
      obj = obj[key];
    });

    const newItem = {};
    Object.keys(obj[lastKey][0]).forEach((key) => {
      console.log({ lastKey, obj, key, it: obj[lastKey][0] });
      newItem[key] = Array.isArray(obj[lastKey][0][key]) ? [] : ""; // Default empty value
    });

    obj[lastKey].push(newItem);
    setJsonData(newData);

    console.log({ path, pathArray, lastKey, obj, newItem });
  };

  // Handler toRR an item from an array
  const handleRemoveItem = (path, index) => {
    const newData = { ...jsonData };
    const pathArray = path.split(".");
    const lastKey = pathArray.pop();
    let obj = newData;

    pathArray.forEach((key) => {
      obj = obj[key];
    });

    obj[lastKey].splice(index, 1);
    setJsonData(newData);
  };

  // Render JSON data recursively
  const renderData = (data, path = "") => {
    if (Array.isArray(data)) {
      return (
        <div style={{ width: "100%" }}>
            <div class="table-responsive">
              <table className="table table-bordered" style={{minWidth:"max-content"}}>
                <thead>
                  <tr>
                    {Object.keys(data[0] || {}).map((key, idx) => (
                      <th key={key}>{key}</th>
                    ))}
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      {Object.keys(item).map((key) =>
                        Array.isArray(item[key]) === true ? (
                          <div class="table-responsive">
                            <table className="table table-bordered table-striped">
                              <thead>
                                <tr>
                                  <th scope="col">Data</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {item[key].map((it, idx) => {
                                  return (
                                    <tr>
                                      <td>
                                        <textarea
                                          type="text"
                                          className="form-control"
                                          value={it}
                                          onChange={(e) => {
                                            item[key][idx] = e.target.value;
                                            let newVal = item[key];
                                            handleInputChange(
                                              `${path}.${index}.${key}`,
                                              newVal
                                            );
                                          }}
                                        />
                                      </td>
                                      <td>
                                        <button
                                          className="btn btn-danger"
                                          onClick={() => {
                                            item[key].splice(idx, 1);
                                            handleInputChange(
                                              `${path}.${index}.${key}`,
                                              item[key]
                                            );
                                          }}
                                        >
                                          X
                                        </button>
                                      </td>
                                    </tr>
                                  );
                                })}
                                <tr>
                                  <td
                                    colSpan={
                                      Object.keys(data[0] || {}).length + 1
                                    }
                                  >
                                    <button
                                      className="btn btn-primary"
                                      onClick={() => {
                                        item[key].push("");
                                        handleInputChange(
                                          `${path}.${index}.${key}`,
                                          item[key]
                                        );
                                      }}
                                    >
                                      +
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        ) : (
                          <td key={key}>
                            <textarea
                              type="text"
                              className="form-control"
                              value={item[key]}
                              onChange={(e) =>
                                handleInputChange(
                                  `${path}.${index}.${key}`,
                                  e.target.value
                                )
                              }
                            />
                          </td>
                        )
                      )}
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleRemoveItem(path, index)}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={Object.keys(data[0] || {}).length + 1}>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleAddItem(path)}
                      >
                        +
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
      );
    } else if (typeof data === "object" && data !== null) {
      return (
        <div>
          {Object.keys(data).map((key) => (
            <div key={key}>
              <h3>{key}</h3>
              {renderData(data[key], path ? `${path}.${key}` : key)}
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <EditableField
          label={path.split(".").pop()}
          value={data}
          onChange={(value) => handleInputChange(path, value)}
        />
      );
    }
  };

  // Render only top-level objects with forms
  const renderTopLevelData = (data) => {
    return (
      <div>
        {Object.keys(data).map((key) => {
          if (Array.isArray(data[key])) {
            return (
              <div key={key}>
                <h3>{key}</h3>
                {renderData(data[key], key)}
              </div>
            );
          } else if (typeof data[key] === "object" && data[key] !== null) {
            return (
              <div key={key} className="mb-4">
                <h3>{key}</h3>
                <form>
                  {Object.keys(data[key]).map((fieldKey) => (
                    <EditableField
                      key={fieldKey}
                      label={fieldKey}
                      value={data[key][fieldKey]}
                      onChange={(value) =>
                        handleInputChange(`${key}.${fieldKey}`, value)
                      }
                    />
                  ))}
                </form>
              </div>
            );
          } else {
            return (
              <EditableField
                key={key}
                label={key}
                value={data[key]}
                onChange={(value) => handleInputChange(key, value)}
              />
            );
          }
        })}
      </div>
    );
  };

  return <div>{renderTopLevelData(jsonData)}</div>;
};

// Array of JSON data sets
const jsonOptions = [
  { label: "home", value: homeData },
  { label: "events", value: eventData },
  { label: "members", value: memberData },
  { label: "sponsors", value: sponsorData },
];

// Dropdown component
const JsonDropdown = ({ onSelect }) => {
  const [selectedJsonFile, setSelectedJsonFile] = useState(
    jsonOptions[0].label
  );

  const handleSelect = (event) => {
    const selectedLabel = event.target.value;
    const selectedJson = jsonOptions.find(
      (option) => option.label === selectedLabel
    ).value;
    setSelectedJsonFile(selectedLabel);
    onSelect(selectedJson);
  };

  return (
    <div className="mb-3">
      <label htmlFor="jsonSelect" className="form-label my-2">
        Select JSON Data:
      </label>
      <select
        id="jsonSelect"
        className="form-select"
        value={selectedJsonFile}
        onChange={handleSelect}
      >
        {jsonOptions.map((option) => (
          <option key={option.label} value={option.label}>
            {option.label}
          </option>
        ))}
      </select>

      <div className=" my-2 py-2 px-2" style={{ background: "yellow" }}>
        <h4>
          <a
            href={`https://github.com/ieeepeschapter/PowerPanelWebsite/tree/main/public/assets/${selectedJsonFile}`}
            target="blank"
            style={{ cursor: "pointer" }}
          >
            {`To add or update an image, first upload the image to public/assets/${selectedJsonFile} folder with a unique name`}
          </a>
        </h4>

        <h4>Steps to modify the data</h4>
        <ul>
          <li>Login to the ieeepeschapter github repository</li>
          <li>
            To add or update an image, upload the image file with a unique file
            name to above designated folder.
          </li>
          <li>Change the data below and all fields are compulsory*</li>
          <li>
            Copy the update data by clicking on below Copy JSON Data button
          </li>
          <li>
            <a
              href={`https://github.com/ieeepeschapter/PowerPanelWebsite/tree/main/src/data/raw/${selectedJsonFile}.json`}
              target="blank"
              style={{ cursor: "pointer" }}
            >
              {`Open the src/data/raw/${selectedJsonFile}.json file`}
            </a>
          </li>
          <li>
            Click on the pencil icon{" "}
            <a
              sx="[object Object]"
              data-component="IconButton"
              type="button"
              class="types__StyledButton-sc-ws60qy-0 bDhqXD"
              data-hotkey="e,Shift+E"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                role="img"
                class="octicon octicon-pencil"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path>
              </svg>
            </a>{" "}
            on the rightmost side{" "}
          </li>

          <li>Delete the current data and Paste the complete new data</li>
          <li>
            Click on "Commit changes..." button, then add some description
            (Optional)"
          </li>
          <li>
            Choose "Commit directly to main branch" and click "Commit changes"
          </li>
          <li>Wait for 5-10 min for changes to reflect in deployed website</li>
        </ul>
      </div>
    </div>
  );
};

const Admin = () => {
  const [jsonData, setJsonData] = useState(homeData);

  const handleJsonSelect = (jsonFile) => {
    setJsonData(jsonFile);
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(jsonData, null, 2));
    alert("JSON data copied to clipboard!");
  };

  return (
    <div>
      <div className="m-4">
        <h1>Modify App content</h1>
        <JsonDropdown onSelect={handleJsonSelect} />
        <JsonRenderer jsonData={jsonData} setJsonData={setJsonData} />
        <button className="btn btn-primary my-3" onClick={handleCopyJson}>
          Copy JSON Data
        </button>
      </div>
    </div>
  );
};

export default Admin;
