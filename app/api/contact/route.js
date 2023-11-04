import { NextResponse } from "next/server";

export async function POST(req) {
    const {fullname, email, message } = await req.json();

    console.log("Full Name: ", fullname);
    console.log("Email : ", email);
    console.log("Message: ", message);

   

    return NextResponse.json({ msg: ['hi from contact route.js']});
}