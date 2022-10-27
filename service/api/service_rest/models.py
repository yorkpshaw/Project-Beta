from django.db import models
from django.urls import reverse


# Create your models here.
class Technician(models.Model):
    name = models.CharField(max_length=50, unique=True)
    employee_number = models.PositiveIntegerField(primary_key=True)

    def __str__(self):
        return f"{self.name}"


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    vip = models.BooleanField(default=True)
    manufacturer = models.CharField(max_length=100)
    model = models.CharField(max_length=50)
    year = models.CharField(max_length=100)
    color = models.CharField(max_length=50)

    def __str__(self):
        return self.vin


class Appointment(models.Model):
    owner = models.CharField(max_length=50)
    date = models.CharField(max_length=10, null=True)
    time = models.CharField(max_length=10, null=True)
    reason = models.CharField(max_length=100)
    vin_customer = models.CharField(max_length=17)
    status = models.BooleanField(default=False)

    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.PROTECT,
    )

    def get_api_url(self):
        return reverse("api_show_appointment", kwargs={"pk": self.id})

    class Meta:
        ordering = ("date", "technician")
