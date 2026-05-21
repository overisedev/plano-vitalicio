import urllib.request
import json

urls = {
    "Forza Horizon 6 (library)": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2483190/library_600x900.jpg",
    "Forza Horizon 6 (header)": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2483190/header.jpg",
    "RE Requiem (library)": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3764200/library_600x900.jpg",
    "RE Requiem (header)": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3764200/header.jpg",
    "PRAGMATA (library)": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3357650/library_600x900.jpg",
    "PRAGMATA (header)": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3357650/header.jpg",
    "Black Myth (library)": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/library_600x900.jpg",
    "Black Myth (header)": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg",
}

for name, url in urls.items():
    try:
        req = urllib.request.Request(url, method='HEAD')
        req.add_header('User-Agent', 'Mozilla/5.0')
        resp = urllib.request.urlopen(req, timeout=5)
        print(f"OK {resp.status} | {name}")
    except Exception as e:
        print(f"FAIL    | {name} - {e}")
