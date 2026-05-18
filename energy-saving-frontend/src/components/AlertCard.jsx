function AlertCard({
  type,
  title,
  message,
  time,
}) {

  return (
    <div className={`alert-card ${type}`}>

      <div className="alert-title">

        <h3>{title}</h3>

        <span className="alert-time">
          {time}
        </span>

      </div>

      <p className="alert-message">
        {message}
      </p>

    </div>
  );
}

export default AlertCard;