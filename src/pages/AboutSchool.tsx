import React from 'react';

const AboutSchool: React.FC = () => {
  return (
    <div className="page-container">
      <h1>About Our School</h1>

      <div className="about-grid">
        <section className="about-card">
          <h2>🏛️ School History</h2>
          <p>
            Founded in 1995, our school has been a beacon of educational excellence for nearly 30 years.
            We have graduated thousands of students who have gone on to achieve remarkable success in their
            respective fields. Our institution is built on the foundation of quality education and moral values.
          </p>
        </section>

        <section className="about-card">
          <h2>📖 Educational Philosophy</h2>
          <p>
            We believe in a student-centered approach to learning where each child is encouraged to think critically,
            solve problems creatively, and collaborate effectively. Our curriculum integrates traditional academic
            excellence with modern pedagogical methods and technology.
          </p>
        </section>

        <section className="about-card">
          <h2>👥 Staff Information</h2>
          <p>
            Our dedicated faculty consists of highly qualified educators with an average of 12 years of teaching experience.
            Many hold advanced degrees and certifications in their respective fields. They are committed to student development
            and create an inclusive learning environment.
          </p>
        </section>

        <section className="about-card">
          <h2>🏢 Facilities</h2>
          <p>
            Our modern campus features state-of-the-art classrooms, well-equipped science laboratories, a comprehensive library,
            computer labs, sports facilities, and art studios. We have invested in the latest educational technology to support
            effective teaching and learning.
          </p>
        </section>

        <section className="about-card">
          <h2>🏆 Achievements & Recognition</h2>
          <p>
            Our students consistently excel in national competitions and examinations. We have been recognized with numerous awards
            for academic excellence, innovation in education, and community service. Our alumni network spans across the globe,
            contributing to society in meaningful ways.
          </p>
        </section>

        <section className="about-card">
          <h2>🎭 Extracurricular Culture</h2>
          <p>
            Beyond academics, we offer a rich variety of extracurricular activities including sports, arts, music, debate, robotics,
            and community service programs. These activities help develop well-rounded individuals with leadership skills and global perspective.
          </p>
        </section>
      </div>

      <section className="vision-section">
        <h2>🚀 Our Technological Vision</h2>
        <p>
          We are committed to integrating technology into every aspect of education. Our vision is to create a digitally-enabled
          learning environment where students develop 21st-century skills. We utilize learning management systems, virtual classrooms,
          AI-assisted learning tools, and coding education to prepare students for the digital future.
        </p>
      </section>
    </div>
  );
};

export default AboutSchool;
