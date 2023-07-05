import { Card, Button } from 'flowbite-react'

export default function Root() {
  return (
    <div className="p-3 grid">
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
    </div>
  )
}
