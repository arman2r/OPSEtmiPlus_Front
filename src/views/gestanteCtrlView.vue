<template>
    <el-table :data="dataTableControles" style="width: 100%">
        <el-table-column label="Fecha control" prop="fechaControl" :formatter="formatDate" />
        <el-table-column>
            <template #header>
                Reporte VIH
            </template>
            <template #default="scope">
                <el-icon v-if="scope.row.tieneFichaVIH === true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z" />
                    </svg>
                </el-icon>
                <el-icon v-if="scope.row.tieneFichaVIH === false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z" />
                    </svg>
                </el-icon>
            </template>
        </el-table-column>
        <el-table-column>
            <template #header>
                Reporte Hepatitis B
            </template>
            <template #default="scope">
                <el-icon v-if="scope.row.tieneFichaHepatitisB === true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z" />
                    </svg>
                </el-icon>
                <el-icon v-if="scope.row.tieneFichaHepatitisB === false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z" />
                    </svg>
                </el-icon>
            </template>
        </el-table-column>
        <el-table-column>
            <template #header>
                Reporte Chagas
            </template>
            <template #default="scope">
                <el-icon v-if="scope.row.tieneFichaChagas === true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z" />
                    </svg>
                </el-icon>
                <el-icon v-if="scope.row.tieneFichaChagas === false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z" />
                    </svg>
                </el-icon>
            </template>
        </el-table-column>
        <el-table-column>
            <template #header>
                Reporte sifilis
            </template>
            <template #default="scope">
                <el-icon v-if="scope.row.tieneFichaSifilis === true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z" />
                    </svg>
                </el-icon>
                <el-icon v-if="scope.row.tieneFichaSifilis === false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z" />
                    </svg>
                </el-icon>
            </template>
        </el-table-column>

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
                            <el-dropdown-item v-for="(ficha, index) in fichas" :key="index">
                                <router-link :to="'/'+(ficha.name).replace(/\s+/g, '').toLowerCase() + '/' + scope.row.idGestanteControl">
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
import { useRouter } from 'vue-router';
import { ElMessage, ElMessageBox } from 'element-plus';

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

interface IGestanteControlTable {
    idGestanteControl?: number;
    idGestante?: number;
    fechaControl?: Date;
    tieneFichaVIH?: boolean;
    tieneFichaHepatitisB?: boolean;
    tieneFichaChagas?: boolean;
    tieneFichaSifilis?: boolean;
}

export default class gestanteCtrlView extends Vue {

    ETMIPLUS_API_Client = new ETMIPLUS_API.EtmiPlusClient(process.env.VUE_APP_APIURL, axios);
    dateFormat = 'DD/MM/YYYY'
    search = ''
    fichas: fichas[] = []
    router = useRouter();
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

    dataTableControles: IGestanteControlTable[] = []

    showMessage(message: string) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(message);
            }, 1000);
        });
    }

    handleEdit = (index: number, row: IGestanteControlTable) => {
        console.log(index, row)

        if (row.tieneFichaVIH === true) {
            this.router.push({
                name: 'vih', // The name of the route you want to redirect to
                params: {
                    userId: row.idGestanteControl
                }
            })
        } else if (row.tieneFichaHepatitisB === true) {
            this.router.push({
                name: 'vih', // The name of the route you want to redirect to
                params: {
                    userId: row.idGestanteControl
                }
            })
        } else if (row.tieneFichaChagas === true) {
            this.router.push({
                name: 'vih', // The name of the route you want to redirect to
                params: {
                    userId: row.idGestanteControl
                }
            })
        } else if (row.tieneFichaSifilis === true) {
            this.router.push({
                name: 'vih', // The name of the route you want to redirect to
                params: {
                    userId: row.idGestanteControl
                }
            })
        } else {
            const message = 'Este control no presenta ningun reporte de ficha para editar'
            this.showMessage(message).then(() => {
                ElMessage.info(message);
            });
        }
    }

    handleDelete = (index: number, row: IGestanteControlTable) => {
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

        console.log('controles', this.fetchDataCtrls(idGestante))
        //controles.data.map((item: any) => { return item.fechaControl })
        this.fetchDataCtrls(idGestante).then((res: any) => {
            console.log('respuesta', res)
            this.dataTableControles = res
        })

        //this.dataTableControles = getControles?.data
        //console.log('se lleno la tabla', this.dataTableControles)
    }

    async fetchDataCtrls(idGestante: number) {
        try {
            const response = await Promise.all([
                await this.ETMIPLUS_API_Client.gestanteControlGET(idGestante) as any,
                await this.ETMIPLUS_API_Client.estadoFichas(idGestante) as any,
            ])

            const [res1, res2] = await Promise.all(response.map(res => res));
            //console.log(res1)


            //const mergedResponse = {data1: res1.data.push(res2.data), data2: res2};
            //const mergedResponse = {data1: (res1.data.push((res2.data)))}
            const mergedResponse = res1.data.map((x: any) =>
            ({
                ...x, tieneFichaVIH: res2.data.tieneFichaVIH,
                tieneFichaHepatitisB: res2.data.tieneFichaHepatitisB,
                tieneFichaChagas: res2.data.tieneFichaChagas,
                tieneFichaSifilis: res2.data.tieneFichaSifilis
            })
            )

            console.log('merge', mergedResponse)

            return mergedResponse;
        } catch (error) {
            console.log(error)
        }
    }
}
</script>