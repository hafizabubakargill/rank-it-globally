# Add Portfolio Websites

Add any number of projects in one batch without editing the landing page.

1. Put the screenshots and a `portfolio-batch.json` file in the same folder.
2. Use this shape for each project:

```json
[
  {
    "name": "Example Company",
    "url": "https://example.com/",
    "category": "E-Commerce",
    "country": "US",
    "platform": "Shopify",
    "location": "United States",
    "result": "Conversion-focused storefront",
    "screenshot": "example-company.png"
  }
]
```

3. Validate the batch without changing anything:

```bash
npm run portfolio:import -- --input /absolute/path/portfolio-batch.json --dry-run
```

4. Import and optimize the screenshots:

```bash
npm run portfolio:import -- --input /absolute/path/portfolio-batch.json
```

The importer validates duplicates, resizes screenshots to 900 pixels wide,
converts them to WebP, saves them in the public screenshot directory, and
appends the projects to the portfolio manifest.
