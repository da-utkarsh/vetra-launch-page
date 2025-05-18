
import React from 'react';

const Video: React.FC = () => {
  return (
    <section id="video" className="py-20 px-6 lg:px-10 bg-[#151515]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">See Vetra in Action</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Watch our announcement video to learn more about the Vetra Tech Stack and how it can revolutionize your development workflow.
        </p>
        
        <div style={{ position: "relative", overflow: "hidden", padding: "2rem", borderRadius: "1rem", boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}>
          <div style={{ position: "relative", overflow: "hidden", padding: "56.25% 0 0 0" }}>
            <iframe src="https://share.synthesia.io/embeds/videos/596f9713-9b28-4027-bc13-f617c32d2e7e"
              loading="lazy"
              title="Synthesia video player - Your AI video"
              allowFullScreen
              allow="encrypted-media; fullscreen;"
              style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none", padding: 0, margin: 0, overflow: "hidden", borderRadius: "0.5rem" }}>
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
