from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from products import products

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/shop")
async def shop():
    return products

@app.get("/product/{id}")
async def product(id: int):
    return products[id - 1]
