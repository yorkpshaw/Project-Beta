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

**The Sales microservice has 4 models: AutomobileVO, SalesPerson, Customer, and SalesRecord.**

**I designated the Automobile model in the inventory app as the value object that AutomobileVO would poll from. The sold property is set to default=False to show that the car is still in stock, and will be changed to True once a sale has been recorded. The vin and import_href hae unique=True values, as two cars cannot have the same vin number, which is also the value at the end of import_href.**

**The SalesPerson model contains two properties, salesperson_name and employee_num. Employee_num has a unique=True value as two employees cannot have the same number. That's what makes each employee unique.**

**The Customer model has three properties: customer_name, address, and phone_number. I made phone_number have the unique=True value to differentiate each customer. You can have two customers living at the same address, but their phone number is what separates them.**

**The SalesRecord model has four properties: price, automobile, salesperson, and customer. The price has a FloatField so that a number is required and can be a decimal. The customer and salesperson have a foreign key to the Customer and SalesPerson models, respectively, as a sales record can only have one customer and one salesperson, but a customer and salesperson can have multiple sales records. I had originally given the sales record a One-to-One relationship with the AutomobilesVO, but upon testing, we found that it was causing issues. Because of time constraints, I changed it to a foreign key relationship and added more functionality on the front end instead. Each sale record submission was handled in the following manner to avoid duplicates: we changed the sold status of the corresponding AutomobileVO from false to true, and then we updated the dropdown list in sales record history so that it would filter out anything with a status of sold=true.**
