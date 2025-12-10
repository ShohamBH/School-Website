import React, { useState, useMemo } from 'react';
import { CartItem } from '../App';

interface Activity {
  id: string;
  name: string;
  days: string[];
  time: string;
  ageGroup: string;
  category: string;
  description: string;
}

interface ActivitiesProps {
  onAddToCart: (item: CartItem) => void;
}

const Activities: React.FC<ActivitiesProps> = ({ onAddToCart }) => {
  const [filterDay, setFilterDay] = useState<string>('');
  const [filterGrade, setFilterGrade] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('');

  const activities: Activity[] = [
    // Sports Activities
    {
      id: 'act-1',
      name: 'Basketball',
      days: ['Monday', 'Wednesday', 'Friday'],
      time: '4:00 PM - 5:30 PM',
      ageGroup: '3rd-8th Grade',
      category: 'Sports',
      description: 'Develop basketball skills, teamwork, and competitive spirit.'
    },
    {
      id: 'act-2',
      name: 'Soccer',
      days: ['Tuesday', 'Friday'],
      time: '4:00 PM - 5:30 PM',
      ageGroup: '2nd-8th Grade',
      category: 'Sports',
      description: 'Master soccer skills, tactics, and team coordination.'
    },
    {
      id: 'act-3',
      name: 'Swimming',
      days: ['Tuesday', 'Thursday', 'Sunday'],
      time: '4:30 PM - 5:30 PM',
      ageGroup: '1st-8th Grade',
      category: 'Sports',
      description: 'Swimming lessons for all skill levels with certified instructors.'
    },
    {
      id: 'act-4',
      name: 'Tennis',
      days: ['Monday', 'Thursday'],
      time: '4:00 PM - 5:30 PM',
      ageGroup: '3rd-8th Grade',
      category: 'Sports',
      description: 'Learn tennis techniques, footwork, and competitive play.'
    },
    {
      id: 'act-5',
      name: 'Volleyball',
      days: ['Wednesday', 'Sunday'],
      time: '4:00 PM - 5:30 PM',
      ageGroup: '4th-8th Grade',
      category: 'Sports',
      description: 'Develop volleyball skills and team spirit.'
    },
    {
      id: 'act-6',
      name: 'Martial Arts (Karate)',
      days: ['Monday', 'Wednesday', 'Friday'],
      time: '3:30 PM - 4:30 PM',
      ageGroup: '2nd-8th Grade',
      category: 'Sports',
      description: 'Learn self-defense, discipline, and martial arts techniques.'
    },

    // Music Activities
    {
      id: 'act-7',
      name: 'Piano Lessons',
      days: ['Tuesday', 'Thursday'],
      time: '3:30 PM - 4:30 PM',
      ageGroup: '2nd-8th Grade',
      category: 'Music',
      description: 'Learn classical and contemporary piano from experienced instructors.'
    },
    {
      id: 'act-8',
      name: 'Guitar Club',
      days: ['Monday', 'Wednesday'],
      time: '4:00 PM - 5:00 PM',
      ageGroup: '3rd-8th Grade',
      category: 'Music',
      description: 'Learn guitar playing, music theory, and perform popular songs.'
    },
    {
      id: 'act-9',
      name: 'Choir',
      days: ['Tuesday', 'Thursday'],
      time: '4:30 PM - 5:30 PM',
      ageGroup: '2nd-8th Grade',
      category: 'Music',
      description: 'Sing in harmony, learn musical pieces, and perform concerts.'
    },
    {
      id: 'act-10',
      name: 'Violin Lessons',
      days: ['Monday', 'Thursday'],
      time: '3:30 PM - 4:30 PM',
      ageGroup: '2nd-8th Grade',
      category: 'Music',
      description: 'Master violin playing with professional instructors.'
    },
    {
      id: 'act-11',
      name: 'Drum Lessons',
      days: ['Wednesday', 'Friday'],
      time: '4:00 PM - 5:00 PM',
      ageGroup: '3rd-8th Grade',
      category: 'Music',
      description: 'Learn drumming techniques, rhythm, and percussion music.'
    },
    {
      id: 'act-12',
      name: 'Music Production',
      days: ['Sunday'],
      time: '11:00 AM - 12:30 PM',
      ageGroup: '5th-8th Grade',
      category: 'Music',
      description: 'Create and produce your own music using digital tools.'
    },

    // Art Activities
    {
      id: 'act-13',
      name: 'Art Studio',
      days: ['Monday', 'Thursday'],
      time: '3:30 PM - 5:00 PM',
      ageGroup: '1st-8th Grade',
      category: 'Art',
      description: 'Explore painting, drawing, and sculpture with professional artists.'
    },
    {
      id: 'act-14',
      name: 'Theater Club',
      days: ['Monday', 'Wednesday'],
      time: '3:30 PM - 5:00 PM',
      ageGroup: '3rd-8th Grade',
      category: 'Art',
      description: 'Perform in plays and develop acting and public speaking skills.'
    },
    {
      id: 'act-15',
      name: 'Photography Club',
      days: ['Tuesday', 'Friday'],
      time: '4:00 PM - 5:30 PM',
      ageGroup: '4th-8th Grade',
      category: 'Art',
      description: 'Learn photography, composition, and digital photo editing.'
    },
    {
      id: 'act-16',
      name: 'Dance Club',
      days: ['Tuesday', 'Thursday'],
      time: '4:00 PM - 5:00 PM',
      ageGroup: '2nd-8th Grade',
      category: 'Art',
      description: 'Learn various dance styles including contemporary, hip-hop, and jazz.'
    },
    {
      id: 'act-17',
      name: 'Ceramics & Pottery',
      days: ['Wednesday', 'Sunday'],
      time: '3:30 PM - 5:00 PM',
      ageGroup: '3rd-8th Grade',
      category: 'Art',
      description: 'Create beautiful ceramic works on the pottery wheel.'
    },
    {
      id: 'act-18',
      name: 'Creative Writing',
      days: ['Friday', 'Sunday'],
      time: '4:00 PM - 5:00 PM',
      ageGroup: '3rd-8th Grade',
      category: 'Art',
      description: 'Develop creative writing skills and tell your own stories.'
    },

    // Technology & STEM Activities
    {
      id: 'act-19',
      name: 'Robotics Club',
      days: ['Wednesday'],
      time: '4:00 PM - 5:30 PM',
      ageGroup: '4th-8th Grade',
      category: 'Computers',
      description: 'Build and program robots using LEGO and coding languages.'
    },
    {
      id: 'act-20',
      name: 'Coding Boot Camp',
      days: ['Sunday'],
      time: '10:00 AM - 12:00 PM',
      ageGroup: '3rd-8th Grade',
      category: 'Computers',
      description: 'Learn Python and JavaScript programming fundamentals.'
    },
    {
      id: 'act-21',
      name: 'Web Design Club',
      days: ['Tuesday', 'Friday'],
      time: '4:00 PM - 5:30 PM',
      ageGroup: '5th-8th Grade',
      category: 'Computers',
      description: 'Create websites and learn HTML, CSS, and JavaScript.'
    },
    {
      id: 'act-22',
      name: 'Game Development',
      days: ['Monday', 'Thursday'],
      time: '4:00 PM - 5:30 PM',
      ageGroup: '5th-8th Grade',
      category: 'Computers',
      description: 'Design and code your own games using engines like Unity.'
    },
    {
      id: 'act-23',
      name: 'AI & Machine Learning',
      days: ['Sunday'],
      time: '1:00 PM - 2:30 PM',
      ageGroup: '6th-8th Grade',
      category: 'Computers',
      description: 'Explore artificial intelligence and machine learning concepts.'
    },
    {
      id: 'act-24',
      name: '3D Design & CAD',
      days: ['Wednesday', 'Friday'],
      time: '4:00 PM - 5:30 PM',
      ageGroup: '5th-8th Grade',
      category: 'Computers',
      description: 'Learn 3D modeling and computer-aided design software.'
    },

    // Academic Enrichment
    {
      id: 'act-25',
      name: 'Science Lab',
      days: ['Monday', 'Thursday'],
      time: '4:00 PM - 5:30 PM',
      ageGroup: '4th-8th Grade',
      category: 'Academics',
      description: 'Conduct hands-on science experiments and discoveries.'
    },
    {
      id: 'act-26',
      name: 'Math Challenge Club',
      days: ['Tuesday', 'Sunday'],
      time: '4:00 PM - 5:00 PM',
      ageGroup: '3rd-8th Grade',
      category: 'Academics',
      description: 'Solve challenging math problems and prepare for competitions.'
    },
    {
      id: 'act-27',
      name: 'Debate Club',
      days: ['Wednesday', 'Friday'],
      time: '4:00 PM - 5:30 PM',
      ageGroup: '4th-8th Grade',
      category: 'Academics',
      description: 'Develop public speaking and debate skills.'
    },
    {
      id: 'act-28',
      name: 'Language Club (French)',
      days: ['Monday', 'Thursday'],
      time: '3:30 PM - 4:30 PM',
      ageGroup: '3rd-8th Grade',
      category: 'Academics',
      description: 'Learn French language and culture from native speakers.'
    },
    {
      id: 'act-29',
      name: 'Reading & Literature Club',
      days: ['Tuesday', 'Sunday'],
      time: '3:30 PM - 4:30 PM',
      ageGroup: '2nd-8th Grade',
      category: 'Academics',
      description: 'Explore classic and contemporary literature together.'
    },

    // Community & Leadership
    {
      id: 'act-30',
      name: 'Student Council',
      days: ['Wednesday'],
      time: '3:30 PM - 4:30 PM',
      ageGroup: '4th-8th Grade',
      category: 'Leadership',
      description: 'Lead school initiatives and represent the student body.'
    },
    {
      id: 'act-31',
      name: 'Community Service Club',
      days: ['Friday'],
      time: '3:30 PM - 5:00 PM',
      ageGroup: '3rd-8th Grade',
      category: 'Leadership',
      description: 'Volunteer and make a positive impact in the community.'
    },
    {
      id: 'act-32',
      name: 'Environmental Club',
      days: ['Tuesday', 'Thursday'],
      time: '4:00 PM - 5:00 PM',
      ageGroup: '3rd-8th Grade',
      category: 'Leadership',
      description: 'Promote environmental awareness and sustainability.'
    },
    {
      id: 'act-33',
      name: 'Chess Club',
      days: ['Monday', 'Friday'],
      time: '4:00 PM - 5:30 PM',
      ageGroup: '2nd-8th Grade',
      category: 'Leadership',
      description: 'Develop strategic thinking and master the game of chess.'
    },
  ];

  const filteredActivities = useMemo(() => {
    return activities.filter(activity => {
      if (filterDay && !activity.days.includes(filterDay)) return false;
      if (filterGrade && !activity.ageGroup.includes(filterGrade)) return false;
      if (filterCategory && activity.category !== filterCategory) return false;
      return true;
    });
  }, [filterDay, filterGrade, filterCategory]);

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const grades = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];
  const categories = ['Sports', 'Music', 'Art', 'Computers', 'Academics', 'Leadership'];

  const sortedActivities = useMemo(() => {
    return [...filteredActivities].sort((a, b) => {
      const dayOrder = days.indexOf(a.days[0]) - days.indexOf(b.days[0]);
      if (dayOrder !== 0) return dayOrder;
      return a.time.localeCompare(b.time);
    });
  }, [filteredActivities]);

  const handleAddToCart = (activity: Activity) => {
    onAddToCart({
      id: activity.id,
      name: activity.name,
      price: 50, // Default activity price
      quantity: 1,
      type: 'activity',
      category: activity.category,
    });
  };

  return (
    <div className="page-container">
      <h1>🎭 After-School Activities</h1>

      <div className="filters-section">
        <div className="filter-group">
          <label>Filter by Day:</label>
          <select value={filterDay} onChange={e => setFilterDay(e.target.value)}>
            <option value="">All Days</option>
            {days.map(day => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Filter by Grade:</label>
          <select value={filterGrade} onChange={e => setFilterGrade(e.target.value)}>
            <option value="">All Grades</option>
            {grades.map(grade => (
              <option key={grade} value={grade}>{grade}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Filter by Category:</label>
          <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)}>
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <h2>Activity Cards</h2>
      <div className="activities-grid">
        {sortedActivities.map(activity => (
          <div key={activity.id} className="activity-card">
            <h3>{activity.name}</h3>
            <p className="category-badge">{activity.category}</p>
            <p><strong>Schedule:</strong> {activity.days.join(', ')}</p>
            <p><strong>Time:</strong> {activity.time}</p>
            <p><strong>Grade Level:</strong> {activity.ageGroup}</p>
            <p className="description">{activity.description}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(activity)}
            >
              Add Activity to Cart
            </button>
          </div>
        ))}
      </div>

      {sortedActivities.length === 0 && (
        <p className="no-results">No activities match your filters.</p>
      )}

      <h2>Weekly Schedule</h2>
      <div className="schedule-table-container">
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Time</th>
              {days.map(day => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from(new Set(activities.map(a => a.time)))
              .sort()
              .map(time => (
                <tr key={time}>
                  <td className="time-cell"><strong>{time}</strong></td>
                  {days.map(day => {
                    const activitiesAtTime = activities.filter(
                      a => a.days.includes(day) && a.time === time
                    );
                    return (
                      <td key={`${day}-${time}`}>
                        {activitiesAtTime.map(a => (
                          <div key={a.id} className="schedule-item">
                            {a.name}
                          </div>
                        ))}
                      </td>
                    );
                  })}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Activities;
