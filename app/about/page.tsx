import Navbar from "@/components/ui/navigation-menu";

export default function Page() {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="max-w-3xl mx-auto p-8 text-white text-gray-900 rounded-lg shadow ">
        <h1 className="text-3xl font-bold mb-4">Project Overview</h1>
        <p className="mb-2">
          This project was created as part of a 100-day code challenge.
        </p>
        <p className="mb-6">
          <strong>Project ID:</strong> 1
          <br />
          <strong>Completion Date</strong> 5/1/2025
          <br />
          <strong>Days Remaining</strong> 99
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Learning Areas</h2>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Props</li>
          <li>Hooks</li>
          <li>State</li>
          <li>Animations</li>
          <li>Event listeners and handlers</li>
          <li>Input Sanitization</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Stack</h2>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>React</li>
          <li>Next.js</li>
          <li>Vercel</li>
          <li>Tailwind CSS</li>
          <li>Framer Motion</li>
          <li>ShadCN</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Personal Statement</h2>
        <p className="mb-6">
          This project focuses on adding stateful logic and interactivity to
          websites. I also wanted to experiment with animations, making this my
          first exploration of the popular Framer Motion library.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Challenges Faced</h2>
        <p className="mb-4">
          This was my first deep dive into managing stateful logic using React
          Hooks. I invested considerable time learning not just how hooks work,
          but when and why to use them. I encountered challenges balancing state
          management and component organization, particularly while integrating
          UI components from ShadCN and ensuring data was sanitized properly.
        </p>
        <p className="mb-4">
          As the codebase grew, I struggled with tracking the flow of data and
          maintaining a clear component hierarchy. This experience highlighted
          the importance of scalable architecture and modular design.
        </p>
        <p className="mb-6">
          To address these challenges, my next project will focus on mastering
          prop passing and component composition. The goal is to strengthen my
          architectural skills and build cleaner, more maintainable interfaces.
        </p>
      </div>
    </div>
  );
}
