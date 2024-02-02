import { IParametrica } from "@/api/ETMIPLUS_API";

export interface Gestante {
    idGestante?: number,
    nombresApellidos?: string,
    idNacionalidad?: number,
    nacionalidad?: Array<nacionalidad>,
    idTipoDocumento?: number,
    tipoDocumento?: Array<IParametrica>,
    numeroDocumento?: string,
    edad?: number,
    idTipoRegimenSalud?: number,
    tipoRegimenSalud?: Array<IParametrica>,
    nombreAseguradora?: string,
    idPertenenciaEtnica?: number,
    pertenenciaEtnica?: Array<IParametrica>,
    idGrupoPoblacional?: number,
    grupoPoblacional?: Array<IParametrica>,
    idAreaOcurrencia?: number,
    areaOcurrencia?: Array<IParametrica>,
    idDptoResidencia?: number,
    idMunicipioResidencia?: number,
    dptoResidencia?: Array<IParametrica>;
    municipioResidencia?: Array<IParametrica>;
    direccionResidencia?: string,
    idDptoAtencion?: number,
    idMunicipioAtencion?: number,
    telefono?: string,
    dptoAtencion?: Array<IParametrica>,
    municipioAtencion?: Array<IParametrica>,
    fechaPosibleParto?: Date,
    seRealizaControlPrenatal?: number,
    edadGestacionalSemanas?: number
}

export interface dptoModel {
    id: number,
    dptoName: string
}

export interface ciudadModel {
    id: number,
    ciudadName: string
}

export interface areaOcurrencia {
    id: number,
    areaOcurrenciaName: string
}

export interface grupoPoblacional {
    id: number,
    grupoPoblacionalName: string
}

export interface pertenenciaEtnica {
    id: number,
    pertenenciaEtnicaName: string
}

export interface tipoRegimenSalud {
    id: number,
    tipoRegimenSaludName: string
}

export interface tipoDocumento {
    id: number,
    tipoDocumentoName: string
}

export interface nacionalidad {
    id: number,
    nacionalidadName: string
}

export interface ICity {
    id: number,
    name: string,
    description?: string,
    surface?: number,
    population?: number,
    postalCode?: string,
    departmentId?: number,
    department?: string,
    touristAttractions?: number,
    presidents?: string,
    indigenousReservations?: number,
    airports?: number
}

export interface fichas {
    name: string;
    tieneFicha: boolean,
}