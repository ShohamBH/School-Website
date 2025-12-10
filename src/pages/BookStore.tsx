import React, { useState } from 'react';
import { CartItem } from '../App';

interface Book {
  id: string;
  name: string;
  price: number;
  subject: string;
  level: string;
}

interface BookStoreProps {
  onAddToCart: (item: CartItem) => void;
}

const BookStore: React.FC<BookStoreProps> = ({ onAddToCart }) => {
  const [selectedGrade, setSelectedGrade] = useState<string>('');
  const [rentalType, setRentalType] = useState<{ [key: string]: 'purchase' | 'rental' }>({});

  const grades = ['1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade', '6th Grade', '7th Grade', '8th Grade'];

  const booksByGrade: { [key: string]: Book[] } = {
    '1st Grade': [
      { id: 'book-1-1', name: 'Math Fundamentals', price: 25, subject: 'Mathematics', level: 'Beginner' },
      { id: 'book-1-2', name: 'English Basics', price: 22, subject: 'English', level: 'Beginner' },
      { id: 'book-1-3', name: 'Torah Stories - Bereishit', price: 28, subject: 'Torah', level: 'Beginner' },
      { id: 'book-1-4', name: 'Jewish History for Kids', price: 24, subject: 'Jewish History', level: 'Beginner' },
      { id: 'book-1-5', name: 'Geography Basics', price: 23, subject: 'Geography', level: 'Beginner' },
      { id: 'book-1-6', name: 'Science Wonders', price: 26, subject: 'Science', level: 'Beginner' },
      { id: 'book-1-7', name: 'Hebrew Language Workbook', price: 20, subject: 'Hebrew', level: 'Beginner' },
      { id: 'book-1-8', name: 'Values & Ethics', price: 22, subject: 'Character Education', level: 'Beginner' },
    ],
    '2nd Grade': [
      { id: 'book-2-1', name: 'Math Adventures', price: 27, subject: 'Mathematics', level: 'Intermediate' },
      { id: 'book-2-2', name: 'English Tales', price: 24, subject: 'English', level: 'Intermediate' },
      { id: 'book-2-3', name: 'Torah - Shemot & Vayikra', price: 30, subject: 'Torah', level: 'Intermediate' },
      { id: 'book-2-4', name: 'Halacha (Laws) - Basics', price: 28, subject: 'Halacha (Laws)', level: 'Intermediate' },
      { id: 'book-2-5', name: 'Israel Geography', price: 26, subject: 'Geography', level: 'Intermediate' },
      { id: 'book-2-6', name: 'Natural Sciences', price: 29, subject: 'Science', level: 'Intermediate' },
      { id: 'book-2-7', name: 'Hebrew Language II', price: 25, subject: 'Hebrew', level: 'Intermediate' },
      { id: 'book-2-8', name: 'Jewish Holidays Guide', price: 27, subject: 'Jewish Culture', level: 'Intermediate' },
    ],
    '3rd Grade': [
      { id: 'book-3-1', name: 'Advanced Math', price: 32, subject: 'Mathematics', level: 'Advanced' },
      { id: 'book-3-2', name: 'English Literature', price: 28, subject: 'English', level: 'Advanced' },
      { id: 'book-3-3', name: 'Prophets Study (Nevi\'im)', price: 35, subject: 'Prophets (Nevi\'im)', level: 'Advanced' },
      { id: 'book-3-4', name: 'Torah - Devarim', price: 32, subject: 'Torah', level: 'Advanced' },
      { id: 'book-3-5', name: 'Halacha - Daily Laws', price: 31, subject: 'Halacha (Laws)', level: 'Advanced' },
      { id: 'book-3-6', name: 'World Geography', price: 30, subject: 'Geography', level: 'Advanced' },
      { id: 'book-3-7', name: 'General Science', price: 33, subject: 'Science', level: 'Advanced' },
      { id: 'book-3-8', name: 'Hebrew Language III', price: 28, subject: 'Hebrew', level: 'Advanced' },
      { id: 'book-3-9', name: 'Jewish History - Ancient Period', price: 34, subject: 'Jewish History', level: 'Advanced' },
    ],
    '4th Grade': [
      { id: 'book-4-1', name: 'Algebra Introduction', price: 38, subject: 'Mathematics', level: 'Advanced' },
      { id: 'book-4-2', name: 'Grammar & Composition', price: 32, subject: 'English', level: 'Advanced' },
      { id: 'book-4-3', name: 'Holy Writings - Ketuvim', price: 40, subject: 'Ketuvim (Writings)', level: 'Advanced' },
      { id: 'book-4-4', name: 'Torah Depth Study', price: 39, subject: 'Torah', level: 'Advanced' },
      { id: 'book-4-5', name: 'Talmud Introduction', price: 42, subject: 'Talmud', level: 'Advanced' },
      { id: 'book-4-6', name: 'Jewish History - Medieval', price: 40, subject: 'Jewish History', level: 'Advanced' },
      { id: 'book-4-7', name: 'Advanced Geography', price: 37, subject: 'Geography', level: 'Advanced' },
      { id: 'book-4-8', name: 'Physics Basics', price: 41, subject: 'Science', level: 'Advanced' },
      { id: 'book-4-9', name: 'Halacha - Detailed Laws', price: 40, subject: 'Halacha (Laws)', level: 'Advanced' },
      { id: 'book-4-10', name: 'Hebrew Literature', price: 35, subject: 'Hebrew', level: 'Advanced' },
    ],
    '5th Grade': [
      { id: 'book-5-1', name: 'Geometry & Algebra', price: 42, subject: 'Mathematics', level: 'Advanced' },
      { id: 'book-5-2', name: 'World Literature', price: 36, subject: 'English', level: 'Advanced' },
      { id: 'book-5-3', name: 'Talmud Foundations', price: 44, subject: 'Talmud', level: 'Advanced' },
      { id: 'book-5-4', name: 'Torah & Derash (Commentary)', price: 45, subject: 'Torah', level: 'Advanced' },
      { id: 'book-5-5', name: 'Prophets Advanced Study', price: 43, subject: 'Prophets (Nevi\'im)', level: 'Advanced' },
      { id: 'book-5-6', name: 'Jewish Philosophy', price: 46, subject: 'Jewish Philosophy', level: 'Advanced' },
      { id: 'book-5-7', name: 'Geography & Cultures', price: 40, subject: 'Geography', level: 'Advanced' },
      { id: 'book-5-8', name: 'Chemistry Fundamentals', price: 44, subject: 'Science', level: 'Advanced' },
      { id: 'book-5-9', name: 'Halacha - Applied Laws', price: 43, subject: 'Halacha (Laws)', level: 'Advanced' },
      { id: 'book-5-10', name: 'Hebrew Poetry & Literature', price: 39, subject: 'Hebrew', level: 'Advanced' },
    ],
    '6th Grade': [
      { id: 'book-6-1', name: 'Pre-Calculus', price: 48, subject: 'Mathematics', level: 'Advanced' },
      { id: 'book-6-2', name: 'Advanced Writing', price: 40, subject: 'English', level: 'Advanced' },
      { id: 'book-6-3', name: 'Talmud Analysis', price: 50, subject: 'Talmud', level: 'Advanced' },
      { id: 'book-6-4', name: 'Torah - Multiple Interpretations', price: 48, subject: 'Torah', level: 'Advanced' },
      { id: 'book-6-5', name: 'Ketuvim (Holy Writings) Study', price: 46, subject: 'Ketuvim (Writings)', level: 'Advanced' },
      { id: 'book-6-6', name: 'Jewish Ethics & Mussar', price: 47, subject: 'Jewish Philosophy', level: 'Advanced' },
      { id: 'book-6-7', name: 'History of Israel', price: 45, subject: 'Jewish History', level: 'Advanced' },
      { id: 'book-6-8', name: 'Biology & Ecology', price: 49, subject: 'Science', level: 'Advanced' },
      { id: 'book-6-9', name: 'Halacha - Advanced Topics', price: 48, subject: 'Halacha (Laws)', level: 'Advanced' },
      { id: 'book-6-10', name: 'Hebrew Grammar & Linguistics', price: 42, subject: 'Hebrew', level: 'Advanced' },
      { id: 'book-6-11', name: 'World History Connection', price: 44, subject: 'Geography', level: 'Advanced' },
    ],
    '7th Grade': [
      { id: 'book-7-1', name: 'Trigonometry', price: 52, subject: 'Mathematics', level: 'Advanced' },
      { id: 'book-7-2', name: 'Literature Analysis', price: 44, subject: 'English', level: 'Advanced' },
      { id: 'book-7-3', name: 'Mishna Study', price: 50, subject: 'Mishna', level: 'Advanced' },
      { id: 'book-7-4', name: 'Torah - Deep Hashkafa (Philosophy)', price: 51, subject: 'Torah', level: 'Advanced' },
      { id: 'book-7-5', name: 'Talmud - Critical Analysis', price: 53, subject: 'Talmud', level: 'Advanced' },
      { id: 'book-7-6', name: 'Prophets - Spiritual Messages', price: 49, subject: 'Prophets (Nevi\'im)', level: 'Advanced' },
      { id: 'book-7-7', name: 'Jewish History - Modern Era', price: 48, subject: 'Jewish History', level: 'Advanced' },
      { id: 'book-7-8', name: 'Physics & Mechanics', price: 52, subject: 'Science', level: 'Advanced' },
      { id: 'book-7-9', name: 'Halacha - Complex Discussions', price: 51, subject: 'Halacha (Laws)', level: 'Advanced' },
      { id: 'book-7-10', name: 'Hebrew Literature & Culture', price: 46, subject: 'Hebrew', level: 'Advanced' },
      { id: 'book-7-11', name: 'Global Geography & Politics', price: 48, subject: 'Geography', level: 'Advanced' },
      { id: 'book-7-12', name: 'Jewish Thought & Philosophy', price: 52, subject: 'Jewish Philosophy', level: 'Advanced' },
    ],
    '8th Grade': [
      { id: 'book-8-1', name: 'Advanced Calculus', price: 56, subject: 'Mathematics', level: 'Advanced' },
      { id: 'book-8-2', name: 'Advanced English', price: 48, subject: 'English', level: 'Advanced' },
      { id: 'book-8-3', name: 'Talmud - Master Level', price: 58, subject: 'Talmud', level: 'Advanced' },
      { id: 'book-8-4', name: 'Torah - Kabbalah & Mysticism', price: 56, subject: 'Torah', level: 'Advanced' },
      { id: 'book-8-5', name: 'Mishna - Comprehensive Study', price: 55, subject: 'Mishna', level: 'Advanced' },
      { id: 'book-8-6', name: 'Ketuvim - Advanced Interpretation', price: 54, subject: 'Ketuvim (Writings)', level: 'Advanced' },
      { id: 'book-8-7', name: 'Jewish Law - Advanced', price: 56, subject: 'Halacha (Laws)', level: 'Advanced' },
      { id: 'book-8-8', name: 'Jewish Philosophy - Masters', price: 57, subject: 'Jewish Philosophy', level: 'Advanced' },
      { id: 'book-8-9', name: 'Chemistry & Reactions', price: 55, subject: 'Science', level: 'Advanced' },
      { id: 'book-8-10', name: 'History - Comprehensive', price: 53, subject: 'Jewish History', level: 'Advanced' },
      { id: 'book-8-11', name: 'Hebrew - Advanced Literature', price: 50, subject: 'Hebrew', level: 'Advanced' },
      { id: 'book-8-12', name: 'Geopolitics & Culture', price: 52, subject: 'Geography', level: 'Advanced' },
      { id: 'book-8-13', name: 'Ethics & Character Development', price: 51, subject: 'Character Education', level: 'Advanced' },
    ],
  };

  const handleAddToCart = (book: Book) => {
    const type = rentalType[book.id] || 'purchase';
    onAddToCart({
      id: `${book.id}-${type}`,
      name: `${book.name} (${type === 'purchase' ? 'Buy' : 'Rental'})`,
      price: book.price,
      quantity: 1,
      type: 'book',
      category: book.subject,
    });
  };

  const books = selectedGrade ? booksByGrade[selectedGrade] : [];

  return (
    <div className="page-container">
      <h1>📚 Book Store</h1>

      <div className="book-store-section">
        <h2>Select a Grade</h2>
        <div className="grade-buttons">
          {grades.map(grade => (
            <button
              key={grade}
              className={`grade-button ${selectedGrade === grade ? 'active' : ''}`}
              onClick={() => setSelectedGrade(grade)}
            >
              {grade}
            </button>
          ))}
        </div>

        {selectedGrade && books.length > 0 && (
          <div className="books-table-container">
            <h3>Textbooks for {selectedGrade}</h3>
            <table className="books-table">
              <thead>
                <tr>
                  <th>Book Name</th>
                  <th>Subject</th>
                  <th>Level</th>
                  <th>Price</th>
                  <th>Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {books.map(book => (
                  <tr key={book.id}>
                    <td>{book.name}</td>
                    <td>{book.subject}</td>
                    <td>{book.level}</td>
                    <td>${book.price.toFixed(2)}</td>
                    <td>
                      <select
                        value={rentalType[book.id] || 'purchase'}
                        onChange={e => setRentalType({
                          ...rentalType,
                          [book.id]: e.target.value as 'purchase' | 'rental'
                        })}
                      >
                        <option value="purchase">Purchase</option>
                        <option value="rental">Rental</option>
                      </select>
                    </td>
                    <td>
                      <button
                        className="add-to-cart-btn"
                        onClick={() => handleAddToCart(book)}
                      >
                        Add to Cart
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookStore;
