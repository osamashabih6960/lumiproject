function Reviews() {
  const reviews = [
    {
      text: "Lumiproject is absolutely amazing. I use it every day and it helps me maintain my projects properly. The AI features are game-changing.",
      author: "Allisic Johnson",
      title: "CEO of BIOKRIPT",
      company: "BIOKRIPT",
    },
    {
      text: "We love your product and are so glad we can help spread the news! The integration capabilities are outstanding.",
      author: "Akif Siddiqui",
      title: "SAP Lead at Deloitte",
      company: "Deloitte",
    },
    {
      text: "The best Project Management App is lumiproject. It made my team free of traditional project managers. Incredible efficiency boost!",
      author: "Phillip Thomas",
      title: "Freelancer",
      company: "Independent",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Used by millions of productive organizations!</h2>
        <p className="text-center text-lg mb-12">See what our customers are saying about their experience with lumiproject</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{review.text}"</p>
              <p className="font-semibold">{review.author}</p>
              <p className="text-sm text-gray-500">{review.title}, {review.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;