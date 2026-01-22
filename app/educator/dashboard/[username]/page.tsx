"use client"

import { useMemo } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function Dashboard() {
  const params = useParams()
  const teacher = params.username as string

  const features = useMemo(
    () => [
      {
        id: "scheduler",
        title: "Scheduler & Reminder",
        description: "Manage your schedule and get smart reminders",
        icon: "⏰",
        bgGradient: "from-green-100 to-emerald-50 dark:from-green-950 dark:to-emerald-900",
        borderColor: "border-green-200 dark:border-green-800",
        iconBgGradient: "from-green-500 to-emerald-600",
        href: `./${teacher}/scheduler`,
        delay: "0.2s",
      },
      {
        id: "question-generator",
        title: "Question Generator",
        description: "Create custom question papers instantly with AI",
        icon: "📊",
        bgGradient: "from-blue-100 to-blue-50 dark:from-blue-950 dark:to-blue-900",
        borderColor: "border-blue-200 dark:border-blue-800",
        iconBgGradient: "from-blue-500 to-blue-600",
        href: `./${teacher}/question-generator`,
        delay: "0s",
      },
      {
        id: "summary-maker",
        title: "Summarizer Maker",
        description: "Summarize content and upload to Google Classroom",
        icon: "📘",
        bgGradient: "from-purple-100 to-pink-50 dark:from-purple-950 dark:to-pink-900",
        borderColor: "border-purple-200 dark:border-purple-800",
        iconBgGradient: "from-purple-500 to-pink-600",
        href: `./${teacher}/summary-maker`,
        delay: "0.1s",
      },
      {
        id: "voice-assistant",
        title: "Voice Assistant",
        description: "Talk to your AI teaching companion",
        icon: "🎤",
        bgGradient: "from-orange-100 to-red-50 dark:from-orange-950 dark:to-red-900",
        borderColor: "border-orange-200 dark:border-orange-800",
        iconBgGradient: "from-orange-500 to-red-600",
        href: `./${teacher}/voice-assistant`,
        delay: "0.3s",
      },
    ],
    [teacher],
  )

  const corefeature = useMemo(
    () => [
      {
        id: "uploadNotes",
        title: "Upload Notes",
        description: "Upload your notes and resources",
        icon: "📂",
        bgGradient: "from-green-100 to-emerald-50 dark:from-green-950 dark:to-emerald-900",
        borderColor: "border-green-200 dark:border-green-800",
        iconBgGradient: "from-green-500 to-emerald-600",
        href: `./${teacher}/uploadNotes`,
        delay: "0.2s",
      },
      {
        id: "uploadRecordedClass",
        title: "Upload Recorded Lectures",
        description: "Upload recorded lectures",
        icon: "🎥",
        bgGradient: "from-blue-100 to-blue-50 dark:from-blue-950 dark:to-blue-900",
        borderColor: "border-blue-200 dark:border-blue-800",
        iconBgGradient: "from-blue-500 to-blue-600",
        href: `./${teacher}/upload-recordedLecture`,
        delay: "0s",
      },
      {
        id: "holdALiveClass",
        title: "Live Lectures",
        description: "Hold live lectures",
        icon: "📡",
        bgGradient: "from-purple-100 to-pink-50 dark:from-purple-950 dark:to-pink-900",
        borderColor: "border-purple-200 dark:border-purple-800",
        iconBgGradient: "from-purple-500 to-pink-600",
        href: `./${teacher}/liveLecture`,
        delay: "0.1s",
      },
      {
        id: "exams",
        title: "Quizzes & Results",
        description: "Hold quizzes and upload results",
        icon: "📝",
        bgGradient: "from-orange-100 to-red-50 dark:from-orange-950 dark:to-red-900",
        borderColor: "border-orange-200 dark:border-orange-800",
        iconBgGradient: "from-orange-500 to-red-600",
        href: `./${teacher}/quizAndUploadResult`,
        delay: "0.3s",
      },
    ],
    [teacher],
  )

  return (
    <main className="min-h-screen bg-background">
      <div className="pt-20 px-4 md:px-8 pb-8">
        <div className="max-w-7xl mx-auto space-y-10">

          {/* Welcome Section */}
          <div className="space-y-3 animate-in">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Welcome back, {teacher}
            </h1>
            <p className="text-lg text-foreground/70">
              Engage with Students
            </p>
          </div>

          {/* Core Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {corefeature.map((item) => (
              <Link key={item.id} href={item.href} className="group">
                <div
                  className={`h-full p-5 rounded-2xl border-2 ${item.borderColor} ${item.bgGradient}
                  transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}
                >
                  <div className="space-y-3">
                    <div
                      className={`w-11 h-11 rounded-lg bg-gradient-to-br ${item.iconBgGradient}
                      flex items-center justify-center text-white text-xl`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-foreground/70">{item.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          </div>
      </div>
    </main>
  )
}
