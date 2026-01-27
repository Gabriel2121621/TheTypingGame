import { supabase } from "@/lib/supabaseClient";

export default async function LeaderBoard() {
  const { data: scores } = await supabase
    .from("ranking")
    .select("*")
    .order("wpm", { ascending: false })
    .limit(10);

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-card">
        <h1 className="lb-title">Global Leader Board</h1>
        <h3 className="lb-nav-info">Press <span className="key-hint">Esc</span> to go Back</h3>
        
        <div className="table-wrapper">
          <table className="custom-table">
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th>Player</th>
                <th className="text-right">WPM</th>
                <th className="text-right">Accuracy</th>
              </tr>
            </thead>
            <tbody>
              {scores?.map((score, index) => (
                <tr key={score.id} className={`row-rank-${index + 1}`}>
                  <td className="rank-col text-center">{index + 1}</td>
                  <td className="player-col">
                    <span className="player-name">{score.username}</span>
                  </td>
                  <td className="wpm-col text-right">{score.wpm}</td>
                  <td className="acc-col text-right">{score.accuracy}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}