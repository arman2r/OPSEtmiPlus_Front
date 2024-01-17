import { Irefs } from "./modeloVih";

export interface RuleFormHbDatosGestante {
    fechaIngreso: Date;
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
    ctrlPrenatalEnEmbarazo: boolean;
    edadGestacionalEnPrimerCtrlenSemanas: number;
    fechaProbableParto: Date;
}

export interface DiagnosticoFormHb {
    MomentoDiagnostico: string[];
    EdadGestancionalEnSemanas: number;
    FechaAntigenoSuperficieHb: Date;
    ResultadosAnticuerpo1: boolean;
    FechaResultadosAnticuerpo1: Date;
    ResultadosAnticuerpo2: boolean;
    FechaResultadosAnticuerpo2: Date;
    ResultadosAnticuerpo3: boolean;
    FechaResultadosAnticuerpo3: Date;
    ResultadoCargaViralMl: number;
    fechaResultadoCargaViralMl: Date;
}

export interface TratamientoFormHb {
    tratadaAntesDelEmbarazo: boolean;
    requiereTratamiento1: boolean;
    semanaEnQueRecibioTratamiento1: number;
    requiereTratamiento2: boolean;
    semanaEnQueRecibioTratamiento2: number;
    nombreMedicamentoSuministrado: string;
    situacionGestante: string[]
}

export interface SeguimientoDelMenorFormHb {
    condicionRecienNacido: boolean;
    edadGestacionalSemanas: number;
    tipoParto: boolean;
    numeroProductosNacimiento: boolean;
    fechaDelParto: Date;
    sexo: string[];
    tipoRegimenSalud: string;
    nombreAseguradora: string;
    nombreApellidos: string;
    tipoDocumento: string[];
    numeroIdentificacion: number;
    aplicacionVacuna: boolean;
    tiempoAplicacion1: string[];
    aplicacionInmunoglobina: boolean;
    tiempoAplicacion2: string[];
    aplicacionVacuna1: string;
    fechaAplicacion1: Date;
    aplicacionVacuna2: string;
    fechaAplicacion2: Date;
    aplicacionVacuna3: string;
    fechaAplicacion3: Date;
}

export interface ClasificacionDelMenorFormHb {
    resultado: boolean;
    fechaResultado: Date;
    antiHbs: boolean;
    fechaResultado2: Date;
    condicionFinal: boolean;
    clasificacionFinal: string[]
}

export interface ReporteEntidadAPbFormHb {
    fechaReporte: Date;
    nombreEAPB: string;
    nombreRemitente: string;
    cargoRemitente: string;
    telMovil: string;
    telFijo: string;
    correo: string;
}