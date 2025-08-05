function CoreFeatures() {
  const features = [
    {
      title: "Precision User Tracking",
      desc: "Unlock advanced analytics with our intuitive platform. Dive deep into user insights and make data-driven decisions effortlessly.",
      stats: ["40% Better insights", "10K+ Users tracked"],
    },
    {
      title: "Meet LumiProject: Your AI Assistant",
      desc: "Experience seamless project management with your AI-powered companion that keeps everything on track 24/7.",
      stats: ["24/7 AI support", "3x Faster delivery"],
    },
    {
      title: "Visual Project Progress",
      desc: "See your project's success unfold with intuitive visual overviews and actionable insights at a glance.",
      stats: ["Real-time Updates", "95% Accuracy"],
    },
    {
      title: "All-in-One Solution",
      desc: "Simplify your workflow with the ultimate project management tool. Streamline tasks and boost productivity in one place.",
      stats: ["50% Time saved", "Unlimited Integrations"],
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Core Features</h2>
        <p className="text-center text-lg mb-12">Powerful features designed to transform how you manage projects and collaborate with your team</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.desc}</p>
              <div className="flex space-x-4">
                {feature.stats.map((stat, i) => (
                  <span key={i} className="text-sm font-semibold text-blue-600">{stat}</span>
                ))}
              </div>
              <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Learn more</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreFeatures;