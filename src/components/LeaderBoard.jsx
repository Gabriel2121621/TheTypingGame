import { supabase } from "@/lib/supabaseClient";

export default async function LeaderBoard() {
  const { data: scores } = await supabase
    .from("ranking")
    .select("*")
    .order("accuracy", {ascending:false})
    .order("wpm", { ascending: false })
    .limit(10);

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-card">
        <h1 className="lb-title ">Global Leader Board</h1>
        <h3 className="lb-nav-info">Press <span className="key-hint">Esc</span> to go Back</h3>
        
        <div className="table-wrapper">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Pos</th>
                <th>Player</th>
                <th>WPM</th>
                <th>Accuracy</th>
              </tr>
            </thead>
            <tbody>
              {scores?.map((score, index) => (
                <tr key={score.id}>
                  <td className={`rank-${index + 1}`}>#{index + 1}</td>
                  
                  <td className="player-name-cell">
                    {score.username.slice(0, 5).toUpperCase()}
                  </td>
                  
                  <td className="wpm-cell">{score.wpm}</td>
                  <td className="acc-cell">{score.accuracy}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}