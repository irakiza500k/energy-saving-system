function DeviceList({
  devices,
  toggleStatus,
  deleteDevice,
}) {

  return (
    <div className="devices-grid">

      {devices.map((item) => (

        <div
          className="device-card"
          key={item.id}
        >

          <h3>{item.device}</h3>

          <p>
            ⚡ {item.wattage} Watts
          </p>

          <div
            className={`device-status ${
              item.status === "ON"
                ? "on"
                : "off"
            }`}
          >
            {item.status}
          </div>

          <div className="device-actions">

            <button
              className="toggle-btn"
              onClick={() =>
                toggleStatus(item.id)
              }
            >
              Toggle
            </button>

            <button
              className="delete-btn"
              onClick={() =>
                deleteDevice(item.id)
              }
            >
              Delete
            </button>

          </div>

        </div>

      ))}

    </div>
  );
}

export default DeviceList;