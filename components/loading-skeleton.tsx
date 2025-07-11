"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useTheme } from "@/components/theme-provider"

export function LoadingSkeleton() {
  const { theme } = useTheme()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8">
      {/* User Profile Skeleton */}
      <div
        className={`rounded-2xl p-6 ${
          theme === "dark" ? "bg-gray-900/60 border border-gray-700 shadow-2xl shadow-purple-500/10" : "bg-white/70"
        } backdrop-blur-sm`}
      >
        <div className="flex items-center space-x-4 mb-6">
          <Skeleton className={`h-16 w-16 rounded-full ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
          <div className="space-y-2">
            <Skeleton className={`h-6 w-32 ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
            <div className="flex space-x-2">
              <Skeleton className={`h-5 w-20 ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
              <Skeleton className={`h-5 w-16 ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <Skeleton className={`h-4 w-48 ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
          <Skeleton className={`h-3 w-full ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
          <Skeleton className={`h-3 w-24 mx-auto ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
        </div>
      </div>

      {/* Reward Progress Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div
          className={`lg:col-span-2 rounded-2xl p-6 ${
            theme === "dark" ? "bg-gray-900/60 border border-gray-700 shadow-2xl shadow-purple-500/10" : "bg-white/70"
          } backdrop-blur-sm`}
        >
          <Skeleton className={`h-6 w-32 mb-6 ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
          <div className="text-center space-y-4">
            <Skeleton className={`h-12 w-32 mx-auto ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
            <Skeleton className={`h-4 w-24 mx-auto ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
            <Skeleton className={`h-4 w-full ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
            <Skeleton className={`h-3 w-48 mx-auto ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
          </div>
        </div>
        <div className="space-y-6">
          <div
            className={`rounded-2xl p-6 ${
              theme === "dark" ? "bg-gray-900/60 border border-gray-700 shadow-xl shadow-purple-500/10" : "bg-white/70"
            } backdrop-blur-sm`}
          >
            <div className="flex items-center space-x-3">
              <Skeleton className={`h-10 w-10 rounded-lg ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
              <div className="space-y-2">
                <Skeleton className={`h-6 w-16 ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
                <Skeleton className={`h-4 w-20 ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
              </div>
            </div>
          </div>
          <div
            className={`rounded-2xl p-6 ${
              theme === "dark" ? "bg-gray-900/60 border border-gray-700 shadow-xl shadow-purple-500/10" : "bg-white/70"
            } backdrop-blur-sm`}
          >
            <div className="flex items-center space-x-3">
              <Skeleton className={`h-10 w-10 rounded-lg ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
              <div className="space-y-2">
                <Skeleton className={`h-6 w-16 ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
                <Skeleton className={`h-4 w-20 ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section Skeleton */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Skeleton className={`h-8 w-32 ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
          <Skeleton className={`h-6 w-16 ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className={`rounded-2xl p-6 ${
                theme === "dark"
                  ? "bg-gray-900/60 border border-gray-700 shadow-xl shadow-purple-500/10"
                  : "bg-white/70"
              } backdrop-blur-sm`}
            >
              <div className="flex items-start justify-between mb-4">
                <Skeleton className={`h-12 w-12 rounded-xl ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
                <div className="text-right space-y-1">
                  <Skeleton className={`h-5 w-12 ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
                  <Skeleton className={`h-6 w-16 ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <Skeleton className={`h-5 w-24 ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
                <Skeleton className={`h-4 w-full ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
              </div>
              <Skeleton className={`h-10 w-full ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`animate-pulse rounded-md ${className}`} {...props} />
)
