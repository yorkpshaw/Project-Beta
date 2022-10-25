from django.urls import path

from .views import (
    api_list_customers,
    api_list_salespeople,
    api_list_sales,
    api_show_salesperson,
    api_automobile,
)

urlpatterns = [
    path("customers/", api_list_customers, name="api_list_customers"),
    path("salespeople/", api_list_salespeople, name="api_list_salespeople"),
    path("salesrecords/", api_list_sales, name="api_list_sales"),
    path("salespeople/<int:pk>/", api_show_salesperson, name="api_show_salesperson"),
    path("automobiles/", api_automobile, name="api_automobile")
]
