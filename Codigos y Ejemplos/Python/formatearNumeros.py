def formatNumero(numeroRaw):
    numero = ""
    for x in range(len(str(numeroRaw))):
        numero += (str(numeroRaw)[::-1])[x]
        if (x + 1) % 3 == 0:
            numero += "."
    if numero.endswith("."):
        numero = numero[0:-1]
    return numero[::-1]
