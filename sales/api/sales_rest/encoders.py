from common.json import ModelEncoder
from .models import AutomobileVO, SalesRecord, SalesPerson, Customer

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "sold", "import_href"]

class SalesPersonListEncoder(ModelEncoder):
    model = SalesPerson
    properties = ["employee_num", "salesperson_name"]

class SalesPersonDetailEncoder(ModelEncoder):
    model = SalesPerson
    properties = ["employee_num", "salesperson_name"]

class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = ["customer_name", "address", "phone_number"]

class CustomerDetailEncoder(ModelEncoder):
    model = Customer
    properties = ["customer_name", "address", "phone_number"]

class SalesRecordListEncoder(ModelEncoder):
    model = SalesRecord
    properties = ["price", "automobile", "salesperson", "customer"]
    encoders = {
        "automobile": AutomobileVOEncoder(),
    }

class SalesRecordDetailEncoder(ModelEncoder):
    model = SalesRecord
    properties = ["price", "automobile", "salesperson", "customer"]
    encoders = {
        "automobile": AutomobileVOEncoder(),
    }
