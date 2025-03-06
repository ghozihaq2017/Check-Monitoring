import Image from "next/image";
import { Montserrat } from "next/font/google";
import AssignByBar from "@/components/AssignByBar";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Dashboard() {
  return (
    <main className={montserrat.className}>
      <div className="w-screen h-screen bg-white px-16 2xl:px-4 2x:py-4 py-8 flex flex-col gap-3">
        <div id="top" className="w-full h-4/6  flex flex-row gap-3">
          <div
            id="status-redmine"
            className=" w-1/4 h-full flex flex-col gap-3"
          >
            <div
              id="status-ba"
              className=" bg-white w-full h-1/2 border border-[#d3d3d3] rounded-xl flex flex-col px-4 py-1 gap-1 2xl:px-6 2xl:py-3"
            >
              <h2 className="text-2xl 2xl:text-4xl font-semibold">
                Business Analyst
              </h2>
              <div className=" h-full grid grid-cols-2 gap-1 xl:gap-2 grid-rows-2">
                <div className="bg-[#f0f3f6] rounded-lg flex flex-row w-full h-full justify-center items-center">
                  <span className=" w-2/5 h-full flex justify-center items-center">
                    <i className="far fa-eye bg-[#345af4] p-2 text-white text-base 2xl:text-3xl 2xl:p-3 rounded-full"></i>
                  </span>
                  <div className="w-3/5 flex flex-col">
                    <span className="text-sm 2xl:text-xl text-[#7c7c7c]">
                      Open
                    </span>
                    <span className="text-xl 2xl:text-4xl font-bold">14</span>
                  </div>
                </div>
                <div className="bg-[#f0f3f6] rounded-lg flex flex-row w-full h-full justify-center items-center">
                  <span className=" w-2/5 h-full flex justify-center items-center">
                    <i className="fas fa-sync bg-[#292659] p-2 text-white text-base rounded-full 2xl:text-3xl 2xl:p-3"></i>
                  </span>
                  <div className="w-3/5 flex flex-col">
                    <span className="text-sm 2xl:text-xl text-[#7c7c7c]">
                      In Progress
                    </span>
                    <span className="text-xl font-bold 2xl:text-4xl">14</span>
                  </div>
                </div>
                <div className="bg-[#f0f3f6] rounded-lg flex flex-row w-full h-full justify-center items-center">
                  <span className=" w-2/5 h-full flex justify-center items-center">
                    <i className="bx bxs-bell-ring bg-[#f2a516] p-2 text-white text-base rounded-full 2xl:text-3xl 2xl:p-3"></i>
                  </span>
                  <div className="w-3/5 flex flex-col">
                    <span className="text-sm 2xl:text-xl text-[#7c7c7c]">
                      Open not response
                    </span>
                    <span className="text-xl 2xl:text-4xl font-bold text-[#f42828]">
                      9
                    </span>
                  </div>
                </div>
                <div className="bg-[#f0f3f6] rounded-lg flex flex-row w-full h-full justify-center items-center">
                  <span className=" w-2/5 h-full flex justify-center items-center">
                    <i className="fas fa-check bg-[#d1503f] p-2 text-white text-base rounded-full 2xl:text-3xl 2xl:p-3"></i>
                  </span>
                  <div className="w-3/5 flex flex-col">
                    <span className="text-sm 2xl:text-xl text-[#7c7c7c]">
                      Resolved
                    </span>
                    <span className="text-xl 2xl:text-4xl font-bold">9</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="status-dev"
              className=" bg-white w-full h-1/2 border border-[#d3d3d3] rounded-xl flex flex-col px-4 py-1 gap-1 2xl:px-6 2xl:py-3"
            >
              <h2 className="text-2xl 2xl:text-4xl font-semibold">Developer</h2>
              <div className=" h-full grid grid-cols-2 gap-1 xl:gap-2 grid-rows-2">
                <div className="bg-[#f0f3f6] rounded-lg flex flex-row w-full h-full justify-center items-center">
                  <span className=" w-2/5 h-full flex justify-center items-center">
                    <i className="far fa-eye bg-[#345af4] p-2 text-white text-base 2xl:text-3xl 2xl:p-3 rounded-full"></i>
                  </span>
                  <div className="w-3/5 flex flex-col">
                    <span className="text-sm 2xl:text-xl text-[#7c7c7c]">
                      Open
                    </span>
                    <span className="text-xl 2xl:text-4xl font-bold">14</span>
                  </div>
                </div>
                <div className="bg-[#f0f3f6] rounded-lg flex flex-row w-full h-full justify-center items-center">
                  <span className=" w-2/5 h-full flex justify-center items-center">
                    <i className="fas fa-sync bg-[#292659] p-2 text-white text-base rounded-full 2xl:text-3xl 2xl:p-3"></i>
                  </span>
                  <div className="w-3/5 flex flex-col">
                    <span className="text-sm 2xl:text-xl text-[#7c7c7c]">
                      In Progress
                    </span>
                    <span className="text-xl font-bold 2xl:text-4xl">14</span>
                  </div>
                </div>
                <div className="bg-[#f0f3f6] rounded-lg flex flex-row w-full h-full justify-center items-center">
                  <span className=" w-2/5 h-full flex justify-center items-center">
                    <i className="bx bxs-bell-ring bg-[#f2a516] p-2 text-white text-base rounded-full 2xl:text-3xl 2xl:p-3"></i>
                  </span>
                  <div className="w-3/5 flex flex-col">
                    <span className="text-sm 2xl:text-xl text-[#7c7c7c]">
                      Open not response
                    </span>
                    <span className="text-xl 2xl:text-4xl font-bold text-[#f42828]">
                      9
                    </span>
                  </div>
                </div>
                <div className="bg-[#f0f3f6] rounded-lg flex flex-row w-full h-full justify-center items-center">
                  <span className=" w-2/5 h-full flex justify-center items-center">
                    <i className="fas fa-check bg-[#d1503f] p-2 text-white text-base rounded-full 2xl:text-3xl 2xl:p-3"></i>
                  </span>
                  <div className="w-3/5 flex flex-col">
                    <span className="text-sm 2xl:text-xl text-[#7c7c7c]">
                      Resolved
                    </span>
                    <span className="text-xl 2xl:text-4xl font-bold">9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="table-redmine" className=" w-3/4 h-full flex flex-col gap-3">
            <div
              id="redmine-assign"
              className="w-full h-2/5 border border-[#d3d3d3] rounded-xl px-4 py-1 2xl:px-6 2xl:py-3"
            >
              <div id="content">
                <h2 className="text-2xl 2xl:text-4xl font-semibold">
                  Redmine Assign
                </h2>
                <p className="text-[#a1a1a1] text-sm 2xl:text-xl 2xl:mt-1">
                  List redmine yang belum di response selama 1 jam terakhir
                </p>
              </div>
              <div id="data-table">
                <table className=" w-full">
                  <thead>
                    <tr className="text-left">
                      <th className="font-semibold px-4 py-1 2xl:text-lg">
                        No Redmine
                      </th>
                      <th className="font-semibold px-4 py-1 2xl:text-lg">
                        Assign Date
                      </th>
                      <th className="font-semibold px-4 py-1 2xl:text-lg">
                        Status Response
                      </th>
                      <th className="font-semibold px-4 py-1 2xl:text-lg">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-[#d9d9d9] ">
                      <td className="px-4 py-1 2xl:text-lg">#81234</td>
                      <td className="px-4 py-1 2xl:text-lg">
                        25/02/2025 10:00:25
                      </td>
                      <td className="px-4 py-1 2xl:text-lg">NO</td>
                      <td className="px-4 py-1 2xl:text-lg">05:06:23</td>
                    </tr>
                    <tr className="border-b border-[#d9d9d9]">
                      <td className="px-4 py-1 2xl:text-lg">#81234</td>
                      <td className="px-4 py-1 2xl:text-lg">
                        25/02/2025 10:00:25
                      </td>
                      <td className="px-4 py-1 2xl:text-lg">NO</td>
                      <td className="px-4 py-1 2xl:text-lg">05:06:23</td>
                    </tr>
                    <tr className="border-[#d9d9d9]">
                      <td className="px-4 py-1 2xl:text-lg">#81234</td>
                      <td className="px-4 py-1 2xl:text-lg">
                        25/02/2025 10:00:25
                      </td>
                      <td className="px-4 py-1 2xl:text-lg">NO</td>
                      <td className="px-4 py-1 2xl:text-lg">05:06:23</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              id="redmine-approaching"
              className="w-full h-3/5 border border-[#d3d3d3] rounded-xl px-4 py-1 2xl:px-6 2xl:py-3"
            >
              <div id="content">
                <h2 className="text-2xl font-semibold 2xl:text-4xl">
                  Redmine Approaching Due Date
                </h2>
                <p className="text-[#a1a1a1] text-sm 2xl:text-xl 2xl:mt-1">
                  List redmine yang mendekati due date
                </p>
              </div>
              <div id="data-table">
                <table className=" w-full">
                  <thead>
                    <tr className="text-left">
                      <th className="font-semibold px-4 py-1 2xl:text-lg">
                        No Redmine
                      </th>
                      <th className="font-semibold px-4 py-1 2xl:text-lg">
                        Created By
                      </th>
                      <th className="font-semibold px-4 py-1 2xl:text-lg">
                        Project
                      </th>
                      <th className="font-semibold px-4 py-1 2xl:text-lg">
                        Due Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-[#d9d9d9] ">
                      <td className="px-4 py-1 2xl:text-lg">#81234</td>
                      <td className="px-4 py-1 2xl:text-lg">John Doe</td>
                      <td className="px-4 py-1 2xl:text-lg">Bank DKI</td>
                      <td className="px-4 py-1 2xl:text-lg">25/02/2025</td>
                    </tr>
                    <tr className="border-b border-[#d9d9d9] ">
                      <td className="px-4 py-1 2xl:text-lg">#81234</td>
                      <td className="px-4 py-1 2xl:text-lg">John Doe</td>
                      <td className="px-4 py-1 2xl:text-lg">Bank DKI</td>
                      <td className="px-4 py-1 2xl:text-lg">25/02/2025</td>
                    </tr>
                    <tr className="border-b border-[#d9d9d9] ">
                      <td className="px-4 py-1 2xl:text-lg">#81234</td>
                      <td className="px-4 py-1 2xl:text-lg">John Doe</td>
                      <td className="px-4 py-1 2xl:text-lg">Bank DKI</td>
                      <td className="px-4 py-1 2xl:text-lg">25/02/2025</td>
                    </tr>
                    <tr className="border-b border-[#d9d9d9] ">
                      <td className="px-4 py-1 2xl:text-lg">#81234</td>
                      <td className="px-4 py-1 2xl:text-lg">John Doe</td>
                      <td className="px-4 py-1 2xl:text-lg">Bank DKI</td>
                      <td className="px-4 py-1 2xl:text-lg">25/02/2025</td>
                    </tr>
                    <tr className="border-b border-[#d9d9d9] ">
                      <td className="px-4 py-1 2xl:text-lg">#81234</td>
                      <td className="px-4 py-1 2xl:text-lg">John Doe</td>
                      <td className="px-4 py-1 2xl:text-lg">Bank DKI</td>
                      <td className="px-4 py-1 2xl:text-lg">25/02/2025</td>
                    </tr>
                    <tr className=" border-[#d9d9d9] ">
                      <td className="px-4 py-1 2xl:text-lg">#81234</td>
                      <td className="px-4 py-1 2xl:text-lg">John Doe</td>
                      <td className="px-4 py-1 2xl:text-lg">Bank DKI</td>
                      <td className="px-4 py-1 2xl:text-lg">25/02/2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div
          id="bottom"
          className="w-full h-2/6 border border-[#d3d3d3] rounded-xl  px-4 py-1"
        >
          <AssignByBar />
        </div>
      </div>
    </main>
  );
}
