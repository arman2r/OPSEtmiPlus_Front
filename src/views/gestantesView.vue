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
                <el-table-column label="Fecha posible parto" prop="fechaPosibleParto" />
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
                        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)" effect="dark"
                            content="Crear gestante control" placement="left-start" style="margin-left:5px">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 1024 1024">
                                <path fill="currentColor"
                                    d="M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64zm64 0h192v-64H416zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32m192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32" />
                            </svg>
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>

    <!-- modal de registro gestante -->
    <el-dialog v-model="dialogFormRegistroGestante" title="Registro gestante">
        <el-form :model="registroGestanteForm">
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
                            <el-option label="Tarjeta de identidad" value="3" />
                            <el-option label="Menor sin identificar" value="4" />
                            <el-option label="Adulto sin identificar" value="5" />
                            <el-option label="Cedula de ciudadanía" value="6" />
                            <el-option label="Pasaporte" value="7" />
                            <el-option label="Salvo conducto" value="8" />
                            <el-option label="Permiso especial de permanencia" value="9" />
                            <el-option label="Cedula de extranjería" value="10" />
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
                <el-button type="primary" @click="selfData">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { computed, reactive } from 'vue';
import type { ElForm } from 'element-plus';
import { ElMessageBox } from 'element-plus';
import * as ETMIPLUS_API from "@/api/ETMIPLUS_API";
import axios from 'axios';
import 'element-plus/theme-chalk/display.css'

type FormInstance = InstanceType<typeof ElForm>

interface Gestante {
    idGestante: number,
    nombresApellidos: string,
    idNacionalidad: number,
    nacionalidad: string | null,
    idTipoDocumento: number,
    tipoDocumento: string | null,
    numeroDocumento: string,
    edad: number,
    idTipoRegimenSalud: number,
    tipoRegimenSalud: string | null,
    nombreAseguradora: string,
    idPertenenciaEtnica: number,
    pertenenciaEtnica: string | null,
    idGrupoPoblacional: number,
    grupoPoblacional: string | null,
    idAreaOcurrencia: number,
    areaOcurrencia: string | null,
    idDptoResidencia: number,
    idMunicipioResidencia: number,
    dptoResidencia: string[];
    municipioResidencia: string[];
    direccionResidencia: string,
    idDptoAtencion: number,
    idMunicipioAtencion: number,
    telefono: string,
    dptoAtencion: [],
    municipioAtencion: [],
    fechaPosibleParto: string,
    seRealizaControlPrenatal: number,
    edadGestacionalSemanas: number
}

export default class gestantesView extends Vue {

    dateFormat = 'DD/MM/YYYY'
    dialogFormRegistroGestante = false
    formLabelWidth = '140px'

    ETMIPLUS_API_Client = new ETMIPLUS_API.EtmiPlusClient(process.env.VUE_APP_APIURL, axios);


    search = ''
    filterTableData = computed(() =>
        this.tableData.filter(
            (data) =>
                !this.search ||
                data.nombresApellidos.toLowerCase().includes(this.search.toLowerCase())
        )
    )
    handleEdit = (index: number, row: Gestante) => {
        console.log(index, row)
    }
    handleDelete = (index: number, row: Gestante) => {
        console.log(index, row)
    }

    tableData: Gestante[] = [
        {
            idGestante: 3,
            nombresApellidos: "Angie Suarez",
            idNacionalidad: 1,
            nacionalidad: null,
            idTipoDocumento: 6,
            tipoDocumento: null,
            numeroDocumento: "1026278808",
            edad: 32,
            idTipoRegimenSalud: 13,
            tipoRegimenSalud: null,
            nombreAseguradora: "Allianz",
            idPertenenciaEtnica: 20,
            pertenenciaEtnica: null,
            idGrupoPoblacional: 25,
            grupoPoblacional: null,
            idAreaOcurrencia: 30,
            areaOcurrencia: null,
            idDptoResidencia: 33,
            idMunicipioResidencia: 10,
            direccionResidencia: "Cra 27 #41b-21 Sur",
            idDptoAtencion: 15,
            idMunicipioAtencion: 20,
            dptoResidencia: ['tolima', 'cundinamarca'],
            municipioResidencia: ['ibague', 'chia'],
            dptoAtencion: [],
            municipioAtencion: [],
            telefono: "3102489336",
            fechaPosibleParto: "2024-01-06T03:50:14.093",
            seRealizaControlPrenatal: 1,
            edadGestacionalSemanas: 15
        },
        {
            idGestante: 1,
            nombresApellidos: "Karen Julieth Perez",
            idNacionalidad: 1,
            nacionalidad: null,
            idTipoDocumento: 6,
            tipoDocumento: null,
            numeroDocumento: "1026278808",
            edad: 32,
            idTipoRegimenSalud: 13,
            tipoRegimenSalud: null,
            nombreAseguradora: "Allianz",
            idPertenenciaEtnica: 20,
            pertenenciaEtnica: null,
            idGrupoPoblacional: 25,
            grupoPoblacional: null,
            idAreaOcurrencia: 30,
            areaOcurrencia: null,
            idDptoResidencia: 33,
            idMunicipioResidencia: 10,
            dptoResidencia: ['tolima', 'cundinamarca'],
            municipioResidencia: ['ibague', 'chia'],
            direccionResidencia: "Cra 27 #41b-21 Sur",
            idDptoAtencion: 15,
            idMunicipioAtencion: 20,
            dptoAtencion: [],
            municipioAtencion: [],
            telefono: "3102489336",
            fechaPosibleParto: "2024-01-06T03:50:14.093",
            seRealizaControlPrenatal: 1,
            edadGestacionalSemanas: 15
        },
        {
            idGestante: 2,
            nombresApellidos: "Natalia Perez",
            idNacionalidad: 1,
            nacionalidad: null,
            idTipoDocumento: 6,
            tipoDocumento: null,
            numeroDocumento: "1026278808",
            edad: 32,
            idTipoRegimenSalud: 13,
            tipoRegimenSalud: null,
            nombreAseguradora: "Allianz",
            idPertenenciaEtnica: 20,
            pertenenciaEtnica: null,
            idGrupoPoblacional: 25,
            grupoPoblacional: null,
            idAreaOcurrencia: 30,
            areaOcurrencia: null,
            idDptoResidencia: 33,
            idMunicipioResidencia: 10,
            dptoResidencia: ['tolima', 'cundinamarca'],
            municipioResidencia: ['ibague', 'chia'],
            direccionResidencia: "Cra 27 #41b-21 Sur",
            idDptoAtencion: 15,
            idMunicipioAtencion: 20,
            dptoAtencion: [],
            municipioAtencion: [],
            telefono: "3102489336",
            fechaPosibleParto: "2024-01-06T03:50:14.093",
            seRealizaControlPrenatal: 1,
            edadGestacionalSemanas: 15
        }
    ]

    registroGestanteForm = reactive<Gestante>({
        idGestante: 0,
        nombresApellidos: "",
        idNacionalidad: 0,
        nacionalidad: null,
        idTipoDocumento: 0,
        tipoDocumento: null,
        numeroDocumento: "",
        edad: 0,
        idTipoRegimenSalud: 0,
        tipoRegimenSalud: null,
        nombreAseguradora: "",
        idPertenenciaEtnica: 0,
        pertenenciaEtnica: null,
        idGrupoPoblacional: 0,
        grupoPoblacional: null,
        idAreaOcurrencia: 0,
        areaOcurrencia: null,
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
        fechaPosibleParto: "",
        seRealizaControlPrenatal: 0,
        edadGestacionalSemanas: 0
    })

    selfData = async (formEl: FormInstance | undefined) => {
        if (!formEl) return
        await formEl.validate((valid, fields) => {
            if (valid) {
                console.log('enviando!')
                //cierra la modal
                this.registroGestante()

                //this.registroGestanteForm
                //this.dialogFormRegistroGestante = false
            } else {
                ElMessageBox.alert(`Por favor complete los campos marcados con *.`, { type: "warning" });
                console.log('error al enviar!', fields)
            }
        })
    }

    async registroGestante() {
        console.log(this.registroGestanteForm.nombresApellidos)
        /*const request = {
            idGestante: 0,
            nombresApellidos: this.registroGestanteForm.nombresApellidos,
            idNacionalidad: this.registroGestanteForm.nacionalidad, 
            idTipoDocumento: this.registroGestanteForm.tipoDocumento,
            numeroDocumento: this.registroGestanteForm.numeroDocumento,
            edad: this.registroGestanteForm.edad,
            idTipoRegimenSalud: this.registroGestanteForm.tipoRegimenSalud,
            nombreAseguradora: this.registroGestanteForm.nombreAseguradora,
            idPertenenciaEtnica: this.registroGestanteForm.idPertenenciaEtnica,
            idGrupoPoblacional: this.registroGestanteForm.idGrupoPoblacional,
            idAreaOcurrencia: this.registroGestanteForm.idAreaOcurrencia,
            idDptoResidencia: this.registroGestanteForm.idDptoResidencia,
            idMunicipioResidencia: this.registroGestanteForm.idMunicipioResidencia,
            direccionResidencia: this.registroGestanteForm.direccionResidencia,
            idDptoAtencion: this.registroGestanteForm.idDptoAtencion,
            idMunicipioAtencion: this.registroGestanteForm.idMunicipioAtencion,
            telefono: this.registroGestanteForm.telefono,
            fechaPosibleParto: this.registroGestanteForm.fechaPosibleParto,
            seRealizaControlPrenatal: this.registroGestanteForm.seRealizaControlPrenatal,
            edadGestacionalSemanas: this.registroGestanteForm.edadGestacionalSemanas
        }
        const requestRG = await this.ETMIPLUS_API_Client.gestantePOST(request);*/
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