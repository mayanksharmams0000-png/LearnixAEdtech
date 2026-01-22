"use client"

import { useState } from "react"

export default function QuizAndUploadResult() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [quizFile, setQuizFile] = useState<File | null>(null)

  const [quizPublished, setQuizPublished] = useState(false)
  const [resultPublished, setResultPublished] = useState(false)

  const handlePublishQuiz = () => {
    if (!quizFile) return

    // backend: upload quiz + publish
    console.log("Quiz published")
    setQuizPublished(true)
  }

  const handlePublishResult = () => {
    if (!quizPublished) return

    // backend: compute + publish result
    console.log("Result published")
    setResultPublished(true)
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 space-y-6">

        <h1 className="text-2xl font-bold">Quiz & Result Control</h1>

        {/* Title */}
        <input
          placeholder="Quiz title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />

        {/* Description */}
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />

        {/* Upload Quiz */}
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setQuizFile(e.target.files?.[0] || null)}
        />

        {/* Publish Quiz */}
        <button
          onClick={handlePublishQuiz}
          disabled={!quizFile || quizPublished}
          className={`w-full py-3 rounded-lg font-semibold
            ${!quizFile || quizPublished
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-black text-white hover:bg-gray-800"}`}
        >
          {quizPublished ? "✅ Quiz Published" : "📄 Publish Quiz"}
        </button>

        {/* Publish Result */}
        <button
          onClick={handlePublishResult}
          disabled={!quizPublished || resultPublished}
          className={`w-full py-4 rounded-xl font-semibold text-lg
            ${!quizPublished || resultPublished
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-black text-white hover:bg-gray-800"}`}
        >
          {resultPublished ? "✅ Result Published" : "🚀 Publish Result"}
        </button>

      </div>
    </main>
  )
}
