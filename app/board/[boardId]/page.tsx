'use client';
import React, { useState, useEffect } from 'react'
import Canvas from './_components/canvas'
import { Room } from '@/app/components/room';
import Loading from './_components/loading';

interface BoardIdPageProps {
  params: Promise<{ boardId: string }>;
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  const [boardId, setBoardId] = useState<string | null>(null);

  useEffect(() => {
    const fetchBoardId = async () => {
      const { boardId } = await params;
      setBoardId(boardId);
    };

    fetchBoardId();
  }, [params]);

  if (!boardId) {
    return <Loading />;
  }

  return (
    <Room roomId={boardId} fallback={<Loading />}>
      <Canvas boardId={boardId} />
    </Room>
  );
};

export default BoardIdPage;
