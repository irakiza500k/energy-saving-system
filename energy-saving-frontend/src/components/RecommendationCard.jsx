function RecommendationCard({
  icon,
  title,
  message,
  level,
}) {

  return (
    <div className="recommendation-card">

      <div className="recommendation-icon">
        {icon}
      </div>

      <h3 className="recommendation-title">
        {title}
      </h3>

      <p className="recommendation-message">
        {message}
      </p>

      <span className="recommendation-level">
        {level}
      </span>

    </div>
  );
}

export default RecommendationCard;