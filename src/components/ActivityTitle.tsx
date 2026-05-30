export default function ActivityTitle() {
    return (
        <div className="system-panel rounded-lg p-6 h-full">
            <h3 className="font-bold mb-4">System Activity</h3>
            <div className="animate-pulse flex space-x-4">
                <div className="h-2 bg-[var(--neon-blue)] opacity-50 rounded"></div>
                <div className="h-2 bg-[var(--neon-blue)] opacity-50 rounded w-5/6"></div>
            </div>
        </div>
    )
}