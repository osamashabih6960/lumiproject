function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to revolutionize your project management?</h2>
        <p className="text-lg mb-6">Join thousands of teams who have already transformed their workflow with AI-powered efficiency.</p>
        <div className="flex justify-center space-x-4 mb-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Free 14-day trial</button>
          <button className="bg-transparent border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900">Join the Revolution</button>
        </div>
        <div className="flex justify-center space-x-8 text-sm">
          <div><span className="font-bold">10,000+</span> Active Teams</div>
          <div><span className="font-bold">3x</span> Faster Delivery</div>
          <div><span className="font-bold">99.9%</span> Uptime</div>
          <div><span className="font-bold">4.9/5</span> User Rating</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;