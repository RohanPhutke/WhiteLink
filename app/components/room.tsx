"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { Layer } from "@/types/canvas";
import { LiveMap,LiveList,LiveObject } from "@liveblocks/client";


interface RoomProps{
    children: ReactNode,
    roomId : string;
    fallback : NonNullable<ReactNode> | null;

}
export function Room({ children, roomId , fallback }: RoomProps) {
  return (
    <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
      <RoomProvider 
       id={roomId} 
       initialPresence={{
        cursor:null,
        selection:[],
        pencilDraft : null,
        penColor : null,
      }}
       initialStorage={{
        layers : new LiveMap<string,LiveObject<Layer>>(),
        layerIds : new LiveList([]),
       }}
       >
        <ClientSideSuspense fallback={fallback}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
