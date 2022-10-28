# CarCar

Team:

* Theresa - service
* York - sales

## Design


## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.

**The Sales microservice has 4 models: AutomobileVO, SalesPerson, Customer, and SalesRecord.**

**I designated the Automobile model in the inventory app as the value object that AutomobileVO would poll from. The sold property is set to default=False to show that the car is still in stock, and will be changed to True once a sale has been recorded. The vin and import_href hae unique=True values, as two cars cannot have the same vin number, which is also the value at the end of import_href.**

**The SalesPerson model contains two properties, salesperson_name and employee_num. Employee_num has a unique=True value as two employees cannot have the same number. That's what makes each employee unique.**

**The Customer model has three properties: customer_name, address, and phone_number. I made phone_number have the unique=True value to differentiate each customer. You can have two customers living at the same address, but their phone number is what separates them.**

**The SalesRecord model has four properties: price, automobile, salesperson, and customer. The price has a FloatField so that a number is required and can be a decimal. The customer and salesperson have a foreign key to the Customer and SalesPerson models, respectively, as a sales record can only have one customer and one salesperson, but a customer and salesperson can have multiple sales records. I had originally given the sales record a One-to-One relationship with the AutomobilesVO, but upon testing, we found that it was causing issues. Because of time constraints, I changed it to a foreign key relationship and added more functionality on the front end instead. Each sale record submission was handled in the following manner to avoid duplicates: we changed the sold status of the corresponding AutomobileVO from false to true, and then we updated the dropdown list in sales record history so that it would filter out anything with a status of sold=true.**
