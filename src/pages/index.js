import Image from "next/image";
import { Montserrat } from "next/font/google";
import AssignByBar from "@/components/AssignByBar";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Dashboard() {
  return (
    <main className={montserrat.className}>
      <div className="w-screen h-screen bg-white px-16 py-8 flex flex-col gap-3">
        <div id="top" className="w-full h-4/6  flex flex-row gap-3">
          <div
            id="status-redmine"
            className=" w-1/4 h-full flex flex-col gap-3"
          >
            <div
              id="status-ba"
              className=" bg-white w-full h-1/2 border border-[#d3d3d3] rounded-xl flex flex-col px-4 py-1 gap-1"
            >
              <h2 className="text-2xl font-semibold">Business Analyst</h2>
              <div className=" h-full grid grid-cols-2 gap-1 grid-rows-2">
                <div className="bg-[#f0f3f6] rounded-lg flex flex-row w-full h-full justify-center items-center">
                  <span className=" w-2/5 h-full flex justify-center items-center">
                    <i className="far fa-eye bg-[#345af4] p-2 text-white text-base rounded-full"></i>
                  </span>
                  <div className="w-3/5 flex flex-col">
                    <span className="text-sm text-[#7c7c7c]">Open</span>
                    <span className="text-xl font-bold">14</span>
                  </div>
                </div>
                <div className="bg-[#f0f3f6] rounded-lg flex flex-row w-full h-full justify-center items-center">
                  <span className=" w-2/5 h-full flex justify-center items-center">
                    <i className="fas fa-sync bg-[#292659] p-2 text-white text-base rounded-full"></i>
                  </span>
                  <div className="w-3/5 flex flex-col">
                    <span className="text-sm text-[#7c7c7c]">In Progress</span>
                    <span className="text-xl font-bold">14</span>
                  </div>
                </div>
                <div className="bg-[#f0f3f6] rounded-lg flex flex-row w-full h-full justify-center items-center">
                  <span className=" w-2/5 h-full flex justify-center items-center">
                    <i className="bx bxs-bell-ring bg-[#f2a516] p-2 text-white text-base rounded-full"></i>
                  </span>
                  <div className="w-3/5 flex flex-col">
                    <span className="text-sm text-[#7c7c7c]">
                      Open not response
                    </span>
                    <span className="text-xl font-bold text-[#f42828]">9</span>
                  </div>
                </div>
                <div className="bg-[#f0f3f6] rounded-lg flex flex-row w-full h-full justify-center items-center">
                  <span className=" w-2/5 h-full flex justify-center items-center">
                    <i className="fas fa-check bg-[#d1503f] p-2 text-white text-base rounded-full"></i>
                  </span>
                  <div className="w-3/5 flex flex-col">
                    <span className="text-sm text-[#7c7c7c]">Resolved</span>
                    <span className="text-xl font-bold">9</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="status-dev"
              className=" bg-white w-full h-1/2 border border-[#d3d3d3] rounded-xl flex flex-col px-4 py-1 gap-1"
            >
              <h2 className="text-2xl font-semibold">Developer</h2>
              <div className=" h-full grid grid-cols-2 gap-1 grid-rows-2">
                <div className="bg-[#f0f3f6] rounded-lg flex flex-row w-full h-full justify-center items-center">
                  <span className=" w-2/5 h-full flex justify-center items-center">
                    <i className="far fa-eye bg-[#345af4] p-2 text-white text-base rounded-full"></i>
                  </span>
                  <div className="w-3/5 flex flex-col">
                    <span className="text-sm text-[#7c7c7c]">Open</span>
                    <span className="text-xl font-bold">14</span>
                  </div>
                </div>
                <div className="bg-[#f0f3f6] rounded-lg flex flex-row w-full h-full justify-center items-center">
                  <span className=" w-2/5 h-full flex justify-center items-center">
                    <i className="fas fa-sync bg-[#292659] p-2 text-white text-base rounded-full"></i>
                  </span>
                  <div className="w-3/5 flex flex-col">
                    <span className="text-sm text-[#7c7c7c]">In Progress</span>
                    <span className="text-xl font-bold">14</span>
                  </div>
                </div>
                <div className="bg-[#f0f3f6] rounded-lg flex flex-row w-full h-full justify-center items-center">
                  <span className=" w-2/5 h-full flex justify-center items-center">
                    <i className="bx bxs-bell-ring bg-[#f2a516] p-2 text-white text-base rounded-full"></i>
                  </span>
                  <div className="w-3/5 flex flex-col">
                    <span className="text-sm text-[#7c7c7c]">
                      Open not response
                    </span>
                    <span className="text-xl font-bold text-[#f42828]">9</span>
                  </div>
                </div>
                <div className="bg-[#f0f3f6] rounded-lg flex flex-row w-full h-full justify-center items-center">
                  <span className=" w-2/5 h-full flex justify-center items-center">
                    <i className="fas fa-check bg-[#d1503f] p-2 text-white text-base rounded-full"></i>
                  </span>
                  <div className="w-3/5 flex flex-col">
                    <span className="text-sm text-[#7c7c7c]">Resolved</span>
                    <span className="text-xl font-bold">9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="table-redmine" className=" w-3/4 h-full flex flex-col gap-3">
            <div
              id="redmine-assign"
              className="w-full h-2/5 border border-[#d3d3d3] rounded-xl px-4 py-1"
            >
              <div id="content">
                <h2 className="text-2xl font-semibold">Redmine Assign</h2>
                <p className="text-[#a1a1a1] text-sm">
                  List redmine yang belum di response selama 1 jam terakhir
                </p>
              </div>
              <div id="data-table">
                {/* <table>
                  <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                  </tr>
                  <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                  </tr>
                  <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                  </tr>
                </table> */}
              </div>
            </div>
            <div
              id="redmine-approaching"
              className="w-full h-3/5 border border-[#d3d3d3] rounded-xl px-4 py-1"
            >
              <div id="content">
                <h2 className="text-2xl font-semibold">
                  Redmine Approaching Due Date
                </h2>
                <p className="text-[#a1a1a1] text-sm">
                  List redmine yang mendekati due date
                </p>
              </div>
              <div id="data-table"></div>
            </div>
          </div>
        </div>
        <div id="bottom" className="w-full h-2/6 border border-[#d3d3d3] rounded-xl  px-4 py-1">
        <AssignByBar/>
        </div>
      </div>
    </main>
  );
}
