from common.json import ModelEncoder
from .models import Technician, Appointment, AutomobileVO


class TechnicianListEncoder(ModelEncoder):
    model = Technician
    properties = ["name", "employee_number"]


class AutomobileVOListEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "manufacturer", "model", "year", "color", "vip"]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = ["id", "owner", "vin_customer", "date", "technician", "reason"]
    encoders = {
        "technician": TechnicianListEncoder(),
    }

    def get_extra_data(self, o):
        try:
            AutomobileVO.objects.get(vin=o.vin_customer)
            return {"vip": True}
        except:
            return {"vip": False}
