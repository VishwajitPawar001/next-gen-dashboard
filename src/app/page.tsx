import Sidebar from "@/components/Siderbar";
import BentoGrid from "@/components/BentoGrid";
import { createClient } from "@/utils/supabase/server";

export default async function Dashboard() {
  const supabase = await createClient();

  const { data: courses, error } = await supabase
  .from('Courses')
  .select('*')
  .order('created_at', { ascending: false});

  if (error) {
    console.error("Database Connection Failed: ", error.message);
  }

  return (
    <div className="min-h-screen flex font-sans">

      <nav className="w-20 md:w-64 border-r border-neon-blue hidden sm:block p-4">
        <Sidebar/>
      </nav>

      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <BentoGrid courses={courses || []}/>
        </div>
      </main>
    </div>
  );
}