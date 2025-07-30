export const Profile = () => {
  return (
    <section id="profile" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
            Profile
          </h2>
          <div className="w-16 h-1 bg-white rounded-full mx-auto mb-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="text-center lg:text-left fade-in">
            <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20 flex items-center justify-center text-8xl font-semibold text-white shadow-2xl">
              A
            </div>
          </div>

          {/* Profile Info */}
          <div className="text-center lg:text-left fade-in">
            <h3 className="text-3xl font-semibold text-white mb-6">Ukeje Analiese</h3>
            <p className="text-xl text-white/70 mb-8">UX/UI Designer</p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="text-white/60 font-medium w-20">Phone:</span>
                <span className="text-white">0703-010-8384</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="text-white/60 font-medium w-20">Email:</span>
                <span className="text-white">ao.ukeje@gmail.com</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="text-white/60 font-medium w-20">Website:</span>
                <span className="text-white">www.ukejeanaliese.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};