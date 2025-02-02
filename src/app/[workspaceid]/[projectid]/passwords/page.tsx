import { PasswordType } from "@/dummy-data/passwords"
import { DataTable } from "@/components/ui/data-table"
import { columns } from "@/components/passwords/columns"
import { passwords } from "@/dummy-data/passwords"

async function getData(): Promise<PasswordType[]> {
  return passwords
}

export default async function PasswordPage() {
  const data = await getData()

  return (
    <div>
      <div className="text-2xl font-bold pt-5">Passwords</div>
      <div className="container mx-auto pt-5">
        <DataTable columns={columns} data={data} path="passwords" />
      </div>
    </div>
  )
}
