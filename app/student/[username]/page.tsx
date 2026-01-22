"use client"

import { useParams, useRouter } from "next/navigation"
import { useState } from "react"

type Course = {
  id: number
  title: string
  description: string
  faculty: string
}

export default function Dashboard() {
  const router = useRouter()
  const params = useParams()
  const student = params.username as string

  const courses: Course[] = [
    {
      id: 1,
      title: "Data Structures & Algorithms",
      description: "Master arrays, trees, graphs, and problem solving",
      faculty: "Dr. Ananya Sharma",
    },
    {
      id: 2,
      title: "Operating Systems",
      description: "Processes, memory management, scheduling",
      faculty: "Prof. Rohan Mehta",
    },
    {
      id: 3,
      title: "Computer Networks",
      description: "TCP/IP, routing, congestion control",
      faculty: "Dr. Neeraj Verma",
    },
  ]

  const [enrolled, setEnrolled] = useState<number[]>([])
  const [error, setError] = useState<string>("")

  const toggleEnroll = (courseId: number) => {
    setEnrolled(prev =>
      prev.includes(courseId)
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    )
    setError("") // clear error when user interacts
  }

  const handleDone = () => {
    if (enrolled.length === 0) {
      setError("Please select at least one course")
      return
    }

    router.push(`${student}/dashboard`)
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f5f7fb", padding: "2rem" }}>
      {/* Header */}
      <div style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "700" }}>
          Welcome back, {student} 👋
        </h1>
        <p style={{ color: "#555" }}>
          Enroll in courses and start learning
        </p>
      </div>

      {/* Course Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {courses.map(course => {
          const isEnrolled = enrolled.includes(course.id)

          return (
            <div
              key={course.id}
              style={{
                background: "white",
                borderRadius: "12px",
                padding: "1.5rem",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "600" }}>
                  {course.title}
                </h3>

                <p style={{ margin: "0.75rem 0", color: "#555" }}>
                  {course.description}
                </p>

                <p style={{ fontSize: "0.9rem", color: "#777" }}>
                  👨‍🏫 <strong>{course.faculty}</strong>
                </p>
              </div>

              <button
                onClick={() => toggleEnroll(course.id)}
                style={{
                  marginTop: "1.25rem",
                  padding: "0.6rem",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "600",
                  background: isEnrolled ? "#e53935" : "#4f46e5",
                  color: "white",
                }}
              >
                {isEnrolled ? "Unenroll" : "Enroll Now"}
              </button>
            </div>
          )
        })}
      </div>

      {/* Enrolled Section */}
      {enrolled.length > 0 && (
        <div
          style={{
            marginTop: "3rem",
            background: "white",
            padding: "1.5rem",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ marginBottom: "1rem" }}>📚 Your Enrolled Courses</h2>
          <ul>
            {courses
              .filter(course => enrolled.includes(course.id))
              .map(course => (
                <li key={course.id} style={{ marginBottom: "0.5rem" }}>
                  {course.title} — <em>{course.faculty}</em>
                </li>
              ))}
          </ul>
        </div>
      )}

      {/* Done Button */}
      <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
        {error && (
          <p style={{ color: "#e53935", marginBottom: "1rem", fontWeight: "600" }}>
            {error}
          </p>
        )}

        <button
          onClick={handleDone}
          style={{
            padding: "0.9rem 2.5rem",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "700",
            background: enrolled.length > 0 ? "#16a34a" : "#9ca3af",
            color: "white",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          }}
        >
          Done
        </button>
      </div>
    </div>
  )
}
