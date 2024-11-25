import { getEncodedNotes } from "./noteCreator/notesGenerator"; // Assuming this function exists

const server = Bun.serve({
    port: 3001,

    async fetch(req) {
        const { pathname } = new URL(req.url)
        const headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET",//, POST, PUT, DELETE",
            "Access-Control-Allow-Headers": "Content-Type",
        };
        if (req.method === "OPTIONS") {
            return new Response(null, {
                status: 204,
                headers,
            });
        }
        if (pathname.startsWith("/api/")) {
            const id = pathname.split("/")[2];
            if (id) {
                try {
                    const apiUrl = `https://raid-helper.dev/api/raidplan/${id}`;
                    const response = await fetch(apiUrl);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const parsedData = await response.json();
                    const encodedNotes = getEncodedNotes(parsedData);
                    //const encodedNotes = getEncodedNotes();

                    return new Response(JSON.stringify({ encodedNotes }), {
                        status: 200,
                        headers: {
                            "Content-Type": "application/json",
                            ...headers,
                        },
                    });
                } catch (error) {
                    console.error("Error fetching or processing data:", error);
                    return new Response(error.message || "Error processing request.", {
                        status: 500,
                        headers,
                    });
                }
            }
        }
        return new Response("Not Found KEK", {
            status: 404,
            headers,
        });
    },
});