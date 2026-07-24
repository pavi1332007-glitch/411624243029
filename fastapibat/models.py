from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import declarative_base
base = declarative_base()
class user(base):
    __tablename__ = "user"
    id=column(Integer,primary_key=True)
    name=column(String(50))