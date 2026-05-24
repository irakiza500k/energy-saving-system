import { useEffect, useState } from "react";
import axios from "axios";

import "../styles/devices.css";

function Devices() {
  const [devices, setDevices] = useState([]);

  const [name, setName] = useState("");

  const [power, setPower] = useState("");

  const token = localStorage.getItem("token");

  /* FETCH DEVICES */

  const fetchDevices = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5002/api/devices",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setDevices(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  /* ADD DEVICE */

  const addDevice = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5002/api/devices",
        {
          name,
          power,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setName("");
      setPower("");

      fetchDevices();
    } catch (error) {
      console.log(error);
    }
  };

  /* TOGGLE */

  const toggleDevice = async (id) => {
    try {
      await axios.put(
        `http://localhost:5002/api/devices/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchDevices();
    } catch (error) {
      console.log(error);
    }
  };

  /* DELETE */

  const deleteDevice = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5002/api/devices/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchDevices();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="devices-page">
      <h1>My Devices</h1>

      {/* ADD FORM */}

      <form
        className="device-form"
        onSubmit={addDevice}
      >
        <input
          type="text"
          placeholder="Device Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          required
        />

        <input
          type="number"
          placeholder="Power Consumption"
          value={power}
          onChange={(e) =>
            setPower(e.target.value)
          }
          required
        />

        <button type="submit">
          Add Device
        </button>
      </form>

      {/* DEVICE LIST */}

      <div className="device-grid">
        {devices.map((device) => (
          <div
            className="device-card"
            key={device.id}
          >
            <h2>{device.name}</h2>

            <p>
              Power:
              {device.power} W
            </p>

            <p>
              Status:
              <span
                className={
                  device.status === "ON"
                    ? "on"
                    : "off"
                }
              >
                {device.status}
              </span>
            </p>

            <div className="device-actions">
              <button
                onClick={() =>
                  toggleDevice(device.id)
                }
              >
                Toggle
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteDevice(device.id)
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Devices;