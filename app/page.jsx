
import LiveCodeEditor from './components/SnippetPreview';
import "./globals.css";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 w-screen">
        <h1 className="text-3xl font-bold mb-4">Live Code Editor with Tailwind CSS</h1>
        <LiveCodeEditor />
      </main>
  );
}
