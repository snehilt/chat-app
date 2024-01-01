"use client";

import { useEffect, useState } from "react";
import { LiveKitRoom, VideoConference } from "@livekit/components-react";
import "@livekit/components-styles";
import { Channel } from "@prisma/client";
import { useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { currentProfile } from "@/lib/current-profile";

interface MediaRoomProps {
  chatId: string;
  video: boolean;
  audio: boolean;
}

export const MediaRoom = ({ chatId, video, audio }: MediaRoomProps) => {
  const clerkUser = useUser();
  const { user } = clerkUser;
  const [token, setToken] = useState("");

  useEffect(() => {
    console.log(user, "---- user");
    //   const profile = await currentProfile()
    if (!user?.firstName || !user?.lastName) return;

    const name = `${user?.firstName} ${user?.lastName}`;

    (async () => {
      try {
        const res = await fetch(`/api/livekit?room=${chatId}&username=${name}`);
        const data = await res.json();
        console.log(data, "---- datta media roomm ---");
        setToken(data?.token);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [user?.firstName, user?.lastName, chatId]);

  if (token === "") {
    <div className="flex flex-col flex-1 justify-center items-center">
      <Loader2 className="h-7 w-7 text-zinc-500 animate-spin my-4" />
      <p className="text-xs text-zinc-500 ">Loading...</p>
    </div>;
  }

  return (
    <LiveKitRoom
      data-lk-theme="default"
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      token={token}
      connect={true}
      video={video}
      audio={audio}
    >
      <VideoConference />
    </LiveKitRoom>
  );
};
