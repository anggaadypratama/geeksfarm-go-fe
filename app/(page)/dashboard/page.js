import { CreateUserForm } from "@/app/components/create-user-form";


export default function DashboardPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">User Management Dashboard</h1>
      <CreateUserForm />
    </div>
  )
}

