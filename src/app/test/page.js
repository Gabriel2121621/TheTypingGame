import { saveNewScore } from '../actions';

export default function TestPage() {
  return (
    <form action={saveNewScore} className="p-10 flex flex-col gap-4">
      <input name="username" placeholder="Nombre" className="border p-2" defaultValue="Jugador Test" />
      <input name="wpm" type="number" placeholder="WPM" className="border p-2" defaultValue="85" />
      <input name="accuracy" type="number" placeholder="%" className="border p-2" defaultValue="98" />
      <button type="submit" className="bg-blue-500 text-white p-2">Enviar Puntaje</button>
    </form>
  );
}