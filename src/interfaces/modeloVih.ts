import { IParaclinicoMadre, IParametrica } from "@/api/ETMIPLUS_API";

export interface RuleFormDatosGestante {
    nombresApellidos: string;
    nacionalidad: Irefs[];
    tipoDocumento: string[];
    documentNumber: number;
    edad: number;
    tipoRegimenSalud: string[];
    nombreAseguradora: string;
    pertenenciaEtnica: string[];
    grupoPoblacional: string[];
    areaOcurrencia: string[];
    dptoResidencia: string[];
    municipioResidencia: string[];
    direccionResidencia: string;
    telefono: string;
    dptoAtencion: string[];
    municipioAtencion: string[]
  }
  
  export interface Irefs {
    codigo?: string;
    tipo?: string;
    valor?: number;
    nombre?: string;
    extra_1?: string;
    extra_2?: string;
  }
  
  export interface RuleFormPrimerReporte {
    idReporte?: number;
    idGestanteControl?: number;
    idMomentoDiagnostico?: number;
    momentoDiagnostico?: IParametrica[];
    idPruebaConfirmarVih?: number;
    pruebaConfirmarVih?: IParametrica[];
    fechaDiagnostico?: Date;
    idResultados?: number;
    numeroCopias?: number;
    estabaRecibiendoTARAntesEmbarazo?: number;
    recibioTARDuranteEmbarazo?: number;
    edadGestacionalInicioTARSemanas?: number;
    estabaRecibiendoTARDuranteEmbarazoActual?: number;
    edadGestacionalCuandoRecibioTAR?: number;
    edadGestacionalAlDianosticoVIHSemanas?: number;
    medicamentosARVSuministrados?: string | undefined;
    seRealizoControlPrenatalDuranteEmbarazo?: number;
    edadGestacionalPrimerControlPrenatalSemanas?: number;
    fechaProbableParto?: Date;
    listParaclinicos?: IParaclinicoMadre[] | undefined;
  }
  
  export interface RuleFormSegundoReporte {
    cargaViral: boolean;
    fecha: Date;
    ResultadosCopiasMl: number
  }
  
  export interface RuleFormTercerReporte {
    situacionGestante: string[];
    fechaDelParto: Date;
    tarEnInterparto: number;
    esquemaArvEnInterparto: string[];
    condicionRecienNacido: number;
    numeroDeProductosAlNacimiento: [];
    edadGestacionalAlNacimientoEnSemana: Date;
    pesoEnGramos: number;
    sexo: string[];
    tipoParto: string[];
    suprecionDeLactancia: number;
    medicamentoSuministrado: string;
    otroMedicamento?: string;
  }
  
  export interface RuleFormCuartoReporte {
    tipoRegimenSalud: string[];
    nombreAseguradora: string;
    nombresApellidos: string;
    tipoDocumento: string[];
    numeroIdentificacion: string;
    clasificacionDelRiesgo: string[];
    profilaxisAntriretroviral: boolean;
    medicamentosAntiretrovirales: string[]
  }
  
  export interface RuleFormquintoReporte {
    pruebaRealizada: string[];
    fecha: Date;
    resultadoEnMl: number;
    pruebaRealizadaTwo: string[];
    fechaTwo: Date;
    resultadoEnMlTwo: number;
    pruebaRealizadaThree: string[];
    fechaThree: Date;
    resultadoEnMlFour: number;
    pruebaRealizadaFour: string[];
    fechaFour: Date;
    resultadoEnMlFive: number;
    pruebaRealizadaFive: string[];
    fechaFive: Date;
    resultadoEnMlSix: number;
    pruebaRealizadaSix: string[];
    fechaSix: Date;
    resultadoEnMlSeven: number;
    pruebaRealizadaSeven: string[];
    fechaSeven: Date;
    resultadoEnMlThree: number;
    otrasPruebasRealizadasUno: string[];
    otrasPruebasRealizadasDos: string[];
    otrasPruebasRealizadasTres: string[];
    otrasPruebasRealizadasCuatro: string[];
    fechaProbablePartoUno: Date;
    fechaProbablePartoDos: Date;
    fechaProbablePartoTres: Date;
    fechaProbablePartoCuatro: Date;
    resultadosUno: number;
    resultadosDos: number;
    resultadosTres: number;
    resultadosCuatro: number;
    alimentacionMenorExpuesto: string[];
    situacionDelMenorExpuesto: string[];
  }
  
  export interface RuleFormSeguimiento {
    ipsAtencionVih: string;
    nombreQuienRemiteInformacion: string;
    cargoQuienRemiteInformacion: string;
    celular: string;
    telFijo: string;
    correo: string;
    confirmCorreo: string;
  }