function AITools() {
  const tools = [
    { name: "AI Tasks", desc: "Smart task creation and prioritization" },
    { name: "AI Projects", desc: "Intelligent project planning and tracking" },
    { name: "AI Docs", desc: "Automated documentation generation" },
    { name: "AI Notes", desc: "Smart note-taking and organization" },
    { name: "AI Calendar", desc: "Intelligent scheduling and time blocking" },
    { name: "AI SOPs", desc: "Automated workflow optimization" },
    { name: "AI Search", desc: "Powerful semantic search across projects" },
    { name: "AI Reports", desc: "Automated insights and analytics" },
  ];

  return (
    <section id="features" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">AI-Powered Tools</h2>
        <p className="text-center text-lg mb-12">Choose from our suite of intelligent tools designed to supercharge your productivity</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
              <p className="text-gray-600">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AITools;