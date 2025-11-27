# Problema inicial

![Imagen criptográfica](./assets/Criptografía.png)

## En markdown

1. Se toma una tabla a partir de ejecutar un OCR.

    | C1    | C2    | C3    | C4    | C5    |
    | ----- | ----- | ----- | ----- | ----- |
    | WIST\ | FOZC\ | AT_]U | A]FGT | XA_NT |
    | WSSOL | O\ZE\ | AX_IS | ATE\T | UN_N\ |
    | DBHUB | SSIFO | IAVHQ | ]SRPA | BLU_T |
    | BBIEB | SN\EO | ILV\C | ]ORNO | CLI_M |
    | BCVDZ | BHIUD | XU]QC | EJWYS | U_RRG |
    | ICENZ | BTOU\ | XSOQL | EO\ES | XIRRS |
    | YYGYB | _MJSD | UNHBJ | MMHWQ | FHKXG |
    | YTGE\ | _UJN\ | MNABL | M\HLQ | FAK\G |
    | MNFTM | JUP]J | JP[UB | ZLU^Y | QHAME |
    | MIFGM | JNPOJ | JR[AB | ZNUCY | QIAMA |

2. Se identifica la correspondencia entre filas por pares.

    | C1    | C2    | C3    | C4    | C5    |
    | ----- | ----- | ----- | ----- | ----- |
    | WIST\ | FOZC\ | AT_]U | A]FGT | XA_NT |
    | WSSOL | O\ZE\ | AX_IS | ATE\T | UN_N\ |
    | ----- | ----- | ----- | ----- | ----- |
    | DBHUB | SSIFO | IAVHQ | ]SRPA | BLU_T |
    | BBIEB | SN\EO | ILV\C | ]ORNO | CLI_M |
    | ----- | ----- | ----- | ----- | ----- |
    | BCVDZ | BHIUD | XU]QC | EJWYS | U_RRG |
    | ICENZ | BTOU\ | XSOQL | EO\ES | XIRRS |
    | ----- | ----- | ----- | ----- | ----- |
    | YYGYB | _MJSD | UNHBJ | MMHWQ | FHKXG |
    | YTGE\ | _UJN\ | MNABL | M\HLQ | FAK\G |
    | ----- | ----- | ----- | ----- | ----- |
    | MNFTM | JUP]J | JP[UB | ZLU^Y | QHAME |
    | MIFGM | JNPOJ | JR[AB | ZNUCY | QIAMA |

3. Se retira todos los caracteres no textuales reemplazandolos por guion al piso.

    | C1    | C2    | C3    | C4    | C5    |
    | ----- | ----- | ----- | ----- | ----- |
    | WIST_ | FOZC_ | AT__U | A_FGT | XA_NT |
    | WSSOL | O_ZE_ | AX_IS | ATE_T | UN_N_ |
    | ----- | ----- | ----- | ----- | ----- |
    | DBHUB | SSIFO | IAVHQ | _SRPA | BLU_T |
    | BBIEB | SN_EO | ILV_C | _ORNO | CLI_M |
    | ----- | ----- | ----- | ----- | ----- |
    | BCVDZ | BHIUD | XU_QC | EJWYS | U_RRG |
    | ICENZ | BTOU_ | XSOQL | EO_ES | XIRRS |
    | ----- | ----- | ----- | ----- | ----- |
    | YYGYB | _MJSD | UNHBJ | MMHWQ | FHKXG |
    | YTGE_ | _UJN_ | MNABL | M_HLQ | FAK_G |
    | ----- | ----- | ----- | ----- | ----- |
    | MNFTM | JUP_J | JP_UB | ZLU_Y | QHAME |
    | MIFGM | JNPOJ | JR_AB | ZNUCY | QIAMA |

4. Se consolida los guión bajo para que se iguale tanto la fila superior como la fila inferior en cada celda.

    | C1    | C2    | C3    | C4    | C5    |
    | ----- | ----- | ----- | ----- | ----- |
    | WIST_ | F_ZC_ | AT__U | A_F_T | XA_N_ |
    | WSSO_ | O_ZE_ | AX__S | A_E_T | UN_N_ |
    | ----- | ----- | ----- | ----- | ----- |
    | DBHUB | SS_FO | IAV_Q | _SRPA | BLU_T |
    | BBIEB | SN_EO | ILV_C | _ORNO | CLI_M |
    | ----- | ----- | ----- | ----- | ----- |
    | BCVDZ | BHIU_ | XU_QC | EJ_YS | U_RRG |
    | ICENZ | BTOU_ | XS_QL | EO_ES | X_RRS |
    | ----- | ----- | ----- | ----- | ----- |
    | YYGY_ | _MJS_ | UNHBJ | M_HWQ | FHK_G |
    | YTGE_ | _UJN_ | MNABL | M_HLQ | FAK_G |
    | ----- | ----- | ----- | ----- | ----- |
    | MNFTM | JUP_J | JP_UB | ZLU_Y | QHAME |
    | MIFGM | JNP_J | JR_AB | ZNU_Y | QIAMA |

5. Se recorre cada caracter de la fila superior en cada celda y si el caracter no es igual en posición y en caracter con la fila inferior, se reemplaza por un guion al piso.

    | C1    | C2    | C3    | C4    | C5    |
    | ----- | ----- | ----- | ----- | ----- |
    | W_S__ | __Z__ | A____ | A___T | ___N_ |
    | WSSO_ | O_ZE_ | AX__S | A_E_T | UN_N_ |
    | ----- | ----- | ----- | ----- | ----- |
    | _B__B | S___O | I_V__ | __R__ | _L___ |
    | BBIEB | SN_EO | ILV_C | _ORNO | CLI_M |
    | ----- | ----- | ----- | ----- | ----- |
    | _C__Z | B__U_ | X__Q_ | E___S | __RR_ |
    | ICENZ | BTOU_ | XS_QL | EO_ES | X_RRS |
    | ----- | ----- | ----- | ----- | ----- |
    | Y_G__ | __J__ | _N_B_ | M_H_Q | F_K_G |
    | YTGE_ | _UJN_ | MNABL | M_HLQ | FAK_G |
    | ----- | ----- | ----- | ----- | ----- |
    | M_F_M | J_P_J | J___B | Z_U_Y | Q_AM_ |
    | MIFGM | JNP_J | JR_AB | ZNU_Y | QIAMA |

6. Vuelvo a consolidar guiones.

    | C1    | C2    | C3    | C4    | C5    |
    | ----- | ----- | ----- | ----- | ----- |
    | W_S__ | __Z__ | A____ | A___T | ___N_ |
    | W_S__ | __Z__ | A____ | A___T | ___N_ |
    | ----- | ----- | ----- | ----- | ----- |
    | _B__B | S___O | I_V__ | __R__ | _L___ |
    | _B__B | S___O | I_V__ | __R__ | _L___ |
    | ----- | ----- | ----- | ----- | ----- |
    | _C__Z | B__U_ | X__Q_ | E___S | __RR_ |
    | _C__Z | B__U_ | X__Q_ | E___S | __RR_ |
    | ----- | ----- | ----- | ----- | ----- |
    | Y_G__ | __J__ | _N_B_ | M_H_Q | F_K_G |
    | Y_G__ | __J__ | _N_B_ | M_H_Q | F_K_G |
    | ----- | ----- | ----- | ----- | ----- |
    | M_F_M | J_P_J | J___B | Z_U_Y | Q_AM_ |
    | M_F_M | J_P_J | J___B | Z_U_Y | Q_AM_ |

7. Dado que no tiene significado al juntar la letras restantes, Regreso al punto 3 y ahora elimino los caracteres repetidos.

    | C1    | C2    | C3    | C4    | C5    |
    | ----- | ----- | ----- | ----- | ----- |
    | _I_T_ | FO_C_ | _T__U | __FG_ | XA__T |
    | _S_OL | O__E_ | _X_IS | _TE__ | UN___ |
    | ----- | ----- | ----- | ----- | ----- |
    | D_HU_ | _SIF_ | _A_HQ | _S_PA | B_U_T |
    | B_IE_ | _N_E_ | _L__C | _O_NO | C_I_M |
    | ----- | ----- | ----- | ----- | ----- |
    | BCVD_ | _HI_D | _U__C | _JWY_ | U___G |
    | ICEN_ | _TO__ | _SO_L | _O_E_ | XI__S |
    | ----- | ----- | ----- | ----- | ----- |
    | _Y_YB | _M_SD | U_H_J | _M_W_ | _H_X_ |
    | _T_E_ | _U_N_ | M_A_L | ___L_ | _A___ |
    | ----- | ----- | ----- | ----- | ----- |
    | _N_T_ | _U___ | _P_U_ | _L___ | _H__E |
    | _I_G_ | _N_O_ | _R_A_ | _N_C_ | _I__A |

8. Al concatenar la fila inferior de cada celda, encontramos el siguiente mensaje: "SOLO EXISTE UN BIEN, EL CONOCIMIENTO. SOLO EXISTE UN MAL, LA IGNORANCIA".

## En Hojas de cálculo

1. Se usa la misma tabla inicial.

        | C1    | C2    | C3    | C4    | C5    |
        | ----- | ----- | ----- | ----- | ----- |
        | WIST\ | FOZC\ | AT_]U | A]FGT | XA_NT |
        | WSSOL | O\ZE\ | AX_IS | ATE\T | UN_N\ |
        | DBHUB | SSIFO | IAVHQ | ]SRPA | BLU_T |
        | BBIEB | SN?EO | ILV\C | ]ORNO | CLI_M |
        | BCVDZ | BHIUD | XU]QC | EJWYS | U_RRG |
        | ICENZ | BTOU+ | XSOQL | EO\ES | XIRRS |
        | YYGYB | _MJSD | UNHBJ | MMHWQ | FHKXG |
        | YTGE\ | _UJN\ | MNABL | M?HLQ | FAK\G |
        | MNFTM | JUP]J | JP[UB | ZLU^Y | QHAME |
        | MIFGM | JNPOJ | JR[AB | ZNUCY | QIAMA |

2. Luego se concatenan las filas con la siguiente formula: `=CONCATENAR(A1,B1,C1,D1,E1)`.
3. Luego se concatenan las filas pares e impares resultantes con la siguiente formula: `=CONCATENAR(A12,A14,A16,A18,A20)` y `=CONCATENAR(A13,A15,A17,A19,A21)`
4. Se hacen los calculos necesarios para mostrar el mensaje: `=ARRAYFORMULA(TEXTJOIN("",VERDADERO,SI(EXTRAE(A23,FILA(INDIRECTO("1:"&LARGO(A23))),1)=EXTRAE(A24,FILA(INDIRECTO("1:"&LARGO(A24))),1),"_",EXTRAE(A24,FILA(INDIRECTO("1:"&LARGO(A24))),1))))`
5. Se reunen todos los caracteres para darle un sentido al mensaje: `=REGEXREPLACE(A27,"[\_]","")`
6. Se separa cada palabra: `=REGEXREPLACE(A28,"[\\]"," ")`
7. Y se ponen los signos de puntuación: `=REGEXREPLACE(A29,"[\?]",", ")`

## Con Python

Se usa el siguiente código fuente:

### Desencripción

    ```python
    import re

    clave   = "WIST\\FOZC\\AT_]UA]FGTXA_NTDBHUBSSIFOIAVHQ]SRPABLU_TBCVDZBHIUDXU]QCEJWYSU_RRGYYGYB_MJSDUNHBJMMHWQFHKXGMNFTMJUP\\JJP[UBZLU^YQHAME"
    mensaje = "WSSOLO\\ZE\\AX_ISATE\\TUN_N\\BBIEBSN?EOILV\\C]ORNOCLI_MICENZBTOU?XSOQLEO\\ESXIRRSYTGE\\_UJN\\MNABLM?HLQFAK\\GMIFGMJNPOJJR[ABZNUCYQIAMA"

    def vernam_decode(clave, mensaje):
        mensaje_modificado_lista = list(mensaje)  # Convertimos el mensaje a una lista para poder modificarlo
        
        longitud_clave = len(clave)
        longitud_mensaje = len(mensaje)
        
        if longitud_mensaje != longitud_clave:
            print("Las longitudes de clave y mensaje no son iguales: ", longitud_clave, ", ", longitud_mensaje)
            return None
        
        for i in range(longitud_clave):
            if clave[i] == mensaje[i]:
                mensaje_modificado_lista[i] = "_"
        
        mensaje_modificado = "".join(mensaje_modificado_lista)  # Volvemos a unir la lista en una cadena
        
        mensaje_modificado = re.sub(r"[_?\\\\]", lambda m: "" if m.group(0) == "_" else "," if m.group(0) == "?" else " ", mensaje_modificado)

        return mensaje_modificado


    mensaje_modificado = vernam_decode(clave, mensaje)

    if mensaje_modificado:
        print("Clave:", clave)
        print("Mensaje Original:", mensaje)
        print("Mensaje Modificado:", mensaje_modificado)
    ```

### Encripción

    ```python
    import random
    import re

    def generar_clave_dinamica(longitud):
        """Genera una clave aleatoria de la longitud especificada."""
        caracteres = [chr(i) for i in range(32, 127)]  # Caracteres ASCII imprimibles
        return "".join(random.choice(caracteres) for _ in range(longitud))

    def agregar_intrones(mensaje, num_intrones_por_caracter=1):
        """Agrega caracteres aleatorios (intrones) entre los caracteres del mensaje."""
        mensaje_con_intrones = ""
        caracteres = [chr(i) for i in range(32, 127)]
        for char in mensaje:
            mensaje_con_intrones += char
            mensaje_con_intrones += "".join(random.choice(caracteres) for _ in range(num_intrones_por_caracter))
        return mensaje_con_intrones

    def eliminar_intrones(mensaje_con_intrones, num_intrones_por_caracter=1):
        """Elimina los intrones agregados, extrayendo el mensaje original."""
        mensaje_original = ""
        for i in range(0, len(mensaje_con_intrones), num_intrones_por_caracter + 1):
            if i < len(mensaje_con_intrones):
                mensaje_original += mensaje_con_intrones[i]
        return mensaje_original

    def vernam_encode_dinamico(mensaje_original, num_intrones=1):
        """
        "Encripta" el mensaje original generando una clave dinámica de la misma longitud
        y aplicando una lógica similar a la función vernam_encode anterior,
        además de agregar intrones.
        """
        clave = generar_clave_dinamica(len(mensaje_original))
        mensaje_encriptado_lista = list(clave)

        for i in range(len(mensaje_original)):
            caracter_original = mensaje_original[i]
            caracter_clave = clave[i]

            if caracter_original == ",":
                mensaje_encriptado_lista[i] = "?" if caracter_clave != "?" else random.choice([chr(j) for j in range(32, 127) if chr(j) != "?"])
            elif caracter_original == " ":
                mensaje_encriptado_lista[i] = "\\" if caracter_clave != "\\" else random.choice([chr(j) for j in range(32, 127) if chr(j) != "\\"])
            elif caracter_original == "_":
                mensaje_encriptado_lista[i] = caracter_clave
            elif caracter_original == clave[i]:
                mensaje_encriptado_lista[i] = random.choice([chr(j) for j in range(32, 127) if chr(j) != caracter_original])
            else:
                mensaje_encriptado_lista[i] = caracter_original

        mensaje_encriptado_base = "".join(mensaje_encriptado_lista)
        mensaje_encriptado_con_intrones = agregar_intrones(mensaje_encriptado_base, num_intrones)
        return clave + "|||" + mensaje_encriptado_con_intrones # Incluimos la clave al inicio separada por "|||"

    def vernam_decode_dinamico(mensaje_completo_encriptado, num_intrones=1):
        """
        Decodifica el mensaje encriptado que incluye la clave y los intrones.
        """
        partes = mensaje_completo_encriptado.split("|||")
        if len(partes) != 2:
            print("Formato de mensaje encriptado incorrecto.")
            return None

        clave = partes[0]
        mensaje_con_intrones = partes[1]
        mensaje_encriptado_base = eliminar_intrones(mensaje_con_intrones, num_intrones)
        mensaje_modificado_lista = list(mensaje_encriptado_base)

        if len(mensaje_encriptado_base) != len(clave):
            print("Las longitudes de clave y mensaje encriptado no son iguales.")
            return None

        for i in range(len(clave)):
            if clave[i] == mensaje_encriptado_base[i]:
                mensaje_modificado_lista[i] = "_"

        mensaje_modificado = "".join(mensaje_modificado_lista)
        mensaje_desencriptado = re.sub(r"[_?\\\\]", lambda m: "" if m.group(0) == "_" else "," if m.group(0) == "?" else " ", mensaje_modificado)
        return mensaje_desencriptado

    # Ejemplo de uso dinámico:
    mensaje_original_dinamico = "ESTE ES UN MENSAJE SECRETO CON ESPACIOS, COMAS Y _"
    num_intrones_a_agregar = 2

    mensaje_completo_encriptado = vernam_encode_dinamico(mensaje_original_dinamico, num_intrones_a_agregar)

    if mensaje_completo_encriptado:
        partes = mensaje_completo_encriptado.split("|||")
        clave_generada = partes[0]
        mensaje_con_intrones = partes[1]

        print("Mensaje Original:", mensaje_original_dinamico)
        print("Clave Generada:", clave_generada)
        print("Mensaje Encriptado con Intrones:", mensaje_con_intrones)

        mensaje_desencriptado_dinamico = vernam_decode_dinamico(mensaje_completo_encriptado, num_intrones_a_agregar)
        if mensaje_desencriptado_dinamico:
            print("Mensaje Desencriptado:", mensaje_desencriptado_dinamico)
            print("Clave usada:", clave_generada)
    ```
