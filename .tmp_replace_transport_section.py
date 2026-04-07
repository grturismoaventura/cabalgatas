from pathlib import Path
import re

roots = [
    Path('/Users/martinayaquinta/Downloads/project/cabalgatas-clean/public/pdfs'),
    Path('/Users/martinayaquinta/Downloads/project/cabalgatas-clean/Downloads/project/GR Turismo Aventura/cabalgatas PARA EDITAR/public/pdfs'),
]

new_block = '''    <div class="content-section">
        <h3>¿CÓMO LLEGAR A LAS INSTALACIONES?</h3>
        <p>Los pasajeros pueden llegar en sus propios vehiculos. Al momento de realizar la cabalgata el vehiculo queda seguro en el predio del Club Andino Pehuenche.</p>

        <h4>¿Querés viajar en Colectivo o Avión?</h4>
        <p>Podes hacerlo! Te sugerimos viajar un dia antes a Mendoza, dormir y al dia siguiente tomar el transfer de la empresa hacia la zona de Los Molles. Cupos limitados, consultar disponibilidad, horario y valores. Consultar por transfer desde San Rafael (cupos limitados).</p>

        <h4>¿Como vuelvo?</h4>
        <p>Finalizamos el programa con un buen desayuno, luego, a partir de las 10 horas una combi estara disponible para bajar a San Rafael (cupos limitados). El valor de la misma se abonara en el lugar.</p>
        <p>Valor a consultar.</p>
    </div>'''

head_re = re.compile(r'(C[ÓO]MO\s+LLEGAR|HOW\s+TO\s+GET\s+TO\s+THE\s+(FACILITIES|ESTABLISHMENT)|COMO\s+CHEGAR\s+(AO\s+ESTABELECIMENTO|[AÀ]S\s+INSTALA))', re.IGNORECASE)

def match_div_end(text: str, start: int) -> int:
    tag_re = re.compile(r'</?div\b[^>]*>', re.IGNORECASE)
    depth = 0
    for m in tag_re.finditer(text, start):
        t = m.group(0).lower()
        if t.startswith('</div'):
            depth -= 1
            if depth == 0:
                return m.end()
        else:
            depth += 1
    return -1

updated = []
missed = []

for root in roots:
    for fp in sorted(root.rglob('*.html')):
        text = fp.read_text(encoding='utf-8')
        if 'Valor a consultar.' in text:
            continue

        match = head_re.search(text)
        if not match:
            missed.append(f'{fp} :: no heading')
            continue

        idx = match.start()
        start = text.rfind('<div class="content-section">', 0, idx)
        if start == -1:
            missed.append(f'{fp} :: no section start')
            continue

        end = match_div_end(text, start)
        if end == -1:
            missed.append(f'{fp} :: no section end')
            continue

        new_text = text[:start] + new_block + text[end:]
        if new_text != text:
            fp.write_text(new_text, encoding='utf-8')
            updated.append(str(fp))

print(f'UPDATED {len(updated)}')
for path in updated:
    print(path)
print(f'MISSED {len(missed)}')
for path in missed:
    print(path)
