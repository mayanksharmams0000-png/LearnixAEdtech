"use client"

import { useParams } from "next/navigation"

export default function Dashboard() {
  const params = useParams()
  const username = params.username as string

  return (
    <div style={{ background: "#f4f6fb", minHeight: "100vh", padding: "2rem" }}>
      
      {/* Welcome */}
      <h1 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "2rem" }}>
        Welcome, {username} 👋
      </h1>

      {/* Enrolled Classes */}
      <Section
        title="📚 Your Classes"
        items={[
          { title: "Data Structures", subtitle: "Dr. Ananya Sharma" },
          { title: "Operating Systems", subtitle: "Prof. Rohan Mehta" },
          { title: "Computer Networks", subtitle: "Dr. Neeraj Verma" },
        ]}
        buttonText="Watch"
      />

      {/* Live Classes */}
      <Section
        title="🔴 Live Classes"
        items={[
          { title: "OS – Process Scheduling", subtitle: "Live in 10 mins" },
          { title: "CN – TCP Congestion", subtitle: "Live Now" },
        ]}
        buttonText="Join"
        live
      />

      {/* Tests */}
      <Section
        title="📝 Tests"
        items={[
          { title: "DSA Weekly Test", subtitle: "20 Questions" },
          { title: "OS Mid-Module Test", subtitle: "MCQs + Theory" },
          { title: "CN Quiz", subtitle: "15 MCQs" },
        ]}
        buttonText="Attempt"
      />
    </div>
  )
}

/* ---------- Reusable Horizontal Section ---------- */

function Section({
  title,
  items,
  buttonText,
  live = false,
}: {
  title: string
  items: { title: string; subtitle: string }[]
  buttonText: string
  live?: boolean
}) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2 style={{ marginBottom: "1rem" }}>{title}</h2>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          overflowX: "auto",
          paddingBottom: "0.5rem",
        }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            style={{
              minWidth: "240px",
              background: "white",
              borderRadius: "14px",
              padding: "1.25rem",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              border: live ? "2px solid #e53935" : "none",
            }}
          >
            <h3 style={{ fontSize: "1.05rem", fontWeight: "600" }}>
              {item.title}
            </h3>
            <p style={{ marginTop: "0.5rem", color: "#666" }}>
              {item.subtitle}
            </p>

            <button
              style={{
                marginTop: "1rem",
                width: "100%",
                padding: "0.5rem",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                background: live ? "#e53935" : "#4f46e5",
                color: "white",
                fontWeight: "600",
              }}
            >
              {buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
