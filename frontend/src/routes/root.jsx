import { Card, Button } from 'flowbite-react'

export default function Root() {
  return (
    <div className="p-3 grid md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 sm:grid-cols-2 justify-items-center gap-4">
      <Card className="max-w-sm bg-sky-100 hover:bg-sky-200" href="/customers">
        <h5 className="text-2xl font-bold tracking-tight text-sky-500">
          <p>
            <i>[LIST]</i> Customers
          </p>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <p>
            Uncover the Enigmatic Roster of Individuals who Hold the Secrets to
            Our Success
          </p>
        </p>
      </Card>
      <Card
        className="max-w-sm bg-emerald-100 hover:bg-emerald-200"
        href="/add-customer"
      >
        <h5 className="text-2xl font-bold tracking-tight text-emerald-500">
          <p>
            <i>[CREATE]</i> Customers
          </p>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <p>
            Join the Mysterious Network and Leave Your Indelible Mark on Our
            Conspiracy
          </p>
        </p>
      </Card>
    </div>
  )
}
