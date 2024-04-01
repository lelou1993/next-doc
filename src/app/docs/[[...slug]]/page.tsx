'use client';

import useSWR from 'swr';

interface DocPageProps {
  params: {
    slug: string[];
  };
}

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function DocPage({ params }: DocPageProps) {
  const { data, error } = useSWR('/api/posts', fetcher);
  if (error) return <div>An error occured.<div></div></div>;
  if (!data) return <div>Loading ...</div>;
  return (
    <ul>
      {data.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
