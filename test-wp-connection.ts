
const WP_URL = "https://institutoj12.sg-host.com";
const API = `${WP_URL}/wp-json/wp/v2`;

async function testConnection() {
    console.log("Testing connection to WordPress API...");
    console.log(`Base URL: ${WP_URL}`);

    try {
        // Test Posts
        console.log("\n--- Testing Posts (Noticias) ---");
        const postsRes = await fetch(`${API}/posts?per_page=1`);
        if (postsRes.ok) {
            const posts = await postsRes.json();
            console.log(`Success! Found ${posts.length} post(s).`);
            if (posts.length > 0) {
                console.log(`Latest post title: "${posts[0].title.rendered}"`);
                console.log(`Latest post date: ${posts[0].date}`);
            }
        } else {
            console.error(`Failed to fetch posts: ${postsRes.status} ${postsRes.statusText}`);
        }

        // Test Events (Custom Post Type)
        console.log("\n--- Testing Events (Eventos) ---");
        const eventsRes = await fetch(`${API}/eventos?per_page=1`);
        if (eventsRes.ok) {
            const events = await eventsRes.json();
            console.log(`Success! Found ${events.length} event(s).`);
            if (events.length > 0) {
                console.log(`Latest event title: "${events[0].title.rendered}"`);
                // Check if ACF fields are present
                if (events[0].acf) {
                    console.log("ACF fields found.");
                } else {
                    console.warn("ACF fields missing in response.");
                }
            }
        } else {
            console.error(`Failed to fetch events: ${eventsRes.status} ${eventsRes.statusText}`);
            if (eventsRes.status === 404) {
                console.error("Endpoint not found. Make sure the Custom Post Type 'eventos' is registered and 'Show in REST API' is enabled in WordPress.");
            }
        }

    } catch (error) {
        console.error("Network error or other exception:", error);
    }
}

testConnection();
