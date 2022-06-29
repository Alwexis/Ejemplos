import re

class RutValidador:
    def __init__(self, rut):
        self.dv = rut[-1:]
        rutRaw = rut[:-1]
        self.rut = re.sub("([a-zA-Z]|[.|-])", "", rutRaw)
        self.valido = self.validar()

    def __str__(self):
        return f"{self.rut} {self.dv}"

    def validar(self):
        acumulador = 0
        multiplicador = 2
        for x in self.rut[::-1]:
            if (x != ".") and (x != "-"):
                acumulador += int(x) * multiplicador
                multiplicador += 1
                if multiplicador == 8:
                    multiplicador = 2
        dv = 11 - (acumulador % 11)
        if dv == 11:
            dv = 0
        if dv == 10:
            dv = 'k'
        return str(dv) == str(self.dv)

    def formato(self):
        return '' if self.valido == False else (f"{self.rut[:2]}.{self.rut[2:5]}.{self.rut[5:8]}-{self.dv}" if len(self.rut) == 8 else f"{self.rut[:1]}.{self.rut[1:4]}.{self.rut[4:7]}-{self.dv}")

rut = RutValidador(input("Ingresa tu Rut: "))
print(f"Rut: {rut}")
print(f"Valido: {rut.valido}")
print(f"Formateado: {rut.formato()}")
