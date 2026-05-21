import json

with open('public/data/games.json', 'r', encoding='utf-8') as f:
    games = json.load(f)

targets = ['Forza Horizon', 'Resident Evil Requiem', 'PRAGMATA', 'Black Myth', 'Grand Theft Auto V', 'Red Dead Redemption 2']

for t in targets:
    matches = [g for g in games if t.lower() in g['name'].lower()]
    if matches:
        for m in matches:
            cover = m.get('cover', 'NO COVER')
            if cover:
                cover_short = cover[:80]
            else:
                cover_short = 'NULL/EMPTY'
            print(f"FOUND: {m['name']} | AppID: {m['steam_appid']} | Cover: {cover_short}")
    else:
        print(f"MISSING: {t}")

print(f"\nTotal games: {len(games)}")
