function Hero() {
  return (
    <section className="bg-blue-800 text-white py-20 text-center">
      <div className="container mx-auto px-4">
        <p className="text-lg mb-4">New: AI Assistant is here!</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Revolutionize Your Project Management
        </h2>
        <p className="text-xl mb-8">
          Where AI meets execution. Transform your workflow with intelligent automation, smart insights, and seamless collaboration.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Start Free Trial
          </button>
          <button className="bg-transparent border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900">
            Learn More
          </button>
        </div>
        <div className="mt-8 flex justify-center space-x-8 text-sm">
          <div><span className="font-bold">10K+</span> Active Teams</div>
          <div><span className="font-bold">99.9%</span> Uptime</div>
          <div><span className="font-bold">SOC 2</span> Certified</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;