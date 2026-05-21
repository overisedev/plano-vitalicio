import urllib.request
import re
import json

appids = {
    'Forza Horizon 6': 2483190,
    'RE Requiem': 3764200,
    'PRAGMATA': 3357650,
}

# Try fetching store page HTML directly and extracting image URLs
for name, appid in appids.items():
    print(f"\n--- {name} (AppID: {appid}) ---")
    
    # Try the store page
    url = f"https://store.steampowered.com/app/{appid}/"
    try:
        req = urllib.request.Request(url)
        req.add_header('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)')
        req.add_header('Cookie', 'birthtime=0; wants_mature_content=1; lastagecheckage=1-0-1990')
        resp = urllib.request.urlopen(req, timeout=10)
        html = resp.read().decode('utf-8', errors='replace')
        
        # Find og:image
        og = re.findall(r'og:image["\s]+content="([^"]+)"', html)
        if og:
            print(f"  OG Image: {og[0]}")
        
        # Find any image with the appid
        imgs = re.findall(rf'(https?://[^"\']+{appid}[^"\']*\.(?:jpg|png))', html)
        seen = set()
        for img in imgs[:5]:
            if img not in seen:
                seen.add(img)
                print(f"  Found: {img}")
    except Exception as e:
        print(f"  ERROR: {e}")
    
    # Also try SteamDB CDN pattern
    alt_patterns = [
        f"https://cdn.cloudflare.steamstatic.com/steam/apps/{appid}/header.jpg",
        f"https://cdn.cloudflare.steamstatic.com/steam/apps/{appid}/library_600x900.jpg",
        f"https://cdn.cloudflare.steamstatic.com/steam/apps/{appid}/capsule_616x353.jpg",
        f"https://cdn.cloudflare.steamstatic.com/steam/apps/{appid}/library_600x900_2x.jpg",
    ]
    for alt_url in alt_patterns:
        try:
            req = urllib.request.Request(alt_url, method='HEAD')
            req.add_header('User-Agent', 'Mozilla/5.0')
            resp = urllib.request.urlopen(req, timeout=5)
            print(f"  ALT OK {resp.status}: {alt_url}")
        except:
            pass
