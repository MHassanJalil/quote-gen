//use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface QuoteFormProps { onSearch: (topic: string) => void; }
export default function QuoteForm({ onSearch }: QuoteFormProps) {
  const [topic, setTopic] = useState('');
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); onSearch(topic.trim().toLowerCase()); };
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input value={topic} onChange={e => setTopic(e.target.value)} placeholder="Enter a topic (e.g. life)" className="flex-1" />
      <Button type="submit">Generate Quotes</Button>
    </form>
  );  
  
}
