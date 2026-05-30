export default function Sidebar() {
    return (
        <div className="system-panel h-full rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-[var(--neon-blue)]">SYS_NAV</h2>
            <ul className="space-y-2 opactiy-80">
                <li>&gt; Dashboard</li>
                <li>&gt; Modules</li>
                <li>&gt; Settings</li>
            </ul>

        </div>
    )
}