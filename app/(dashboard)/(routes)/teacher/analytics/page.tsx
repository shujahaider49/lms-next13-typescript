import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { DataCard } from "./_components/data-card";
import { Chart } from "./_components/Chart";


const Analytics = () => {
  const { userId } = auth();

  if(!userId){
    return redirect('/')
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <DataCard 
         label="Total Revenue"
         value={19.99}
         />
        <DataCard 
         label="Total Sales"
         value={23.65}
         />
      </div>
      <Chart 
      
      />
    </div>
  )
}

export default Analytics
