# CarCar

Team:

* Theresa - service
* York - sales

## Design

Defined bounded contexts among inventory, sales, and services microservices.
Please see attached image (project beta excalidraw file right above README.md file) for further details regarding relationships between each services.

## Service microservice

The service microservice has 3 models created for the purpose of keeping track of service appointments for automobiles and their owners:
- Technician model: implemented to add a new technician and their employee number in the database, as well as serve as a foreignkey to Appointment model to determine which technician is assigned to work on an Appointment instance
- AutomobileVO model: serves as a consumer of the automobile data from the Inventory microservice; used by the Appointment model to determine if a customer has purchased their car from our dealership, hence marking their VIP status when they make an appointment
- Appointment model: implemented to obtain information for an Appointment instance

Implemented RESTful APIs to handle automobile service appointments
- When doing a POST request for the Appointment model, the view is set up so that it will try to obtain an instance of an AutomobileVO using the VIN the customer had provided when making an appointment. If that instance exists in the AutomobileVO, it's deemed that the customer purchased their car from our dealership and their VIP status is set to True. Otherwise, it will be False.
Implemented a poller in which AutomobileVO consumes the data of the Inventory microservice, more specifically its list of automobiles
Used Docker for the building and deployment of the application
Utilized React to create a front-end application with the RESTful APIs implemented in Django.
- Created components for the following: entering a new technician information, entering a new service appointment, list of scheduled appointments (as well as an option to DELETE or do a PUT request to update their status), and list of service history filtered by VIN


## Sales microservice

Explain your models and integration with the inventory
microservice, here.
