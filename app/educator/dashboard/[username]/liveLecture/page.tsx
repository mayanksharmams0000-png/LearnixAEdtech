"use client"
import { useState } from "react"

export default function Livelecture() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)

  const startLiveLecture = async () => {
    if (!title.trim()) {
      alert("Title is required")
      return
    }

    setLoading(true)

    // later this will call backend
    console.log("Starting live lecture:", { title, description })

    // TEMP: simulate API delay
    setTimeout(() => {
      setLoading(false)
      alert("Live lecture started (mock)")
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 space-y-6">

        {/* Title */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Title</label>
          <input
            type="text"
            placeholder="e.g. DBMS Unit 3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Description */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Description</label>
          <textarea
            rows={4}
            placeholder="Short description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg resize-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Start Button */}
        <button
          onClick={startLiveLecture}
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-900 transition disabled:opacity-50"
        >
          {loading ? "Starting..." : "Start Live Lecture"}
        </button>

      </div>
    </main>
  )
}
