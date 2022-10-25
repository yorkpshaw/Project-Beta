from common.json import ModelEncoder
from .models import AutomobileVO, SalesRecord, SalesPerson, Customer

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "sold", "import_href"]

class SalesPersonListEncoder(ModelEncoder):
    model = SalesPerson
    properties = ["employee_num", "salesperson_name", "id"]

class SalesPersonDetailEncoder(ModelEncoder):
    model = SalesPerson
    properties = ["employee_num", "salesperson_name", "id"]

class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = ["customer_name", "address", "phone_number", "id"]

class CustomerDetailEncoder(ModelEncoder):
    model = Customer
    properties = ["customer_name", "address", "phone_number", "id"]

class SalesRecordListEncoder(ModelEncoder):
    model = SalesRecord
    properties = ["price", "automobile", "salesperson", "customer", "id"]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "salesperson": SalesPersonDetailEncoder(),
        "customer": CustomerDetailEncoder(),
    }

class SalesRecordDetailEncoder(ModelEncoder):
    model = SalesRecord
    properties = ["price", "automobile", "salesperson", "customer", "id"]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "salesperson": SalesPersonDetailEncoder(),
        "customer": CustomerDetailEncoder(),
    }
