import { supabase } from "@/lib/supabaseClient";

export default async function LeaderBoard() {
    const { data: scores } = await supabase
    .from("ranking")
    .select("*")
    .order("wpm", { ascending: false})
    .limit(10);

return (
    <div>
      <h1 >Global LeaderBoard</h1>
      <h3 >Press Esc to go Back</h3>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="py-2">#</th>
            <th>Player</th>
            <th>WPM</th>
            <th>%</th>
          </tr>
        </thead>
        <tbody>
          {scores?.map((score, index) => (
            <tr key={score.id} className="hover:bg-gray-800 transition-colors">
              <td className="py-2">{index + 1}</td>
              <td className="font-medium">{score.username}</td>
              <td className="text-yellow-400 font-bold">{score.wpm}</td>
              <td className="text-gray-400 text-sm">{score.accuracy}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

