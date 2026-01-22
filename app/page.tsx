"use client";

import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  const handleEducator = () => {
    router.push("/auth/educator-auth/signup");
  };

  const handleStudent = () => {
    router.push("/auth/student-auth/signup");
  };

  return (
    <main className="min-h-screen flex items-center justify-center 
                     bg-gradient-to-br from-slate-100 via-slate-50 to-white px-4">
      
      <div className="w-full max-w-md bg-white rounded-3xl 
                      shadow-[0_10px_40px_rgba(0,0,0,0.08)] 
                      border border-slate-100 
                      p-10 text-center space-y-10">

        {/* Header */}
        <div className="space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Learnix
          </h1>
          <p className="text-sm text-slate-500">
            Shaping the future of learning
          </p>
        </div>

        {/* Role Buttons */}
        <div className="space-y-5">
          <button
            onClick={handleEducator}
            className="w-full py-4 rounded-2xl 
                       bg-slate-900 text-white font-semibold
                       shadow-md
                       hover:bg-slate-800 hover:shadow-lg
                       active:scale-[0.98]
                       transition-all duration-200"
          >
            👩‍🏫 Continue as Educator
          </button>

          <button
            onClick={handleStudent}
            className="w-full py-4 rounded-2xl 
                       border border-slate-300 bg-white
                       font-semibold text-slate-700
                       hover:bg-slate-50 hover:border-slate-400
                       active:scale-[0.98]
                       transition-all duration-200"
          >
            🎓 Continue as Student
          </button>
        </div>

        {/* Footer */}
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Learnix. All rights reserved.
        </p>
      </div>
    </main>
  );
}
