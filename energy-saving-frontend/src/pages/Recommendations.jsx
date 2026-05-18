import Sidebar from "../components/Sidebar";

import Topbar from "../components/Topbar";

import RecommendationCard from "../components/RecommendationCard";

import AnimatedBackground from "../components/AnimatedBackground";

import "../styles/dashboard.css";

function Recommendations() {

  const recommendations = [

    {
      id: 1,
      icon: "💡",
      title: "Turn Off Unused Lights",
      message:
        "Switch off lights in empty rooms to reduce unnecessary electricity usage.",
      level: "Easy Saving",
    },

    {
      id: 2,
      icon: "⚡",
      title: "Replace Old Bulbs",
      message:
        "LED bulbs consume much less energy compared to traditional bulbs.",
      level: "High Impact",
    },

    {
      id: 3,
      icon: "🔋",
      title: "Reduce Peak Hour Usage",
      message:
        "Avoid using heavy devices like irons during peak electricity hours.",
      level: "Smart Optimization",
    },

    {
      id: 4,
      icon: "🌙",
      title: "Use Night Saving Mode",
      message:
        "Enable low power mode during night hours to save electricity.",
      level: "Automation",
    },

  ];

  return (
    <>

      <AnimatedBackground />

      <div className="dashboard">

        <Sidebar />

        <div className="main-content">

          <Topbar />

          <div className="recommendations-grid">

            {recommendations.map((item) => (

              <RecommendationCard
                key={item.id}
                icon={item.icon}
                title={item.title}
                message={item.message}
                level={item.level}
              />

            ))}

          </div>

        </div>

      </div>

    </>
  );
}

export default Recommendations;