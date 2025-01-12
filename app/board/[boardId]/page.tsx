import React from 'react'
import Canvas from './_components/canvas'
import { Room } from '@/app/components/room';
import Loading from './_components/loading';
interface BoardIdPageProps{
    params:{
      boardId : string;
    }
}

const BoardIdPage = async ({params}:BoardIdPageProps) => {
  const paramsN = await params;
  console.log('ROHAN Server', params.boardId);

  return (
    <Room roomId={paramsN.boardId} fallback={<Loading/>}>
    <Canvas boardId={paramsN.boardId}/>
    </Room>
  )
}

export default BoardIdPage
