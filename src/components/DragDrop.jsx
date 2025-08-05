function DragDrop() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Drag and Drop Projects Task Manager</h2>
        <p className="text-center text-lg mb-12">Use the intuitive drag and drop function to sort your tasks in the most natural, quickest way possible. Organize your workflow effortlessly.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Smart Categories</h3>
            <p className="text-gray-600">Set categories like Backlog, To-Do, In-Progress with AI suggestions</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
            <p className="text-gray-600">See changes instantly across all team members and devices</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
            <p className="text-gray-600">Assign tasks, set deadlines, and track progress together</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold">24 tasks completed <span className="text-gray-600">This week</span></p>
          <p className="text-sm text-gray-600">AI Optimized Workflow</p>
        </div>
      </div>
    </section>
  );
}

export default DragDrop;