
import NameHeader from './components/NameHeader';
import { articulatExtraBold } from './fonts';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      {/* Container for Div 2 and Div 3 */}
      <div className="flex flex-row overflow-hidden">

        {/* Div 2: Left half, unscrollable */}
        <div className="w-1/2 p-4">
          <div>
            <NameHeader/>
          </div>
        </div>

        {/* Div 3: Right half, scrollable */}
        <div className="w-1/2 p-4 overflow-y-auto invisible-scrollbar">
          <h2 className="text-xl font-semibold mb-4">
            Scrollable Content (Div 3)
          </h2>
          <p>This content will scroll if it overflows the container.</p>
        </div>
      </div>
    </div>
  );
}
