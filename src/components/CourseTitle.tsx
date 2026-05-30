import { Course } from "@/types";

export default function CourseTitle({ course }: {course: Course}) {
    return (
        <div>
            <h2>{course.title}</h2>
            <div className="mt-auto">
                <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span className="text-[var(--system-green)]">{course.progress}%</span>
                </div>
                <div className="bg-[var(--system-green)] h-2 rounded-full" style={{ width: `${course.progress}%`}}>
                    
                </div>
            </div>
        </div>
    );
}