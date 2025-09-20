import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  const dashboardItems = [
    { title: "Add Module", color: "#40739e", route: "/modules" },
    { title: "Add Description", color: "#44bd32", route: "/descriptions" },
    { title: "Add Quiz", color: "#e1b12c", route: "/quizzes" },
  ];

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f6fa",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{ textAlign: "center", marginBottom: "40px", color: "#2f3640" }}
      >
        Admin Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {dashboardItems.map((item) => (
          <div
            key={item.title}
            onClick={() => navigate(item.route)}
            style={{
              backgroundColor: item.color,
              color: "#fff",
              width: "200px",
              height: "150px",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform =
                "scale(1.05)";
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 10px 20px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 6px 12px rgba(0,0,0,0.15)";
            }}
          >
            <h2 style={{ margin: 0 }}>{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
