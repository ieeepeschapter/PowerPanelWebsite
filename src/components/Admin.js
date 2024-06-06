import React, { useState } from "react";

import homeData from "../data/raw/home.json";
import eventData from "../data/raw/events.json";
import sponsorData from "../data/raw/sponsors.json";
import memberData from "../data/raw/members.json";

// EditableField component
const EditableField = ({ label, value, onChange }) => (
  <div className="mb-3">
    <label className="form-label">{label}</label>
    <input
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
      newItem[key] = ""; // Default empty value
    });

    obj[lastKey].push(newItem);
    setJsonData(newData);
  };

  // Handler to remove an item from an array
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
        <div>
          <table className="table table-bordered">
            <thead>
              <tr>
                {Object.keys(data[0] || {}).map((key) => (
                  <th key={key}>{key}</th>
                ))}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  {Object.keys(item).map((key) => (
                    <td key={key}>
                      <input
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
                  ))}
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveItem(path, index)}
                    >
                      Remove
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
                    Add Item
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
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
          <a href={`https://github.com/ieeepeschapter/PowerPanelWebsite/tree/main/public/assets/${selectedJsonFile}`} style={{cursor:"pointer"}}>
            {`To add or update the image, first upload the image to public/assets/${selectedJsonFile} folder with a unique name`}
          </a>
        </h4>
      </div>
    </div>
  );
};

// Example data
const data = {
  sponsorLevels: [
    {
      title: "Silver",
      perks: [
        "Company/organization logo will be placed on website, online and offline activities like invited talks and workshop.",
      ],
      price: "5,000/-",
    },
    {
      title: "Platinum",
      perks: [
        "Company/organization logo will be placed on website, online and offline activities like invited talks and workshop.",
        "Offer 5 min. presentation on company/organization services.",
        "Promote company profile on various platforms.",
        "Company/organization logo will be placed on website and online and offline activities like invited talks and workshop.",
      ],
      price: "10,000/-",
    },
    {
      title: "Silver",
      perks: [
        "Company/organization logo will be placed on website, online and offline activities like invited talks and workshop.",
        "Offer 5 min. presentation on company/organization services.",
        "Promote company profile on various platforms.",
        "Company/organization logo will be placed on website and online and offline activities like invited talks and workshop.",
      ],
      price: "25,000/-",
    },
  ],
  ourSponsors: [
    {
      name: "Hind High Vacuum Company Private Limited",
      image: "sponsor1.jpg",
      link: "https://hhv.in/contact-us",
    },
    {
      name: "Cadre Design",
      image: "sponsor2.jpg",
      link: "https://cadredesign.co.in/contact-us/",
    },
    {
      name: "Hind High Vacuum Company Private Limited",
      image: "sponsor1.jpg",
      link: "https://hhv.in/contact-us",
    },
    {
      name: "Cadre Design",
      image: "sponsor2.jpg",
      link: "https://cadredesign.co.in/contact-us/",
    },
    {
      name: "Hind High Vacuum Company Private Limited",
      image: "sponsor1.jpg",
      link: "https://hhv.in/contact-us",
    },
    {
      name: "Cadre Design",
      image: "sponsor2.jpg",
      link: "https://cadredesign.co.in/contact-us/",
    },
  ],
  sponsorEmail: "ieeepeschapter@iitp.ac.in",
};

const Admin = () => {
  const [jsonData, setJsonData] = useState(data);

  const handleJsonSelect = (jsonFile) => {
    setJsonData(jsonFile);
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(jsonData, null, 2));
    alert("JSON data copied to clipboard!");
  };

  return (
    <div className="container">
      <h1>Modify App content</h1>
      <JsonDropdown onSelect={handleJsonSelect} />
      <JsonRenderer jsonData={jsonData} setJsonData={setJsonData} />
      <button className="btn btn-primary my-3" onClick={handleCopyJson}>
        Copy JSON Data
      </button>
    </div>
  );
};

export default Admin;
