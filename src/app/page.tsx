import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import BentoGrid from "@/components/BentoGrid";
import { createClient } from "@/utils/supabase/server";

export default async function Dashboard() {
  const supabase = await createClient();

  const { data: courses, error } = await supabase
    .from('Courses')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Database Connection Failed: ", error.message);
  }

  return (
    // Locked the outer container to exactly the screen height to prevent background tearing
    <div className="h-screen overflow-hidden flex flex-col md:flex-row font-sans">

      <MobileNav />
      
      <nav className="w-64 border-r border-white/5 hidden md:block p-4">
        <Sidebar />
      </nav>

      {/* The main workspace handles the scrolling internally */}
      <main className="flex-1 p-4 md:p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <BentoGrid courses={courses || []} />
        </div>
      </main>
      
    </div>
  );
}