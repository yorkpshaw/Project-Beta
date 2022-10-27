from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json

from .models import Technician, Appointment, AutomobileVO

from .encoders import (
    TechnicianListEncoder,
    AutomobileVOListEncoder,
    AppointmentEncoder,
)


@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    '''
    Lists the appointments and the details of
    the appointment, including customer name, VIN, date and time
    of the appointment, the assigned technician's name, reason for
    the service, status of the appointment, and customer's vip status.

    Returns a dictionary with a single key "appointments" which
    is a list of appointments which includes customer name, VIN,
    date and time of the appointment, the assigned technician's name,
    reason for the service, status of the appointment, and customer's vip status.

    {
        "appointments": [
            {
                "owner": owner of the vehicle,
                "vin_customer": VIN number of the vehicle,
                "date": date of the appointment,
                "time": time of the appointment,
                "technician": {
                    "name": name of assigned technician,
                    "employee_number": employee number of the technician,
                }
                "reason": reason for the service appointment,
                "status": if false, appointment is still pending and if true, appointment has been finished
                "vip": if true, owner bought vehicle from carcar dealership
            }
        ]
    }

    '''
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder
        )

    else:
        content = json.loads(request.body)

        try:
            technician_name = content["technician"]
            technician = Technician.objects.get(name=technician_name)
            content["technician"] = technician
        except AutomobileVO.DoesNotExist:
            automobile_vin = content["vin"]
            automobile = AutomobileVO.objects.create(automobile_vin)
            content["vin"] = automobile

        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False
        )

@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_appointment(request, pk):
    '''
    Returns the details of the appointment model specified by the
    pk parameter.

    Returns a dictionary with a single key "appointments" which
    is a list of appointments which includes customer name, VIN,
    date and time of the appointment, the assigned technician's name,
    reason for the service, status of the appointment, and customer's vip status.
    '''
    if request.method == "GET":
        appointment = Appointment.objects.get(id=pk)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False
        )

    elif request.method == "DELETE":
        try:
            appointment = Appointment.objects.filter(id=pk)
            appointment.delete()
            return JsonResponse(
                {"deleted": "your appointment has been deleted"}
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "The appointment you're looking for does not exist"}
            )

    else:
        try:
            content = json.loads(request.body)
            appointment = Appointment.objects.get(id=pk)

            models = ["date", "reason", "status", "time"]
            for model in models:
                if model in content:
                    setattr(appointment, model, content[model])
            appointment.save()
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "The appointment you're looking for does not exist"}
            )

@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    '''
    Lists the name of the service technicians and their employee ID

    Returns a dictionary with a single key "technicians"
    which is a list of service technician names and their employee number.
    Each entry in the list is a dictionary that contains
    the name of the service technician and their employee number.

    {
        "technicians": [
            {
                "name": technician name,
                "employee_number": technician's employee number
            }
        ]
    }
    '''

    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianListEncoder,
        )
    else:
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianListEncoder,
            safe=False
        )


@require_http_methods(["GET"])
def api_list_automobileVO(request):
    '''
    Lists the vin, manufacturer, make, model, color, year,
    and vip status of an automobile.

    Returns a dictionary with a single key "automobiles"
    which is a list of automobile VINs, manufacturers, makes,
    models, colors, years, and vip status of automobiles
    from the inventory.

    {
        "automobiles": [
            {
                "vin": VIN number of the vehicle,
            }
        ]
    }
    '''

    if request.method == "GET":
        automobiles = AutomobileVO.objects.all()
        return JsonResponse(
            {"automobiles": automobiles},
            encoder=AutomobileVOListEncoder
        )
