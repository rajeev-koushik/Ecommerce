# Ecommerce

A sample furniture e-commerce website.

Front end: ReactJS
Back end: Python (FastAPI)

## Getting Started

For frontend:

```bash
cd client
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

For backend:
Recommended to create a virtual environment and install dependencies there

```bash
cd api
python3 -m venv venv
source venv/Scripts/activate
pip install -r requirements.txt
uvicorn main:app --reload
```
