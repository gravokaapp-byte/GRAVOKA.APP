import { redirect } from 'next/navigation'
import { createClient } from '@/src/lib/supabase/server'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard Gravoka</h1>
            <p className="mt-2 text-gray-600">
              Bienvenido, {user.email}
            </p>
          </div>

          <form action="/auth/signout" method="post">
            <button
              type="submit"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50"
            >
              Cerrar sesión
            </button>
          </form>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-5">
            <h2 className="font-semibold">Guías del mes</h2>
            <p className="mt-2 text-3xl font-bold">0</p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-5">
            <h2 className="font-semibold">Transportistas</h2>
            <p className="mt-2 text-3xl font-bold">0</p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-5">
            <h2 className="font-semibold">Clientes</h2>
            <p className="mt-2 text-3xl font-bold">0</p>
          </div>
        </div>
      </div>
    </main>
  )
}