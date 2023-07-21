from pydantic import BaseModel

class Item(BaseModel):
    id: int
    images: list[str]
    title: str
    price: str
    rating: str
    
products = [
    Item(
      id = 1,
      images = ["https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/6045051/pexels-photo-6045051.jpeg?auto=compress&cs=tinysrgb&w=1600",],
      title = "Couch",
      price = "5,000",
      rating = "4/5",
    ),
    Item(
      id = 2,
      images = ["https://images.pexels.com/photos/8092365/pexels-photo-8092365.jpeg?auto=compress&cs=tinysrgb&w=1600", "https://images.pexels.com/photos/5793953/pexels-photo-5793953.jpeg?auto=compress&cs=tinysrgb&w=1600",],
      title = "Desk",
			price = "3,000",
      rating = "5/5",
    ),
    Item(
      id = 3,
      images = ["https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://hips.hearstapps.com/elledecor/assets/16/04/1454001003-edc030116truth07.jpg",],
      title = "Chair",
      price = "1,000",
      rating = "3/5",
    ),
]