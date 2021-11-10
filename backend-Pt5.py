#5.	Make the class Person (Add attributes as appropriate), later make the classes Employee and Customer (Add the attributes that you consider necessary) and instance 3 objects Employee and 3 objects Customer, use the concept Inheritance.

from typing import List, NamedTuple, Tuple
class Person(NamedTuple):
    age: int
    height: int
    placeofbirth: str

class Employee(NamedTuple):
    idnumber: int
    wage: int
    seniority: bool


class Customer(NamedTuple):
    age: int
    creditline: bool
    name: str
