import { saveNewScore } from '../actions';
import LeaderBoard from '@/components/LeaderBoard';
import ExitHandler from '@/components/ExitHandler';

export default function TestPage() {

  return (
    <div className='w-full max-w-md'>
      <ExitHandler />
      <LeaderBoard />
    </div>
  );
}