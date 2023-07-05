import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Breadcrumb,
  Table,
  Card,
  Toast,
} from 'flowbite-react'

import { useForm } from 'react-hook-form'
import { HiHome, HiFire } from 'react-icons/hi'
import { useState, useEffect } from 'react'

export default function CustomerAdd() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm()
  const [toast, setToast] = useState(false)
  const onSubmit = data => {
    setToast(true)
    setTimeout(() => {
      setToast(false)
    }, 1500)
  }
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset()
    }
  }, [formState, reset])

  return (
    <>
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 px-5 py-3 dark:bg-gray-900"
      >
        <Breadcrumb.Item href="/" icon={HiHome}>
          <p>Home</p>
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/customers">Customers</Breadcrumb.Item>
        <Breadcrumb.Item>Add customer</Breadcrumb.Item>
      </Breadcrumb>
      <div className="flex flex-col items-center mt-8 space-y-4">
        <Card className="max-w-lg w-full">
          <h5 className="text-2xl font-bold tracking-tight text-emerald-500">
            <p>Add customer</p>
          </h5>

          <form
            className="flex max-w-md flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="full-name" value="Customer's full name" />
              </div>
              <TextInput
                id="full-name"
                placeholder="e.g. John Smith"
                type="text"
                {...register('full_name')}
                required
              />
            </div>
            <Button
              type="submit"
              className="bg-emerald-500 enabled:hover:bg-emerald-600"
            >
              Submit
            </Button>
          </form>
        </Card>
      </div>
      {toast && (
        <Toast className="absolute bottom-0 m-4">
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
            <HiFire className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">Customer created!</div>
          <Toast.Toggle />
        </Toast>
      )}
    </>
  )
}
