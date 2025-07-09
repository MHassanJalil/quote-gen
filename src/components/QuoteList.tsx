import { Quote } from '@/data/quotes';

interface QuoteListProps { items: Quote[]; }
export default function QuoteList({ items }: QuoteListProps) {
  return (
    <ul className="space-y-4 mt-4">
      {items.map((q, idx) => (
        <li key={idx} className="p-4 bg-white rounded-2xl shadow">
          <p className="italic">"{q.text}"</p>
          <p className="mt-2 text-right font-semibold">- {q.author}</p>
        </li>
      ))}
    </ul>
  );
}
