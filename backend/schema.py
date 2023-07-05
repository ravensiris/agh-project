from uuid import UUID

from pydantic import BaseModel


class CustomerBase(BaseModel):
    full_name: str


class CustomerDBBase(CustomerBase):
    id: UUID

    class Config:
        orm_mode = True


class CustomerWrite(CustomerBase):
    pass


class Customer(CustomerDBBase):
    pass
