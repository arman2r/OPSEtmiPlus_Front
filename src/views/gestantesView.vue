<template>
    <el-row :gutter="10" style="width: 100%;">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-row justify="space-between center">
                <div>
                    <h4>Gestantes</h4>
                </div>
                <div class="center-v">
                    <el-button size="small" style="margin-right:5px" @click="modalCrearGestante">Crear
                        gestante</el-button>
                </div>
            </el-row>

        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-table :data="tableData" style="width: 100%">
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
                        <el-tooltip content="Crear control" raw-content>
                            <el-button type="primary" :icon="iconPlus" @click="crearCtrl(scope.$index, scope.row)" />
                        </el-tooltip>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>

    <!-- modal de registro gestante -->
    <el-dialog v-model="dialogFormRegistroGestante" :title="!showEditBtn ? 'Registro gestante' : 'Editar gestante'">

        <el-form :model="registroGestanteForm" :rules="rulesDatosGestante" ref="formRegistroGestante" id="modalCrearEditar">
            <el-row :gutter="20">
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">

                    <el-form-item label="Nombres y apellidos" prop="nombresApellidos" :label-width="formLabelWidth">
                        <el-input v-model="registroGestanteForm.nombresApellidos" autocomplete="off" />
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-form-item label="Nacionalidad" prop="nacionalidad" class="select-width">
                        <el-select v-model="registroGestanteForm.nacionalidad" filterable placeholder="Nacionalidad">
                            <el-option v-for="nacionalidad in nacionalidadList" :key="nacionalidad.id"
                                :label="nacionalidad.name" :value="nacionalidad.id" />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-form-item label="Tipo de Documento" prop="tipoDocumento" class="select-width">
                        <el-select v-model="registroGestanteForm.tipoDocumento" filterable placeholder="Tipo de Documento">
                            <el-option v-for="tipoDocumento in tipoDocumentoList" :key="tipoDocumento.id"
                                :label="tipoDocumento.name" :value="tipoDocumento.id" />
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
                        <el-select v-model="registroGestanteForm.tipoRegimenSalud" filterable
                            placeholder="Tipo de regimen de salud">
                            <el-option v-for="tipoRegimenSalud in tipoRegimenSaludList" :key="tipoRegimenSalud.id"
                                :label="tipoRegimenSalud.name" :value="tipoRegimenSalud.id" />
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
                        <el-select v-model="registroGestanteForm.pertenenciaEtnica" filterable
                            placeholder="Pertenencia etnica">
                            <el-option v-for="pertenenciaEtnica in pertenenciaEtnicaList" :key="pertenenciaEtnica.id"
                                :label="pertenenciaEtnica.name" :value="pertenenciaEtnica.id" />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-form-item label="Grupo poblacional" prop="grupoPoblacional" class="select-width">
                        <el-select v-model="registroGestanteForm.grupoPoblacional" filterable
                            placeholder="Grupo poblacional" autocomplete="off">
                            <el-option v-for="grupoPoblacional in grupoPoblacionalList" :key="grupoPoblacional.id"
                                :label="grupoPoblacional.name" :value="grupoPoblacional.id" />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-form-item label="Area de ocurrencia" prop="areaOcurrencia" class="select-width">
                        <el-select v-model="registroGestanteForm.areaOcurrencia" autocomplete="off" filterable
                            placeholder="Area de ocurrencia">
                            <el-option v-for="areaOcurrencia in areaOcurrenciaList" :key="areaOcurrencia.id"
                                :label="areaOcurrencia.name" :value="areaOcurrencia.id" />
                            <template #loading>
                                <svg class="circular" viewBox="0 0 50 50">
                                    <circle class="path" cx="25" cy="25" r="20" fill="none" />
                                </svg>
                            </template>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-form-item label="Departamento de residencia" prop="dptoResidencia" class="select-width">
                        <el-select v-model="registroGestanteForm.dptoResidencia" filterable
                            placeholder="Departamento de residencia" @change="remoteMethod" :loading="loading">
                            <el-option v-for="dptoResidencia in dptoResidenciaList" :key="dptoResidencia.id"
                                :label="dptoResidencia.name" :value="dptoResidencia.id" />
                            <template #loading>
                                <el-icon class="is-loading">
                                    <svg class="circular" viewBox="0 0 20 20">
                                        <g class="path2 loading-path" stroke-width="0"
                                            style="animation: none; stroke: none">
                                            <circle r="3.375" class="dot1" rx="0" ry="0" />
                                            <circle r="3.375" class="dot2" rx="0" ry="0" />
                                            <circle r="3.375" class="dot4" rx="0" ry="0" />
                                            <circle r="3.375" class="dot3" rx="0" ry="0" />
                                        </g>
                                    </svg>
                                </el-icon>
                            </template>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-form-item label="Municipio de residencia" prop="municipioResidencia" class="select-width">
                        <el-select v-model="registroGestanteForm.municipioResidencia" filterable
                            placeholder="Municipio de residencia" :loading="loading">
                            <el-option v-for="citiesResidencia in citiesResidenciaList" :key="citiesResidencia.id"
                                :label="citiesResidencia.name" :value="citiesResidencia.id" />
                            <template #loading>
                                <el-icon class="is-loading">
                                    <svg class="circular" viewBox="0 0 20 20">
                                        <g class="path2 loading-path" stroke-width="0"
                                            style="animation: none; stroke: none">
                                            <circle r="3.375" class="dot1" rx="0" ry="0" />
                                            <circle r="3.375" class="dot2" rx="0" ry="0" />
                                            <circle r="3.375" class="dot4" rx="0" ry="0" />
                                            <circle r="3.375" class="dot3" rx="0" ry="0" />
                                        </g>
                                    </svg>
                                </el-icon>
                            </template>
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
                        <el-select v-model="registroGestanteForm.dptoAtencion" filterable @change="remoteMethodTwo"
                            placeholder="Departamento de residencia">
                            <el-option v-for="dptoAtencion in dptoAtencionList" :key="dptoAtencion.id"
                                :label="dptoAtencion.name" :value="dptoAtencion.id" />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-form-item label="Municipio de atención" prop="municipioAtencion" class="select-width">
                        <el-select v-model="registroGestanteForm.municipioAtencion" filterable
                            placeholder="Municipio de residencia">
                            <el-option v-for="citiesAtencion in citiesAtencionList" :key="citiesAtencion.id"
                                :label="citiesAtencion.name" :value="citiesAtencion.id" />
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
                    <el-form-item label="Edad gestacional, en semanas" prop="edadGestacionalSemanas">
                        <el-input v-model="registroGestanteForm.edadGestacionalSemanas" type="number" />
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormRegistroGestante = false">Cancelar</el-button>
                <el-button v-if="!showEditBtn" type="primary" @click="selfData(formRegistroGestante)">
                    Guardar gestante
                </el-button>
                <el-button v-if="showEditBtn" :disabled="disabledBtn" type="primary"
                    @click="editarGestante(formRegistroGestante)">
                    Editar gestante
                </el-button>

            </span>
        </template>
    </el-dialog>


    <el-dialog v-model="dialogConfirm.open" title="Aguarde" width="30%">
        <span>El gestante ya cuenta con un control activo, ¿desea agregar otro control?',</span>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="redirectToCtrls(dialogConfirm.idGestante)">No, ver controles</el-button>
                <el-button type="primary" @click="crearCtrlModalIsOpen(dialogConfirm.idGestante)">
                    Sí, crear control
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { computed, reactive, ref } from 'vue';
import { ElMessage, ElMessageBox, Action, ElForm, FormRules, ElLoading } from 'element-plus';
import * as ETMIPLUS_API from "@/api/ETMIPLUS_API";
import * as ETMIPLUS_DPTOS_API from "@/api/ETMIPLUS_DPTOS_API";
import axios from 'axios';
import 'element-plus/theme-chalk/display.css'
import moment from 'moment';
import { IParametrica, IGestante } from '@/api/ETMIPLUS_API';
import { IGestanteControl } from '@/api/ETMIPLUS_API_backup';
import { Plus } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
import { Gestante, ICity, fichas } from '@/interfaces/modeloGestante';

type FormInstance = InstanceType<typeof ElForm>



export default class gestantesView extends Vue {

    dateFormat = 'DD/MM/YYYY'
    dialogFormRegistroGestante = false
    formLabelWidth = '140px'
    loading = false;
    iconPlus = Plus;
    router = useRouter();
    dialogConfirm = {open: false, idGestante: 0}

    nacionalidadList = [{ id: 1, name: 'colombiana' }, { id: 2, name: 'extranjera' }]
    tipoDocumentoList = [
        { id: 1, name: 'Tarjeta de identidad' },
        { id: 2, name: 'Menor sin identificar' },
        { id: 3, name: 'Adulto sin identificar' },
        { id: 4, name: 'Cedula de ciudadanía' },
        { id: 5, name: 'Pasaporte' },
        { id: 6, name: 'Salvo conducto' },
        { id: 7, name: 'Permiso especial de permanencia' },
        { id: 8, name: 'Cedula de extranjería' },
    ]
    tipoRegimenSaludList = [
        { id: 1, name: 'Excepción' },
        { id: 2, name: 'Contributivo' },
        { id: 3, name: 'Subsidiado' },
        { id: 4, name: 'Especial' },
        { id: 5, name: 'No asegurado' },
    ]
    pertenenciaEtnicaList = [
        { id: 1, name: "Palenquera" },
        { id: 2, name: "Afrocolombiana" },
        { id: 3, name: "Indigena" },
        { id: 4, name: "Raizal" },
        { id: 5, name: "Otro" },
        { id: 6, name: "Rom" },
    ]
    grupoPoblacionalList = [
        { id: 1, name: "Desplazada" },
        { id: 2, name: "Migrante" },
        { id: 3, name: "Victima de violencia armada" },
        { id: 4, name: "Discapacitada" },
        { id: 5, name: "Carceleria" },
        { id: 6, name: "Habitante de calle" },
        { id: 7, name: "Centro psiquiatrico" },
    ]
    areaOcurrenciaList = [
        { id: 1, name: "Cabecera municipal" },
        { id: 2, name: "Centro poblado" },
        { id: 3, name: "Rural disperso" },
    ]
    dptoResidenciaList = [] as any
    citiesResidenciaList = [] as ICity[];
    dptoAtencionList = [] as any;
    citiesAtencionList = [] as ICity[];
    fichas: fichas[] = []



    ETMIPLUS_API_Client = new ETMIPLUS_API.EtmiPlusClient(process.env.VUE_APP_APIURL, axios);
    ETMIPLUS_DPTOS_API_Client = new ETMIPLUS_DPTOS_API.EtmiPlusLocation('', axios);

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

    /*getFilteredTableData() {
        return this.tableData.filter(
            (data) =>
                !this.search ||
                (data.nombresApellidos && typeof data.nombresApellidos === "string" &&
                    data.nombresApellidos.toLowerCase().includes(this.search.toLowerCase()))
        );
    }*/
    showEditBtn = false
    disabledBtn = false
    loadingInstance = ElLoading.service(
        {
            fullscreen: true,
            text: 'Aguade...', // The text of the loading spinner
            background: 'rgba(0, 0, 0, 0.8)', // The background color of the loading spinner
            lock: true,

        }
    )

    idGestante?: number;
    handleEdit = async (index: number, row: Gestante) => {
        this.showEditBtn = true
        console.log('editar', index, row.idGestante);
        this.dialogFormRegistroGestante = true;
        console.log('id gestante', Number(row.idGestante))
        this.idGestante = row.idGestante
        const getDataGestantesEdit = await this.ETMIPLUS_API_Client.gestanteGET(Number(row.idGestante)) as any;
        console.log('data que llega 2 ', getDataGestantesEdit)
        this.loadingInstance = ElLoading.service(
            {
                target: document.querySelector('#modalCrearEditar') as HTMLElement,
                fullscreen: false,
                customClass: 'full-loading',
                text: 'Aguade...', // The text of the loading spinner
                background: 'rgba(0, 0, 0, 0.8)', // The background color of the loading spinner
                lock: true,
            }
        )
        if (getDataGestantesEdit !== null) {
            this.disabledBtn = true


            console.log('data que llega 2 - 1', getDataGestantesEdit)

            const getDptoResidencia = this.dptoResidenciaList.filter((x: any) => x.id === getDataGestantesEdit.data.idDptoResidencia)
            const getDptoAtencion = this.dptoAtencionList.filter((x: any) => x.id === getDataGestantesEdit.data.idDptoAtencion)

            console.log('dpto de residencia que llega', getDptoResidencia)
            console.log('dpto de atencion que llega', getDptoAtencion)


            this.remoteMethod(getDptoResidencia[0].id, true, getDataGestantesEdit.data.idMunicipioResidencia)
            this.remoteMethodTwo(getDptoAtencion[0].id, true, getDataGestantesEdit.data.idMunicipioAtencion)

            this.registroGestanteForm.nombresApellidos = getDataGestantesEdit.data.nombresApellidos;
            this.registroGestanteForm.nacionalidad = getDataGestantesEdit.data.nacionalidad.id;
            this.registroGestanteForm.tipoDocumento = getDataGestantesEdit.data.idTipoDocumento;
            this.registroGestanteForm.numeroDocumento = getDataGestantesEdit.data.numeroDocumento;
            this.registroGestanteForm.edad = getDataGestantesEdit.data.edad;
            this.registroGestanteForm.tipoRegimenSalud = getDataGestantesEdit.data.idTipoRegimenSalud;
            this.registroGestanteForm.nombreAseguradora = getDataGestantesEdit.data.nombreAseguradora;
            this.registroGestanteForm.pertenenciaEtnica = getDataGestantesEdit.data.pertenenciaEtnica?.id;
            this.registroGestanteForm.grupoPoblacional = getDataGestantesEdit.data.grupoPoblacional.id;
            this.registroGestanteForm.areaOcurrencia = getDataGestantesEdit.data.idAreaOcurrencia;
            this.registroGestanteForm.dptoResidencia = getDptoResidencia[0].id;
            this.registroGestanteForm.direccionResidencia = getDataGestantesEdit.data.direccionResidencia;
            this.registroGestanteForm.dptoAtencion = getDptoAtencion[0].id
            //this.registroGestanteForm.municipioAtencion = getDataGestantesEdit.data.municipioAtencion
            this.registroGestanteForm.telefono = getDataGestantesEdit.data.telefono
            this.registroGestanteForm.fechaPosibleParto = getDataGestantesEdit.data.fechaPosibleParto
            this.registroGestanteForm.seRealizaControlPrenatal = getDataGestantesEdit.data.seRealizaControlPrenatal;
            this.registroGestanteForm.edadGestacionalSemanas = getDataGestantesEdit.data.edadGestacionalSemanas;

        }

    }

    modalCrearGestante() {
        this.showEditBtn = false
        this.dialogFormRegistroGestante = true
        this.registroGestanteForm.nombresApellidos = ''
        this.registroGestanteForm.nacionalidad = []
        this.registroGestanteForm.tipoDocumento = []
        this.registroGestanteForm.numeroDocumento = ''
        this.registroGestanteForm.edad = 0
        this.registroGestanteForm.tipoRegimenSalud = []
        this.registroGestanteForm.nombreAseguradora = ''
        this.registroGestanteForm.pertenenciaEtnica = []
        this.registroGestanteForm.grupoPoblacional = []
        this.registroGestanteForm.areaOcurrencia = []
        this.registroGestanteForm.dptoResidencia = []
        this.registroGestanteForm.municipioResidencia = []
        this.registroGestanteForm.municipioAtencion = []
        this.registroGestanteForm.direccionResidencia = ''
        this.registroGestanteForm.dptoAtencion = []
        this.registroGestanteForm.municipioAtencion = []
        this.registroGestanteForm.telefono = ''
        this.registroGestanteForm.fechaPosibleParto = new Date()
        this.registroGestanteForm.seRealizaControlPrenatal = 0
        this.registroGestanteForm.edadGestacionalSemanas = 0
    }

    consultarFichas = async (index: number, row: Gestante) => {
        console.log(index, row.idGestante)
        const getFichasInscritas = await this.ETMIPLUS_API_Client.estadoFichas(Number(row.idGestante)) as any;
        console.log('fichas', getFichasInscritas)
        this.fichas = []
        if (getFichasInscritas.data.tieneFichaVIH === false) {
            this.fichas.push({ name: 'vih', tieneFicha: false })
        }
        if (getFichasInscritas.data.tieneFichaHepatitisB === false) {
            this.fichas.push({ name: 'hepatitis B', tieneFicha: false })
        }
        if (getFichasInscritas.data.tieneFichaChagas === false) {
            this.fichas.push({ name: 'chagas', tieneFicha: false })
        }
        if (getFichasInscritas.data.tieneFichaSifilis === false) {
            this.fichas.push({ name: 'sifilis', tieneFicha: false })
        }

        console.log('todas las fichas', this.fichas)
    }

    crearFicha = async (index: number, row: Gestante) => {
        console.log(index, row.idGestante);
        /// Pendiente preguntar como se identifica el tipo de ficha, si es vih, hb, chagas o sifilis
        const request: IGestanteControl = {
            idGestanteControl: 0,
            idGestante: Number(row.idGestante),
            fechaControl: new Date(moment(new Date()).format('YYYY-MM-DD HH:mm:ss.sss'))
        }

        console.log('ficha a crear', request);
        const getFichasInscritas = await this.ETMIPLUS_API_Client.gestanteControlPOST(Number(row.idGestante)) as any;

    }

    tableData: IGestante[] = []

    registroGestanteForm = reactive<Gestante>({
        idGestante: 0,
        nombresApellidos: "",
        idNacionalidad: 0,
        nacionalidad: [],
        idTipoDocumento: 0,
        tipoDocumento: [],
        numeroDocumento: "",
        edad: 0,
        idTipoRegimenSalud: 0,
        tipoRegimenSalud: [],
        nombreAseguradora: "",
        idPertenenciaEtnica: 0,
        pertenenciaEtnica: [],
        idGrupoPoblacional: 0,
        grupoPoblacional: [],
        idAreaOcurrencia: 0,
        areaOcurrencia: [],
        idDptoResidencia: 0,
        idMunicipioResidencia: 0,
        dptoResidencia: [],
        municipioResidencia: [],
        direccionResidencia: "",
        idDptoAtencion: 0,
        idMunicipioAtencion: 0,
        dptoAtencion: [],
        municipioAtencion: [],
        telefono: "",
        fechaPosibleParto: new Date(),
        seRealizaControlPrenatal: 0,
        edadGestacionalSemanas: 0
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
            { required: true, message: 'Por favor digite la edad', trigger: 'blur' }
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

    editarGestante = async (formEl: FormInstance | undefined) => {
        if (!formEl) return
        await formEl.validate((valid, fields) => {
            if (valid) {
                console.log('enviando!')
                //cierra la modal
                this.editarRegistroGestante(Number(this.idGestante))

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
        const request: IGestante = {
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

    async editarRegistroGestante(idGestante: number) {
        console.log('la data', this.registroGestanteForm)
        const editData = this.registroGestanteForm as IGestante;
        console.log('area ocurrencia', editData.areaOcurrencia)
        console.log('dpto atencion', editData.dptoAtencion?.id)
        const request: IGestante = {
            idGestante: idGestante,
            nombresApellidos: this.registroGestanteForm.nombresApellidos,
            idNacionalidad: Number(this.registroGestanteForm.nacionalidad),
            idTipoDocumento: Number(this.registroGestanteForm.tipoDocumento),
            numeroDocumento: this.registroGestanteForm.numeroDocumento,
            edad: this.registroGestanteForm.edad,
            idTipoRegimenSalud: Number(this.registroGestanteForm.idTipoRegimenSalud),
            nombreAseguradora: this.registroGestanteForm.nombreAseguradora,
            idPertenenciaEtnica: Number(editData.pertenenciaEtnica),
            idGrupoPoblacional: Number(editData.grupoPoblacional),
            idAreaOcurrencia: Number(this.registroGestanteForm.areaOcurrencia),
            idDptoResidencia: Number(this.registroGestanteForm.dptoResidencia),
            idMunicipioResidencia: Number(this.registroGestanteForm.municipioResidencia),
            direccionResidencia: this.registroGestanteForm.direccionResidencia,
            idDptoAtencion: Number(this.registroGestanteForm.dptoAtencion),
            idMunicipioAtencion: Number(this.registroGestanteForm.municipioAtencion),
            telefono: this.registroGestanteForm.telefono,
            fechaPosibleParto: new Date(moment(editData.fechaPosibleParto).format('YYYY-MM-DD HH:mm:ss.sss')),
            seRealizaControlPrenatal: this.registroGestanteForm.seRealizaControlPrenatal,
            edadGestacionalSemanas: this.registroGestanteForm.edadGestacionalSemanas
        }
        console.log('request edit', request)
        const requestRG = await this.ETMIPLUS_API_Client.gestantePUT(idGestante, request) as any;


        console.log('respuesta edit', requestRG)
        this.disabledBtn = false
        //const newRow = requestRG.data;
        //this.tableData.push(newRow);
        this.mounted()
    }

    async mounted() {

        const getDataGestantes = await this.ETMIPLUS_API_Client.gestanteGET2('', 1, 10) as any;
        console.log('data que llega', getDataGestantes)
        this.tableData = getDataGestantes.data.data

        //API de Consulta para dptos y ciudades
        const dataDptos = localStorage.getItem('allDptos');
        if (dataDptos) {
            console.log('los dptos están guardados')
            const allDptos = JSON.parse(dataDptos);
            this.dptoResidenciaList = allDptos;
            this.loadingInstance.close()
        } else {
            console.log('los dptos NO están guardados')
            const getAllDptos = await this.ETMIPLUS_DPTOS_API_Client.getDptos() as any;
            localStorage.setItem('allDptos', JSON.stringify(getAllDptos));
            this.dptoResidenciaList = getAllDptos;
            this.loadingInstance.close()
        }



        const getAllDptosAtencion = await this.ETMIPLUS_DPTOS_API_Client.getDptos() as any;
        this.dptoAtencionList = getAllDptosAtencion;
    }

    async remoteMethod(IdDpto?: number, hastData?: boolean, idMunicipioResidencia?: number) {
        this.disabledBtn = true
        console.log('que llega en id', IdDpto)
        console.log('id municipio', idMunicipioResidencia)

        const getIdDpto = IdDpto !== undefined ? IdDpto : this.registroGestanteForm.dptoResidencia

        console.log('idDpto', getIdDpto)
        if (getIdDpto) {
            this.loading = true
            setTimeout(async () => {
                this.loading = false;

                const getAllCities = await this.ETMIPLUS_DPTOS_API_Client.getCityByDpto(Number(this.registroGestanteForm.dptoResidencia)) as any;
                console.log('cities', getAllCities)
                this.citiesResidenciaList = getAllCities
                /*this.citiesResidenciaList = list.value.filter((item) => {
                    return item.label.toLowerCase().includes(query.toLowerCase())
                })*/
                this.disabledBtn = false
                if (hastData) {
                    const filterCiudadResidencia = getAllCities.filter((x: any) => x.id === idMunicipioResidencia)
                    console.log('ciudad filtrada para residencia', filterCiudadResidencia)
                    this.registroGestanteForm.municipioResidencia = filterCiudadResidencia[0].id;
                    this.disabledBtn = false
                    this.loadingInstance.close()
                    //this.registroGestanteForm.municipioAtencion = getDataGestantesEdit.data.municipioAtencion;
                }


            }, 3000)
        } else {
            this.citiesResidenciaList = []
        }
    }

    async remoteMethodTwo(IdDpto?: number, hastData?: boolean, idMunicipioAtencion?: number) {
        this.disabledBtn = true
        const getIdDpto = IdDpto !== undefined ? IdDpto : this.registroGestanteForm.dptoResidencia

        console.log('idDpto', getIdDpto)
        if (getIdDpto) {
            this.loading = true
            setTimeout(async () => {
                this.loading = false;

                const getAllCities = await this.ETMIPLUS_DPTOS_API_Client.getCityByDpto(Number(this.registroGestanteForm.dptoAtencion)) as any;
                console.log('cities', getAllCities)
                this.citiesAtencionList = getAllCities
                /*this.citiesAtencionList = list.value.filter((item) => {
                    return item.label.toLowerCase().includes(query.toLowerCase())
                })*/
                this.disabledBtn = false
                if (hastData) {
                    const filterCiudadAtencion = getAllCities.filter((x: any) => x.id === idMunicipioAtencion)
                    console.log('ciudad filtrada para atención', filterCiudadAtencion)
                    this.registroGestanteForm.municipioAtencion = filterCiudadAtencion[0].id;
                    this.disabledBtn = false
                    //this.registroGestanteForm.municipioAtencion = getDataGestantesEdit.data.municipioAtencion;
                }

            }, 3000)
        } else {
            this.citiesAtencionList = []
        }
    }

    crearCtrl = async (index: number, row: Gestante) => {
        console.log(index, row.idGestante);
        /// Pendiente preguntar como se identifica el tipo de ficha, si es vih, hb, chagas o sifilis
        this.idGestante = row.idGestante
        const request: IGestanteControl = {
            idGestanteControl: 0,
            idGestante: Number(row.idGestante),
            fechaControl: new Date(moment(new Date()).format('YYYY-MM-DD HH:mm:ss.sss'))
        }

        const getCtrlsInscritos = await this.ETMIPLUS_API_Client.gestanteControlGET(Number(row.idGestante)) as any;
        console.log('longitud', getCtrlsInscritos.data.length === 0)
        if (getCtrlsInscritos.data.length === 0) {
            console.log('No tiene controles, ficha a crear', request);
            const setCtrl = await this.ETMIPLUS_API_Client.gestanteControlPOST(Number(row.idGestante), request) as any;

            console.log(setCtrl)
            //this.router.push('/page');
            const message = 'Se creó un nuevo control'
            this.showMessage(message).then(() => {
                ElMessage.info(message);
                this.router.push({
                    name: 'gestanteCtrl', // The name of the route you want to redirect to
                    params: {
                        userId: row.idGestante
                    }
                })
            });
        } else {
            this.dialogConfirm.open = true
            this.dialogConfirm.idGestante = Number(row.idGestante)
             
        }


        /*ElMessage({
            type: 'success',
            message: 'Se creó un nuevo control',
        })*/
    }

    showMessage(message: string) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(message);
            }, 1000);
        });
    }



    crearCtrlModalIsOpen = async (idGestante: number) => {
        
        const request: IGestanteControl = {
            idGestanteControl: 0,
            idGestante: Number(idGestante),
            fechaControl: new Date(moment(new Date()).format('YYYY-MM-DD HH:mm:ss.sss'))
        }

        console.log('ficha a crear', request);
        const setCtrl = await this.ETMIPLUS_API_Client.gestanteControlPOST(Number(idGestante), request) as any;

        console.log(setCtrl)
        //this.router.push('/page');

        ElMessage({
            type: 'success',
            message: 'Se creó un nuevo control',
        })

        this.router.push({
            name: 'gestanteCtrl', // The name of the route you want to redirect to
            params: {
                userId: idGestante
            }
        }) 
    }

    redirectToCtrls = async (idGestante: number) => {
        this.router.push({
            name: 'gestanteCtrl', // The name of the route you want to redirect to
            params: {
                userId: idGestante
            }
        })
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

.el-select-dropdown__loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    font-size: 20px;
}

.circular {
    display: inline;
    height: 30px;
    width: 30px;
    animation: loading-rotate 2s linear infinite;
}

.path {
    animation: loading-dash 1.5s ease-in-out infinite;
    stroke-dasharray: 90, 150;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: var(--el-color-primary);
    stroke-linecap: round;
}

.loading-path .dot1 {
    transform: translate(3.75px, 3.75px);
    fill: var(--el-color-primary);
    animation: custom-spin-move 1s infinite linear alternate;
    opacity: 0.3;
}

.loading-path .dot2 {
    transform: translate(calc(100% - 3.75px), 3.75px);
    fill: var(--el-color-primary);
    animation: custom-spin-move 1s infinite linear alternate;
    opacity: 0.3;
    animation-delay: 0.4s;
}

.loading-path .dot3 {
    transform: translate(3.75px, calc(100% - 3.75px));
    fill: var(--el-color-primary);
    animation: custom-spin-move 1s infinite linear alternate;
    opacity: 0.3;
    animation-delay: 1.2s;
}

.loading-path .dot4 {
    transform: translate(calc(100% - 3.75px), calc(100% - 3.75px));
    fill: var(--el-color-primary);
    animation: custom-spin-move 1s infinite linear alternate;
    opacity: 0.3;
    animation-delay: 0.8s;
}

@keyframes loading-rotate {
    to {
        transform: rotate(360deg);
    }
}

@keyframes loading-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -40px;
    }

    100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -120px;
    }
}

@keyframes custom-spin-move {
    to {
        opacity: 1;
    }
}

.el-form-item label {
    font-size: .8rem;
}
</style>