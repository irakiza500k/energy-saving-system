import { useEffect, useState } from "react";

import axios from "axios";

import socket from "../socket";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import AnimatedBackground from "../components/AnimatedBackground";

import "../styles/dashboard.css";

const API = "http://localhost:5002/api/devices";

function Devices() {

  /* =========================
     STATES
  ========================= */

  const [devices, setDevices] = useState([]);

  const [name, setName] = useState("");

  const [wattage, setWattage] = useState("");

  const [hours, setHours] = useState("");

  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  /* =========================
     FETCH DEVICES
  ========================= */

  const fetchDevices = async () => {

    try {

      setLoading(true);

      const res = await axios.get(
        API,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setDevices(res.data);

      setLoading(false);

    } catch (err) {

      console.log(
        "Fetch devices error:",
        err
      );

      setLoading(false);

    }

  };

  /* =========================
     LOAD ON START
  ========================= */

  useEffect(() => {

    fetchDevices();

  }, []);

  /* =========================
     REALTIME SOCKET UPDATE
  ========================= */

  useEffect(() => {

    socket.on(
      "deviceUpdated",
      () => {

        fetchDevices();

      }
    );

    return () => {

      socket.off(
        "deviceUpdated"
      );

    };

  }, []);

  /* =========================
     ADD DEVICE
  ========================= */

  const addDevice = async (e) => {

    e.preventDefault();

    if (
      !name ||
      !wattage ||
      !hours
    ) {
      return alert(
        "Fill all fields"
      );
    }

    try {

      await axios.post(

        API,

        {
          name,
          wattage,
          hours_per_day: hours,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }

      );

      setName("");
      setWattage("");
      setHours("");

      fetchDevices();

    } catch (err) {

      console.log(
        "Add device error:",
        err
      );

    }

  };

  /* =========================
     TOGGLE DEVICE
  ========================= */

  const toggleDevice = async (id) => {

    try {

      await axios.put(

        `${API}/${id}`,

        {},

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }

      );

    } catch (err) {

      console.log(
        "Toggle error:",
        err
      );

    }

  };

  /* =========================
     DELETE DEVICE
  ========================= */

  const deleteDevice = async (id) => {

    const confirmDelete =
      window.confirm(
        "Delete this device?"
      );

    if (!confirmDelete) return;

    try {

      await axios.delete(

        `${API}/${id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }

      );

    } catch (err) {

      console.log(
        "Delete error:",
        err
      );

    }

  };

  /* =========================
     TOTAL ENERGY
  ========================= */

  const totalEnergy =
    devices.reduce((acc, device) => {

      const energy =
        (
          device.wattage *
          (device.hours_per_day || 1)
        ) / 1000;

      return acc + energy;

    }, 0);

  /* =========================
     UI
  ========================= */

  return (

    <>

      <AnimatedBackground />

      <div className="dashboard-container">

        {/* SIDEBAR */}

        <Sidebar />

        {/* MAIN */}

        <div className="dashboard-main">

          <Topbar />

          {/* PAGE HEADER */}

          <div className="page-header">

            <div>

              <h1>
                🔌 Smart Devices
              </h1>

              <p>
                Manage and monitor
                your connected
                devices
              </p>

            </div>

            <div className="energy-box">

              <h3>
                ⚡ Daily Usage
              </h3>

              <p>
                {totalEnergy.toFixed(2)}
                {" "}kWh
              </p>

            </div>

          </div>

          {/* ADD DEVICE FORM */}

          <div className="device-form-card">

            <h2>
              ➕ Add Device
            </h2>

            <form
              className="device-form"
              onSubmit={addDevice}
            >

              <input
                type="text"
                placeholder="Device name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
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

              <input
                type="number"
                placeholder="Hours/day"
                value={hours}
                onChange={(e) =>
                  setHours(e.target.value)
                }
              />

              <button type="submit">

                Add Device

              </button>

            </form>

          </div>

          {/* DEVICES GRID */}

          <div className="devices-grid">

            {
              loading ?

              (

                <h2>
                  Loading devices...
                </h2>

              )

              :

              devices.length === 0 ?

              (

                <div className="empty-state">

                  <h2>
                    No devices yet
                  </h2>

                  <p>
                    Add your first smart device
                  </p>

                </div>

              )

              :

              (

                devices.map((device) => {

                  const deviceEnergy =
                    (
                      device.wattage *
                      (device.hours_per_day || 1)
                    ) / 1000;

                  return (

                    <div
                      className="device-card"
                      key={device.id}
                    >

                      {/* DEVICE TOP */}

                      <div className="device-top">

                        <div>

                          <h2>
                            {device.name}
                          </h2>

                          <p>
                            {device.wattage}W
                          </p>

                        </div>

                        <span
                          className={
                            device.status === "ON"
                            ?
                            "status-on"
                            :
                            "status-off"
                          }
                        >

                          {device.status}

                        </span>

                      </div>

                      {/* DEVICE BODY */}

                      <div className="device-info">

                        <div>

                          <span>
                            Hours/day
                          </span>

                          <strong>
                            {device.hours_per_day || 1}
                          </strong>

                        </div>

                        <div>

                          <span>
                            Daily kWh
                          </span>

                          <strong>
                            {deviceEnergy.toFixed(2)}
                          </strong>

                        </div>

                      </div>

                      {/* ACTIONS */}

                      <div className="device-actions">

                        <button
                          className="toggle-btn"
                          onClick={() =>
                            toggleDevice(device.id)
                          }
                        >

                          {
                            device.status === "ON"
                            ?
                            "Turn OFF"
                            :
                            "Turn ON"
                          }

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

                  );

                })

              )
            }

          </div>

        </div>

      </div>

    </>

  );

}

export default Devices;