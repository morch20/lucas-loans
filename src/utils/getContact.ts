export default async function getContact(email: string, token: string) {
    try {
        const response = await fetch(
            process.env.API_URL +
                "contacts/" +
                `?query=${email}&locationId=${process.env.LOCATION_ID}`,
            {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                    Version: "2021-07-28",
                },
                cache: "no-store",
            }
        );

        const data = await response.json();
        return data as {
            contacts: any[];
        };
    } catch (error) {
        console.log("Error on getContact: ", error);
        return null;
    }
}
