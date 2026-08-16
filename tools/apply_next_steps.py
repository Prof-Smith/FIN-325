from pathlib import Path

START = "<!-- FIN325_NEXT_STEPS_START -->"
END = "<!-- FIN325_NEXT_STEPS_END -->"

ROOT = Path.cwd()

# Each entry: file path -> panel body
PANELS = {}

def panel(title, trail, steps, links=None):
    links = links or []
    step_lines = "\n".join([f"  <li>{s}</li>" for s in steps])
    link_html = ""
    if links:
        badges = "\n".join([f'  <a class="fin-badge-inline {kind}" href="{href}">{label}</a>' for label, href, kind in links])
        link_html = f"\n<p><strong>Quick links:</strong></p>\n<div>\n{badges}\n</div>\n"
    return f"""{START}

---

<div class="fin-next-steps">
<h2>{title}</h2>
<p><strong>You are here:</strong> {trail}</p>
<p><strong>Before you leave this page:</strong></p>
<ol>
{step_lines}
</ol>{link_html}
</div>

{END}
"""

# Module panels
for i in range(1, 9):
    folder = f"module-{i:02d}"
    lab = f"lab-{i:02d}"
    next_mod = f"module-{i+1:02d}" if i < 8 else None
    memo_map = {1:'memo-01.md',2:'memo-01.md',3:'memo-02.md',4:'memo-02.md',5:'memo-03.md',6:'memo-03.md',7:'memo-03.md',8:'memo-04.md'}
    memo_label = {1:'Memo 1',2:'Memo 1',3:'Memo 2',4:'Memo 2',5:'Memo 3',6:'Memo 3',7:'Memo 3',8:'Memo 4'}[i]
    steps = [
        f"Review the essential question and learning outcomes for Module {i}.",
        f"Open the related finance lab and identify the evidence this module helps produce.",
        "Update the relevant section of the capstone workbook as you complete the lab work.",
        f"Save the strongest evidence for {memo_label} and the final capstone recommendation."
    ]
    if next_mod:
        steps.append(f"Preview Module {i+1} so the next finance decision builds from this one.")
    else:
        steps.append("Move from the module sequence into the final capstone synthesis.")
    links = [(f"Open Lab {i}", f"../../labs/{lab}/", "lab"), (f"Open {memo_label}", f"../../memos/{memo_map[i]}", "memo"), ("Capstone", "../../capstone/", "capstone")]
    if next_mod:
        links.append((f"Next Module {i+1}", f"../{next_mod}/", ""))
    PANELS[f"docs/modules/{folder}/index.md"] = panel("Next Steps", f"Module {i} -> Lab {i} -> {memo_label} -> Capstone", steps, links)

# Labs overview
PANELS["docs/labs/index.md"] = panel(
    "Next Steps",
    "Finance Labs -> Investment Memos -> Capstone Workbook",
    [
        "Select the lab that matches the current module.",
        "Use the interactive tools and worked example before completing the Excel work.",
        "Record key outputs in the capstone workbook.",
        "Use the relevant memo page to convert the evidence into a recommendation."
    ],
    [("Memo Series", "../memos/", "memo"), ("Workbook Template", "../capstone/workbook-template/", "capstone"), ("Capstone", "../capstone/", "capstone")]
)

# Lab pages and examples
example_files = {
    1:'example-microsoft.md',2:'example-tvm.md',3:'example-bond.md',4:'example-equity.md',
    5:'example-risk-return.md',6:'example-wacc.md',7:'example-capital-budgeting.md',8:'example-strategic-finance.md'
}
lab_memo = {1:('Memo 1','memo-01.md'),2:('Memo 2','memo-02.md'),3:('Memo 2','memo-02.md'),4:('Memo 2','memo-02.md'),5:('Memo 3','memo-03.md'),6:('Memo 3','memo-03.md'),7:('Memo 3','memo-03.md'),8:('Memo 4','memo-04.md')}
for i in range(1,9):
    folder=f"lab-{i:02d}"
    memo_label,memo_file=lab_memo[i]
    steps=[
        "Review the lab decision question before using the tool or workbook.",
        "Complete the model carefully and check that assumptions are documented.",
        "Use the worked example to compare structure, not to copy conclusions.",
        "Transfer the most important output into the capstone workbook.",
        f"Use the result as evidence for {memo_label} or the final capstone report."
    ]
    links=[("Worked Example", f"{example_files[i]}", "lab"), (memo_label, f"../../memos/{memo_file}", "memo"), ("Workbook Template", "../../capstone/workbook-template/", "capstone")]
    PANELS[f"docs/labs/{folder}/index.md"] = panel("Next Steps", f"Lab {i} -> Workbook Evidence -> {memo_label} -> Capstone", steps, links)
    ex_steps=[
        "Identify the structure of the example model or analysis.",
        "Notice how the evidence is interpreted, not just calculated.",
        "Return to the lab overview and complete your own company-specific version.",
        "Use the example as a quality benchmark for your workbook and memo."
    ]
    ex_links=[("Back to Lab", "index.md", "lab"), (memo_label, f"../../memos/{memo_file}", "memo"), ("Model Audit Checklist", "../../resources/model-audit-checklist/", "")]
    PANELS[f"docs/labs/{folder}/{example_files[i]}"] = panel("Next Steps", f"Worked Example -> Lab {i} -> {memo_label}", ex_steps, ex_links)

# Memo pages
PANELS["docs/memos/index.md"] = panel(
    "Next Steps",
    "Labs -> Investment Memos -> Capstone Report",
    [
        "Review the four-memo sequence and identify which memo matches the current lab evidence.",
        "Use the memo template pack before drafting.",
        "Save each completed memo because it becomes a capstone building block.",
        "Use the weak-vs-strong examples to improve interpretation and recommendation quality."
    ],
    [("Memo Template Pack", "memo-template-pack.md", "memo"), ("Weak vs. Strong Examples", "../resources/strong-vs-weak-examples/", ""), ("Capstone Report Template", "../capstone/report-template/", "capstone")]
)
PANELS["docs/memos/memo-template-pack.md"] = panel(
    "Next Steps",
    "Template Pack -> Memo Draft -> Capstone Evidence",
    [
        "Choose the template that matches the assigned memo.",
        "Replace bracketed language with company-specific evidence.",
        "Keep the memo decision-focused and concise.",
        "Use the completed memo to draft the matching capstone section."
    ],
    [("Memo Series", "index.md", "memo"), ("Capstone Report Template", "../capstone/report-template/", "capstone")]
)
memo_steps = {
    1:("Memo 1", "Financial Health", "Financial Health tab", "memo-02.md"),
    2:("Memo 2", "Valuation", "Valuation tab", "memo-03.md"),
    3:("Memo 3", "Risk, WACC, and Capital Allocation", "Risk and Return, WACC, and Capital Allocation tabs", "memo-04.md"),
    4:("Memo 4", "Strategic Finance", "Strategic Finance tab", "../capstone/report-template.md"),
}
for i,(memo_label,focus,tab,next_file) in memo_steps.items():
    steps=[
        f"Confirm that the memo answers the {focus} decision question.",
        f"Use evidence from the {tab} of the capstone workbook.",
        "Include one meaningful limitation or assumption risk.",
        "Save the final paragraph because it can become part of the capstone report."
    ]
    if i < 4:
        steps.append(f"Preview {memo_steps[i+1][0]} so the next memo builds from this one.")
        links=[("Memo Template Pack", "memo-template-pack.md", "memo"), (f"Next {memo_steps[i+1][0]}", next_file, "memo"), ("Capstone Workbook", "../capstone/workbook-template/", "capstone")]
    else:
        steps.append("Move into the capstone report template and synthesize all four memos.")
        links=[("Memo Template Pack", "memo-template-pack.md", "memo"), ("Capstone Report Template", "../capstone/report-template/", "capstone"), ("Portfolio Standard", "../capstone/portfolio-standard/", "capstone")]
    PANELS[f"docs/memos/memo-{i:02d}.md"] = panel("Next Steps", f"{memo_label} -> Capstone {focus} Section", steps, links)

# Capstone pages
capstone_panels = {
"docs/capstone/index.md": panel("Next Steps", "Capstone Overview -> Workbook -> Report -> Portfolio Standard", ["Review the recommendation categories before writing.", "Open the workbook template and complete the Dashboard tab last.", "Use the report template to organize the final written recommendation.", "Check the portfolio standard before final submission."], [("Workbook Template","workbook-template.md","capstone"),("Report Template","report-template.md","capstone"),("Portfolio Standard","portfolio-standard.md","capstone")]),
"docs/capstone/deliverables.md": panel("Next Steps", "Deliverables -> Workbook -> Report -> Submission", ["Confirm each required deliverable is complete.", "Use the workbook Dashboard as the evidence map for the final report.", "Review the rubric before submitting.", "Use the model audit checklist to verify workbook quality."], [("Workbook Template","workbook-template.md","capstone"),("Rubric","rubric.md","capstone"),("Model Audit Checklist","../resources/model-audit-checklist/","")]),
"docs/capstone/rubric.md": panel("Next Steps", "Rubric -> Self-Assessment -> Revision", ["Read the excellent-work criteria before final editing.", "Compare your report against each rubric category.", "Revise weak sections before submitting.", "Use the portfolio standard for final polish."], [("Portfolio Standard","portfolio-standard.md","capstone"),("Report Template","report-template.md","capstone")]),
"docs/capstone/analyst-playbook.md": panel("Next Steps", "Analyst Playbook -> Dashboard -> Final Recommendation", ["Complete the one-sentence recommendation test.", "Use the decision driver matrix to prioritize evidence.", "Update the Dashboard tab in the workbook.", "Draft the executive recommendation last."], [("Workbook Template","workbook-template.md","capstone"),("Report Template","report-template.md","capstone")]),
"docs/capstone/workbook-template.md": panel("Next Steps", "Workbook Template -> Dashboard -> Report", ["Download the workbook and save a copy with your company name in the file name.", "Complete Company Inputs and Sources before interpreting outputs.", "Complete the Dashboard tab after the analysis tabs are updated.", "Use the Dashboard to draft the report's executive recommendation."], [("Report Template","report-template.md","capstone"),("Model Audit Checklist","../resources/model-audit-checklist/","")]),
"docs/capstone/report-template.md": panel("Next Steps", "Report Template -> Final Draft -> Portfolio Standard", ["Draft the body sections before the executive recommendation.", "Pull only the strongest evidence from the workbook and memos.", "Add risks and limitations before forming the final recommendation.", "Use the portfolio standard for final polish."], [("Workbook Template","workbook-template.md","capstone"),("Portfolio Standard","portfolio-standard.md","capstone")]),
"docs/capstone/portfolio-standard.md": panel("Next Steps", "Portfolio Standard -> Final Submission -> Professional Artifact", ["Remove course-only language if preparing a portfolio version.", "Check that all sources are documented.", "Confirm the final recommendation matches the evidence.", "Save the report and workbook as professional artifacts."], [("Report Template","report-template.md","capstone"),("Workbook Template","workbook-template.md","capstone")])
}
PANELS.update(capstone_panels)

def upsert(text, block):
    if START in text and END in text:
        before = text.split(START)[0].rstrip()
        after = text.split(END,1)[1].lstrip()
        return before + "\n\n" + block.rstrip() + "\n\n" + after
    return text.rstrip() + "\n\n" + block

updated=[]; skipped=[]
for rel, block in PANELS.items():
    path=ROOT/rel
    if not path.exists():
        skipped.append(rel)
        continue
    old=path.read_text(encoding='utf-8')
    new=upsert(old, block)
    if new != old:
        path.write_text(new, encoding='utf-8')
        updated.append(rel)

report = ROOT/'next_steps_patch_report.md'
report.write_text("# FIN 325 Next Steps Patch Report\n\n" +
                  f"Updated files: {len(updated)}\n\n" +
                  "## Updated\n" + "\n".join(f"- {x}" for x in updated) +
                  "\n\n## Skipped Missing Files\n" + "\n".join(f"- {x}" for x in skipped) + "\n", encoding='utf-8')
print(f"Updated {len(updated)} files. Skipped {len(skipped)} missing files.")
print("See next_steps_patch_report.md")
