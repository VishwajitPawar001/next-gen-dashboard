"use client";

import { motion, Variants } from "framer-motion";
import HeroTitle from "./HeroTitle";
import CourseTitle from "./CourseTitle";
import ActivityTitle from "./ActivityTitle";
import { Course } from "@/types";

const containerVarients: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y:20 },
    show: {
        opacity: 1,
        y:0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
};

export default function BentoGrid( {courses}: {courses: Course[]} ) {
    return (
        <motion.section
        variants={containerVarients}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.article variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-3">
                <HeroTitle/>
            </motion.article>

            {courses.map((course) => (
                <motion.article variants={itemVariants} key={course.id} className="col-span-1 h-full">
                    <CourseTitle course={course} />
                </motion.article>
            ))}

            <motion.article variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-3">
                <ActivityTitle/>
            </motion.article>
        </motion.section>
    );
}