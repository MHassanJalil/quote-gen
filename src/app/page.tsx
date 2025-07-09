// // src/app/page.tsx
// 'use client';

// import { useState } from 'react';
// import QuoteForm from '@/components/QuoteForm';
// import QuoteList from '@/components/QuoteList';
// import { quotes } from '@/data/quotes';
// import type { Quote } from '@/data/quotes';

// export default function Home() {
//   const [results, setResults] = useState<Quote[]>([]);

//   const handleSearch = (topic: string) => {
//     const filtered = quotes.filter((q) =>
//       q.topics.some((t) => t.includes(topic))
//     );
//     setResults(filtered.slice(0, 3));
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center p-6">
//       <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 space-y-8">
//         <h1 className="text-5xl font-extrabold text-center text-gray-900">
//           Quote Generator
//         </h1>
//         <p className="text-center text-gray-700">
//           Enter any topic below to fetch inspiring quotes.
//         </p>

//         <div className="px-4 py-6 bg-gray-50 rounded-2xl shadow-inner">
//           <QuoteForm onSearch={handleSearch} />
//         </div>

//         {results.length > 0 && (
//           <div className="space-y-6">
//             <QuoteList items={results} />
//           </div>
//         )}

//         {results.length === 0 && (
//           <p className="text-center text-gray-600 italic">
//             Try searching for “life”, “love”, “success”…
//           </p>
//         )}
//       </div>
//     </main>
//   );
// }





'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import QuoteForm from '@/components/QuoteForm';
import QuoteList from '@/components/QuoteList';
import { quotes } from '@/data/quotes';
import type { Quote } from '@/data/quotes';
//import { style } from 'framer-motion/client';

export default function Home() {
  const [results, setResults] = useState<Quote[]>([]);

  const handleSearch = (topic: string) => {
    const filtered = quotes.filter((q) =>
      q.topics.some((t) => t.includes(topic))
    );
    setResults(filtered.slice(0, 3));
  };

  return (
    <main className="min-h-screen bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-10 space-y-8"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 120 }}
          className="text-6xl font-extrabold text-center text-gray-800"
        >
          🎉 Quote Generator
        </motion.h1>
        <p className="text-center text-gray-700 text-lg">
          Type any topic and discover inspiring quotes instantly.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <QuoteForm onSearch={handleSearch} />
        </motion.div>

        {results.length > 0 ? (
          <QuoteList items={results} />
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center text-gray-600 italic"
          >
            Try searching for “life”, “success”, “happiness”, "wisdom"…
          </motion.p>
          
        )}
      </motion.div>
    </main>
  );
}