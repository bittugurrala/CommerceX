import {z} from "zod"

const ShippingSchema =  z.object({
    name : z.string().min(3,"Name is required"),
    address: z.string().min(5, "Address is required"),
    email: z.string().email("Invalid email"),
    phone:z.string().regex(/^\d{10}$/, "Phone must be 10 digits"),
    city: z.string().min(4, "City is required")
});

export default ShippingSchema;