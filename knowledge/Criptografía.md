# Problema inicial

![Imagen criptográfica](./assets/image.png)

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
