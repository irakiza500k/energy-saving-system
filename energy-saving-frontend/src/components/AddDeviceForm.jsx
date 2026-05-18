import { useState } from "react";

function AddDeviceForm({ addDevice }) {

  const [deviceName, setDeviceName] =
    useState("");

  const [wattage, setWattage] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!deviceName || !wattage) {
      return;
    }

    addDevice({
      id: Date.now(),
      device: deviceName,
      wattage,
      status: "OFF",
    });

    setDeviceName("");
    setWattage("");
  };

  return (
    <div className="add-device-form">

      <h2>
        ➕ Add New Device
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Device name"
          value={deviceName}
          onChange={(e) =>
            setDeviceName(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Wattage"
          value={wattage}
          onChange={(e) =>
            setWattage(e.target.value)
          }
        />

        <button type="submit">
          Add Device
        </button>

      </form>

    </div>
  );
}

export default AddDeviceForm;