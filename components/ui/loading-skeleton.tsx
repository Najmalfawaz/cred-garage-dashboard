"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/hooks/use-theme"

export function LoadingSkeleton() {
  const { theme } = useTheme()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{
