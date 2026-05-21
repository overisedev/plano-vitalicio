import json

with open('public/data/games.json', 'r', encoding='utf-8') as f:
    games = json.load(f)

# Correct cover URLs (from Steam store pages)
cover_fixes = {
    2483190: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2483190/e8e49b907c171a8036e9430eadf13306a085533d/capsule_616x353.jpg",
    3764200: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3764200/0731e32e73a1311c20a71199f4e4fd78ee9e9411/capsule_616x353.jpg",
    3357650: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3357650/341da3fa5338fad44ae87b2d14edfe6be80ff4c3/capsule_616x353.jpg",
}

fixed = 0
for game in games:
    appid = game.get('steam_appid')
    if appid in cover_fixes:
        old = game.get('cover', 'NONE')
        game['cover'] = cover_fixes[appid]
        print(f"FIXED: {game['name']} | OLD: {old[:60]}... | NEW: {game['cover'][:60]}...")
        fixed += 1

with open('public/data/games.json', 'w', encoding='utf-8') as f:
    json.dump(games, f, ensure_ascii=False, indent=2)

print(f"\nFixed {fixed} covers. Total games: {len(games)}")
