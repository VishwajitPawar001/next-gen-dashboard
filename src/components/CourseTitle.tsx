"use client";

import { Course } from "@/types";
import { motion } from "framer-motion";

export default function CourseTile({ course }: { course: Course }) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="system-panel rounded-xl p-6 flex flex-col h-full cursor-pointer relative overflow-hidden group"
        >
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-neon-blue opacity-10 blur-[50px] rounded-full transition-opacity duration-500 group-hover:opacity-20 pointer-events-none"></div>
            <div className="absolute top-1/2 -right-12 w-24 h-24 bg-system-green opacity-10 blur-[40px] rounded-full transition-opacity duration-500 group-hover:opacity-20 pointer-events-none"></div>

            <div className="relative z-10 flex-1 flex flex-col">
                <div className="w-10 h-10 rounded-lg bg-deep-space border border-slate-800 flex items-center justify-center mb-6 shadow-inner">
                    <span className="text-slate-400 text-sm font-bold">{"</>"}</span>
                </div>

                <h3 className="font-bold text-xl mb-6 text-slate-100">{course.title}</h3>

                <div className="mt-auto">
                    <div className="flex justify-between text-xs mb-2 font-bold tracking-wider">
                        <span className="text-[#10b981] uppercase">{course.progress}% COMPLETE</span>
                    </div>

                    <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${course.progress}%` }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                            className="h-full rounded-full bg-[#10b981] shadow-[0_0_10px_#10b981]"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}