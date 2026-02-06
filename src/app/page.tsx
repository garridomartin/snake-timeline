import SnakeTimeline from '@/components/snakeTimeline/SnakeTimeline';

import { mockDocumentStatuses } from '@/types/mocks/documentStatuses.mock';

export default function Home() {
  return <SnakeTimeline data={mockDocumentStatuses} />;
}
