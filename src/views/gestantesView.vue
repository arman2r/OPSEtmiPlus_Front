<template>
    <el-row :gutter="10" style="width: 100%;">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-row justify="space-between center">
                <div>
                    <h4>Gestantes</h4>
                </div>
                <div class="center-v">
                    <el-button size="small" style="margin-right:5px" @click="dialogFormRegistroGestante = true">Crear
                        gestante</el-button>
                </div>
            </el-row>

        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-table :data="filterTableData" style="width: 100%">
                <el-table-column label="Nombres" prop="nombresApellidos" />
                <el-table-column label="Numero de documento" prop="numeroDocumento" />
                <el-table-column label="Teléfono" prop="telefono" />
                <!--<el-table-column label="Fecha posible parto" prop="fechaPosibleParto" />-->
                <el-table-column prop="fechaPosibleParto" label="Fecha posible parto"
                    :formatter="formatDate"></el-table-column>
                <el-table-column align="right">
                    <template #header>
                        <el-input v-model="search" size="small" placeholder="Type to search" />
                    </template>
                    <template #default="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
                            style="margin-right:5px">Edit</el-button>
                        <el-dropdown>
                            <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)"
                                effect="dark" content="Crear gestante control" placement="left-start"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 1024 1024">
                                    <path fill="currentColor"
                                        d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z" />
                                </svg>
                            </el-button>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>Crear ficha Vih</el-dropdown-item>
                                    <el-dropdown-item>Crear ficha Hepatitis B</el-dropdown-item>
                                    <el-dropdown-item>Crear ficha Chagas</el-dropdown-item>
                                    <el-dropdown-item>Crear ficha Sifilis</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>

    <!-- modal de registro gestante -->
    <el-dialog v-model="dialogFormRegistroGestante" title="Registro gestante">
        <el-form :model="registroGestanteForm" :rules="rulesDatosGestante" ref="formRegistroGestante">
            <el-row :gutter="20">
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">

                    <el-form-item label="Nombres y apellidos" :label-width="formLabelWidth">
                        <el-input v-model="registroGestanteForm.nombresApellidos" autocomplete="off" />
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-form-item label="Nacionalidad" prop="nacionalidad" class="select-width">
                        <el-select v-model="registroGestanteForm.nacionalidad" placeholder="Nacionalidad">
                            <el-option label="Colombiana" value="1" />
                            <el-option label="Extranjera" value="2" />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-form-item label="Tipo de Documento" prop="tipoDocumento" class="select-width">
                        <el-select v-model="registroGestanteForm.tipoDocumento" placeholder="Tipo de Documento">
                            <el-option label="Registro civil" value="1" />
                            <el-option label="Tarjeta de identidad" value="2" />
                            <el-option label="Menor sin identificar" value="3" />
                            <el-option label="Adulto sin identificar" value="4" />
                            <el-option label="Cedula de ciudadanía" value="5" />
                            <el-option label="Pasaporte" value="6" />
                            <el-option label="Salvo conducto" value="7" />
                            <el-option label="Permiso especial de permanencia" value="8" />
                            <el-option label="Cedula de extranjería" value="9" />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-form-item label="Número de identificación" prop="numeroDocumento">
                        <el-input v-model="registroGestanteForm.numeroDocumento" type="number" />
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-form-item label="Edad" prop="edad">
                        <el-input v-model="registroGestanteForm.edad" type="number" />
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-form-item label="Tipo de regimen de salud" prop="tipoRegimenSalud" class="select-width">
                        <el-select v-model="registroGestanteForm.tipoRegimenSalud" placeholder="Tipo de regimen de salud">
                            <el-option label="Excepción" value="1" />
                            <el-option label="Contributivo" value="2" />
                            <el-option label="Subsidiado" value="3" />
                            <el-option label="Especial" value="4" />
                            <el-option label="No asegurado" value="5" />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-form-item label="Nombre aseguradora (EAPB)" prop="nombreAseguradora">
                        <el-input v-model="registroGestanteForm.nombreAseguradora" />
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-form-item label="Pertenencia etnica" prop="pertenenciaEtnica" class="select-width">
                        <el-select v-model="registroGestanteForm.pertenenciaEtnica" placeholder="Pertenencia etnica">
                            <el-option label="Palenquera" value="1" />
                            <el-option label="Afrocolombiana" value="2" />
                            <el-option label="Indigena" value="3" />
                            <el-option label="Raizal" value="4" />
                            <el-option label="Otro" value="5" />
                            <el-option label="Rom" value="6" />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-form-item label="Grupo poblacional" prop="grupoPoblacional" class="select-width">
                        <el-select v-model="registroGestanteForm.grupoPoblacional" placeholder="Grupo poblacional">
                            <el-option label="Desplazada" value="1" />
                            <el-option label="Migrante" value="2" />
                            <el-option label="Victima de violencia armada" value="3" />
                            <el-option label="Discapacitada" value="4" />
                            <el-option label="Carceleria" value="5" />
                            <el-option label="Habitante de calle" value="6" />
                            <el-option label="Centro psiquiatrico" value="7" />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-form-item label="Area de ocurrencia" prop="areaOcurrencia" class="select-width">
                        <el-select v-model="registroGestanteForm.areaOcurrencia" placeholder="Area de ocurrencia">
                            <el-option label="Cabecera municipal" value="1" />
                            <el-option label="Centro poblado" value="2" />
                            <el-option label="Rural disperso" value="3" />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-form-item label="Departamento de residencia" prop="dptoResidencia" class="select-width">
                        <el-select v-model="registroGestanteForm.dptoResidencia" placeholder="Departamento de residencia">
                            <el-option label="Tolima" value="1" />
                            <el-option label="Cundinamarca" value="2" />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-form-item label="Municipio de residencia" prop="municipioResidencia" class="select-width">
                        <el-select v-model="registroGestanteForm.municipioResidencia" placeholder="Municipio de residencia">
                            <el-option label="Ibague" value="1" />
                            <el-option label="Chía" value="2" />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-form-item label="Direccion de residencia" prop="direccionResidencia">
                        <el-input v-model="registroGestanteForm.direccionResidencia" />
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-form-item label="Departamento de atención" prop="dptoAtencion" class="select-width">
                        <el-select v-model="registroGestanteForm.dptoAtencion" placeholder="Departamento de residencia">
                            <el-option label="Tolima" value="1" />
                            <el-option label="Cundinamarca" value="2" />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-form-item label="Municipio de atención" prop="municipioAtencion" class="select-width">
                        <el-select v-model="registroGestanteForm.municipioAtencion" placeholder="Municipio de residencia">
                            <el-option label="Ibague" value="1" />
                            <el-option label="Chía" value="2" />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-form-item label="Teléfono" prop="telefono">
                        <el-input v-model="registroGestanteForm.telefono" />
                    </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="column-custom">
                    <!--<el-form-item label="Fecha" prop="fecha">
                                <el-input v-model="ruleFormSegundoReporte.fecha" />
                            </el-form-item>-->
                    <label class="label-field" style="min-width:180px">Fecha probable del parto</label>
                    <el-date-picker v-model="registroGestanteForm.fechaPosibleParto" type="date"
                        placeholder="Fecha probable del parto" :format="dateFormat" />
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="mb">
                    <label>¿A la gestante se le realizo control prenatal durante el embarazo?</label><br />
                    <el-radio-group v-model="registroGestanteForm.seRealizaControlPrenatal">
                        <el-radio :label="1">Si</el-radio>
                        <el-radio :label="0">No</el-radio>
                    </el-radio-group>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <el-form-item label="Edad gestacional, en semanas" prop="edad">
                        <el-input v-model="registroGestanteForm.edadGestacionalSemanas" type="number" />
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormRegistroGestante = false">Cancel</el-button>
                <el-button type="primary" @click="selfData(formRegistroGestante)">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { computed, reactive, ref } from 'vue';
import { ElMessageBox, ElForm, FormRules } from 'element-plus';
import * as ETMIPLUS_API from "@/api/ETMIPLUS_API";
import axios from 'axios';
import 'element-plus/theme-chalk/display.css'
import moment from 'moment';

type FormInstance = InstanceType<typeof ElForm>

interface Gestante {
    idGestante?: number,
    nombresApellidos?: string,
    idNacionalidad?: number,
    nacionalidad?: nacionalidad[],
    idTipoDocumento?: number,
    tipoDocumento?: tipoDocumento[],
    numeroDocumento?: string,
    edad?: number,
    idTipoRegimenSalud?: number,
    tipoRegimenSalud?: tipoRegimenSalud[],
    nombreAseguradora?: string,
    idPertenenciaEtnica?: number,
    pertenenciaEtnica?: pertenenciaEtnica[],
    idGrupoPoblacional?: number,
    grupoPoblacional?: grupoPoblacional[],
    idAreaOcurrencia?: number,
    areaOcurrencia?: areaOcurrencia[],
    idDptoResidencia?: number,
    idMunicipioResidencia?: number,
    dptoResidencia?: dptoModel[];
    municipioResidencia?: ciudadModel[];
    direccionResidencia?: string,
    idDptoAtencion?: number,
    idMunicipioAtencion?: number,
    telefono?: string,
    dptoAtencion?: dptoModel[],
    municipioAtencion?: ciudadModel[],
    fechaPosibleParto?: Date,
    seRealizaControlPrenatal?: number,
    edadGestacionalSemanas?: number
}

interface dptoModel {
    id: number,
    dptoName: string
}

interface ciudadModel {
    id: number,
    ciudadName: string
}

interface areaOcurrencia {
    id: number,
    areaOcurrenciaName: string
}

interface grupoPoblacional {
    id: number,
    grupoPoblacionalName: string
}

interface pertenenciaEtnica {
    id: number,
    pertenenciaEtnicaName: string
}

interface tipoRegimenSalud {
    id: number,
    tipoRegimenSaludName: string
}

interface tipoDocumento {
    id: number,
    tipoDocumentoName: string
}

interface nacionalidad {
    id: number,
    nacionalidadName: string
}

export default class gestantesView extends Vue {

    dateFormat = 'DD/MM/YYYY'
    dialogFormRegistroGestante = false
    formLabelWidth = '140px'

    ETMIPLUS_API_Client = new ETMIPLUS_API.EtmiPlusClient(process.env.VUE_APP_APIURL, axios);

    formatDate(date: any) {
        // Use Moment.js to format the date
        return moment(date.fechaPosibleParto).format(this.dateFormat);
    }

    search = ''
    filterTableData = computed(() =>
        this.tableData.filter(
            (data) =>
                !this.search ||
                data.nombresApellidos?.toLowerCase().includes(this.search.toLowerCase())
        )
    )
    handleEdit = async (index: number, row: Gestante) => {
        console.log('editar',index, row.idGestante);
        this.dialogFormRegistroGestante = true;
        const getDataGestantesEdit = await this.ETMIPLUS_API_Client.gestanteGET(Number(row.idGestante)) as any;
        console.log('data que llega', getDataGestantesEdit)
        
        this.registroGestanteForm.nombresApellidos = getDataGestantesEdit.data.nombreCompleto;
        this.registroGestanteForm.nacionalidad = getDataGestantesEdit.data.idNacionalidad;
        this.registroGestanteForm.tipoDocumento = getDataGestantesEdit.data.idTipoDocumento;
        this.registroGestanteForm.numeroDocumento = getDataGestantesEdit.data.numeroDocumento;
        this.registroGestanteForm.edad = getDataGestantesEdit.data.edad;
        this.registroGestanteForm.tipoRegimenSalud = getDataGestantesEdit.data.tipoRegimenSalud;
        this.registroGestanteForm.nombreAseguradora = getDataGestantesEdit.data.nombreAseguradora;
        this.registroGestanteForm.pertenenciaEtnica = getDataGestantesEdit.data.pertenenciaEtnica;
        this.registroGestanteForm.grupoPoblacional = getDataGestantesEdit.data.grupoPoblacional;
        this.registroGestanteForm.areaOcurrencia = getDataGestantesEdit.data.areaOcurrencia;
        this.registroGestanteForm.dptoResidencia = getDataGestantesEdit.data.dptoResidencia;
        this.registroGestanteForm.municipioResidencia = getDataGestantesEdit.data.municipioResidencia;
        this.registroGestanteForm.municipioAtencion = getDataGestantesEdit.data.municipioAtencion;
        this.registroGestanteForm.direccionResidencia = getDataGestantesEdit.data.direccionResidencia;
        this.registroGestanteForm.dptoAtencion = getDataGestantesEdit.data.dptoAtencion
        this.registroGestanteForm.municipioAtencion = getDataGestantesEdit.data.municipioAtencion
        this.registroGestanteForm.telefono = getDataGestantesEdit.data.telefono
        this.registroGestanteForm.fechaPosibleParto = getDataGestantesEdit.data.fechaDelParto
        this.registroGestanteForm.seRealizaControlPrenatal = getDataGestantesEdit.data.controlPrenatal;
        this.registroGestanteForm.edadGestacionalSemanas = getDataGestantesEdit.data.semanas
    }
    handleDelete = (index: number, row: Gestante) => {
        console.log(index, row)
    }

    tableData: Gestante[] = []

    registroGestanteForm = reactive<Gestante>({
        idGestante: 0,
        nombresApellidos: "samanta garzon",
        idNacionalidad: 1,
        nacionalidad: [{ 'id': 1, 'nacionalidadName': 'colombia' }],
        idTipoDocumento: 0,
        tipoDocumento: [{ 'id': 1, 'tipoDocumentoName': 'colombia' }],
        numeroDocumento: "1110555888",
        edad: 23,
        idTipoRegimenSalud: 1,
        tipoRegimenSalud: [{ 'id': 1, 'tipoRegimenSaludName': 'colombia' }],
        nombreAseguradora: "SURA",
        idPertenenciaEtnica: 1,
        pertenenciaEtnica: [{ 'id': 1, 'pertenenciaEtnicaName': 'colombia' }],
        idGrupoPoblacional: 1,
        grupoPoblacional: [{ 'id': 1, 'grupoPoblacionalName': 'colombia' }],
        idAreaOcurrencia: 1,
        areaOcurrencia: [{ 'id': 1, 'areaOcurrenciaName': 'colombia' }],
        idDptoResidencia: 1,
        idMunicipioResidencia: 1,
        dptoResidencia: [{ 'id': 1, 'dptoName': 'colombia' }],
        municipioResidencia: [{ 'id': 1, 'ciudadName': 'colombia' }],
        direccionResidencia: "calle 22b # 33c - 28",
        idDptoAtencion: 1,
        idMunicipioAtencion: 1,
        dptoAtencion: [{ 'id': 1, 'dptoName': 'colombia' }],
        municipioAtencion: [{ 'id': 1, 'ciudadName': 'colombia' }],
        telefono: "322566998",
        fechaPosibleParto: new Date(),
        seRealizaControlPrenatal: 1,
        edadGestacionalSemanas: 6
    })

    rulesDatosGestante = reactive<FormRules<Gestante>>({
        nombresApellidos: [
            { required: true, message: 'Por favor digite los nombre(s) y apellido(s) completos', trigger: 'blur' },
            { min: 3, max: 50, message: 'debe tener una longitud entre 2 a 50 caracteres', trigger: 'blur' },
        ],
        nacionalidad: [
            {
                required: true,
                message: 'Por favor seleccione la nacionalidad',
                trigger: 'change',
            },
        ],
        tipoDocumento: [
            {
                required: true,
                message: 'Por favor seleccione el tipo de identificación',
                trigger: 'change',
            },
        ],
        numeroDocumento: [
            { required: true, message: 'Por favor digite el número de documento', trigger: 'blur' },
            { min: 2, max: 12, message: 'debe tener una longitud entre 2 a 12 caracteres', trigger: 'blur' },
        ],
        edad: [
            { required: true, message: 'Por favor digite la edad', trigger: 'blur' },
            { min: 1, max: 3, message: 'debe tener una longitud entre 1 a 3 caracteres', trigger: 'blur' },
        ],
        tipoRegimenSalud: [
            {
                required: true,
                message: 'Por favor seleccione un regimen de salud',
                trigger: 'change',
            },
        ],
        nombreAseguradora: [
            { required: true, message: 'Por favor digite el nombre de la aseguradora', trigger: 'blur' },
            { min: 1, max: 30, message: 'debe tener una longitud entre 1 a 30 caracteres', trigger: 'blur' },
        ],
        pertenenciaEtnica: [
            {
                required: true,
                message: 'Por favor seleccione la pertenencia etnica',
                trigger: 'change',
            },
        ],
        grupoPoblacional: [
            {
                required: true,
                message: 'Por favor seleccione un grupo poblacional',
                trigger: 'change',
            },
        ],
        areaOcurrencia: [
            {
                required: true,
                message: 'Por favor seleccione el area de ocurrencia',
                trigger: 'change',
            },
        ],
        dptoResidencia: [
            {
                required: true,
                message: 'Por favor seleccione el departamento de residencia',
                trigger: 'change',
            },
        ],
        municipioResidencia: [
            {
                required: true,
                message: 'Por favor seleccione el municipio de residencia',
                trigger: 'change',
            },
        ],
        direccionResidencia: [
            { required: true, message: 'Por favor digite la dirección de residencia', trigger: 'blur' },
            { min: 1, max: 50, message: 'debe tener una longitud entre 1 a 50 caracteres', trigger: 'blur' },
        ],
        telefono: [
            { required: true, message: 'Por favor digite el teléfono', trigger: 'blur' },
            { min: 1, max: 30, message: 'debe tener una longitud entre 1 a 30 caracteres', trigger: 'blur' },
        ],
        dptoAtencion: [
            {
                required: true,
                message: 'Por favor seleccione el departamento de atención',
                trigger: 'change',
            },
        ],
        municipioAtencion: [
            {
                required: true,
                message: 'Por favor seleccione el municipio de atención',
                trigger: 'change',
            },
        ],
        fechaPosibleParto: [
            { required: true, message: 'Por favor ingrese la fecha probable de parto', trigger: 'change' }
        ],
        seRealizaControlPrenatal: [
            { required: true, message: 'Este campo es requerido', trigger: 'change' }
        ],
        edadGestacionalSemanas: [
            { required: true, message: 'Este campo es requerido', trigger: 'blur' }
        ]
    })

    formRegistroGestante = ref<FormInstance>()

    selfData = async (formEl: FormInstance | undefined) => {
        if (!formEl) return
        await formEl.validate((valid, fields) => {
            if (valid) {
                console.log('enviando!')
                //cierra la modal
                this.registroGestante()

                //this.registroGestanteForm
                this.dialogFormRegistroGestante = false
            } else {
                ElMessageBox.alert(`Por favor complete los campos marcados con *.`, { type: "warning" });
                console.log('error al enviar!', fields)
            }
        })
    }

    async registroGestante() {
        console.log(this.registroGestanteForm.nombresApellidos)
        const request: Gestante = {
            idGestante: 0,
            nombresApellidos: this.registroGestanteForm.nombresApellidos,
            idNacionalidad: Number(this.registroGestanteForm.nacionalidad),
            idTipoDocumento: Number(this.registroGestanteForm.tipoDocumento),
            numeroDocumento: this.registroGestanteForm.numeroDocumento,
            edad: this.registroGestanteForm.edad,
            idTipoRegimenSalud: Number(this.registroGestanteForm.tipoRegimenSalud),
            nombreAseguradora: this.registroGestanteForm.nombreAseguradora,
            idPertenenciaEtnica: Number(this.registroGestanteForm.pertenenciaEtnica),
            idGrupoPoblacional: Number(this.registroGestanteForm.grupoPoblacional),
            idAreaOcurrencia: Number(this.registroGestanteForm.areaOcurrencia),
            idDptoResidencia: Number(this.registroGestanteForm.dptoResidencia),
            idMunicipioResidencia: Number(this.registroGestanteForm.municipioResidencia),
            direccionResidencia: this.registroGestanteForm.direccionResidencia,
            idDptoAtencion: Number(this.registroGestanteForm.dptoAtencion),
            idMunicipioAtencion: Number(this.registroGestanteForm.municipioAtencion),
            telefono: this.registroGestanteForm.telefono,
            fechaPosibleParto: new Date(moment(this.registroGestanteForm.fechaPosibleParto).format('YYYY-MM-DD HH:mm:ss.sss')),
            seRealizaControlPrenatal: this.registroGestanteForm.seRealizaControlPrenatal,
            edadGestacionalSemanas: this.registroGestanteForm.edadGestacionalSemanas
        }

        const requestRG = await this.ETMIPLUS_API_Client.gestantePOST(request) as any;

        console.log('request', request)
        console.log('respuesta', requestRG)
        const newRow = requestRG.data;
        this.tableData.push(newRow);
    }
 
 
    async mounted() {
        const getDataGestantes = await this.ETMIPLUS_API_Client.gestanteGET2('', 1, 10) as any;
        console.log('data que llega', getDataGestantes)
        this.tableData = getDataGestantes.data
    }
 

}
</script>

<style>
.center-v {
    align-items: center;
    display: flex;
}

h4,
h5 {
    text-align: left
}

.steps-container {
    width: 100%;
}

.select-width .el-form-item__content,
.select-width .el-select,
.select-width .select-trigger {
    display: flex;
    flex: 1;
}

.demo-ruleForm .el-form-item--default .el-form-item__label {
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: end;
}

.btn-save {
    margin: 20px 0 0
}

.no-margin {
    margin: 0 0 0 0
}

.text-lg-end {
    text-align: right
}

.mt {
    margin-top: 2rem
}

.mb {
    margin-bottom: 2rem
}

.dark-fill {
    background-color: #E5EAF3
}

.me-2 {
    margin-right: 2rem
}


.label-field {
    line-height: 16px;
    display: inline !important;
    align-items: center;
    text-align: end;
    width: 180px;
    font-size: .9rem;
    padding-right: 3px;
    margin-bottom: 18px
}

.column-custom {
    display: flex !important;
    align-items: center
}

.column-custom label.title-field {
    margin-right: 8px;
    text-align: right;
    width: 180px;
}

@media(max-width:991px) {
    .column-custom {
        flex-flow: column;
        align-items: start
    }

    .label-field {
        text-align: left;
        width: 100%
    }

    .el-form-item__label {
        text-align: left !important;
        width: 100% !important;
        align-items: start !important;
        display: inline !important;
    }

    .el-col {
        margin-bottom: 8px
    }

    .column-custom label.title-field {
        margin-right: 0px;
        text-align: left;
        width: 100% !important;
    }

    .el-form-item {
        flex-flow: column;
        width: 100%;
    }

    .el-form-item label {
        width: 100% !important;
        text-align: left !important;
    }
}

.el-date-editor {
    width: 100% !important;
    margin-bottom: 18px
}
</style>