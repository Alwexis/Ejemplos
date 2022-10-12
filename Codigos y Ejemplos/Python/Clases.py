# Quería saber a cuantas clases mas necesitaba ir para aprobar XD. No tomar en cuenta lo básico del algoritmo
def calcularPorcentaje(asistido, total):
    return asistido * 100 / total

asistidos = int(input('Ingresa las clases asistidas -> '))
asistidos_req = asistidos
total_req = int(input('Ingresa el total de clases -> '))
while calcularPorcentaje(asistidos_req, total_req) < 75:
    asistidos_req += 1
    total_req += 1
print(f'Para aprobar necesitas asistir a {asistidos_req} de {total_req} clases. Debes asistir a {asistidos_req - asistidos} clases más.')
