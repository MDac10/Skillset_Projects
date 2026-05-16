from gnews import GNews

google_news = GNews()

search_term = 'artificial intelligence'

# google_news.start_date = (2026, 5, 1) # May 1, 2026
# google_news.end_date = (2026, 5, 2)   # May 2, 2026
results_json = google_news.get_top_news()

print(f"Found {len(results_json)} articles from Google News...\n")
for item in results_json:
    print(f"- {item['title']}")