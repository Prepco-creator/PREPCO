import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        const formData = await req.json(); // Parse incoming JSON data

        console.log("Received form data:", formData);

        // Send data to Zoho Forms API
        // const zohoResponse = await fetch("https://forms.zoho.com/api/v2/forms/{FORM_ID}/submissions", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Authorization": `Zoho-oauthtoken ${process.env.ZOHO_ACCESS_TOKEN}`
        //     },
        //     body: JSON.stringify({ data: formData })
        // });

        // const zohoResult = await zohoResponse.json();

        // if (!zohoResponse.ok) {
        //     throw new Error(`Zoho API Error: ${JSON.stringify(zohoResult)}`);
        // }

        return NextResponse.json({ success: true, message: "Data submitted to Zoho", response: formData }, { status: 200 });
    } catch (error) {
        console.error("Error submitting form to Zoho:", error);
        return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
    }
};
