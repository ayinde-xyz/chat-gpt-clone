"use client";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import React from "react";
import NewChat from "./NewChat";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
import { Sidebar, useProSidebar } from "react-pro-sidebar";
import ToggleButton from "./ToggleButton";

const SideBar = () => {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );
  // console.log(chats)

  const { collapseSidebar, toggleSidebar, toggled } = useProSidebar();

  const toggle = () => {
    toggleSidebar();
    if (toggled) {
      collapseSidebar();
    } else {
      collapseSidebar();
    }
  };

  return (
    <Sidebar
      className="bg-[#202123] w-full sm:w-[20rem] min-h-screen overflow-y-auto md:min-w-[20rem] fixed left-0"
      defaultCollapsed={true}
      backgroundColor="#202123"
      collapsedWidth="0px">
      {/* <div > */}
      <div className="px-2 flex flex-col h-screen" onTouchMove={() => toggle()}>
        <ToggleButton />
        <div className="flex-1">
          <div>
            <NewChat />
            <div className="inline">
              <ModelSelection />
            </div>
            <div className="flex flex-col space-y-2 my-2">
              {loading && (
                <div className="animate-pulse text-center text-white">
                  <p>Loading Chats...</p>
                </div>
              )}
              {chats?.docs.map((chat) => (
                <ChatRow key={chat.id} id={chat.id} />
              ))}
            </div>
          </div>
        </div>
        {session && (
          <img
            onClick={() => signOut()}
            src={session.user?.image!}
            alt="profile pic"
            className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
          />
        )}
      </div>
      {/* </div> */}
    </Sidebar>
  );
};

export default SideBar;
