# FIN 325 Redesign Package

This patch adds an experience-design layer to the FIN 325 site.

## Files included

```text
mkdocs.yml
docs/index.md
docs/roadmap/index.md
docs/start-here/how-to-use-this-site.md
docs/resources/course-architecture.md
docs/assets/css/experience-design.css
```

## Purpose

This package makes the site feel more like an applied finance analyst platform by adding:

- A dashboard-style homepage
- A visual analyst journey
- Artifact stack language: labs -> memos -> capstone
- A redesigned roadmap
- A student workflow page
- A course architecture resource page
- A visual CSS layer for cards, badges, pathways, and next-step panels

## Important

The included `mkdocs.yml` assumes all previously built module, lab, memo, capstone, and resource pages exist in the repo.

If you do not want to replace `mkdocs.yml`, manually add:

```yaml
extra_css:
  - assets/css/experience-design.css
```

and add the new pages to navigation.
