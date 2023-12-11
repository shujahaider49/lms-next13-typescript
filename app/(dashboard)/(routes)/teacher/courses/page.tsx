import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DataTable } from "./_components/data-table"
import { columns } from "./_components/columns"

async function getData(): Promise<any[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      title: "Advance Web Development",
      price: "$78.03",
      isPublished: "true",
    },
    {
      id: "728ed52a",
      title: "Graphic Designing",
      price: "$22.03",
      isPublished: "false",
    },
    {
      id: "728ed52b",
      title: "Search Engine Optimiaztion",
      price: "$53.01",
      isPublished: "true",
    },
    {
      id: "728ed52c",
      title: "WordPress",
      price: "$22.02",
      isPublished: "false",
    },
    {
      id: "728ed52d",
      title: "Data Analytics",
      price: "$0",
      isPublished: "true",
    },
    {
      id: "728ed52e",
      title: "React Js Mastery",
      price: "$52.09",
      isPublished: "true",
    },
    
  ]
}

const CoursePage = async() => {
  const data = await getData();
  return (
    <div className="p-6">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default CoursePage
