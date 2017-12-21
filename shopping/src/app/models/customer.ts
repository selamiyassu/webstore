export class Customer{ 
    fName: String;
    email:  String;
    phone: String;
    username:  String;
    password:String;

                     adress:[{
                           shippingaddress: String,
                            billingaddress: String
                             }
                        ];
                        payment:[
                            {
                                cardnumber:String,
                                securitycode:String,
                                exprirationdate:String
                            }
                        ];
                        cart:[
                            {
                            product
                            }
                        ]
                        }