import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet,faFileLines,faCalendarDays,faClock } from '@fortawesome/free-solid-svg-icons';
import { VictoryBar ,VictoryChart,VictoryTheme,VictoryLine,VictoryPie,VictoryBoxPlot} from 'victory';
import React from 'react'




export const App = () => {
  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
    { quarter: 5, earnings: 14250 },

  ]

  const sampleData = [
    { x: "Cats", y: 35 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 55 }
  ]


  return (
    <>
      <section className="h-[100vh] container mx-auto">
        <div className="flex gap-10 py-20 justify-center items-center md:flex-row flex-col px-6">
          <div className="md:w-1/5 w-full  py-2 px-4 border border-spacing-1 rounded-lg cursor-pointer hover:shadow-lg">
            <VictoryBar data={data} x={"quarter"} y={"earnings"} style={{ data: { fill: "#0c77e0" } }} barRatio={0.8} barWidth={50} />
            <div className="p-2 flex items-center gap-5">
              <div className="text-2xl text-blue-400">
                <FontAwesomeIcon icon={faWallet} />
              </div>
              <h1 className="text-xl text-blue-500 capitalize font-bold cursor-pointer">All Earnings</h1>
            </div>
          </div>
          <div className="md:w-1/5 w-full py-2 px-4 border border-spacing-1 rounded-lg cursor-pointer hover:shadow-lg">
            <VictoryBar data={data} x={"quarter"} y={"earnings"} style={{ data: { fill: "#a92222" } }} barRatio={0.8} barWidth={50} />
            <div className="p-2 flex items-center gap-5">
              <div className="text-2xl text-red-400">
                <FontAwesomeIcon icon={faFileLines} />
              </div>
              <h1 className="text-xl text-red-500 capitalize font-bold cursor-pointer">Page Views</h1>
            </div>
          </div>
          <div className="md:w-1/5 w-full py-2 px-4 border border-spacing-1 rounded-lg cursor-pointer hover:shadow-lg">
            <VictoryBar data={data} x={"quarter"} y={"earnings"} style={{ data: { fill: "#1c591e" } }} barRatio={0.8} barWidth={50} />
            <div className="p-2 flex items-center gap-5">
              <div className="text-2xl text-green-400">
                <FontAwesomeIcon icon={faCalendarDays} />
              </div>
              <h1 className="text-xl text-green-500 capitalize font-bold cursor-pointer">Total Task</h1>
            </div>
          </div>
          <div className="md:w-1/5 w-full py-2 px-4 border border-spacing-1 rounded-lg cursor-pointer hover:shadow-lg">
            <VictoryBar data={data} x={"quarter"} y={"earnings"} style={{ data: { fill: "#fff719" } }} barRatio={0.8} barWidth={50} />
            <div className="p-2 flex items-center gap-5">
              <div className="text-2xl text-yellow-400">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <h1 className="text-xl text-yellow-500  capitalize font-bold cursor-pointer">Download</h1>
            </div>
          </div>
        </div>
        <div className="p-5 w-full">
              <div className='h-full md:h-[600px] w-full'>
                <VictoryChart
                  theme={VictoryTheme.material}
                  width={900}
                >
                  <VictoryLine
                    style={{
                      data: { stroke: "#c43a31",},
                      parent: { border: "1px solid #ccc"},
                      
                    }}
                    
                    data={[
                      { x: 1, y: 2 },
                      { x: 2, y: 3 },
                      { x: 3, y: 5 },
                      { x: 4, y: 4 },
                      { x: 5, y: 7 },
                      { x: 6, y: 8 },
                      { x: 7, y: 4 },
                      { x: 8, y: 5 },
                      { x: 9, y: 8 },
                      { x: 10, y: 9 },
                      { x: 11, y: 3 },
                      { x: 12, y: 7 },
                      { x: 13, y: 5 },
                      { x: 14, y: 7 },

                    ]}
                  />
                </VictoryChart>
              </div>
        </div>
        <div className="py-20 flex gap-3 flex-wrap items-center justify-around md:flex-row flex-col px-6">
              <div className='md:w-1/3 w-full'>
                  <div>
                  <VictoryPie
                        colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
                        data={sampleData}
                  />
                  </div>
                  <div className="text-xl font-bold capitalize  line-clamp-4 opacity-95">
                    <p className="text-2xl font-bold uppercase text-red-600">Lorem ipsum :</p> dolor sit amet consectetur adipisicing elit. Fugit optio sint quam.
                  </div>
              </div>
              <div className='md:w-1/3 w-full'>
                <div>
                  <VictoryPie
                    innerRadius={({ datum }) => datum.y * 20}
                    colorScale={["red", "blue", "gold" ]}
                    data={[
                      { x: 1, y: 2, label: "one" },
                      { x: 2, y: 3, label: "two" },
                      { x: 3, y: 5, label: "three" }
                    ]}
                  />
                </div>
                <div className="text-xl font-bold capitalize  line-clamp-4 opacity-95">
                  <p className="text-2xl font-bold uppercase text-red-600">Lorem ipsum :</p> dolor sit amet consectetur adipisicing elit. Fugit optio sint quam.
                </div>
              </div>
        </div>
        <div className="py-20">
            <div>
                      <VictoryChart domainPadding={20}>
            <VictoryBoxPlot
              boxWidth={20}
              colorScale={["red"]}
              data={[
                { x: 1, y: [1, 2, 3, 5] },
                { x: 2, y: [3, 2, 8, 10] },
                { x: 3, y: [2, 8, 6, 5] },
                { x: 4, y: [1, 3, 2, 9] }
              ]}
            />
          </VictoryChart>

            </div>
        </div>
      </section>

    </>
  )
}
