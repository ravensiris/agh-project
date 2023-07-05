import { Breadcrumb, Table, Card } from 'flowbite-react'
import { HiHome } from 'react-icons/hi'
import { useState, useEffect } from 'react'

export default function CustomerList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/customers')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 px-5 py-3 dark:bg-gray-900"
      >
        <Breadcrumb.Item href="/" icon={HiHome}>
          <p>Home</p>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Customers</Breadcrumb.Item>
      </Breadcrumb>
      <div className="flex flex-col items-center mt-8 space-y-4">
        <Card
          className="max-w-lg w-full bg-emerald-100 hover:bg-emerald-200"
          href="add-customer"
        >
          <h5 className="text-2xl text-center font-bold tracking-tight text-emerald-500">
            <p>Add customer</p>
          </h5>
        </Card>
        <Card className="max-w-lg w-full">
          <h5 className="text-2xl font-bold tracking-tight text-sky-500">
            <p>Customers</p>
          </h5>
          <Table>
            <Table.Head>
              <Table.HeadCell>Id</Table.HeadCell>
              <Table.HeadCell>Full name</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {users.map(user => (
                <Table.Row>
                  <Table.Cell>{user.id}</Table.Cell>
                  <Table.Cell>{user.full_name}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Card>
      </div>
    </>
  )
}
