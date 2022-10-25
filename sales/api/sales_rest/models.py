from django.db import models


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False, null=True)
    import_href = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return self.vin

class SalesPerson(models.Model):
    salesperson_name = models.CharField(max_length=100)
    employee_num = models.PositiveSmallIntegerField(unique=True)

    def __str__(self):
        return self.sales_person

class Customer(models.Model):
    customer_name = models.CharField(max_length=100)
    address = models.CharField(max_length=125)
    phone_number = models.PositiveBigIntegerField(unique=True)

    def __str__(self):
        return self.customer_name

class SalesRecord(models.Model):
    price = models.FloatField()
    automobile = models.OneToOneField(
        AutomobileVO,
        related_name="salesrecords",
        on_delete = models.PROTECT
    )

    salesperson = models.ForeignKey(
        SalesPerson,
        related_name="salesrecords",
        on_delete=models.PROTECT,
    )

    customer = models.ForeignKey(
        Customer,
        related_name="salesrecords",
        on_delete=models.PROTECT,
    )
