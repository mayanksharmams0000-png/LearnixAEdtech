"use client"

import {useState}  from "react"

export default function UploadNotes() {
  const courses = [
    "DBMS",
    "Operating Systems",
    "Data Structures",
    "Machine Learning",
  ]

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleUpload = () => {
    if (!title || !file || !selectedCourse) {
      alert("Title, course, and file are required")
      return
    }

    console.log({
      title,
      description,
      course: selectedCourse,
      file,
    })

    // show success
    setSuccess(true)

    // reset states
    setTitle("")
    setDescription("")
    setFile(null)
    setSelectedCourse(null)

    // hide success after 2 seconds
    setTimeout(() => setSuccess(false), 2000)
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold">Upload Notes</h1>
          <p className="text-gray-500 text-sm">
            Upload PDFs, PPTs, or documents for your students.
          </p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-medium">
            ✅ Notes uploaded successfully!
          </div>
        )}

        {/* Title */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Title</label>
          <input
            type="text"
            placeholder="e.g. DBMS Unit 3 Notes"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Description */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Description (optional)</label>
          <textarea
            rows={4}
            placeholder="Short description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Course Toggle List */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Select Course</label>

          <div className="flex flex-wrap gap-2">
            {courses.map((course) => (
              <button
                key={course}
                onClick={() => setSelectedCourse(course)}
                className={`px-4 py-2 rounded-full text-sm border transition
                  ${
                    selectedCourse === course
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:border-black"
                  }`}
              >
                {course}
              </button>
            ))}
          </div>
        </div>

        {/* File Upload */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Upload File</label>
          <input
            type="file"
            accept=".pdf,.ppt,.pptx,.doc,.docx"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full"
          />
        </div>

        {/* Submit */}
        <button
          onClick={handleUpload}
          className="w-full bg-black text-white py-4 rounded-xl font-semibold text-lg
                     hover:bg-gray-800 transition shadow-lg hover:shadow-xl"
        >
          🚀 Upload Notes
        </button>
      </div>
    </main>
  )
}
