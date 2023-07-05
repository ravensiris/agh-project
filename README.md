# agh-project
## Assumptions
Alembic assumes that a postgresql socket is running
```python
# backend/alembic/env.py
postgres_socket_dir = os.path.join(os.environ["DEVENV_STATE"], "postgres")
dev_sqlalchemy_url = f"postgresql+psycopg2://postgres:postgres@/backend?host={postgres_socket_dir}"
config.set_main_option("sqlalchemy.url", dev_sqlalchemy_url)
```

## Starting
### Backend
Run migrations with alembic:

```sh
poetry install
```

```sh
cd backend
poetry run alembic upgrade head
```

```sh
poetry run start
```

### Frontend

```sh
cd frontend
npm i
npm run dev
```

