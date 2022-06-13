import { Icon } from "@iconify/react";
import Image from "next/image";
import Task from "../components/task";
import Logo from "../public/noproc.png";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="w-1/5 shadow-lg flex-col flex justify-between ">
        <div>
          <div className="p-10 flex flex-row items-center gap-2">
            <Icon icon="eva:clock-outline" className="w-8 h-8" />
            <div className="text-4xl font-extrabold">noproc.io</div>
          </div>
          <div className="px-10 py-4">ALL BOARDS ( 4 )</div>
          <div className="px-1 py-3 bg-indigo-400">
            <div className="flex flex-row items-center gap-2 pl-5">
              <Icon icon="quill:folder-todo" className="w-6 h-6" />
              <div className="font-semibold text-xl ">Platfrom Launch</div>
            </div>
          </div>
          <div className="px-1 py-3">
            <div className="flex flex-row items-center gap-2 pl-5">
              <Icon icon="quill:folder-todo" className="w-6 h-6" />
              <div className="font-semibold text-xl">Marketing Plan</div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2 px-1 py-3">
            <div className="flex flex-row items-center gap-2 pl-5">
              <Icon icon="quill:folder-todo" className="w-6 h-6" />
              <div className="font-semibold text-xl">Roadmap</div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2 px-1 py-3">
            <div className="flex flex-row items-center gap-2 pl-5">
              <Icon
                icon="quill:folder-todo"
                className="w-6 h-6 text-indigo-600"
              />
              <div className="font-semibold text-xl text-indigo-600">
                Create New Board
              </div>
            </div>
          </div>
        </div>
        <div className="m-10 space-y-3">
          <div className="bg-zinc-100 p-4 flex flex-row justify-between items-center rounded-lg">
            <Icon icon="akar-icons:sun-fill" className="w-8 h-8" />
            <Icon icon="akar-icons:moon-fill" className="w-8 h-8" />
          </div>
          <div className="flex flex-row items-center gap-3">
            <Icon icon="akar-icons:eye-slashed" />
            <div>Hide sidebar</div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-row w-full justify-between items-center p-8">
          <div className="text-3xl font-bold">Platfrom Launch</div>
          <div className="flex flex-row items-center gap-4">
            <div className="bg-indigo-400 px-6 py-3 rounded-full text-xl text-white shadow-md hover:shadow-2xl transition-all">
              Add new task
            </div>
            <Icon icon="charm:menu-hamburger" className="w-8 h-8" />
          </div>
        </div>
        <div className="w-full h-full bg-zinc-100 px-8 flex flex-row gap-6">
          <div className="w-1/3">
            <div className="flex flex-row items-center gap-2">
              <div className="bg-cyan-400 w-4 h-4 rounded-full"></div>
              <div className="tracking-wider my-8">TODO ( 4 )</div>
            </div>
            <div className="space-y-4">
              <Task />
              <Task />
              <Task />
              <Task />
            </div>
          </div>
          <div className="w-1/3">
            <div className="flex flex-row items-center gap-2">
              <div className="bg-purple-400 w-4 h-4 rounded-full"></div>
              <div className="tracking-wider my-8">DOING ( 7 )</div>
            </div>
            <div className="space-y-4">
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
            </div>
          </div>
          <div className="w-1/3">
            <div className="flex flex-row items-center gap-2">
              <div className="bg-teal-400 w-4 h-4 rounded-full"></div>
              <div className="tracking-wider my-8">DONE ( 6 )</div>
            </div>
            <div className="space-y-4">
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
