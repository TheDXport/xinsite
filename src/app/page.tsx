import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      

      {/* Container for Div 2 and Div 3 */}
      <div className="flex flex-1 overflow-hidden">
        {/* Div 2: Left half, unscrollable */}
        <div className="w-1/2 p-4">
          <h2 className="text-xl font-semibold mb-4">Unscrollable Content (Div 2)</h2>
          <p>This content will not scroll, even if it overflows.</p>
          
        </div>

        {/* Div 3: Right half, scrollable */}
        <div className="w-1/2 p-4 overflow-y-auto invisible-scrollbar">
          <h2 className="text-xl font-semibold mb-4">Scrollable Content (Div 3)</h2>
          <p>This content will scroll if it overflows the container.</p>
          
        </div>
      </div>
    </div>
  );
}
