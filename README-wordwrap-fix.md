# FIN 325 Word-Wrap Visual Fix

This patch replaces `docs/assets/css/experience-design.css` with a version that prevents narrow forced word-breaking in the Analyst Journey and Artifact Stack cards.

## What changed

- Replaced fixed seven-column pathway with `auto-fit` and wider `minmax(150px, 1fr)` cards.
- Removed forced word-breaking and hyphenation from pathway and card text.
- Increased artifact card minimum width to prevent headings like “Recommendations” from breaking awkwardly.
- Kept responsive behavior for tablets and phones.

## Upload

Replace:

```text
docs/assets/css/experience-design.css
```
