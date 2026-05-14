from pathlib import Path
files = [
    Path('c:/Users/vuyom/Documents/coding_dev/mathaba/src/App.jsx'),
    Path('c:/Users/vuyom/Documents/coding_dev/mathaba/src/components/Navbar.jsx'),
    Path('c:/Users/vuyom/Documents/coding_dev/mathaba/src/components/Footer.jsx')
]
replacements = [
    ('border-black/10', 'border-white/10'),
    ('bg-black/5', 'bg-white/5'),
    ('bg-black/10', 'bg-white/10'),
    ('text-black/80', 'text-white/80'),
    ('hover:bg-black/5', 'hover:bg-white/5'),
    ('hover:text-black', 'hover:text-[rgb(var(--fg))]'),
    ('bg-black px-', 'bg-[rgb(var(--brand))] px-'),
    ('bg-black"', 'bg-[rgb(var(--brand))]"'),
    (' text-black"', ' text-[rgb(var(--fg))]"'),
    ('text-black ', 'text-[rgb(var(--fg))] '),
    ('bg-white px-6', 'bg-white/10 px-6'),
    ('bg-black/5 overflow-hidden', 'bg-white/5 overflow-hidden'),
    (' bg-black/5', ' bg-white/5'),
    (' border-black/10', ' border-white/10'),
    ('text-black', 'text-[rgb(var(--fg))]'),
]
for path in files:
    text = path.read_text(encoding='utf-8')
    original = text
    for old, new in replacements:
        text = text.replace(old, new)
    if text != original:
        path.write_text(text, encoding='utf-8')
print('done')
