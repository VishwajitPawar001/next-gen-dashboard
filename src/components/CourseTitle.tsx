import { Course } from "@/types";
import { motion } from "framer-motion";

export default function CourseTitle({ course }: {course: Course}) {
    return (
        <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 400, damping: 25}}
        className="system-panel rounded-lg p-6 flex flex-col h-full cursor-pointer">
            <h3 className="font-bold text-lg mb-2 text-neon-blue">{course.title}</h3>
            <div className="mt-auto">
                <div className="flex justify-between text-sm mb-2 font-bold">
                    <span className="opacity-70">Progress</span>
                    <span className="text-[var(--system-green)]">{course.progress}%</span>
                </div>
                <motion.div
                initial={{width:0}}
                animate={{width: `${course.progress}%`}}
                transition={{duration:1.2, ease: "easeOut", delay: 0.3}}
                className="bg-system-green h-1.5 rounded-full shadow-[0_0_10px] shadow-system-green"
                />
            </div>
        </motion.div>
    );
}