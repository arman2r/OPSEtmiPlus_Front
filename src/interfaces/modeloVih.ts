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
    momentoDiagnostico: string[];
    pruebaConfVih: string[];
    fechaProbableParto: Date;
    resultados: number;
    examenParaclinicoMl1: string;
    fechaExamenMl1: Date;
    resultadosExamenMl1: number;
    examenParaclinicoMl2: string;
    fechaExamenMl2: Date;
    resultadosExamenMl2: number;
    examenParaclinicoMl3: string;
    fechaExamenMl3: Date;
    resultadosExamenMl3: number;
    examenParaclinicoMl4: string;
    fechaExamenMl4: Date;
    resultadosExamenMl4: number;
    examenParaclinicoMl5: string;
    fechaExamenMl5: Date;
    resultadosExamenMl5: number;
    examenParaclinicoMm1: string;
    fechaExamenMm1: Date;
    resultadosExamenMm1: number;
    examenParaclinicoMm2: string;
    fechaExamenMm2: Date;
    resultadosExamenMm2: number;
    examenParaclinicoMm3: string;
    fechaExamenMm3: Date;
    resultadosExamenMm3: number;
    medicamentoSuministradosGestacionActual: string[];
    controlPrenatal: boolean;
    semanaGestacional: number;
  }
  
  export interface RuleFormSegundoReporte {
    cargaViral: boolean;
    fecha: Date;
    ResultadosCopiasMl: number
  }
  
  export interface RuleFormTercerReporte {
    situacionGestante: string[];
    fechaDelParto: Date;
    tarEnInterparto: boolean;
    esquemaArvEnInterparto: string[];
    condicionRecienNacido: boolean;
    numeroDeProductosAlNacimiento: boolean;
    edadGestacionalAlNacimientoEnSemana: Date;
    pesoEnGramos: number;
    sexo: string[];
    tipoParto: string[];
    suprecionDeLactancia: boolean;
    medicamentoSuministrado: boolean;
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