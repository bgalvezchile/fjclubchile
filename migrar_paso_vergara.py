"""
Migra las fotos de "Paso Vergara Malargue 2026" desde la carpeta local de
Google Drive hacia la carpeta public/ del sitio fjclubchile, renombrandolas
en orden cronologico (foto-001.jpg, foto-002.jpg, ...) igual que los demas
albumes existentes.

USO:
    1. Ajusta las rutas ORIGEN y DESTINO abajo si es necesario.
    2. Corre:  python migrar_paso_vergara.py
    3. Revisa la carpeta DESTINO y luego haz commit/push del repo.
"""

import os
import shutil
from pathlib import Path

# --- Ajusta estas dos rutas si no calzan con tu entorno ---
ORIGEN = Path(r"G:\Mi unidad\CLUB FJ CHILE\Paso Vergara Malargue 2026")
DESTINO = Path(r"public/galeria/paso-vergara-malargue-2026")
# ------------------------------------------------------------

EXTENSIONES_VALIDAS = {".jpg", ".jpeg", ".png"}


def main():
    if not ORIGEN.exists():
        print(f"ERROR: no encuentro la carpeta origen: {ORIGEN}")
        print("Ajusta la variable ORIGEN en este script y vuelve a correrlo.")
        return

    DESTINO.mkdir(parents=True, exist_ok=True)

    archivos = [
        f for f in ORIGEN.iterdir()
        if f.is_file() and f.suffix.lower() in EXTENSIONES_VALIDAS
    ]

    if not archivos:
        print(f"No encontre fotos en {ORIGEN}")
        return

    # Orden cronologico real (fecha de modificacion del archivo),
    # que es mas confiable que el nombre para reconstruir el orden de la salida.
    archivos.sort(key=lambda f: f.stat().st_mtime)

    print(f"Encontre {len(archivos)} fotos. Copiando y renombrando...")

    for i, origen_path in enumerate(archivos, start=1):
        nuevo_nombre = f"foto-{i:03d}{origen_path.suffix.lower()}"
        destino_path = DESTINO / nuevo_nombre
        shutil.copy2(origen_path, destino_path)
        print(f"  {origen_path.name}  ->  {nuevo_nombre}")

    print(f"\nListo. {len(archivos)} fotos copiadas a: {DESTINO.resolve()}")
    print("Siguiente paso: agrega/actualiza el album en src/data/albumes.ts")
    print("(te dejo ese archivo ya actualizado por separado).")


if __name__ == "__main__":
    main()
