function DeviceCard({
  device,
  wattage,
  status,
}) {
  return (
    <div className="device-card">

      <h3>{device}</h3>

      <p>{wattage} Watts</p>

      <div
        className={`device-status ${
          status === "ON"
            ? "on"
            : "off"
        }`}
      >
        {status}
      </div>

    </div>
  );
}

export default DeviceCard;