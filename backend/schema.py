from uuid import UUID

from pydantic import BaseModel


class CustomerBase(BaseModel):
    name: str
    surname: str
    age: int
    email: str


class CustomerDBBase(CustomerBase):
    id: UUID

    class Config:
        orm_mode = True


class StudentWrite(CustomerBase):
    pass
