// "use client"

// import { motion, AnimatePresence } from "framer-motion"
// import { TrendingUp, Crown, Star } from "lucide-react"
// import { useState } from "react"
// import { getTextColor, getCardStyles } from "@/lib/utils/theme-utils"
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"
// import { Progress } from "@/components/ui/progress"
// import { useTheme } from "../../lib/hooks/theme-provider"

// export function UserProfileSection() {
//   const { theme } = useTheme()
//   const [isHovered, setIsHovered] = useState(false)
//   const currentXP = 2450
//   const nextLevelXP = 3000
//   const progress = (currentXP / nextLevelXP) * 100

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.1 }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       whileHover={{
//         scale: 1.01,
//         rotateX: 1,
//         rotateY: 1,
//         z: 25,
//       }}
//       className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-500 relative overflow-hidden ${getCardStyles(theme)}`}
//       style={{
//         transformStyle: "preserve-3d",
//         boxShadow: isHovered
//           ? theme === "dark"
//             ? "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)"
//             : "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)"
//           : "none",
//       }}
//     >
//       {/* Animated background gradient */}
//       <motion.div
//         animate={{
//           background: isHovered
//             ? "linear-gradient(45deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)"
//             : "transparent",
//         }}
//         transition={{ duration: 0.5 }}
//         className="absolute inset-0 rounded-xl sm:rounded-2xl"
//       />

//       {/* Floating sparkles - reduced on mobile */}
//       <AnimatePresence>
//         {isHovered && (
//           <>
//             {[...Array(3)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
//                 animate={{
//                   opacity: [0, 1, 0],
//                   scale: [0, 1, 0],
//                   x: Math.random() * 100 - 50,
//                   y: Math.random() * 100 - 50,
//                 }}
//                 exit={{ opacity: 0, scale: 0 }}
//                 transition={{
//                   duration: 2,
//                   delay: i * 0.1,
//                   repeat: Number.POSITIVE_INFINITY,
//                   repeatDelay: 3,
//                 }}
//                 className="absolute top-1/2 left-1/2 w-1 h-1 bg-yellow-400 rounded-full hidden sm:block"
//               />
//             ))}
//           </>
//         )}
//       </AnimatePresence>

//       <div className="relative z-10">
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-4 sm:space-y-0">
//           <div className="flex items-center space-x-3 sm:space-x-4">
//             <motion.div
//               whileHover={{
//                 scale: 1.05,
//                 rotateY: 10,
//                 rotateX: 3,
//               }}
//               transition={{ type: "spring", stiffness: 300 }}
//               style={{ transformStyle: "preserve-3d" }}
//             >
//               <Avatar className="h-12 w-12 sm:h-16 sm:w-16 ring-2 sm:ring-4 ring-purple-500/20 relative flex-shrink-0">
//                 <motion.div
//                   animate={{ rotate: isHovered ? 360 : 0 }}
//                   transition={{ duration: 2, ease: "easeInOut" }}
//                   className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-20"
//                 />
//                 <AvatarImage src="/placeholder.svg?height=64&width=64" alt="User" />
//                 <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-lg sm:text-xl font-bold relative z-10">
//                   AK
//                 </AvatarFallback>
//                 <motion.div
//                   animate={{
//                     scale: [1, 1.2, 1],
//                     opacity: [0.5, 0.8, 0.5],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Number.POSITIVE_INFINITY,
//                     ease: "easeInOut",
//                   }}
//                   className="absolute inset-0 rounded-full border-2 border-purple-500/30"
//                 />
//               </Avatar>
//             </motion.div>

//             <div className="min-w-0 flex-1">
//               <motion.h2
//                 animate={{
//                   backgroundPosition: isHovered ? "200% center" : "0% center",
//                 }}
//                 transition={{ duration: 1 }}
//                 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent bg-[length:200%_100%] truncate"
//               >
//                 Arjun Kumar
//               </motion.h2>
//               <div className="flex items-center space-x-1 sm:space-x-2 mt-1 flex-wrap gap-1">
//                 <motion.div whileHover={{ scale: 1.05, rotateZ: 3 }} style={{ transformStyle: "preserve-3d" }}>
//                   <Badge
//                     variant="secondary"
//                     className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 relative overflow-hidden text-xs"
//                   >
//                     <motion.div
//                       animate={{ x: isHovered ? "100%" : "-100%" }}
//                       transition={{ duration: 1, ease: "easeInOut" }}
//                       className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
//                     />
//                     <Crown className="w-2 h-2 sm:w-3 sm:h-3 mr-1 relative z-10" />
//                     <span className="relative z-10">Elite Member</span>
//                   </Badge>
//                 </motion.div>
//                 <Badge
//                   variant="outline"
//                   className={`text-xs font-medium ${
//                     theme === "dark"
//                       ? "border-gray-600 text-gray-200 bg-gray-800/50"
//                       : "border-gray-500 text-gray-900 bg-gray-100"
//                   }`}
//                 >
//                   Level 12
//                 </Badge>
//               </div>
//             </div>
//           </div>

//           <motion.div
//             whileHover={{
//               scale: 1.03,
//               rotateY: -5,
//               rotateX: 3,
//             }}
//             style={{ transformStyle: "preserve-3d" }}
//             className={`text-center sm:text-right p-3 sm:p-4 rounded-lg sm:rounded-xl backdrop-blur-sm relative overflow-hidden flex-shrink-0 ${
//               theme === "dark" ? "bg-gray-700/50" : "bg-gray-200/80"
//             }`}
//           >
//             <motion.div
//               animate={{
//                 background: isHovered
//                   ? "linear-gradient(45deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%)"
//                   : "transparent",
//               }}
//               className="absolute inset-0"
//             />
//             <div className="relative z-10">
//               <div className="flex items-center justify-center sm:justify-end space-x-1 mb-1">
//                 <motion.div animate={{ rotate: isHovered ? 360 : 0 }} transition={{ duration: 1 }}>
//                   <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
//                 </motion.div>
//                 <span className={`text-xs sm:text-sm font-medium ${getTextColor(theme, "muted")}`}>Credit Score</span>
//               </div>
//               <motion.div
//                 animate={{
//                   scale: isHovered ? 1.05 : 1,
//                   color: isHovered ? "#10b981" : "#10b981",
//                 }}
//                 className="text-xl sm:text-2xl font-bold text-green-500"
//               >
//                 850
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>

//         {/* XP Progress */}
//         <div className="space-y-2 sm:space-y-3">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-2">
//               <motion.div animate={{ rotate: isHovered ? 360 : 0 }} transition={{ duration: 2 }}>
//                 <TrendingUp className={`w-3 h-3 sm:w-4 sm:h-4 ${getTextColor(theme, "muted")}`} />
//               </motion.div>
//               <span className={`text-xs sm:text-sm font-medium ${getTextColor(theme, "secondary")} truncate`}>
//                 Progress to Level 13
//               </span>
//             </div>
//             <span className={`text-xs sm:text-sm ${getTextColor(theme, "muted")} flex-shrink-0`}>
//               {currentXP} / {nextLevelXP} XP
//             </span>
//           </div>

//           <motion.div
//             initial={{ width: 0 }}
//             animate={{ width: "100%" }}
//             transition={{ delay: 0.5, duration: 1 }}
//             className="relative"
//           >
//             <Progress value={progress} className="h-2 sm:h-3" isAnimated={isHovered} />
//           </motion.div>

//           <div className={`text-xs text-center ${getTextColor(theme, "muted")}`}>
//             <motion.span
//               animate={{ opacity: isHovered ? [1, 0.5, 1] : 1 }}
//               transition={{ duration: 1, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
//             >
//               {nextLevelXP - currentXP} XP to next level
//             </motion.span>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }


"use client"

import { motion, AnimatePresence } from "framer-motion"
import { TrendingUp, Crown, Star } from "lucide-react"
import { useState } from "react"
import { getTextColor, getCardStyles } from "@/lib/utils/theme-utils"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useTheme } from "../../lib/hooks/theme-provider"

interface UserProfileProps {
  name: string
  initials: string
  avatarUrl?: string
  membership: string
  level: number
  creditScore: number
  currentXP: number
  nextLevelXP: number
}

export function UserProfileSection({
  name,
  initials,
  avatarUrl,
  membership,
  level,
  creditScore,
  currentXP,
  nextLevelXP,
}: UserProfileProps) {
  const { theme } = useTheme()
  const [isHovered, setIsHovered] = useState(false)
  const progress = (currentXP / nextLevelXP) * 100

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.01, rotateX: 1, rotateY: 1, z: 25 }}
      className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-500 relative overflow-hidden ${getCardStyles(theme)}`}
      style={{
        transformStyle: "preserve-3d",
        boxShadow: isHovered
          ? theme === "dark"
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)"
            : "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)"
          : "none",
      }}
    >
      {/* Background gradient and sparkles same as before... */}

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 10, rotateX: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Avatar className="h-12 w-12 sm:h-16 sm:w-16 ring-2 sm:ring-4 ring-purple-500/20 relative flex-shrink-0">
                <motion.div
                  animate={{ rotate: isHovered ? 360 : 0 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-20"
                />
                <AvatarImage src={avatarUrl || "/placeholder.svg?height=64&width=64"} alt={name} />
                <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-lg sm:text-xl font-bold relative z-10">
                  {initials}
                </AvatarFallback>
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full border-2 border-purple-500/30"
                />
              </Avatar>
            </motion.div>

            <div className="min-w-0 flex-1">
              <motion.h2
                animate={{ backgroundPosition: isHovered ? "200% center" : "0% center" }}
                transition={{ duration: 1 }}
                className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent bg-[length:200%_100%] truncate"
              >
                {name}
              </motion.h2>

              <div className="flex items-center space-x-1 sm:space-x-2 mt-1 flex-wrap gap-1">
                <motion.div whileHover={{ scale: 1.05, rotateZ: 3 }}>
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 relative overflow-hidden text-xs"
                  >
                    <motion.div
                      animate={{ x: isHovered ? "100%" : "-100%" }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                    <Crown className="w-2 h-2 sm:w-3 sm:h-3 mr-1 relative z-10" />
                    <span className="relative z-10">{membership}</span>
                  </Badge>
                </motion.div>
                <Badge
                  variant="outline"
                  className={`text-xs font-medium ${
                    theme === "dark"
                      ? "border-gray-600 text-gray-200 bg-gray-800/50"
                      : "border-gray-500 text-gray-900 bg-gray-100"
                  }`}
                >
                  Level {level}
                </Badge>
              </div>
            </div>
          </div>

          {/* Credit Score Block */}
          <motion.div
            whileHover={{ scale: 1.03, rotateY: -5, rotateX: 3 }}
            style={{ transformStyle: "preserve-3d" }}
            className={`text-center sm:text-right p-3 sm:p-4 rounded-lg sm:rounded-xl backdrop-blur-sm relative overflow-hidden flex-shrink-0 ${
              theme === "dark" ? "bg-gray-700/50" : "bg-gray-200/80"
            }`}
          >
            <motion.div
              animate={{
                background: isHovered
                  ? "linear-gradient(45deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%)"
                  : "transparent",
              }}
              className="absolute inset-0"
            />
            <div className="relative z-10">
              <div className="flex items-center justify-center sm:justify-end space-x-1 mb-1">
                <motion.div animate={{ rotate: isHovered ? 360 : 0 }} transition={{ duration: 1 }}>
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                </motion.div>
                <span className={`text-xs sm:text-sm font-medium ${getTextColor(theme, "muted")}`}>Credit Score</span>
              </div>
              <motion.div
                animate={{ scale: isHovered ? 1.05 : 1, color: "#10b981" }}
                className="text-xl sm:text-2xl font-bold text-green-500"
              >
                {creditScore}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* XP Progress Bar */}
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <motion.div animate={{ rotate: isHovered ? 360 : 0 }} transition={{ duration: 2 }}>
                <TrendingUp className={`w-3 h-3 sm:w-4 sm:h-4 ${getTextColor(theme, "muted")}`} />
              </motion.div>
              <span className={`text-xs sm:text-sm font-medium ${getTextColor(theme, "secondary")} truncate`}>
                Progress to Level {level + 1}
              </span>
            </div>
            <span className={`text-xs sm:text-sm ${getTextColor(theme, "muted")}`}>
              {currentXP} / {nextLevelXP} XP
            </span>
          </div>

          <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 0.5, duration: 1 }}>
            <Progress value={progress} className="h-2 sm:h-3" isAnimated={isHovered} />
          </motion.div>

          <div className={`text-xs text-center ${getTextColor(theme, "muted")}`}>
            <motion.span
              animate={{ opacity: isHovered ? [1, 0.5, 1] : 1 }}
              transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
            >
              {nextLevelXP - currentXP} XP to next level
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
