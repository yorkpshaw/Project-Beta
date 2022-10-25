from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json

from .encoders import (
    AutomobileVOEncoder,
    SalesPersonDetailEncoder,
    SalesPersonListEncoder,
    CustomerListEncoder,
    CustomerDetailEncoder,
    SalesRecordListEncoder,
    SalesRecordDetailEncoder
)

from .models import AutomobileVO, SalesRecord, SalesPerson, Customer

def api_automobile(request):
    automobiles = AutomobileVO.objects.all()
    return JsonResponse(
        {"automobiles": automobiles},
        encoder=AutomobileVOEncoder
    )

@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerListEncoder
        )
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerDetailEncoder,
            safe=False
        )


@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):
    if request.method == "GET":
        salespeople = SalesPerson.objects.all().order_by("employee_num")
        return JsonResponse(
            {"salespeople": salespeople},
            encoder=SalesPersonListEncoder
        )
    else:
        content = json.loads(request.body)
        salesperson = SalesPerson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalesPersonDetailEncoder,
            safe=False
        )

@require_http_methods(["GET", "DELETE"])
def api_show_salesperson(request, pk):
    if request.method == "GET":
        salesperson = SalesPerson.objects.get(id=pk)
        return JsonResponse(
            salesperson,
            encoder=SalesPersonDetailEncoder,
            safe=False
        )
    else:
        try:
            salesperson = SalesPerson.objects.get(id=pk)
            salesperson.delete()
            return JsonResponse({"message": "Salesperson has been deleted."})
        except SalesPerson.DoesNotExist:
            return JsonResponse({"message": "Does not exist."})


@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    if request.method == "GET":
        salesrecords = SalesRecord.objects.all()
        return JsonResponse(
            {"salesrecords": salesrecords},
            encoder=SalesRecordListEncoder
        )
    else:
        content = json.loads(request.body)
        try:
            automobile = AutomobileVO.objects.get(vin=content["automobile"])
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Automobile does not exist"},
                status=400,
            )
        try:
            salesperson = SalesPerson.objects.get(salesperson_name=content["salesperson"])
            content["salesperson"] = salesperson
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Salesperson does not exist"},
                status=400,
            )
        try:
            customer = Customer.objects.get(customer_name=content["customer"])
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Customer does not exist"},
                status=400,
            )
        salesrecord = SalesRecord.objects.create(**content)
        return JsonResponse(
            salesrecord,
            encoder=SalesRecordDetailEncoder,
            safe=False,
        )
