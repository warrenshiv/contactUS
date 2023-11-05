import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {fullname, email, message } = await req.json();

    console.log("Full Name: ", fullname);
    console.log("Email : ", email);
    console.log("Message: ", message);

   try{
    await connectDB();
    await Contact.create({fullname, email, message});

    return NextResponse.json({
        msg: ["Message sent successfully"], success: true
    });
   }catch(error){
    if( error instanceof  mongoose.Error.ValidateError){
        let errorList = [];
        for (let e in error.errors){
            errorList.push(e.message);
        }

        return NextResponse.json({msg: errorList});
    }else {
        return NextResponse.json({ msg: "Unable to send message."});
    }
   }

    // return NextResponse.json({ msg: ['hi from contact route.js']});
}