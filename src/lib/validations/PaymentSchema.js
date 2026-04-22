// Payment validation schema 
// general ga validations kosam ZOD lib vaduthamuu

import {z} from "zod"

const PaymentSchema =  z.object({
    cardHolder : z.string().min(3,"Card name is required"),
    cardNumber: z.string().regex(/^\d{13,19}$/, "Card number must be 13–19 digits"),
    expireDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expire date should be in MM/YY"),
    cvv:z.string().regex(/^\d{3,4}$/, "CVV should be 3 or 4 digits"),
});

export default PaymentSchema;