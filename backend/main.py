import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.openapi.docs import (get_redoc_html, get_swagger_ui_html,
                                  get_swagger_ui_oauth2_redirect_html)
from fastapi.staticfiles import StaticFiles
from fastapi_sqlalchemy import DBSessionMiddleware, db

from .models import Customer as ModelCustomer
from .schema import Customer as SchemaCustomer
from .schema import CustomerWrite

postgres_socket_dir = os.path.join(os.environ["DEVENV_STATE"], "postgres")
dev_sqlalchemy_url = (
    f"postgresql+psycopg2://postgres:postgres@/backend?host={postgres_socket_dir}"
)

origins = ["*"]

app = FastAPI(docs_url=None, redoc_url=None)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.add_middleware(DBSessionMiddleware, db_url=dev_sqlalchemy_url)

app.mount("/static", StaticFiles(directory="backend/static"), name="static")


@app.post("/customers", response_model=SchemaCustomer)
def create_student(customer: CustomerWrite):
    db_customer = ModelCustomer(full_name=customer.full_name)
    db.session.add(db_customer)
    db.session.commit()
    db.session.refresh(db_customer)
    return db_customer


@app.get("/customers", response_model=list[SchemaCustomer])
def list_students(skip: int = 0, limit: int = 100):
    return db.session.query(ModelCustomer).offset(skip).limit(limit).all()


@app.get("/docs", include_in_schema=False)
async def custom_swagger_ui_html():
    return get_swagger_ui_html(
        openapi_url=app.openapi_url,
        title=app.title + " - Swagger UI",
        oauth2_redirect_url=app.swagger_ui_oauth2_redirect_url,
        swagger_js_url="/static/swagger-ui-bundle.js",
        swagger_css_url="/static/swagger-ui.css",
    )


@app.get(app.swagger_ui_oauth2_redirect_url, include_in_schema=False)
async def swagger_ui_redirect():
    return get_swagger_ui_oauth2_redirect_html()


@app.get("/redoc", include_in_schema=False)
async def redoc_html():
    return get_redoc_html(
        openapi_url=app.openapi_url,
        title=app.title + " - ReDoc",
        redoc_js_url="/static/redoc.standalone.js",
    )


def start():
    """Launched with `poetry run start` at root level"""
    import uvicorn

    uvicorn.run("backend.main:app", host="0.0.0.0", port=8000, reload=True)
