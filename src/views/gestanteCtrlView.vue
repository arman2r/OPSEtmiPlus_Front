<template>
    <el-table :data="dataTableControles" style="width: 100%">
        <el-table-column label="Fecha control" prop="fechaControl" :formatter="formatDate" />
        <el-table-column label="Consultar fichas" prop="name" />
        <el-table-column align="right">
            <template #header>
                <el-input v-model="search" size="small" placeholder="Type to search" />
            </template>
            <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                <el-dropdown trigger="click">
                    <el-button size="small" type="danger" @click="consultarFichas(scope.$index, scope.row)" effect="dark"
                        content="Crear reporte" placement="left-start"><svg xmlns="http://www.w3.org/2000/svg" width="12"
                            height="12" viewBox="0 0 1024 1024">
                            <path fill="currentColor"
                                d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z" />
                        </svg>
                    </el-button>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item v-for="(ficha, index) in fichas" :key="index"
                                @click="crearReporte(scope.$index, scope.row)">
                                <router-link :to="(ficha.name).replace(/\s+/g, '').toLowerCase()">
                                    {{ 'Crear reporte de ' + ficha.name }}
                                </router-link>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </template>
        </el-table-column>
    </el-table>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import * as ETMIPLUS_API from "@/api/ETMIPLUS_API";
import axios from 'axios';
import { computed } from 'vue';
import { IGestanteControl, IParametrica } from '@/api/ETMIPLUS_API';
import moment from 'moment';
import { fichas, nacionalidad } from '@/interfaces/modeloGestante';

interface Gestante {
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

export default class gestanteCtrlView extends Vue {

    ETMIPLUS_API_Client = new ETMIPLUS_API.EtmiPlusClient(process.env.VUE_APP_APIURL, axios);
    dateFormat = 'DD/MM/YYYY'
    search = ''
    fichas: fichas[] = []
    /*filterTableData = computed(() =>
    this.dataTableControles.filter(
            (data) =>
                !this.search ||
                data.fechaControl?.includes(this.search)
        )
    )*/

    formatDate(date: any) {
        // Use Moment.js to format the date
        return moment(date.fechaPosibleParto).format(this.dateFormat);
    }

    dataTableControles: IGestanteControl[] = []

    handleEdit = (index: number, row: IGestanteControl) => {
        console.log(index, row)
    }

    handleDelete = (index: number, row: IGestanteControl) => {
        console.log(index, row)
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

    crearReporte = async (index: number, row: Gestante) => {
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

    mounted() {
        // Access the 'id' param from the router
        const idGestante = this.$route.params.userId;
        // Use the 'id' param as needed
        console.log(idGestante);
        this.getGestanteControl(Number(idGestante))
    }

    async getGestanteControl(idGestante: number) {
        const controles = await this.ETMIPLUS_API_Client.gestanteControlGET(idGestante) as any;
        console.log('controles', controles)
        controles.data.map((item: any) => { return item.fechaControl })
        this.dataTableControles = controles.data
    }
}
</script>