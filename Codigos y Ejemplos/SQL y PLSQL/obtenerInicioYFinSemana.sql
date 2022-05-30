/*
Obtener el día de inicio y el de fin de semana, dado un periodo variable.
Por ejemplo, si ingreso '23-11-2001' (día viernes). Lo que devolvería serían los días:
19-11-2001 (Lunes) y 25-11-2001 (Domingo).
*/
CREATE OR REPLACE PROCEDURE fn_obtenerSemana(rawDate VARCHAR2, primerDia OUT DATE, ultimoDia OUT DATE) AS
    fecha DATE;
    dia VARCHAR2(12);
    fechaInicio DATE;
    fechaFinal DATE;
BEGIN
    fecha := TO_DATE(rawDate, 'DD-MM-YYYY');
    dia := REPLACE(TO_CHAR(fecha, 'day', 'NLS_DATE_LANGUAGE = Spanish'), ' ');
    fechaInicio := CASE
                        WHEN dia = 'lunes' THEN fecha
                        WHEN dia = 'martes' THEN TO_DATE(fecha - 1)
                        WHEN dia = 'miércoles' THEN TO_DATE(fecha - 2)
                        WHEN dia = 'jueves' THEN TO_DATE(fecha - 3)
                        WHEN dia = 'viernes' THEN TO_DATE(fecha - 4)
                        WHEN dia = 'sábado' THEN TO_DATE(fecha - 5)
                        WHEN dia = 'domingo' THEN TO_DATE(fecha - 6)
                   END;
    fechaFinal := TO_DATE(fechaInicio + 7);
END;
